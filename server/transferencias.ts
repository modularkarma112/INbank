import { Router } from 'express';
import { pool } from './db';
import { authGuard } from './middleware';
import { enviarNotificacionMovimiento, generateComprobanteTransferenciaPdf } from './mailer';

const router = Router();

export function calcularComision(monto: number) {
  const tramos = Math.ceil(monto / 100);
  return monto > 1500 ? tramos * 10 : tramos * 5;
}


router.get('/comision', authGuard, async (req, res) => {
  const monto = Number(req.query.monto);
  if (!monto || monto <= 0) return res.status(400).json({ message: 'monto inválido' });
  res.json({ monto, comision: calcularComision(monto) });
});


router.get('/contactos', authGuard, async (req, res) => {
  const clienteId = Number(req.query.cliente_id);
  const q = String(req.query.q || '').trim();
  if (!clienteId) return res.status(400).json({ message: 'cliente_id requerido' });
  const like = `%${q}%`;
  const [rows] = await pool.query(
    `SELECT * FROM contactos_transferencia 
     WHERE cliente_id = ? AND (identificador LIKE ? OR nombre_propietario LIKE ? OR COALESCE(alias,'') LIKE ?)
     ORDER BY creado_en DESC LIMIT 50`,
    [clienteId, like, like, like]
  );
  res.json(rows);
});

router.get('/:id/pdf', authGuard, async (req, res) => {
  const id = Number(req.params.id);
  if (!id) return res.status(400).json({ message: 'ID inválido' });
  try {
    const [rows] = await pool.query(
      `SELECT t.*, 
              c_origen.numero_cuenta as origen_numero_cuenta,
              cl_origen.nombres as origen_nombres,
              cl_origen.apellido_paterno as origen_apellido_paterno
       FROM transferencias t
       LEFT JOIN cuentas c_origen ON t.origen_cuenta_id = c_origen.id
       LEFT JOIN clientes cl_origen ON c_origen.cliente_id = cl_origen.id
       WHERE t.id = ? LIMIT 1`,
      [id]
    );
    const t: any = (rows as any[])[0];
    if (!t) return res.status(404).json({ message: 'Transferencia no encontrada' });
    const pdf = await generateComprobanteTransferenciaPdf({
      id: t.id,
      monto: Number(t.monto || 0),
      comision: Number(t.comision || 0),
      concepto: t.concepto || null,
      fecha: new Date(t.fecha || Date.now()),
      tipo: t.destino_banco ? 'Interbancaria' : 'Mismo banco',
      origen_nombre: t.origen_nombres ? `${t.origen_nombres} ${t.origen_apellido_paterno || ''}`.trim() : null,
      origen_numero_cuenta: t.origen_numero_cuenta || null,
      destino_nombre: t.nombre_destinatario,
      destino_banco: t.destino_banco,
      destino_identificador_tipo: t.destino_identificador_tipo,
      destino_identificador: t.destino_identificador
    });
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=comprobante-transferencia-${id}.pdf`);
    res.send(pdf);
  } catch (e) {
    res.status(500).json({ message: 'Error generando PDF' });
  }
});


router.get('/:id', authGuard, async (req, res) => {
  const id = Number(req.params.id);
  if (!id) return res.status(400).json({ message: 'ID inválido' });
  
  try {
    const [rows] = await pool.query(
      `SELECT t.*, 
              c_origen.numero_cuenta as origen_numero_cuenta,
              c_origen.saldo as origen_saldo,
              cl_origen.nombres as origen_nombres,
              cl_origen.apellido_paterno as origen_apellido_paterno
       FROM transferencias t
       LEFT JOIN cuentas c_origen ON t.origen_cuenta_id = c_origen.id
       LEFT JOIN clientes cl_origen ON c_origen.cliente_id = cl_origen.id
       WHERE t.id = ? LIMIT 1`,
      [id]
    );
    const transferencia = (rows as any[])[0];
    if (!transferencia) return res.status(404).json({ message: 'Transferencia no encontrada' });
    

    if (transferencia.origen_nombres) {
      transferencia.origen_nombre = `${transferencia.origen_nombres} ${transferencia.origen_apellido_paterno}`;
    }
    
    res.json(transferencia);
  } catch (e) {
    res.status(500).json({ message: 'Error obteniendo transferencia' });
  }
});


router.post('/contactos', authGuard, async (req, res) => {
  const { cliente_id, alias, banco, identificador_tipo, identificador, nombre_propietario } = req.body || {};
  if (!cliente_id || !identificador_tipo || !identificador || !nombre_propietario) {
    return res.status(400).json({ message: 'cliente_id, identificador_tipo, identificador, nombre_propietario requeridos' });
  }
  try {
    const [r] = await pool.execute(
      `INSERT INTO contactos_transferencia (cliente_id, alias, banco, identificador_tipo, identificador, nombre_propietario)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [cliente_id, alias ?? null, banco ?? null, identificador_tipo, identificador, nombre_propietario]
    );
    res.status(201).json({ id: (r as any).insertId });
  } catch (e: any) {
    const msg = e?.message || '';
    if (/Duplicate entry/.test(msg)) return res.status(409).json({ message: 'Contacto duplicado' });
    res.status(500).json({ message: 'Error creando contacto' });
  }
});

