"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("./db");
const middleware_1 = require("./middleware");
const router = (0, express_1.Router)();
function rangoFechas(query) {
    const { periodo, desde, hasta } = query || {};
    const hoy = new Date();
    let d = null;
    let h = null;
    if (periodo === 'hoy') {
        d = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate(), 0, 0, 0);
        h = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate(), 23, 59, 59);
    }
    else if (periodo === 'semana') {
        const day = hoy.getDay(); // 0=dom
        const diff = (day === 0 ? -6 : 1 - day); // lunes
        const base = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());
        d = new Date(base);
        d.setDate(base.getDate() + diff);
        h = new Date(d);
        h.setDate(d.getDate() + 6);
        h.setHours(23, 59, 59, 999);
    }
    else if (periodo === 'mes') {
        d = new Date(hoy.getFullYear(), hoy.getMonth(), 1, 0, 0, 0);
        h = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0, 23, 59, 59);
    }
    else if (periodo && /\d{4}-\d{2}$/.test(periodo)) {
        const [y, m] = String(periodo).split('-').map(Number);
        d = new Date(y, m - 1, 1, 0, 0, 0);
        h = new Date(y, m, 0, 23, 59, 59);
    }
    else if (desde || hasta) {
        if (desde)
            d = new Date(desde);
        if (hasta)
            h = new Date(hasta);
    }
    return { desde: d, hasta: h };
}
router.get('/', middleware_1.authGuard, async (req, res) => {
    const { tipo, cliente, clienteId, numero, page = '1', limit = '50', sort = 'fecha', order = 'desc' } = req.query;
    const { desde, hasta } = rangoFechas(req.query);
    const params = [];
    const where = [];
    if (tipo) {
        where.push('t.tipo = ?');
        params.push(tipo);
    }
    if (numero) {
        where.push('c.numero_cuenta LIKE ?');
        params.push(`%${numero}%`);
    }
    if (clienteId && Number(clienteId)) {
        where.push('cl.id = ?');
        params.push(Number(clienteId));
    }
    if (cliente) {
        where.push('(cl.nombres LIKE ? OR cl.apellido_paterno LIKE ? OR cl.apellido_materno LIKE ? OR CONCAT(cl.nombres, " ", cl.apellido_paterno, " ", cl.apellido_materno) LIKE ?)');
        for (let i = 0; i < 4; i++)
            params.push(`%${cliente}%`);
    }
    if (desde) {
        where.push('t.fecha >= ?');
        params.push(desde);
    }
    if (hasta) {
        where.push('t.fecha <= ?');
        params.push(hasta);
    }
    const whereSql = where.length ? 'WHERE ' + where.join(' AND ') : '';
    const pg = Math.max(1, parseInt(String(page), 10) || 1);
    const lim = Math.min(200, Math.max(1, parseInt(String(limit), 10) || 50));
    const off = (pg - 1) * lim;
    const sortCol = ['fecha', 'monto', 'tipo', 'id', 'numero_cuenta'].includes(String(sort)) ? String(sort) : 'fecha';
    const ord = String(order).toLowerCase() === 'asc' ? 'ASC' : 'DESC';
    try {
        const [rows] = await db_1.pool.query(`SELECT t.id, t.fecha, t.tipo, t.monto, t.concepto,
              c.id AS cuenta_id, c.numero_cuenta,
              cl.id AS cliente_id, CONCAT(cl.nombres, ' ', COALESCE(cl.apellido_paterno,''), ' ', COALESCE(cl.apellido_materno,'')) AS cliente_nombre
       FROM transacciones t
       JOIN cuentas c ON t.cuenta_id = c.id
       JOIN clientes cl ON c.cliente_id = cl.id
       ${whereSql}
       ORDER BY ${sortCol} ${ord}
       LIMIT ? OFFSET ?`, [...params, lim, off]);
        const [[{ total }]] = await db_1.pool.query(`SELECT COUNT(*) AS total
       FROM transacciones t
       JOIN cuentas c ON t.cuenta_id = c.id
       JOIN clientes cl ON c.cliente_id = cl.id
       ${whereSql}`, params);
        res.json({ rows, page: pg, pageSize: lim, total });
    }
    catch (e) {
        res.status(500).json({ message: 'Error obteniendo transacciones' });
    }
});
exports.default = router;
//# sourceMappingURL=transacciones.js.map