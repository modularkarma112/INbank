"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
exports.pingDb = pingDb;
const tslib_1 = require("tslib");
const promise_1 = tslib_1.__importDefault(require("mysql2/promise"));
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
dotenv_1.default.config();
exports.pool = promise_1.default.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
async function pingDb() {
    const conn = await exports.pool.getConnection();
    try {
        await conn.ping();
    }
    finally {
        conn.release();
    }
}
