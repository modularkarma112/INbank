import { Router } from 'express';
import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { pool } from './db';

const router = Router();

router.post('/login', async (req, res) => {
  const raw = req.body as { usuario?: string; contrasena?: string };
  const usuario = raw.usuario?.trim();
  const contrasena = raw.contrasena || '';
  if (!usuario || !contrasena) return res.status(400).json({ message: 'Credenciales requeridas' });

  try {
    const [rows] = await pool.query('SELECT id, usuario, nombre, correo, contrasena, rol FROM usuarios WHERE usuario = ? LIMIT 1', [usuario]);
    const list = rows as any[];
    if (!list.length) return res.status(401).json({ message: 'Usuario o contraseña inválidos' });
    const user = list[0];
    const ok = await bcrypt.compare(contrasena, user.contrasena);
    if (!ok) return res.status(401).json({ message: 'Usuario o contraseña inválidos' });
    const secret: Secret = (process.env.JWT_SECRET || 'secret') as Secret;
    const options: SignOptions = { expiresIn: (process.env.JWT_EXPIRES_IN || '2h') as any };
    const token = jwt.sign({ sub: user.id, rol: user.rol, usuario: user.usuario }, secret, options);
    return res.json({
      token,
      user: { id: user.id, usuario: user.usuario, nombre: user.nombre, correo: user.correo, rol: user.rol }
    });
  } catch (err) {
    console.error('Error en /api/auth/login', err);
    return res.status(500).json({ message: 'Error al iniciar sesión' });
  }
});

export default router;
