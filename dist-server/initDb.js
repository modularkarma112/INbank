"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const promise_1 = tslib_1.__importDefault(require("mysql2/promise"));
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importDefault(require("path"));
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
dotenv_1.default.config();
async function run() {
    const host = process.env.DB_HOST || '127.0.0.1';
    const port = Number(process.env.DB_PORT) || 3306;
    const user = process.env.DB_USER || 'root';
    const password = process.env.DB_PASSWORD || 'root';
    // El esquema vive en server/db/schema.sql dentro del proyecto
    const schemaPath = path_1.default.join(__dirname, 'db', 'schema.sql');
    if (!fs_1.default.existsSync(schemaPath)) {
        console.error('No se encontró schema.sql en db/');
        process.exit(1);
    }
    const sqlRaw = fs_1.default.readFileSync(schemaPath, 'utf8');
    const cleaned = sqlRaw
        .replace(/--.*$/gm, '')
        .replace(/\/\*[^]*?\*\//g, '');
    const statements = cleaned
        .split(/;\s*\n/)
        .map(s => s.trim())
        .filter(s => s.length);
    console.log('Conectando sin base de datos para crear/actualizar schema...');
    const conn = await promise_1.default.createConnection({ host, port, user, password, multipleStatements: true });
    try {
        for (const stmt of statements) {
            try {
                await conn.query(stmt);
                console.log('OK:', stmt.substring(0, 60).replace(/\s+/g, ' ') + (stmt.length > 60 ? '...' : ''));
            }
            catch (e) {
                const msg = e?.message || '';
                if (/exists|Duplicate/i.test(msg)) {
                    console.log('AVISO (ignorado):', msg);
                }
                else {
                    console.error('Error ejecutando sentencia:', stmt, '\n', e);
                    throw e;
                }
            }
        }
        console.log('Schema aplicado.');
    }
    finally {
        await conn.end();
    }
}
run().catch(e => { console.error(e); process.exit(1); });
//# sourceMappingURL=initDb.js.map