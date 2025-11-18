import { Router } from 'express';
import { pool } from './db';
import { authGuard } from './middleware';
import { enviarNotificacionMovimiento } from './mailer';
import bcrypt from 'bcryptjs';

const router = Router();

function genNumeroCuenta() {
  return String(Math.floor(1000000000000000 + Math.random() * 9000000000000000));
}

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
  try {
    const { rfc, curp, email, telefono, id, q } = req.query as Record<string, string>;
    let where = '1=1';
    const params: any[] = [];
    if (id !== undefined) {
      const idNum = Number(id);
      if (Number.isFinite(idNum)) {
        where += ' AND id = ?';
        params.push(idNum);
      } else {

        console.warn('Filtro id inválido en /api/clientes/buscar:', id);
      }
    }
    if (rfc) { where += ' AND rfc = ?'; params.push(rfc); }
    if (curp) { where += ' AND curp = ?'; params.push(curp); }
    if (email) { where += ' AND email = ?'; params.push(email); }
    if (telefono) { where += ' AND telefono = ?'; params.push(telefono); }
    if (q) {
      const like = `%${q}%`;
      where += ' AND (nombres LIKE ? OR apellido_paterno LIKE ? OR apellido_materno LIKE ? OR rfc LIKE ? OR curp LIKE ? OR email LIKE ? OR telefono LIKE ?)';
      params.push(like, like, like, like, like, like, like);
    }
    const [rows] = await pool.query(`SELECT * FROM clientes WHERE ${where} LIMIT 50`, params);
    res.json(rows);
  } catch (e: any) {
    console.error('Error en /api/clientes/buscar:', e?.message || e);
    res.status(500).json({ message: 'Error interno buscando clientes', error: e?.message });
  }
});

router.get('/:id', authGuard, async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isFinite(id)) return res.status(400).json({ message: 'id inválido' });
  const [rows] = await pool.query('SELECT * FROM clientes WHERE id = ? LIMIT 1', [id]);
  const row = (rows as any[])[0];
  if (!row) return res.status(404).json({ message: 'Cliente no encontrado' });
  res.json(row);
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

router.put('/:id', authGuard, async (req: any, res) => {
  const id = Number(req.params.id);
  const { password, ...data } = req.body || {};
  if (!password) return res.status(400).json({ message: 'Contraseña requerida para modificar datos' });

  const userId = req.user?.sub;
  if (!userId) return res.status(401).json({ message: 'No autenticado' });
  const [urows] = await pool.query('SELECT contrasena FROM usuarios WHERE id = ? LIMIT 1', [userId]);
  const u = (urows as any[])[0];
  if (!u) return res.status(401).json({ message: 'Usuario no válido' });
  const ok = await bcrypt.compare(String(password), String(u.contrasena));
  if (!ok) return res.status(401).json({ message: 'Contraseña incorrecta' });


  const allow = new Set(['nombres','apellido_paterno','apellido_materno','rfc','curp','email','telefono','estado','ciudad','direccion','ingresos_mensuales']);
  const sets: string[] = [];
  const params: any[] = [];
  for (const k of Object.keys(data)) {
    if (!allow.has(k)) continue;

    if (['rfc','curp','email','telefono'].includes(k) && data[k]) {
      const [dups] = await pool.query(`SELECT id FROM clientes WHERE ${k} = ? AND id <> ? LIMIT 1`, [data[k], id]);
      if ((dups as any[]).length) return res.status(409).json({ message: `El ${k} ya está registrado en otro cliente`, field: k });
    }
    sets.push(`${k} = ?`);
    params.push(data[k]);
  }
  if (!sets.length) return res.json({ ok: true, updated: 0 });
  params.push(id);
  await pool.execute(`UPDATE clientes SET ${sets.join(', ')} WHERE id = ?`, params);
  res.json({ ok: true, updated: sets.length });
});

router.post('/con-cuenta', authGuard, async (req, res) => {
  const c = req.body;
  const tipoCuentaId = Number(c.tipo_cuenta_id || 1); 
  const depositoInicial = Number(c.deposito_inicial || 0);
  
  if (!c.nombres || !c.rfc || !c.curp || !c.email) {
    return res.status(400).json({ message: 'Datos del cliente incompletos' });
  }
  
  if (depositoInicial < 500) {
    return res.status(400).json({ message: 'El depósito inicial mínimo es de $500 MXN' });
  }
  
  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();

    try {
      await conn.execute(
        `INSERT IGNORE INTO tipos_cuenta (id, nombre_tipo) VALUES 
         (1, 'Cuenta de Nómina'),
         (2, 'Cuenta de Ahorro'),
         (3, 'Cuenta de Inversión')`
      );
    } catch (e: any) {

      if (/Unknown column 'nombre_tipo'/.test(e?.message || '')) {
        await conn.execute(
          `INSERT IGNORE INTO tipos_cuenta (id, nombre) VALUES 
           (1, 'Cuenta de Nómina'),
           (2, 'Cuenta de Ahorro'),
           (3, 'Cuenta de Inversión')`
        ).catch(() => {});
      } else {

        if (!/Duplicate entry|IGNORE/.test(e?.message || '')) {
          throw e;
        }
      }
    }

    const [clienteResult] = await conn.execute(
      `INSERT INTO clientes (nombres, apellido_paterno, apellido_materno, rfc, curp, email, telefono, estado, ciudad, direccion, ingresos_mensuales)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [c.nombres, c.apellido_paterno, c.apellido_materno, c.rfc, c.curp, c.email, c.telefono, c.estado, c.ciudad, c.direccion, c.ingresos_mensuales]
    );
    const clienteId = (clienteResult as any).insertId;
    
    const numeroCuenta = genNumeroCuenta();
    const [cuentaResult] = await conn.execute(
      `INSERT INTO cuentas (numero_cuenta, cliente_id, tipo_cuenta_id, saldo, estatus)
       VALUES (?, ?, ?, ?, 'ACTIVA')`,
      [numeroCuenta, clienteId, tipoCuentaId, depositoInicial]
    );
    const cuentaId = (cuentaResult as any).insertId;
    
    await conn.execute(
      `INSERT INTO transacciones (cuenta_id, tipo, monto, concepto)
       VALUES (?, 'DEPOSITO', ?, 'Depósito inicial - Apertura de cuenta')`,
      [cuentaId, depositoInicial]
    );
    
    await conn.commit();
    
    if (c.email) {
      const nombreCompleto = `${c.nombres} ${c.apellido_paterno || ''}`.trim();
      enviarNotificacionMovimiento({
        emailCliente: c.email,
        nombreCliente: nombreCompleto,
        numeroCuenta: numeroCuenta,
        tipoMovimiento: 'DEPOSITO',
        monto: depositoInicial,
        saldoActual: depositoInicial,
        concepto: 'Depósito inicial - Apertura de cuenta'
      }).catch(err => console.error('Error enviando email bienvenida:', err));
    }
    
    res.status(201).json({ 
      cliente_id: clienteId,
      cuenta_id: cuentaId,
      numero_cuenta: numeroCuenta,
      saldo_inicial: depositoInicial
    });
  } catch (e: any) {
    await conn.rollback();
    console.error('Error creando cliente con cuenta:', e?.message || e, e?.stack || 'no-stack');
    const msg = e?.message || '';
    if (/Duplicate entry/.test(msg)) {
      return res.status(409).json({ message: 'Ya existe un cliente con esos datos (RFC, CURP, Email o Teléfono)' });
    }
    res.status(500).json({ message: 'Error creando cliente con cuenta', error: msg });
  } finally {
    conn.release();
  }
});

export default router;
