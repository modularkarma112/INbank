import mysql from 'mysql2/promise';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

async function run() {
  const host = process.env.DB_HOST || '127.0.0.1';
  const port = Number(process.env.DB_PORT) || 3306;
  const user = process.env.DB_USER || 'root';
  const password = process.env.DB_PASSWORD || 'root';
  const schemaPath = path.join(__dirname, '..', 'db', 'schema.sql');
  if (!fs.existsSync(schemaPath)) {
    console.error('No se encontró schema.sql en db/');
    process.exit(1);
  }
  const sqlRaw = fs.readFileSync(schemaPath, 'utf8');
 
  const cleaned = sqlRaw
    .replace(/--.*$/gm, '')
    .replace(/\/\*[^]*?\*\//g, '');
  const statements = cleaned
    .split(/;\s*\n/) 
    .map(s => s.trim())
    .filter(s => s.length);

  console.log('Conectando sin base de datos para crear/actualizar schema...');
  const conn = await mysql.createConnection({ host, port, user, password, multipleStatements: true });
  try {
    for (const stmt of statements) {
      try {
        await conn.query(stmt);
        console.log('OK:', stmt.substring(0, 60).replace(/\s+/g, ' ') + (stmt.length > 60 ? '...' : ''));
      } catch (e: any) {
        const msg = e?.message || '';
        if (/exists|Duplicate/i.test(msg)) {
          console.log('AVISO (ignorado):', msg);
        } else {
          console.error('Error ejecutando sentencia:', stmt, '\n', e);
          throw e;
        }
      }
    }
    console.log('Schema aplicado.');
  } finally {
    await conn.end();
  }
}

run().catch(e => { console.error(e); process.exit(1); });
