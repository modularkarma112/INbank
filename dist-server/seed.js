"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const db_1 = require("./db");
const bcryptjs_1 = tslib_1.__importDefault(require("bcryptjs"));
async function seed() {
    const password = await bcryptjs_1.default.hash('admin123', 10);
    const [rows] = await db_1.pool.query('SELECT id FROM usuarios WHERE usuario = ? LIMIT 1', ['admin']);
    const list = rows;
    if (!list.length) {
        await db_1.pool.execute(`INSERT INTO usuarios (usuario, nombre, correo, contrasena, rol)
       VALUES (?, ?, ?, ?, ?)`, ['admin', 'Administrador', 'admin@inbank.local', password, 'ADMIN']);
    }
    console.log('Usuario admin listo. usuario=admin, pass=admin123');
    process.exit(0);
}
seed().catch((e) => { console.error(e); process.exit(1); });
//# sourceMappingURL=seed.js.map