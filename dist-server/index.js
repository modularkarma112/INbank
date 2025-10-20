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
const usuarios_1 = tslib_1.__importDefault(require("./usuarios"));
const transferencias_1 = tslib_1.__importDefault(require("./transferencias"));
const db_1 = require("./db");
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
app.use('/api/usuarios', usuarios_1.default);
app.use('/api/transferencias', transferencias_1.default);
const port = Number(process.env.PORT) || 4000;
app.listen(port, () => {
    console.log(`API escuchando en http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map