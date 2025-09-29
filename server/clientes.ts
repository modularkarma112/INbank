import { Router } from 'express';
import { pool } from './db';
import { authGuard } from './middleware';

const router = Router();

router.get('/existe', authGuard, async (req, res) => {
  const { rfc, curp, email, telefono } = req.query as Record<string, string>;
  const fields: Record<string, boolean> = { rfc: false, curp: false, email: false, telefono: false };
  let exists = false;
  if (rfc) {
    const [rows] = await pool.query('SELECT 1 FROM clientes WHERE rfc = ? LIMIT 1', [rfc]);
    fields.rfc = (rows as any[]).length > 0; exists = exists || fields.rfc;
  }
  if (curp) {
    const [rows] = await pool.query('SELECT 1 FROM clientes WHERE curp = ? LIMIT 1', [curp]);
    fields.curp = (rows as any[]).length > 0; exists = exists || fields.curp;
  }
  if (email) {
    const [rows] = await pool.query('SELECT 1 FROM clientes WHERE email = ? LIMIT 1', [email]);
    fields.email = (rows as any[]).length > 0; exists = exists || fields.email;
  }
  if (telefono) {
    const [rows] = await pool.query('SELECT 1 FROM clientes WHERE telefono = ? LIMIT 1', [telefono]);
    fields.telefono = (rows as any[]).length > 0; exists = exists || fields.telefono;
  }
  res.json({ exists, fields });
});

router.get('/', authGuard, async (_req, res) => {
  const [rows] = await pool.query('SELECT * FROM clientes LIMIT 100');
  res.json(rows);
});

router.get('/buscar', authGuard, async (req, res) => {
  const { rfc, curp, email, telefono, id } = req.query as Record<string, string>;
  let where = '1=1';
  const params: any[] = [];
  if (id) { where += ' AND id = ?'; params.push(Number(id)); }
  if (rfc) { where += ' AND rfc = ?'; params.push(rfc); }
  if (curp) { where += ' AND curp = ?'; params.push(curp); }
  if (email) { where += ' AND email = ?'; params.push(email); }
  if (telefono) { where += ' AND telefono = ?'; params.push(telefono); }
  const [rows] = await pool.query(`SELECT * FROM clientes WHERE ${where} LIMIT 50`, params);
  res.json(rows);
});

router.post('/', authGuard, async (req, res) => {
  const c = req.body;
  const [result] = await pool.execute(
    `INSERT INTO clientes (nombres, apellido_paterno, apellido_materno, rfc, curp, email, telefono, estado, ciudad, direccion, ingresos_mensuales)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [c.nombres, c.apellido_paterno, c.apellido_materno, c.rfc, c.curp, c.email, c.telefono, c.estado, c.ciudad, c.direccion, c.ingresos_mensuales]
  );
  res.status(201).json({ id: (result as any).insertId });
});

export default router;
