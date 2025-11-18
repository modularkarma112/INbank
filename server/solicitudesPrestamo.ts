import { Router } from 'express';
import { pool } from './db';
import { authGuard } from './middleware';
import { enviarNotificacionSolicitudPrestamo } from './mailer';

const router = Router();

// Reglas de negocio (deducidas del ejemplo del usuario)
// - Interés base mensual: 3.333% (para que 6,000 a 6 meses resulte en 7,200)
// - Penalización por mora diaria: 0.4% (si se atrasa 30 días, sube ~12% extra: 7,920)
const BASE_MONTHLY_RATE = 0.033333; // 3.333%
const PENALTY_DAILY_RATE = 0.004;   // 0.4%

function calcularTotalBase(monto: number, plazoMeses: number) {
  const total = monto * (1 + BASE_MONTHLY_RATE * plazoMeses);
  return Number(total.toFixed(2));
}

function calcularFechaVencimiento(plazoMeses: number) {
  const d = new Date();
  d.setMonth(d.getMonth() + plazoMeses);
  return d;
}

// Listado general (máximo 200)
router.get('/', authGuard, async (_req, res) => {
  const [rows] = await pool.query('SELECT * FROM solicitudes_prestamo ORDER BY id DESC LIMIT 200');
  res.json(rows);
});

// Listar por cliente
router.get('/cliente/:clienteId', authGuard, async (req, res) => {
  const clienteId = Number(req.params.clienteId);
  const [rows] = await pool.query(
    'SELECT * FROM solicitudes_prestamo WHERE cliente_id = ? ORDER BY id DESC',
    [clienteId]
  );
  res.json(rows);
});

// Detalle
router.get('/:id', authGuard, async (req, res) => {
  const id = Number(req.params.id);
  const [[row]]: any = await pool.query('SELECT * FROM solicitudes_prestamo WHERE id = ?', [id]);
  if (!row) return res.status(404).json({ message: 'Solicitud no encontrada' });
  res.json(row);
});

// Crear solicitud de préstamo
router.post('/', authGuard, async (req, res) => {
  const { cliente_id, monto, plazo_meses } = req.body || {};
  if (!cliente_id || !monto || !plazo_meses) {
    return res.status(400).json({ message: 'Datos requeridos: cliente_id, monto, plazo_meses' });
  }

  // Obtener cliente para correo y validaciones básicas
  const [[cliente]]: any = await pool.query('SELECT * FROM clientes WHERE id = ?', [cliente_id]);
  if (!cliente) return res.status(404).json({ message: 'Cliente no encontrado' });

  const montoNum = Number(monto);
  const plazoNum = Number(plazo_meses);
  const totalBase = calcularTotalBase(montoNum, plazoNum);
  const fechaVenc = calcularFechaVencimiento(plazoNum);

  const [result] = await pool.execute(
    `INSERT INTO solicitudes_prestamo 
     (cliente_id, monto, plazo_meses, tasa_mensual, penalizacion_diaria, estatus, total_base, fecha_vencimiento)
     VALUES (?,?,?,?,?,?,?,?)`,
    [
      cliente_id,
      montoNum,
      plazoNum,
      BASE_MONTHLY_RATE,
      PENALTY_DAILY_RATE,
      'EN_REVISION',
      totalBase,
      fechaVenc
    ]
  );

  const id = (result as any).insertId as number;

  // Notificar por correo (si SMTP configurado)
  try {
    await enviarNotificacionSolicitudPrestamo({
      emailCliente: cliente.email,
      nombreCliente: `${cliente.nombres} ${cliente.apellido_paterno || ''} ${cliente.apellido_materno || ''}`.trim(),
      monto: montoNum,
      plazoMeses: plazoNum,
      totalBase
    });
  } catch (_) {
    // no bloquear por email
  }

  res.status(201).json({ id });
});

// Cambiar estatus (APROBADO | RECHAZADO | EN_REVISION)
router.put('/:id/estatus', authGuard, async (req, res) => {
  const id = Number(req.params.id);
  const { estatus } = req.body || {};
  const nuevo = String(estatus || 'EN_REVISION').toUpperCase();
  await pool.execute('UPDATE solicitudes_prestamo SET estatus = ? WHERE id = ?', [nuevo, id]);
  res.json({ ok: true });
});

export default router;