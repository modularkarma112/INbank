"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("./db");
const middleware_1 = require("./middleware");
const mailer_1 = require("./mailer");
const router = (0, express_1.Router)();
function parsePeriodo(query) {
    const now = new Date();
    const periodo = String(query?.periodo || '').trim();
    const hoy = String(query?.hoy || '').trim();
    if (periodo && /^(\d{4})-(\d{2})$/.test(periodo)) {
        const [y, m] = periodo.split('-').map(n => Number(n));
        const desde = new Date(y, m - 1, 1, 0, 0, 0);
        const hasta = new Date(y, m, 0, 23, 59, 59);
        return { desde, hasta, etiqueta: `${periodo}` };
    }
    if (hoy === 'true') {
        const d = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const desde = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0);
        const hasta = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 23, 59, 59);
        const etiqueta = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
        return { desde, hasta, etiqueta };
    }
    // Por defecto: mes actual
    const desde = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0);
    const hasta = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
    const etiqueta = `${desde.getFullYear()}-${String(desde.getMonth() + 1).padStart(2, '0')}`;
    return { desde, hasta, etiqueta };
}
async function fetchEstadoCuenta(clienteId, desde, hasta) {
    // Datos del cliente
    const [[cliente]] = await db_1.pool.query('SELECT id, nombres, apellido_paterno, apellido_materno, email FROM clientes WHERE id = ? LIMIT 1', [clienteId]);
    if (!cliente)
        return null;
    cliente.nombre = `${cliente.nombres} ${cliente.apellido_paterno || ''} ${cliente.apellido_materno || ''}`.trim();
    // Cuentas del cliente
    const [cuentas] = await db_1.pool.query('SELECT id, numero_cuenta, saldo, estatus FROM cuentas WHERE cliente_id = ? ORDER BY id', [clienteId]);
    const cuentaIds = (cuentas || []).map((c) => c.id);
    // Movimientos del periodo por cuenta
    const movimientosPorCuenta = {};
    if (cuentaIds.length) {
        const placeholders = cuentaIds.map(() => '?').join(',');
        const [movs] = await db_1.pool.query(`SELECT * FROM transacciones WHERE cuenta_id IN (${placeholders}) AND fecha BETWEEN ? AND ? ORDER BY fecha ASC, id ASC`, [...cuentaIds, desde, hasta]);
        for (const m of movs) {
            const key = String(m.cuenta_id);
            if (!movimientosPorCuenta[key])
                movimientosPorCuenta[key] = [];
            movimientosPorCuenta[key].push({ id: m.id, tipo: m.tipo, monto: Number(m.monto), concepto: m.concepto, fecha: m.fecha });
        }
    }
    for (const c of cuentas) {
        c.movimientos = movimientosPorCuenta[String(c.id)] || [];
    }
    // Préstamos del cliente (resumen)
    const [prestamos] = await db_1.pool.query('SELECT id, tipo_prestamo, monto, plazo_meses, estatus, interes FROM prestamos WHERE cliente_id = ? ORDER BY id DESC', [clienteId]);
    for (const p of prestamos) {
        const interes = Number(p.interes || 0); // porcentaje mensual
        const totalEstimado = Number(p.monto) * (1 + (interes / 100) * Number(p.plazo_meses));
        p.total_estimado = Number(totalEstimado.toFixed(2));
        p.pago_mensual_est = Number((totalEstimado / Number(p.plazo_meses || 1)).toFixed(2));
        p.pagado = String(p.estatus || '').toUpperCase() === 'PAGADO';
        p.saldo_pendiente_est = p.pagado ? 0 : p.total_estimado; // no hay registro de pagos individuales en el esquema actual
    }
    return {
        cliente: { id: cliente.id, nombre: cliente.nombre, email: cliente.email },
        periodo: { desde: desde.toISOString(), hasta: hasta.toISOString() },
        cuentas,
        prestamos
    };
}
// Estado de cuenta (JSON)
router.get('/:clienteId', middleware_1.authGuard, async (req, res) => {
    const clienteId = Number(req.params.clienteId);
    if (!Number.isFinite(clienteId))
        return res.status(400).json({ message: 'Cliente inválido' });
    const { desde, hasta } = parsePeriodo(req.query);
    try {
        const data = await fetchEstadoCuenta(clienteId, desde, hasta);
        if (!data)
            return res.status(404).json({ message: 'Cliente no encontrado' });
        res.json(data);
    }
    catch (e) {
        res.status(500).json({ message: 'Error obteniendo estado de cuenta' });
    }
});
// Descargar PDF
router.get('/:clienteId/pdf', middleware_1.authGuard, async (req, res) => {
    const clienteId = Number(req.params.clienteId);
    if (!Number.isFinite(clienteId))
        return res.status(400).json({ message: 'Cliente inválido' });
    const { desde, hasta, etiqueta } = parsePeriodo(req.query);
    try {
        const data = await fetchEstadoCuenta(clienteId, desde, hasta);
        if (!data)
            return res.status(404).json({ message: 'Cliente no encontrado' });
        const pdf = await (0, mailer_1.generateEstadoCuentaPdf)({ ...data, etiqueta });
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=estado-cuenta-${clienteId}-${etiqueta}.pdf`);
        res.send(pdf);
    }
    catch (e) {
        res.status(500).json({ message: 'Error generando PDF' });
    }
});
// Previsualizar HTML del estado de cuenta
router.get('/:clienteId/html', middleware_1.authGuard, async (req, res) => {
    const clienteId = Number(req.params.clienteId);
    if (!Number.isFinite(clienteId))
        return res.status(400).json({ message: 'Cliente inválido' });
    const { desde, hasta, etiqueta } = parsePeriodo(req.query);
    try {
        const data = await fetchEstadoCuenta(clienteId, desde, hasta);
        if (!data)
            return res.status(404).json({ message: 'Cliente no encontrado' });
        const html = (0, mailer_1.renderEstadoCuentaHtml)({ ...data, etiqueta });
        res.setHeader('Content-Type', 'text/html; charset=UTF-8');
        res.send(html);
    }
    catch (e) {
        res.status(500).json({ message: 'Error generando HTML' });
    }
});
router.post('/:clienteId/generar', middleware_1.authGuard, async (req, res) => {
    const clienteId = Number(req.params.clienteId);
    if (!Number.isFinite(clienteId))
        return res.status(400).json({ message: 'Cliente inválido' });
    const { desde, hasta, etiqueta } = parsePeriodo(req.query);
    try {
        const data = await fetchEstadoCuenta(clienteId, desde, hasta);
        if (!data)
            return res.status(404).json({ message: 'Cliente no encontrado' });
        const pdf = await (0, mailer_1.generateEstadoCuentaPdf)({ ...data, etiqueta });
        if (data.cliente.email) {
            await (0, mailer_1.enviarEstadoCuenta)({
                emailCliente: data.cliente.email,
                nombreCliente: data.cliente.nombre,
                periodoEtiqueta: etiqueta,
                comprobantePdf: pdf
            });
        }
        const html = (0, mailer_1.renderEstadoCuentaHtml)({ ...data, etiqueta });
        res.json({ ok: true, html });
    }
    catch (e) {
        res.status(500).json({ message: 'Error generando estado de cuenta' });
    }
});
router.get('/por-cuenta/:numero', middleware_1.authGuard, async (req, res) => {
    const numero = String(req.params.numero || '').trim();
    if (!numero)
        return res.status(400).json({ message: 'Número de cuenta requerido' });
    const { desde, hasta } = parsePeriodo(req.query);
    try {
        const [[row]] = await db_1.pool.query('SELECT cliente_id FROM cuentas WHERE numero_cuenta = ? LIMIT 1', [numero]);
        if (!row?.cliente_id)
            return res.status(404).json({ message: 'Cuenta no encontrada' });
        const data = await fetchEstadoCuenta(Number(row.cliente_id), desde, hasta);
        if (!data)
            return res.status(404).json({ message: 'Cliente no encontrado' });
        res.json(data);
    }
    catch (e) {
        res.status(500).json({ message: 'Error obteniendo estado de cuenta' });
    }
});
router.get('/por-cuenta/:numero/pdf', middleware_1.authGuard, async (req, res) => {
    const numero = String(req.params.numero || '').trim();
    if (!numero)
        return res.status(400).json({ message: 'Número de cuenta requerido' });
    const { desde, hasta, etiqueta } = parsePeriodo(req.query);
    try {
        const [[row]] = await db_1.pool.query('SELECT cliente_id FROM cuentas WHERE numero_cuenta = ? LIMIT 1', [numero]);
        if (!row?.cliente_id)
            return res.status(404).json({ message: 'Cuenta no encontrada' });
        const data = await fetchEstadoCuenta(Number(row.cliente_id), desde, hasta);
        if (!data)
            return res.status(404).json({ message: 'Cliente no encontrado' });
        const pdf = await (0, mailer_1.generateEstadoCuentaPdf)({ ...data, etiqueta });
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=estado-cuenta-${numero}-${etiqueta}.pdf`);
        res.send(pdf);
    }
    catch (e) {
        res.status(500).json({ message: 'Error generando PDF' });
    }
});
router.get('/por-cuenta/:numero/html', middleware_1.authGuard, async (req, res) => {
    const numero = String(req.params.numero || '').trim();
    if (!numero)
        return res.status(400).json({ message: 'Número de cuenta requerido' });
    const { desde, hasta, etiqueta } = parsePeriodo(req.query);
    try {
        const [[row]] = await db_1.pool.query('SELECT cliente_id FROM cuentas WHERE numero_cuenta = ? LIMIT 1', [numero]);
        if (!row?.cliente_id)
            return res.status(404).json({ message: 'Cuenta no encontrada' });
        const data = await fetchEstadoCuenta(Number(row.cliente_id), desde, hasta);
        if (!data)
            return res.status(404).json({ message: 'Cliente no encontrado' });
        const html = (0, mailer_1.renderEstadoCuentaHtml)({ ...data, etiqueta });
        res.setHeader('Content-Type', 'text/html; charset=UTF-8');
        res.send(html);
    }
    catch (e) {
        res.status(500).json({ message: 'Error generando HTML' });
    }
});
router.post('/por-cuenta/:numero/generar', middleware_1.authGuard, async (req, res) => {
    const numero = String(req.params.numero || '').trim();
    if (!numero)
        return res.status(400).json({ message: 'Número de cuenta requerido' });
    const { desde, hasta, etiqueta } = parsePeriodo(req.query);
    try {
        const [[row]] = await db_1.pool.query('SELECT cliente_id FROM cuentas WHERE numero_cuenta = ? LIMIT 1', [numero]);
        if (!row?.cliente_id)
            return res.status(404).json({ message: 'Cuenta no encontrada' });
        const data = await fetchEstadoCuenta(Number(row.cliente_id), desde, hasta);
        if (!data)
            return res.status(404).json({ message: 'Cliente no encontrado' });
        const pdf = await (0, mailer_1.generateEstadoCuentaPdf)({ ...data, etiqueta });
        if (data.cliente.email) {
            await (0, mailer_1.enviarEstadoCuenta)({
                emailCliente: data.cliente.email,
                nombreCliente: data.cliente.nombre,
                periodoEtiqueta: etiqueta,
                comprobantePdf: pdf
            });
        }
        const html = (0, mailer_1.renderEstadoCuentaHtml)({ ...data, etiqueta });
        res.json({ ok: true, html });
    }
    catch (e) {
        res.status(500).json({ message: 'Error generando estado de cuenta' });
    }
});
exports.default = router;
//# sourceMappingURL=estadoCuenta.js.map