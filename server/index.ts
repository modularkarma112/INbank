import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import authRoutes from './auth';
import clientesRoutes from './clientes';
import tiposCuentaRoutes from './tiposCuenta';
import cuentasRoutes from './cuentas';
import prestamosRoutes from './prestamos';
// import solicitudesPrestamoRoutes from './solicitudesPrestamo';
import usuariosRoutes from './usuarios';
import transferenciasRoutes from './transferencias';
import transaccionesRoutes from './transacciones';
import metricsRoutes from './metrics';
import cobranzasRoutes from './cobranzas';
import { pingDb } from './db';
import estadoCuentaRoutes from './estadoCuenta';
import cron from 'node-cron';
import { enviarEstadoCuenta, generateEstadoCuentaPdf } from './mailer';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/health', async (_req, res) => {
  try {
    await pingDb();
    res.json({ status: 'ok' });
  } catch (e: any) {
    res.status(500).json({ status: 'db_error', error: e?.message });
  }
});

app.use('/api/auth', authRoutes);
app.use('/api/clientes', clientesRoutes);
app.use('/api/tipos-cuenta', tiposCuentaRoutes);
app.use('/api/cuentas', cuentasRoutes);
app.use('/api/prestamos', prestamosRoutes);
// app.use('/api/solicitudes-prestamo', solicitudesPrestamoRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/transferencias', transferenciasRoutes);
app.use('/api/transacciones', transaccionesRoutes);
app.use('/api/metrics', metricsRoutes);
app.use('/api/cobranzas', cobranzasRoutes);
app.use('/api/estado-cuenta', estadoCuentaRoutes);

const port = Number(process.env.PORT) || 4000;
app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});

// Scheduler: el día 1 de cada mes a las 08:00 envía el estado de cuenta del mes anterior
cron.schedule('0 8 1 * *', async () => {
  console.log('⏰ Ejecutando tarea mensual de estados de cuenta...');
  // Periodo = mes anterior
  const now = new Date();
  const y = now.getMonth() === 0 ? now.getFullYear() - 1 : now.getFullYear();
  const m = now.getMonth() === 0 ? 12 : now.getMonth(); // mes anterior en 1..12
  const desde = new Date(y, m - 1, 1, 0, 0, 0);
  const hasta = new Date(y, m, 0, 23, 59, 59);
  const etiqueta = `${desde.getFullYear()}-${String(desde.getMonth() + 1).padStart(2, '0')}`;
  try {
    // Buscar clientes con al menos una cuenta activa y email
    const [clientes]: any = await (await import('./db')).pool.query(
      `SELECT DISTINCT cl.id, cl.nombres, cl.apellido_paterno, cl.apellido_materno, cl.email
       FROM clientes cl JOIN cuentas c ON c.cliente_id = cl.id
       WHERE c.estatus = 'ACTIVA' AND COALESCE(cl.email,'') <> ''`
    );
    for (const cl of clientes) {
      try {
        const nombre = `${cl.nombres} ${cl.apellido_paterno || ''} ${cl.apellido_materno || ''}`.trim();
        // Reusar lógica del router
        const { default: router } = await import('./estadoCuenta');
        // Llamar a la función interna equivalentemente (sin exponer): replicamos consulta
        const [[clienteRow]]: any = await (await import('./db')).pool.query(
          'SELECT id, nombres, apellido_paterno, apellido_materno, email FROM clientes WHERE id = ? LIMIT 1',
          [cl.id]
        );
        if (!clienteRow) continue;
        const [cuentas]: any = await (await import('./db')).pool.query(
          'SELECT id, numero_cuenta, saldo, estatus FROM cuentas WHERE cliente_id = ? ORDER BY id',
          [cl.id]
        );
        const cuentaIds = (cuentas || []).map((c: any) => c.id);
        const movimientosPorCuenta: any = {};
        if (cuentaIds.length) {
          const placeholders = cuentaIds.map(() => '?').join(',');
          const [movs]: any = await (await import('./db')).pool.query(
            `SELECT * FROM transacciones WHERE cuenta_id IN (${placeholders}) AND fecha BETWEEN ? AND ? ORDER BY fecha ASC, id ASC`,
            [...cuentaIds, desde, hasta]
          );
          for (const mRow of movs) {
            const key = String(mRow.cuenta_id);
            (movimientosPorCuenta[key] ||= []).push({ id: mRow.id, tipo: mRow.tipo, monto: Number(mRow.monto), concepto: mRow.concepto, fecha: mRow.fecha });
          }
        }
        for (const c of cuentas) c.movimientos = movimientosPorCuenta[String(c.id)] || [];
        const [prestamos]: any = await (await import('./db')).pool.query(
          'SELECT id, tipo_prestamo, monto, plazo_meses, estatus, interes FROM prestamos WHERE cliente_id = ? ORDER BY id DESC',
          [cl.id]
        );
        for (const p of prestamos) {
          const interes = Number(p.interes || 0);
          const totalEstimado = Number(p.monto) * (1 + (interes / 100) * Number(p.plazo_meses));
          p.total_estimado = Number(totalEstimado.toFixed(2));
          p.pago_mensual_est = Number((totalEstimado / Number(p.plazo_meses || 1)).toFixed(2));
          p.saldo_pendiente_est = String(p.estatus || '').toUpperCase() === 'PAGADO' ? 0 : p.total_estimado;
        }
        const payload = {
          cliente: { id: cl.id, nombre, email: cl.email },
          periodo: { desde: desde.toISOString(), hasta: hasta.toISOString() },
          cuentas,
          prestamos,
          etiqueta
        };
        const pdf = await generateEstadoCuentaPdf(payload as any);
        await enviarEstadoCuenta({ emailCliente: cl.email, nombreCliente: nombre, periodoEtiqueta: etiqueta, comprobantePdf: pdf });
      } catch (err: any) {
        console.error('Error enviando estado de cuenta a cliente', cl?.id, err?.message || err);
      }
    }
  } catch (err: any) {
    console.error('Error ejecutando tarea de estados de cuenta:', err?.message || err);
  }
});