router.delete('/contactos/:id', authGuard, async (req, res) => {
  const id = Number(req.params.id);
  await pool.execute('DELETE FROM contactos_transferencia WHERE id = ?', [id]);
  res.json({ ok: true });
});

router.get('/comision', authGuard, async (req, res) => {
  const monto = Number(req.query.monto);
  if (!monto || monto <= 0) return res.status(400).json({ message: 'monto inválido' });
  res.json({ monto, comision: calcularComision(monto) });
});

router.post('/', authGuard, async (req, res) => {
  const { cliente_id, origen_cuenta_id, destino_tipo, destino_identificador, destino_nombre, destino_banco, monto, concepto, guardar_contacto } = req.body || {};
  const m = Number(monto);
  if (!origen_cuenta_id || !destino_tipo || !destino_identificador || !destino_nombre || !m || m <= 0) {
    return res.status(400).json({ message: 'Datos requeridos' });
  }
  const comision = calcularComision(m);
  const totalDebitar = m + comision;

  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();
    
    const [rOrigenFull] = await conn.query(`
      SELECT c.id, c.saldo, c.numero_cuenta, cl.nombres, cl.apellido_paterno, cl.email 
      FROM cuentas c 
      JOIN clientes cl ON c.cliente_id = cl.id 
      WHERE c.id = ? FOR UPDATE
    `, [origen_cuenta_id]);
    const origen = (rOrigenFull as any[])[0];
    
    if (!origen) { 
      await conn.rollback(); 
      return res.status(404).json({ message: 'Cuenta origen no encontrada' }); 
    }
    if (Number(origen.saldo) < totalDebitar) { 
      await conn.rollback(); 
      return res.status(400).json({ message: 'Saldo insuficiente (incluyendo comisión)' }); 
    }

    let destinoCuentaId: number | null = null;
    let cuentaDestino: any = null;
    if (destino_tipo === 'NUMERO_CUENTA') {
      const [rDestFull] = await conn.query(`
        SELECT c.id, c.numero_cuenta, c.saldo, cl.nombres, cl.apellido_paterno, cl.email 
        FROM cuentas c 
        JOIN clientes cl ON c.cliente_id = cl.id 
        WHERE c.numero_cuenta = ? FOR UPDATE
      `, [destino_identificador]);
      cuentaDestino = (rDestFull as any[])[0] ?? null;
      destinoCuentaId = cuentaDestino?.id ?? null;
    }

    await conn.execute('UPDATE cuentas SET saldo = saldo - ? WHERE id = ?', [totalDebitar, origen_cuenta_id]);
    await conn.execute('INSERT INTO transacciones (cuenta_id, tipo, monto, concepto) VALUES (?, ?, ?, ?)', [origen_cuenta_id, 'TRANSFERENCIA_SALIDA', m, concepto || `Transferencia a ${destino_identificador}`]);
    if (comision > 0) {
      await conn.execute('INSERT INTO transacciones (cuenta_id, tipo, monto, concepto) VALUES (?, ?, ?, ?)', [origen_cuenta_id, 'COMISION', comision, 'Comisión por transferencia']);
    }

    if (destinoCuentaId && cuentaDestino) {
      await conn.execute('UPDATE cuentas SET saldo = saldo + ? WHERE id = ?', [m, destinoCuentaId]);
      await conn.execute('INSERT INTO transacciones (cuenta_id, tipo, monto, concepto) VALUES (?, ?, ?, ?)', [destinoCuentaId, 'TRANSFERENCIA_ENTRADA', m, concepto || `Transferencia de ${origen_cuenta_id}`]);
    }

    const [ins] = await conn.execute(
      `INSERT INTO transferencias (cliente_id, origen_cuenta_id, destino_cuenta_id, destino_banco, destino_identificador_tipo, destino_identificador, nombre_destinatario, monto, comision, concepto, estado)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'COMPLETADA')`,
      [cliente_id ?? null, origen_cuenta_id, destinoCuentaId, destino_banco ?? null, destino_tipo, destino_identificador, destino_nombre, m, comision, concepto ?? null]
    );
    const transferenciaId = (ins as any).insertId;

    if (guardar_contacto && cliente_id) {
      try {
        await conn.execute(
          `INSERT INTO contactos_transferencia (cliente_id, alias, banco, identificador_tipo, identificador, nombre_propietario)
           VALUES (?, ?, ?, ?, ?, ?)`,
          [cliente_id, null, destino_banco ?? null, destino_tipo, destino_identificador, destino_nombre]
        );
  } catch (err) { console.warn('No se pudo generar PDF de transferencia (origen):', (err as any)?.message || err); }
    }

    await conn.commit();
    
    if (origen?.email) {
      const nuevoSaldoOrigen = Number(origen.saldo) - totalDebitar;
      let pdf: Buffer | undefined;
      try {
        pdf = await generateComprobanteTransferenciaPdf({
          id: transferenciaId,
          monto: m,
          comision,
          concepto: concepto || null,
          fecha: new Date(),
          tipo: destino_banco ? 'Interbancaria' : 'Mismo banco',
          origen_nombre: `${origen.nombres} ${origen.apellido_paterno || ''}`.trim(),
          origen_numero_cuenta: origen.numero_cuenta,
          destino_nombre: destino_nombre,
          destino_banco: destino_banco || null,
          destino_identificador_tipo: destino_tipo,
          destino_identificador: destino_identificador
        });
  } catch (err) { console.warn('No se pudo generar PDF de transferencia (destino):', (err as any)?.message || err); }
      enviarNotificacionMovimiento({
        emailCliente: origen.email,
        nombreCliente: `${origen.nombres} ${origen.apellido_paterno || ''}`.trim(),
        numeroCuenta: origen.numero_cuenta,
        tipoMovimiento: 'TRANSFERENCIA_ENVIADA',
        monto: m,
        saldoActual: nuevoSaldoOrigen,
        concepto: `Transferencia a ${destino_nombre} (${destino_identificador}) ${destino_banco ? '- ' + destino_banco : ''}`,
        comprobantePdf: pdf
      }).catch(err => console.error('Error enviando email origen:', err));
      
      if (comision > 0) {
        enviarNotificacionMovimiento({
          emailCliente: origen.email,
          nombreCliente: `${origen.nombres} ${origen.apellido_paterno || ''}`.trim(),
          numeroCuenta: origen.numero_cuenta,
          tipoMovimiento: 'COMISION',
          monto: comision,
          saldoActual: nuevoSaldoOrigen,
          concepto: 'Comisión por transferencia'
        }).catch(err => console.error('Error enviando email comisión:', err));
      }
    }
    
    if (cuentaDestino?.email) {
      const nuevoSaldoDestino = Number(cuentaDestino.saldo) + m;
      let pdfRec: Buffer | undefined;
      try {
        pdfRec = await generateComprobanteTransferenciaPdf({
          id: transferenciaId,
          monto: m,
          comision: 0,
          concepto: concepto || null,
          fecha: new Date(),
          tipo: 'Mismo banco',
          origen_nombre: `${origen.nombres} ${origen.apellido_paterno || ''}`.trim(),
          origen_numero_cuenta: origen.numero_cuenta,
          destino_nombre: `${cuentaDestino.nombres} ${cuentaDestino.apellido_paterno || ''}`.trim(),
          destino_banco: 'INBANK',
          destino_identificador_tipo: 'NUMERO_CUENTA',
          destino_identificador: cuentaDestino.numero_cuenta
        });
      } catch {}
      enviarNotificacionMovimiento({
        emailCliente: cuentaDestino.email,
        nombreCliente: `${cuentaDestino.nombres} ${cuentaDestino.apellido_paterno || ''}`.trim(),
        numeroCuenta: cuentaDestino.numero_cuenta,
        tipoMovimiento: 'TRANSFERENCIA_RECIBIDA',
        monto: m,
        saldoActual: nuevoSaldoDestino,
        concepto: concepto || `Transferencia de ${origen.numero_cuenta}`,
        comprobantePdf: pdfRec
      }).catch(err => console.error('Error enviando email destino:', err));
    }
    
    res.status(201).json({ id: transferenciaId, comision, totalDebitar });
  } catch (e) {
    await conn.rollback();
    res.status(500).json({ message: 'Error ejecutando transferencia' });
  } finally {
    conn.release();
  }
});

export default router;
