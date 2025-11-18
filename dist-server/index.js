"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const morgan_1 = tslib_1.__importDefault(require("morgan"));
const auth_1 = tslib_1.__importDefault(require("./auth"));
const clientes_1 = tslib_1.__importDefault(require("./clientes"));
const tiposCuenta_1 = tslib_1.__importDefault(require("./tiposCuenta"));
const cuentas_1 = tslib_1.__importDefault(require("./cuentas"));
const prestamos_1 = tslib_1.__importDefault(require("./prestamos"));
// import solicitudesPrestamoRoutes from './solicitudesPrestamo';
const usuarios_1 = tslib_1.__importDefault(require("./usuarios"));
const transferencias_1 = tslib_1.__importDefault(require("./transferencias"));
const transacciones_1 = tslib_1.__importDefault(require("./transacciones"));
const metrics_1 = tslib_1.__importDefault(require("./metrics"));
const cobranzas_1 = tslib_1.__importDefault(require("./cobranzas"));
const db_1 = require("./db");
const estadoCuenta_1 = tslib_1.__importDefault(require("./estadoCuenta"));
const node_cron_1 = tslib_1.__importDefault(require("node-cron"));
const mailer_1 = require("./mailer");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
app.get('/health', async (_req, res) => {
    try {
        await (0, db_1.pingDb)();
        res.json({ status: 'ok' });
    }
    catch (e) {
        res.status(500).json({ status: 'db_error', error: e?.message });
    }
});
app.use('/api/auth', auth_1.default);
app.use('/api/clientes', clientes_1.default);
app.use('/api/tipos-cuenta', tiposCuenta_1.default);
app.use('/api/cuentas', cuentas_1.default);
app.use('/api/prestamos', prestamos_1.default);
// app.use('/api/solicitudes-prestamo', solicitudesPrestamoRoutes);
app.use('/api/usuarios', usuarios_1.default);
app.use('/api/transferencias', transferencias_1.default);
app.use('/api/transacciones', transacciones_1.default);
app.use('/api/metrics', metrics_1.default);
app.use('/api/cobranzas', cobranzas_1.default);
app.use('/api/estado-cuenta', estadoCuenta_1.default);
const port = Number(process.env.PORT) || 4000;
app.listen(port, () => {
    console.log(`API escuchando en http://localhost:${port}`);
});
// Scheduler: el día 1 de cada mes a las 08:00 envía el estado de cuenta del mes anterior
node_cron_1.default.schedule('0 8 1 * *', async () => {
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
        const [clientes] = await (await Promise.resolve().then(() => tslib_1.__importStar(require('./db')))).pool.query(`SELECT DISTINCT cl.id, cl.nombres, cl.apellido_paterno, cl.apellido_materno, cl.email
       FROM clientes cl JOIN cuentas c ON c.cliente_id = cl.id
       WHERE c.estatus = 'ACTIVA' AND COALESCE(cl.email,'') <> ''`);
        for (const cl of clientes) {
            try {
                const nombre = `${cl.nombres} ${cl.apellido_paterno || ''} ${cl.apellido_materno || ''}`.trim();
                // Reusar lógica del router
                const { default: router } = await Promise.resolve().then(() => tslib_1.__importStar(require('./estadoCuenta')));
                // Llamar a la función interna equivalentemente (sin exponer): replicamos consulta
                const [[clienteRow]] = await (await Promise.resolve().then(() => tslib_1.__importStar(require('./db')))).pool.query('SELECT id, nombres, apellido_paterno, apellido_materno, email FROM clientes WHERE id = ? LIMIT 1', [cl.id]);
                if (!clienteRow)
                    continue;
                const [cuentas] = await (await Promise.resolve().then(() => tslib_1.__importStar(require('./db')))).pool.query('SELECT id, numero_cuenta, saldo, estatus FROM cuentas WHERE cliente_id = ? ORDER BY id', [cl.id]);
                const cuentaIds = (cuentas || []).map((c) => c.id);
                const movimientosPorCuenta = {};
                if (cuentaIds.length) {
                    const placeholders = cuentaIds.map(() => '?').join(',');
                    const [movs] = await (await Promise.resolve().then(() => tslib_1.__importStar(require('./db')))).pool.query(`SELECT * FROM transacciones WHERE cuenta_id IN (${placeholders}) AND fecha BETWEEN ? AND ? ORDER BY fecha ASC, id ASC`, [...cuentaIds, desde, hasta]);
                    for (const mRow of movs) {
                        const key = String(mRow.cuenta_id);
                        (movimientosPorCuenta[key] || (movimientosPorCuenta[key] = [])).push({ id: mRow.id, tipo: mRow.tipo, monto: Number(mRow.monto), concepto: mRow.concepto, fecha: mRow.fecha });
                    }
                }
                for (const c of cuentas)
                    c.movimientos = movimientosPorCuenta[String(c.id)] || [];
                const [prestamos] = await (await Promise.resolve().then(() => tslib_1.__importStar(require('./db')))).pool.query('SELECT id, tipo_prestamo, monto, plazo_meses, estatus, interes FROM prestamos WHERE cliente_id = ? ORDER BY id DESC', [cl.id]);
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
                const pdf = await (0, mailer_1.generateEstadoCuentaPdf)(payload);
                await (0, mailer_1.enviarEstadoCuenta)({ emailCliente: cl.email, nombreCliente: nombre, periodoEtiqueta: etiqueta, comprobantePdf: pdf });
            }
            catch (err) {
                console.error('Error enviando estado de cuenta a cliente', cl?.id, err?.message || err);
            }
        }
    }
    catch (err) {
        console.error('Error ejecutando tarea de estados de cuenta:', err?.message || err);
    }
});
//# sourceMappingURL=index.js.map