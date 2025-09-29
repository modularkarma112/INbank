"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("./db");
const middleware_1 = require("./middleware");
const router = (0, express_1.Router)();
router.get('/existe', middleware_1.authGuard, async (req, res) => {
    const { rfc, curp, email, telefono } = req.query;
    const fields = { rfc: false, curp: false, email: false, telefono: false };
    let exists = false;
    if (rfc) {
        const [rows] = await db_1.pool.query('SELECT 1 FROM clientes WHERE rfc = ? LIMIT 1', [rfc]);
        fields.rfc = rows.length > 0;
        exists = exists || fields.rfc;
    }
    if (curp) {
        const [rows] = await db_1.pool.query('SELECT 1 FROM clientes WHERE curp = ? LIMIT 1', [curp]);
        fields.curp = rows.length > 0;
        exists = exists || fields.curp;
    }
    if (email) {
        const [rows] = await db_1.pool.query('SELECT 1 FROM clientes WHERE email = ? LIMIT 1', [email]);
        fields.email = rows.length > 0;
        exists = exists || fields.email;
    }
    if (telefono) {
        const [rows] = await db_1.pool.query('SELECT 1 FROM clientes WHERE telefono = ? LIMIT 1', [telefono]);
        fields.telefono = rows.length > 0;
        exists = exists || fields.telefono;
    }
    res.json({ exists, fields });
});
router.get('/', middleware_1.authGuard, async (_req, res) => {
    const [rows] = await db_1.pool.query('SELECT * FROM clientes LIMIT 100');
    res.json(rows);
});
router.get('/buscar', middleware_1.authGuard, async (req, res) => {
    const { rfc, curp, email, telefono, id } = req.query;
    let where = '1=1';
    const params = [];
    if (id) {
        where += ' AND id = ?';
        params.push(Number(id));
    }
    if (rfc) {
        where += ' AND rfc = ?';
        params.push(rfc);
    }
    if (curp) {
        where += ' AND curp = ?';
        params.push(curp);
    }
    if (email) {
        where += ' AND email = ?';
        params.push(email);
    }
    if (telefono) {
        where += ' AND telefono = ?';
        params.push(telefono);
    }
    const [rows] = await db_1.pool.query(`SELECT * FROM clientes WHERE ${where} LIMIT 50`, params);
    res.json(rows);
});
router.post('/', middleware_1.authGuard, async (req, res) => {
    const c = req.body;
    const [result] = await db_1.pool.execute(`INSERT INTO clientes (nombres, apellido_paterno, apellido_materno, rfc, curp, email, telefono, estado, ciudad, direccion, ingresos_mensuales)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [c.nombres, c.apellido_paterno, c.apellido_materno, c.rfc, c.curp, c.email, c.telefono, c.estado, c.ciudad, c.direccion, c.ingresos_mensuales]);
    res.status(201).json({ id: result.insertId });
});
exports.default = router;
//# sourceMappingURL=clientes.js.map