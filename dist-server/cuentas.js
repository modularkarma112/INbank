"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("./db");
const middleware_1 = require("./middleware");
const mailer_1 = require("./mailer");
const router = (0, express_1.Router)();
function genNumeroCuenta() {
    return String(Math.floor(1000000000000000 + Math.random() * 9000000000000000));
}
router.get('/', middleware_1.authGuard, async (_req, res) => {
    const [rows] = await db_1.pool.query('SELECT * FROM cuentas LIMIT 200');
    res.json(rows);
});
// Búsqueda por número de cuenta o por nombre del cliente (parcial)
router.get('/buscar', middleware_1.authGuard, async (req, res) => {
    const { numero, nombre } = req.query;
    const params = [];
    let where = '1=1';
    if (numero) {
        where += ' AND c.numero_cuenta LIKE ?';
        params.push(`%${numero}%`);
    }
    if (nombre) {
        where += ' AND (cl.nombres LIKE ? OR cl.apellido_paterno LIKE ? OR cl.apellido_materno LIKE ? OR CONCAT(cl.nombres, " ", cl.apellido_paterno, " ", cl.apellido_materno) LIKE ?)';
        for (let i = 0; i < 4; i++)
            params.push(`%${nombre}%`);
    }
    const [rows] = await db_1.pool.query(`SELECT c.*, cl.nombres, cl.apellido_paterno, cl.apellido_materno 
     FROM cuentas c JOIN clientes cl ON c.cliente_id = cl.id 
     WHERE ${where} ORDER BY c.id DESC LIMIT 200`, params);
    res.json(rows);
});
router.get('/cliente/:clienteId', middleware_1.authGuard, async (req, res) => {
    const clienteId = Number(req.params.clienteId);
    const [rows] = await db_1.pool.query('SELECT * FROM cuentas WHERE cliente_id = ?', [clienteId]);
    res.json(rows);
});
router.get('/numero/:numero', middleware_1.authGuard, async (req, res) => {
    const numero = req.params.numero;
    const [rows] = await db_1.pool.query('SELECT * FROM cuentas WHERE numero_cuenta = ? LIMIT 1', [numero]);
    const row = rows[0];
    if (!row)
        return res.status(404).json({ message: 'Cuenta no encontrada' });
    res.json(row);
});
router.get('/por-numero/:numero', middleware_1.authGuard, async (req, res) => {
    const numero = req.params.numero;
    const [rows] = await db_1.pool.query('SELECT * FROM cuentas WHERE numero_cuenta = ? LIMIT 1', [numero]);
    const row = rows[0];
    if (!row)
        return res.status(404).json({ message: 'Cuenta no encontrada' });
    res.json(row);
});
// Obtener un movimiento/transacción por ID (para comprobantes)
router.get('/transacciones/:transId', middleware_1.authGuard, async (req, res) => {
    const transId = Number(req.params.transId);
    if (!Number.isFinite(transId))
        return res.status(400).json({ message: 'ID inválido' });
    try {
        const [rows] = await db_1.pool.query(`
      SELECT t.*, c.numero_cuenta, c.cliente_id,
             cl.nombres, cl.apellido_paterno, cl.apellido_materno
      FROM transacciones t
      JOIN cuentas c ON t.cuenta_id = c.id
      JOIN clientes cl ON c.cliente_id = cl.id
      WHERE t.id = ?
      LIMIT 1
    `, [transId]);
        const tx = rows[0];
        if (!tx)
            return res.status(404).json({ message: 'Transacción no encontrada' });
        tx.nombre_cliente = `${tx.nombres} ${tx.apellido_paterno || ''} ${tx.apellido_materno || ''}`.trim();
        res.json(tx);
    }
    catch (e) {
        res.status(500).json({ message: 'Error obteniendo transacción' });
    }
});
// Descargar PDF de una transacción (depósito/retiro)
router.get('/transacciones/:transId/pdf', middleware_1.authGuard, async (req, res) => {
    const transId = Number(req.params.transId);
    if (!Number.isFinite(transId))
        return res.status(400).json({ message: 'ID inválido' });
    try {
        const [rows] = await db_1.pool.query(`
      SELECT t.*, c.numero_cuenta, cl.nombres, cl.apellido_paterno, cl.apellido_materno
      FROM transacciones t
      JOIN cuentas c ON t.cuenta_id = c.id
      JOIN clientes cl ON c.cliente_id = cl.id
      WHERE t.id = ? LIMIT 1
    `, [transId]);
        const tx = rows[0];
        if (!tx)
            return res.status(404).json({ message: 'Transacción no encontrada' });
        const pdf = await (0, mailer_1.generateComprobanteMovimientoPdf)({
            tipo: tx.tipo === 'DEPOSITO' ? 'Depósito' : (tx.tipo === 'RETIRO' ? 'Retiro' : tx.tipo),
            monto: Number(tx.monto || 0),
            concepto: tx.concepto || null,
            numeroCuenta: tx.numero_cuenta,
            nombreCliente: `${tx.nombres} ${tx.apellido_paterno || ''} ${tx.apellido_materno || ''}`.trim(),
            referencia: tx.id,
            fecha: new Date(tx.fecha || Date.now())
        });
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=comprobante-${tx.tipo?.toLowerCase() || 'movimiento'}-${transId}.pdf`);
        res.send(pdf);
    }
    catch (e) {
        res.status(500).json({ message: 'Error generando PDF' });
    }
});
router.post('/', middleware_1.authGuard, async (req, res) => {
    const { cliente_id, tipo_cuenta_id, deposito_inicial } = req.body || {};
    if (!cliente_id || !tipo_cuenta_id)
        return res.status(400).json({ message: 'cliente_id y tipo_cuenta_id requeridos' });
    const numero = genNumeroCuenta();
    const saldoInicial = Number(deposito_inicial ?? 0);
    const conn = await db_1.pool.getConnection();
    try {
        await conn.beginTransaction();
        const [result] = await conn.execute('INSERT INTO cuentas (numero_cuenta, cliente_id, tipo_cuenta_id, saldo, estatus) VALUES (?, ?, ?, ?, ?)', [numero, cliente_id, tipo_cuenta_id, saldoInicial, 'ACTIVA']);
        const cuentaId = result.insertId;
        if (saldoInicial > 0) {
            await conn.execute('INSERT INTO transacciones (cuenta_id, tipo, monto, concepto) VALUES (?, ?, ?, ?)', [cuentaId, 'DEPOSITO', saldoInicial, 'Depósito inicial']);
        }
        await conn.commit();
        res.status(201).json({ id: cuentaId, numero_cuenta: numero });
    }
    catch (e) {
        await conn.rollback();
        res.status(500).json({ message: 'Error creando cuenta' });
    }
    finally {
        conn.release();
    }
});
router.post('/:id/deposito', middleware_1.authGuard, async (req, res) => {
    const id = Number(req.params.id);
    const { monto, concepto } = req.body || {};
    const m = Number(monto);
    if (!m || m <= 0)
        return res.status(400).json({ message: 'monto inválido' });
    const conn = await db_1.pool.getConnection();
    try {
        await conn.beginTransaction();
        // Obtener datos de cuenta y cliente antes de actualizar
        const [cuentaRows] = await conn.query(`
      SELECT c.numero_cuenta, c.saldo, cl.nombres, cl.apellido_paterno, cl.email 
      FROM cuentas c 
      JOIN clientes cl ON c.cliente_id = cl.id 
      WHERE c.id = ?
    `, [id]);
        const cuenta = cuentaRows[0];
        await conn.execute('UPDATE cuentas SET saldo = saldo + ? WHERE id = ?', [m, id]);
        const [ins] = await conn.execute('INSERT INTO transacciones (cuenta_id, tipo, monto, concepto) VALUES (?, ?, ?, ?)', [id, 'DEPOSITO', m, concepto || 'Depósito']);
        const transaccionId = ins.insertId;
        await conn.commit();
        // Enviar notificación por email
        if (cuenta?.email) {
            const nuevoSaldo = Number(cuenta.saldo) + m;
            const comprobante = (0, mailer_1.renderComprobanteMovimiento)({
                tipo: 'Depósito',
                monto: m,
                concepto: concepto || 'Depósito',
                numeroCuenta: cuenta.numero_cuenta,
                nombreCliente: `${cuenta.nombres} ${cuenta.apellido_paterno || ''}`.trim(),
                referencia: transaccionId,
                fecha: new Date()
            });
            // Generar PDF
            let pdf;
            try {
                pdf = await (0, mailer_1.generateComprobanteMovimientoPdf)({
                    tipo: 'Depósito', monto: m, concepto: concepto || 'Depósito', numeroCuenta: cuenta.numero_cuenta,
                    nombreCliente: `${cuenta.nombres} ${cuenta.apellido_paterno || ''}`.trim(), referencia: transaccionId, fecha: new Date()
                });
            }
            catch (err) {
                console.warn('No se pudo generar PDF de depósito:', err?.message || err);
            }
            (0, mailer_1.enviarNotificacionMovimiento)({
                emailCliente: cuenta.email,
                nombreCliente: `${cuenta.nombres} ${cuenta.apellido_paterno || ''}`.trim(),
                numeroCuenta: cuenta.numero_cuenta,
                tipoMovimiento: 'DEPÓSITO',
                monto: m,
                saldoActual: nuevoSaldo,
                concepto: concepto || 'Depósito',
                comprobanteHtml: comprobante,
                comprobantePdf: pdf
            }).catch(err => console.error('Error enviando email:', err));
        }
        res.json({ ok: true, transaccion_id: transaccionId });
    }
    catch (e) {
        await conn.rollback();
        res.status(500).json({ message: 'Error en depósito' });
    }
    finally {
        conn.release();
    }
});
router.post('/:id/retiro', middleware_1.authGuard, async (req, res) => {
    const id = Number(req.params.id);
    const { monto, concepto } = req.body || {};
    const m = Number(monto);
    if (!m || m <= 0)
        return res.status(400).json({ message: 'monto inválido' });
    const conn = await db_1.pool.getConnection();
    try {
        await conn.beginTransaction();
        // Obtener datos de cuenta y cliente
        const [cuentaRows] = await conn.query(`
      SELECT c.numero_cuenta, c.saldo, cl.nombres, cl.apellido_paterno, cl.email 
      FROM cuentas c 
      JOIN clientes cl ON c.cliente_id = cl.id 
      WHERE c.id = ? FOR UPDATE
    `, [id]);
        const cuenta = cuentaRows[0];
        const saldo = cuenta?.saldo ?? 0;
        if (saldo < m) {
            await conn.rollback();
            return res.status(400).json({ message: 'Saldo insuficiente' });
        }
        await conn.execute('UPDATE cuentas SET saldo = saldo - ? WHERE id = ?', [m, id]);
        const [ins] = await conn.execute('INSERT INTO transacciones (cuenta_id, tipo, monto, concepto) VALUES (?, ?, ?, ?)', [id, 'RETIRO', m, concepto || 'Retiro']);
        const transaccionId = ins.insertId;
        await conn.commit();
        // Enviar notificación por email
        if (cuenta?.email) {
            const nuevoSaldo = Number(saldo) - m;
            const comprobante = (0, mailer_1.renderComprobanteMovimiento)({
                tipo: 'Retiro',
                monto: m,
                concepto: concepto || 'Retiro',
                numeroCuenta: cuenta.numero_cuenta,
                nombreCliente: `${cuenta.nombres} ${cuenta.apellido_paterno || ''}`.trim(),
                referencia: transaccionId,
                fecha: new Date()
            });
            let pdf;
            try {
                pdf = await (0, mailer_1.generateComprobanteMovimientoPdf)({
                    tipo: 'Retiro', monto: m, concepto: concepto || 'Retiro', numeroCuenta: cuenta.numero_cuenta,
                    nombreCliente: `${cuenta.nombres} ${cuenta.apellido_paterno || ''}`.trim(), referencia: transaccionId, fecha: new Date()
                });
            }
            catch (err) {
                console.warn('No se pudo generar PDF de retiro:', err?.message || err);
            }
            (0, mailer_1.enviarNotificacionMovimiento)({
                emailCliente: cuenta.email,
                nombreCliente: `${cuenta.nombres} ${cuenta.apellido_paterno || ''}`.trim(),
                numeroCuenta: cuenta.numero_cuenta,
                tipoMovimiento: 'RETIRO',
                monto: m,
                saldoActual: nuevoSaldo,
                concepto: concepto || 'Retiro',
                comprobanteHtml: comprobante,
                comprobantePdf: pdf
            }).catch(err => console.error('Error enviando email:', err));
        }
        res.json({ ok: true, transaccion_id: transaccionId });
    }
    catch (e) {
        await conn.rollback();
        res.status(500).json({ message: 'Error en retiro' });
    }
    finally {
        conn.release();
    }
});
router.post('/transferir', middleware_1.authGuard, async (req, res) => {
    const { origen_id, destino_id, monto, concepto } = req.body || {};
    const m = Number(monto);
    if (!origen_id || !destino_id || !m || m <= 0)
        return res.status(400).json({ message: 'Datos inválidos' });
    const conn = await db_1.pool.getConnection();
    try {
        await conn.beginTransaction();
        // Obtener datos de cuenta origen
        const [origenRows] = await conn.query(`
      SELECT c.numero_cuenta, c.saldo, cl.nombres, cl.apellido_paterno, cl.email 
      FROM cuentas c 
      JOIN clientes cl ON c.cliente_id = cl.id 
      WHERE c.id = ? FOR UPDATE
    `, [origen_id]);
        const cuentaOrigen = origenRows[0];
        const saldoOrigen = cuentaOrigen?.saldo ?? 0;
        if (saldoOrigen < m) {
            await conn.rollback();
            return res.status(400).json({ message: 'Saldo insuficiente' });
        }
        // Obtener datos de cuenta destino
        const [destinoRows] = await conn.query(`
      SELECT c.numero_cuenta, c.saldo, cl.nombres, cl.apellido_paterno, cl.email 
      FROM cuentas c 
      JOIN clientes cl ON c.cliente_id = cl.id 
      WHERE c.id = ? FOR UPDATE
    `, [destino_id]);
        const cuentaDestino = destinoRows[0];
        const saldoDestino = cuentaDestino?.saldo ?? 0;
        await conn.execute('UPDATE cuentas SET saldo = saldo - ? WHERE id = ?', [m, origen_id]);
        await conn.execute('UPDATE cuentas SET saldo = saldo + ? WHERE id = ?', [m, destino_id]);
        await conn.execute('INSERT INTO transacciones (cuenta_id, tipo, monto, concepto) VALUES (?, ?, ?, ?)', [origen_id, 'TRANSFERENCIA_SALIDA', m, concepto || 'Transferencia a cuenta ' + destino_id]);
        await conn.execute('INSERT INTO transacciones (cuenta_id, tipo, monto, concepto) VALUES (?, ?, ?, ?)', [destino_id, 'TRANSFERENCIA_ENTRADA', m, concepto || 'Transferencia de cuenta ' + origen_id]);
        await conn.commit();
        // Enviar notificaciones por email a ambas cuentas
        if (cuentaOrigen?.email) {
            const nuevoSaldoOrigen = Number(saldoOrigen) - m;
            (0, mailer_1.enviarNotificacionMovimiento)({
                emailCliente: cuentaOrigen.email,
                nombreCliente: `${cuentaOrigen.nombres} ${cuentaOrigen.apellido_paterno || ''}`.trim(),
                numeroCuenta: cuentaOrigen.numero_cuenta,
                tipoMovimiento: 'TRANSFERENCIA_ENVIADA',
                monto: m,
                saldoActual: nuevoSaldoOrigen,
                concepto: concepto || `Transferencia a cuenta ${cuentaDestino?.numero_cuenta || destino_id}`
            }).catch(err => console.error('Error enviando email origen:', err));
        }
        if (cuentaDestino?.email) {
            const nuevoSaldoDestino = Number(saldoDestino) + m;
            (0, mailer_1.enviarNotificacionMovimiento)({
                emailCliente: cuentaDestino.email,
                nombreCliente: `${cuentaDestino.nombres} ${cuentaDestino.apellido_paterno || ''}`.trim(),
                numeroCuenta: cuentaDestino.numero_cuenta,
                tipoMovimiento: 'TRANSFERENCIA_RECIBIDA',
                monto: m,
                saldoActual: nuevoSaldoDestino,
                concepto: concepto || `Transferencia de cuenta ${cuentaOrigen?.numero_cuenta || origen_id}`
            }).catch(err => console.error('Error enviando email destino:', err));
        }
        res.json({ ok: true });
    }
    catch (e) {
        await conn.rollback();
        res.status(500).json({ message: 'Error en transferencia' });
    }
    finally {
        conn.release();
    }
});
// Cambiar estatus (ACTIVA/SUSPENDIDA/BLOQUEADA). Para CANCELADA usar /:id/cancelar
router.put('/:id/estatus', middleware_1.authGuard, async (req, res) => {
    const id = Number(req.params.id);
    const { estatus } = req.body || {};
    const allowed = new Set(['ACTIVA', 'SUSPENDIDA', 'BLOQUEADA']);
    if (!allowed.has(estatus))
        return res.status(400).json({ message: 'Estatus no permitido' });
    await db_1.pool.execute('UPDATE cuentas SET estatus = ? WHERE id = ?', [estatus, id]);
    res.json({ ok: true });
});
router.post('/:id/cancelar', middleware_1.authGuard, async (req, res) => {
    const id = Number(req.params.id);
    const { motivo_cancelacion, usuario_cancelacion } = req.body || {};
    const conn = await db_1.pool.getConnection();
    try {
        await conn.beginTransaction();
        // Obtener datos de cuenta y cliente
        const [cuentaRows] = await conn.query(`
      SELECT c.numero_cuenta, c.saldo, cl.nombres, cl.apellido_paterno, cl.email 
      FROM cuentas c 
      JOIN clientes cl ON c.cliente_id = cl.id 
      WHERE c.id = ? FOR UPDATE
    `, [id]);
        const cuenta = cuentaRows[0];
        const saldo = cuenta?.saldo ?? 0;
        await conn.execute('UPDATE cuentas SET estatus = ? WHERE id = ?', ['CANCELADA', id]);
        await conn.execute('INSERT INTO cancelaciones_cuentas (cuenta_id, fecha_cancelacion, motivo_cancelacion, saldo_final, usuario_cancelacion) VALUES (?, NOW(), ?, ?, ?)', [id, motivo_cancelacion || '', saldo, usuario_cancelacion || 'sistema']);
        await conn.commit();
        // Enviar notificación por email
        if (cuenta?.email) {
            (0, mailer_1.enviarNotificacionMovimiento)({
                emailCliente: cuenta.email,
                nombreCliente: `${cuenta.nombres} ${cuenta.apellido_paterno || ''}`.trim(),
                numeroCuenta: cuenta.numero_cuenta,
                tipoMovimiento: 'CANCELACION',
                monto: 0,
                saldoActual: saldo,
                concepto: motivo_cancelacion || 'Cancelación de cuenta'
            }).catch(err => console.error('Error enviando email:', err));
        }
        res.json({ ok: true, saldo_final: saldo });
    }
    catch (e) {
        await conn.rollback();
        res.status(500).json({ message: 'Error al cancelar cuenta' });
    }
    finally {
        conn.release();
    }
});
router.get('/:id/transacciones', middleware_1.authGuard, async (req, res) => {
    const id = Number(req.params.id);
    const [rows] = await db_1.pool.query('SELECT * FROM transacciones WHERE cuenta_id = ? ORDER BY fecha DESC, id DESC LIMIT 200', [id]);
    res.json(rows);
});
exports.default = router;
//# sourceMappingURL=cuentas.js.map