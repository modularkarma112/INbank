import { pool } from './db';
import bcrypt from 'bcryptjs';

async function seed() {
  const password = await bcrypt.hash('admin123', 10);
  const [rows] = await pool.query('SELECT id FROM usuarios WHERE usuario = ? LIMIT 1', ['admin']);
  const list = rows as any[];
  if (!list.length) {
    await pool.execute(
      `INSERT INTO usuarios (usuario, nombre, correo, contrasena, rol)
       VALUES (?, ?, ?, ?, ?)`,
      ['admin', 'Administrador', 'admin@inbank.local', password, 'ADMIN']
    );
  }
  console.log('Usuario admin listo. usuario=admin, pass=admin123');
  process.exit(0);
}

seed().catch((e) => { console.error(e); process.exit(1); });
