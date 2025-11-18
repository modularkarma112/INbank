import { Router } from 'express';
import { pool } from './db';
import { authGuard } from './middleware';
import { enviarNotificacionSolicitudPrestamo } from './mailer';

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

// Tasas deducidas del ejemplo del usuario:
//  - Interés base mensual 3.33% para que 6000 a 6 meses -> 7200
//  - Penalización diaria 0.40% para que con 30 días extra -> ~7920
const INTERES_MENSUAL_PORC = 3.33;   // almacenado como porcentaje (DECIMAL(10,2))
const PENALIZACION_DIARIA_PORC = 0.40; // porcentaje diario

router.post('/', authGuard, async (req, res) => {
  const { cliente_id, tipo_prestamo, monto, plazo_meses } = req.body || {};
  if (!cliente_id || !tipo_prestamo || !monto || !plazo_meses) {
    return res.status(400).json({ message: 'Datos requeridos: cliente_id, tipo_prestamo, monto, plazo_meses' });
  }

  // Insertar con estatus EN_REVISION y tasas por defecto calculadas
  const [result] = await pool.execute(
    'INSERT INTO prestamos (cliente_id, tipo_prestamo, monto, plazo_meses, estatus, interes, interes_penalizacion) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [cliente_id, tipo_prestamo, Number(monto), Number(plazo_meses), 'EN_REVISION', INTERES_MENSUAL_PORC, PENALIZACION_DIARIA_PORC]
  );
  const id = (result as any).insertId as number;

  // Enviar correo al cliente (si hay email)
  try {
    const [[cliente]]: any = await pool.query('SELECT nombres, apellido_paterno, apellido_materno, email FROM clientes WHERE id = ?', [cliente_id]);
    if (cliente?.email) {
      await enviarNotificacionSolicitudPrestamo({
        emailCliente: cliente.email,
        nombreCliente: `${cliente.nombres} ${cliente.apellido_paterno || ''} ${cliente.apellido_materno || ''}`.trim(),
        monto: Number(monto),
        plazoMeses: Number(plazo_meses),
        totalBase: Number(monto) * (1 + (INTERES_MENSUAL_PORC/100) * Number(plazo_meses))
      });
    }
  } catch (_) {}

  res.status(201).json({ id });
});

router.put('/:id/estatus', authGuard, async (req, res) => {
  const id = Number(req.params.id);
  const { estatus } = req.body || {};
  await pool.execute('UPDATE prestamos SET estatus = ? WHERE id = ?', [estatus || 'EN_PROCESO', id]);
  res.json({ ok: true });
});

export default router;
