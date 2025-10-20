import { Router } from 'express';
import { pool } from './db';
import { authGuard } from './middleware';
import bcrypt from 'bcryptjs';

const router = Router();

// Listar usuarios (limitado)
router.get('/', authGuard, async (_req, res) => {
  const [rows] = await pool.query(`SELECT id, usuario, nombre, apellido_paterno, apellido_materno, correo, curp, direccion, telefono, rol FROM usuarios ORDER BY id DESC LIMIT 200`);
  res.json(rows);
});

// Crear usuario con hash de contraseña
router.post('/', authGuard, async (req, res) => {
  const { usuario, nombre, apellido_paterno, apellido_materno, correo, contrasena, curp, direccion, telefono, rol } = req.body || {};
  if (!usuario || !nombre || !correo || !contrasena) {
    return res.status(400).json({ message: 'usuario, nombre, correo y contrasena son requeridos' });
  }
  // Reglas básicas
  if (telefono && !/^\d{10}$/.test(String(telefono))) return res.status(400).json({ message: 'telefono debe tener 10 dígitos' });
  // Verificar duplicados usuario/correo
  const [dups] = await pool.query('SELECT usuario, correo FROM usuarios WHERE usuario = ? OR correo = ? LIMIT 1', [usuario, correo]);
  if ((dups as any[]).length) {
    const d = (dups as any[])[0];
    return res.status(409).json({ message: 'Duplicado', fields: { usuario: d.usuario === usuario, correo: d.correo === correo } });
  }
  const hash = await bcrypt.hash(String(contrasena), 10);
  const [result] = await pool.execute(
    `INSERT INTO usuarios (usuario, nombre, apellido_paterno, apellido_materno, correo, contrasena, curp, direccion, telefono, rol)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [usuario, nombre, apellido_paterno ?? null, apellido_materno ?? null, correo, hash, curp ?? null, direccion ?? null, telefono ?? null, rol || 'GERENTE']
  );
  res.status(201).json({ id: (result as any).insertId });
});

// Eliminar usuario por id
router.delete('/:id', authGuard, async (req, res) => {
  const id = Number(req.params.id);
  await pool.execute('DELETE FROM usuarios WHERE id = ?', [id]);
  res.json({ ok: true });
});

export default router;
