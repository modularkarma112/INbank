import { Router } from 'express';
import { pool } from './db';
import { authGuard } from './middleware';

const router = Router();

router.get('/', authGuard, async (_req, res) => {
  const [rows] = await pool.query('SELECT * FROM prestamos ORDER BY id DESC LIMIT 200');
  res.json(rows);
});

router.get('/cliente/:clienteId', authGuard, async (req, res) => {
  const clienteId = Number(req.params.clienteId);
  const [rows] = await pool.query('SELECT * FROM prestamos WHERE cliente_id = ? ORDER BY id DESC', [clienteId]);
  res.json(rows);
});

router.post('/', authGuard, async (req, res) => {
  const { cliente_id, tipo_prestamo, monto, plazo_meses, interes, interes_penalizacion } = req.body || {};
  if (!cliente_id || !tipo_prestamo || !monto || !plazo_meses) return res.status(400).json({ message: 'Datos requeridos: cliente_id, tipo_prestamo, monto, plazo_meses' });
  const [result] = await pool.execute(
    'INSERT INTO prestamos (cliente_id, tipo_prestamo, monto, plazo_meses, estatus, interes, interes_penalizacion) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [cliente_id, tipo_prestamo, Number(monto), Number(plazo_meses), 'SOLICITADO', interes ?? 0, interes_penalizacion ?? 0]
  );
  res.status(201).json({ id: (result as any).insertId });
});

router.put('/:id/estatus', authGuard, async (req, res) => {
  const id = Number(req.params.id);
  const { estatus } = req.body || {};
  await pool.execute('UPDATE prestamos SET estatus = ? WHERE id = ?', [estatus || 'EN_PROCESO', id]);
  res.json({ ok: true });
});

export default router;
