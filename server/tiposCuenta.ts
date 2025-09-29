import { Router } from 'express';
import { pool } from './db';
import { authGuard } from './middleware';

const router = Router();

router.get('/', authGuard, async (_req, res) => {
  const [rows] = await pool.query('SELECT * FROM tipos_cuenta ORDER BY id');
  res.json(rows);
});

router.post('/', authGuard, async (req, res) => {
  const { nombre_tipo, deposito_minimo, comision_mensual } = req.body || {};
  if (!nombre_tipo) return res.status(400).json({ message: 'nombre_tipo requerido' });
  const [result] = await pool.execute(
    'INSERT INTO tipos_cuenta (nombre_tipo, deposito_minimo, comision_mensual) VALUES (?, ?, ?)',
    [nombre_tipo, deposito_minimo ?? 0, comision_mensual ?? 0]
  );
  res.status(201).json({ id: (result as any).insertId });
});

router.put('/:id', authGuard, async (req, res) => {
  const id = Number(req.params.id);
  const { nombre_tipo, deposito_minimo, comision_mensual } = req.body || {};
  await pool.execute(
    'UPDATE tipos_cuenta SET nombre_tipo = COALESCE(?, nombre_tipo), deposito_minimo = COALESCE(?, deposito_minimo), comision_mensual = COALESCE(?, comision_mensual) WHERE id = ?',
    [nombre_tipo ?? null, deposito_minimo ?? null, comision_mensual ?? null, id]
  );
  res.json({ ok: true });
});

router.delete('/:id', authGuard, async (req, res) => {
  const id = Number(req.params.id);
  await pool.execute('DELETE FROM tipos_cuenta WHERE id = ?', [id]);
  res.json({ ok: true });
});

export default router;
