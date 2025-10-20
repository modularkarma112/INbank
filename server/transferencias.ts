import { Router } from 'express';
import { pool } from './db';
import { authGuard } from './middleware';

const router = Router();

// Calcular comisión: $5 por cada $100 hasta 1500; si monto > 1500, $10 por cada $100
export function calcularComision(monto: number) {
  const tramos = Math.ceil(monto / 100);
  return monto > 1500 ? tramos * 10 : tramos * 5;
}

// Buscar contactos por cliente + texto (identificador o nombre)
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

// Crear contacto
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

// Eliminar contacto
router.delete('/contactos/:id', authGuard, async (req, res) => {
  const id = Number(req.params.id);
  await pool.execute('DELETE FROM contactos_transferencia WHERE id = ?', [id]);
  res.json({ ok: true });
});

// Preview de comisión
router.get('/comision', authGuard, async (req, res) => {
  const monto = Number(req.query.monto);
  if (!monto || monto <= 0) return res.status(400).json({ message: 'monto inválido' });
  res.json({ monto, comision: calcularComision(monto) });
});

// Ejecutar transferencia (misma/diferente banco)
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
    const [rOrigen] = await conn.query('SELECT id, saldo FROM cuentas WHERE id = ? FOR UPDATE', [origen_cuenta_id]);
    const origen = (rOrigen as any[])[0];
    if (!origen) { await conn.rollback(); return res.status(404).json({ message: 'Cuenta origen no encontrada' }); }
    if (Number(origen.saldo) < totalDebitar) { await conn.rollback(); return res.status(400).json({ message: 'Saldo insuficiente (incluyendo comisión)' }); }

    // Si es mismo banco y el destino es número de cuenta existente, acreditamos también
    let destinoCuentaId: number | null = null;
    if (destino_tipo === 'NUMERO_CUENTA') {
      const [rDest] = await conn.query('SELECT id FROM cuentas WHERE numero_cuenta = ? FOR UPDATE', [destino_identificador]);
      destinoCuentaId = (rDest as any[])[0]?.id ?? null;
    }

    // Debitar origen: monto + comisión
    await conn.execute('UPDATE cuentas SET saldo = saldo - ? WHERE id = ?', [totalDebitar, origen_cuenta_id]);
    await conn.execute('INSERT INTO transacciones (cuenta_id, tipo, monto, concepto) VALUES (?, ?, ?, ?)', [origen_cuenta_id, 'TRANSFERENCIA_SALIDA', m, concepto || `Transferencia a ${destino_identificador}`]);
    if (comision > 0) {
      await conn.execute('INSERT INTO transacciones (cuenta_id, tipo, monto, concepto) VALUES (?, ?, ?, ?)', [origen_cuenta_id, 'COMISION', comision, 'Comisión por transferencia']);
    }

    // Acreditar destino si existe en nuestro banco
    if (destinoCuentaId) {
      await conn.execute('UPDATE cuentas SET saldo = saldo + ? WHERE id = ?', [m, destinoCuentaId]);
      await conn.execute('INSERT INTO transacciones (cuenta_id, tipo, monto, concepto) VALUES (?, ?, ?, ?)', [destinoCuentaId, 'TRANSFERENCIA_ENTRADA', m, concepto || `Transferencia de ${origen_cuenta_id}`]);
    }

    // Registrar transferencia consolidada
    const [ins] = await conn.execute(
      `INSERT INTO transferencias (cliente_id, origen_cuenta_id, destino_cuenta_id, destino_banco, destino_identificador_tipo, destino_identificador, nombre_destinatario, monto, comision, concepto, estado)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'COMPLETADA')`,
      [cliente_id ?? null, origen_cuenta_id, destinoCuentaId, destino_banco ?? null, destino_tipo, destino_identificador, destino_nombre, m, comision, concepto ?? null]
    );
    const transferenciaId = (ins as any).insertId;

    // Guardar contacto si así lo solicita
    if (guardar_contacto && cliente_id) {
      try {
        await conn.execute(
          `INSERT INTO contactos_transferencia (cliente_id, alias, banco, identificador_tipo, identificador, nombre_propietario)
           VALUES (?, ?, ?, ?, ?, ?)`,
          [cliente_id, null, destino_banco ?? null, destino_tipo, destino_identificador, destino_nombre]
        );
      } catch {}
    }

    await conn.commit();
    res.status(201).json({ id: transferenciaId, comision, totalDebitar });
  } catch (e) {
    await conn.rollback();
    res.status(500).json({ message: 'Error ejecutando transferencia' });
  } finally {
    conn.release();
  }
});

export default router;
