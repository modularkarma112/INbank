import { Router } from 'express';
import { pool } from './db';
import { authGuard } from './middleware';

const router = Router();

function genNumeroCuenta() {
  return String(Math.floor(1000000000000000 + Math.random() * 9000000000000000));
}

router.get('/', authGuard, async (_req, res) => {
  const [rows] = await pool.query('SELECT * FROM cuentas LIMIT 200');
  res.json(rows);
});

router.get('/cliente/:clienteId', authGuard, async (req, res) => {
  const clienteId = Number(req.params.clienteId);
  const [rows] = await pool.query('SELECT * FROM cuentas WHERE cliente_id = ?', [clienteId]);
  res.json(rows);
});

router.get('/por-numero/:numero', authGuard, async (req, res) => {
  const numero = req.params.numero;
  const [rows] = await pool.query('SELECT * FROM cuentas WHERE numero_cuenta = ? LIMIT 1', [numero]);
  const row = (rows as any[])[0];
  if (!row) return res.status(404).json({ message: 'Cuenta no encontrada' });
  res.json(row);
});

router.post('/', authGuard, async (req, res) => {
  const { cliente_id, tipo_cuenta_id, deposito_inicial } = req.body || {};
  if (!cliente_id || !tipo_cuenta_id) return res.status(400).json({ message: 'cliente_id y tipo_cuenta_id requeridos' });
  const saldoInicial = Number(deposito_inicial ?? 0);
  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();
    let cuentaId: number | null = null;
    let numero = '';
    for (let intento = 0; intento < 5; intento++) {
      numero = genNumeroCuenta();
      try {
        const [result] = await conn.execute(
          'INSERT INTO cuentas (numero_cuenta, cliente_id, tipo_cuenta_id, saldo, estatus) VALUES (?, ?, ?, ?, ?)',
          [numero, cliente_id, tipo_cuenta_id, saldoInicial, 'ACTIVA']
        );
        cuentaId = (result as any).insertId as number;
        break;
      } catch (e: any) {
        if (e?.code === 'ER_DUP_ENTRY') {
          continue;
        }
        throw e;
      }
    }
    if (!cuentaId) {
      await conn.rollback();
      return res.status(500).json({ message: 'No se pudo generar un número de cuenta único' });
    }
    if (saldoInicial > 0) {
      await conn.execute(
        'INSERT INTO transacciones (cuenta_id, tipo, monto, concepto) VALUES (?, ?, ?, ?)',
        [cuentaId, 'DEPOSITO', saldoInicial, 'Depósito inicial']
      );
    }
    await conn.commit();
    res.status(201).json({ id: cuentaId, numero_cuenta: numero });
  } catch (e) {
    await conn.rollback();
    res.status(500).json({ message: 'Error creando cuenta' });
  } finally {
    conn.release();
  }
});

router.post('/:id/deposito', authGuard, async (req, res) => {
  const id = Number(req.params.id);
  const { monto, concepto } = req.body || {};
  const m = Number(monto);
  if (!m || m <= 0) return res.status(400).json({ message: 'monto inválido' });
  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();
    await conn.execute('UPDATE cuentas SET saldo = saldo + ? WHERE id = ?', [m, id]);
    await conn.execute('INSERT INTO transacciones (cuenta_id, tipo, monto, concepto) VALUES (?, ?, ?, ?)', [id, 'DEPOSITO', m, concepto || 'Depósito']);
    await conn.commit();
    res.json({ ok: true });
  } catch (e) {
    await conn.rollback();
    res.status(500).json({ message: 'Error en depósito' });
  } finally {
    conn.release();
  }
});

router.post('/:id/retiro', authGuard, async (req, res) => {
  const id = Number(req.params.id);
  const { monto, concepto } = req.body || {};
  const m = Number(monto);
  if (!m || m <= 0) return res.status(400).json({ message: 'monto inválido' });
  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();
    const [rows] = await conn.query('SELECT saldo FROM cuentas WHERE id = ? FOR UPDATE', [id]);
    const saldo = (rows as any[])[0]?.saldo ?? 0;
    if (saldo < m) {
      await conn.rollback();
      return res.status(400).json({ message: 'Saldo insuficiente' });
    }
    await conn.execute('UPDATE cuentas SET saldo = saldo - ? WHERE id = ?', [m, id]);
    await conn.execute('INSERT INTO transacciones (cuenta_id, tipo, monto, concepto) VALUES (?, ?, ?, ?)', [id, 'RETIRO', m, concepto || 'Retiro']);
    await conn.commit();
    res.json({ ok: true });
  } catch (e) {
    await conn.rollback();
    res.status(500).json({ message: 'Error en retiro' });
  } finally {
    conn.release();
  }
});

router.post('/transferir', authGuard, async (req, res) => {
  const { origen_id, destino_id, monto, concepto } = req.body || {};
  const m = Number(monto);
  if (!origen_id || !destino_id || !m || m <= 0) return res.status(400).json({ message: 'Datos inválidos' });
  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();
    const [r1] = await conn.query('SELECT saldo FROM cuentas WHERE id = ? FOR UPDATE', [origen_id]);
    const saldo = (r1 as any[])[0]?.saldo ?? 0;
    if (saldo < m) { await conn.rollback(); return res.status(400).json({ message: 'Saldo insuficiente' }); }
    await conn.execute('UPDATE cuentas SET saldo = saldo - ? WHERE id = ?', [m, origen_id]);
    await conn.execute('UPDATE cuentas SET saldo = saldo + ? WHERE id = ?', [m, destino_id]);
    await conn.execute('INSERT INTO transacciones (cuenta_id, tipo, monto, concepto) VALUES (?, ?, ?, ?)', [origen_id, 'TRANSFERENCIA_SALIDA', m, concepto || 'Transferencia a cuenta ' + destino_id]);
    await conn.execute('INSERT INTO transacciones (cuenta_id, tipo, monto, concepto) VALUES (?, ?, ?, ?)', [destino_id, 'TRANSFERENCIA_ENTRADA', m, concepto || 'Transferencia de cuenta ' + origen_id]);
    await conn.commit();
    res.json({ ok: true });
  } catch (e) {
    await conn.rollback();
    res.status(500).json({ message: 'Error en transferencia' });
  } finally {
    conn.release();
  }
});

router.post('/:id/cancelar', authGuard, async (req, res) => {
  const id = Number(req.params.id);
  const { motivo_cancelacion, usuario_cancelacion } = req.body || {};
  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();
    const [rows] = await conn.query('SELECT saldo FROM cuentas WHERE id = ? FOR UPDATE', [id]);
    const saldo = (rows as any[])[0]?.saldo ?? 0;
    await conn.execute('UPDATE cuentas SET estatus = ? WHERE id = ?', ['CANCELADA', id]);
    await conn.execute(
      'INSERT INTO cancelaciones_cuentas (cuenta_id, fecha_cancelacion, motivo_cancelacion, saldo_final, usuario_cancelacion) VALUES (?, NOW(), ?, ?, ?)',
      [id, motivo_cancelacion || '', saldo, usuario_cancelacion || 'sistema']
    );
    await conn.commit();
    res.json({ ok: true, saldo_final: saldo });
  } catch (e) {
    await conn.rollback();
    res.status(500).json({ message: 'Error al cancelar cuenta' });
  } finally {
    conn.release();
  }
});

router.get('/:id/transacciones', authGuard, async (req, res) => {
  const id = Number(req.params.id);
  const [rows] = await pool.query('SELECT * FROM transacciones WHERE cuenta_id = ? ORDER BY fecha DESC, id DESC LIMIT 200', [id]);
  res.json(rows);
});

export default router;
