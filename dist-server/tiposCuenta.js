"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("./db");
const middleware_1 = require("./middleware");
const router = (0, express_1.Router)();
router.get('/', middleware_1.authGuard, async (_req, res) => {
    const [rows] = await db_1.pool.query('SELECT * FROM tipos_cuenta ORDER BY id');
    res.json(rows);
});
router.post('/', middleware_1.authGuard, async (req, res) => {
    const { nombre_tipo, deposito_minimo, comision_mensual } = req.body || {};
    if (!nombre_tipo)
        return res.status(400).json({ message: 'nombre_tipo requerido' });
    const [result] = await db_1.pool.execute('INSERT INTO tipos_cuenta (nombre_tipo, deposito_minimo, comision_mensual) VALUES (?, ?, ?)', [nombre_tipo, deposito_minimo ?? 0, comision_mensual ?? 0]);
    res.status(201).json({ id: result.insertId });
});
router.put('/:id', middleware_1.authGuard, async (req, res) => {
    const id = Number(req.params.id);
    const { nombre_tipo, deposito_minimo, comision_mensual } = req.body || {};
    await db_1.pool.execute('UPDATE tipos_cuenta SET nombre_tipo = COALESCE(?, nombre_tipo), deposito_minimo = COALESCE(?, deposito_minimo), comision_mensual = COALESCE(?, comision_mensual) WHERE id = ?', [nombre_tipo ?? null, deposito_minimo ?? null, comision_mensual ?? null, id]);
    res.json({ ok: true });
});
router.delete('/:id', middleware_1.authGuard, async (req, res) => {
    const id = Number(req.params.id);
    await db_1.pool.execute('DELETE FROM tipos_cuenta WHERE id = ?', [id]);
    res.json({ ok: true });
});
exports.default = router;
//# sourceMappingURL=tiposCuenta.js.map