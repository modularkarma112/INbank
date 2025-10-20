import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import authRoutes from './auth';
import clientesRoutes from './clientes';
import tiposCuentaRoutes from './tiposCuenta';
import cuentasRoutes from './cuentas';
import prestamosRoutes from './prestamos';
import usuariosRoutes from './usuarios';
import transferenciasRoutes from './transferencias';
import { pingDb } from './db';

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
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/transferencias', transferenciasRoutes);

const port = Number(process.env.PORT) || 4000;
app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
