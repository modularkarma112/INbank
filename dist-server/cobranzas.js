"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("./db");
const middleware_1 = require("./middleware");
const mailer_1 = require("./mailer");
const router = (0, express_1.Router)();
function addMonths(date, months) {
    const d = new Date(date.getTime());
    d.setMonth(d.getMonth() + months);
    return d;
}
function periodDates(today = new Date()) {
    const corte = new Date(today.getFullYear(), today.getMonth(), 1, 0, 0, 0, 0);
    const vencimiento = new Date(today.getFullYear(), today.getMonth(), 20, 23, 59, 59, 999);
    return { corte, vencimiento };
}
let pagosTableReady = false;
async function ensurePagosTable() {
    if (pagosTableReady)
        return;
    await db_1.pool.query(`
    CREATE TABLE IF NOT EXISTS pagos_prestamo (
      id INT AUTO_INCREMENT PRIMARY KEY,
      prestamo_id INT NOT NULL,
      monto DECIMAL(18,2) NOT NULL,
      fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      periodo_yyyymm INT NOT NULL,
      KEY idx_pagos_periodo (prestamo_id, periodo_yyyymm),
      CONSTRAINT fk_pagos_prestamo FOREIGN KEY (prestamo_id) REFERENCES prestamos(id) ON DELETE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);
    pagosTableReady = true;
}
function currentPeriodKey(d = new Date()) {
    const y = d.getFullYear();
    const m = d.getMonth() + 1;
    return y * 100 + m; // 202511
}
router.get('/aprobados', middleware_1.authGuard, async (_req, res) => {
    await ensurePagosTable();
    // Intentar seleccionar creado_en; si no existe, caemos a la consulta sin ese campo
    const baseSelect = 'SELECT p.id, p.cliente_id, p.tipo_prestamo, p.monto, p.plazo_meses, p.estatus, p.interes, p.interes_penalizacion, c.nombres, c.apellido_paterno, c.apellido_materno';
    try {
        const [rows] = await db_1.pool.query(baseSelect + ', p.creado_en FROM prestamos p INNER JOIN clientes c ON c.id = p.cliente_id WHERE p.estatus = "APROBADO" ORDER BY p.id DESC LIMIT 500');
        const enriched = await attachPagosPeriodo(rows.map(enrichCobranzaRow));
        return res.json(enriched);
    }
    catch (e) {
        if (!/Unknown column 'creado_en'/.test(e?.message || '')) {
            console.error('Error en /api/cobranzas/aprobados:', e?.message || e);
        }
        const [rows] = await db_1.pool.query(baseSelect + ' FROM prestamos p INNER JOIN clientes c ON c.id = p.cliente_id WHERE p.estatus = "APROBADO" ORDER BY p.id DESC LIMIT 500');
        const enriched = await attachPagosPeriodo(rows.map(enrichCobranzaRow));
        return res.json(enriched);
    }
});
function enrichCobranzaRow(r) {
    const interes = Number(r.interes || 0);
    const pena = Number(r.interes_penalizacion || 0);
    const plazo = Number(r.plazo_meses || 0);
    const monto = Number(r.monto || 0);
    const totalBase = monto * (1 + (interes / 100) * plazo);
    const creado = r.creado_en ? new Date(r.creado_en) : undefined;
    const vencimiento = creado ? addMonths(creado, plazo) : undefined;
    const hoy = new Date();
    // Política: corte el 1 de mes y vencimiento el 20 de mes. Mora aplica del 21 en adelante.
    const { corte, vencimiento: dueThisMonth } = periodDates(hoy);
    const cuotaMensual = plazo > 0 ? totalBase / plazo : totalBase;
    const diffMs = hoy.getTime() - dueThisMonth.getTime();
    const diasVencidos = Math.max(Math.floor(diffMs / (1000 * 60 * 60 * 24)), 0);
    const estadoPago = hoy > dueThisMonth ? 'VENCIDO' : 'AL_DIA';
    const totalConMoraPeriodo = estadoPago === 'VENCIDO' ? cuotaMensual * (1 + (pena / 100) * diasVencidos) : cuotaMensual;
    return {
        ...r,
        nombre_cliente: `${r.nombres} ${r.apellido_paterno || ''} ${r.apellido_materno || ''}`.trim(),
        total_base: Number(totalBase.toFixed(2)),
        cuota_mensual: Number(cuotaMensual.toFixed(2)),
        fecha_aprobacion: r.creado_en || null,
        fecha_corte: corte.toISOString(),
        fecha_vencimiento: dueThisMonth.toISOString(),
        dias_vencidos: diasVencidos,
        total_con_mora: Number(totalConMoraPeriodo.toFixed(2)),
        estado_pago: estadoPago
    };
}
async function attachPagosPeriodo(items) {
    const period = currentPeriodKey(new Date());
    const ids = items.map(x => x.id);
    if (!ids.length)
        return items;
    const [pRows] = await db_1.pool.query('SELECT prestamo_id, COALESCE(SUM(monto),0) AS pagado FROM pagos_prestamo WHERE periodo_yyyymm = ? AND prestamo_id IN (?) GROUP BY prestamo_id', [period, ids]);
    const map = {};
    for (const r of pRows || [])
        map[String(r.prestamo_id)] = Number(r.pagado || 0);
    for (const it of items) {
        const pagado = map[String(it.id)] || 0;
        const saldo = Math.max((Number(it.cuota_mensual || 0) - pagado), 0);
        const isPagado = saldo <= 0.009; // tolerancia de centavos
        it.pagado_periodo = Number(pagado.toFixed(2));
        it.saldo_periodo = Number(saldo.toFixed(2));
        if (isPagado)
            it.estado_pago = 'PAGADO';
    }
    return items;
}
router.post('/pago', middleware_1.authGuard, async (req, res) => {
    await ensurePagosTable();
    const { prestamo_id, monto } = req.body || {};
    const pid = Number(prestamo_id);
    const amount = Number(monto);
    if (!pid || !(amount > 0))
        return res.status(400).json({ message: 'Datos inválidos' });
    const period = currentPeriodKey(new Date());
    await db_1.pool.execute('INSERT INTO pagos_prestamo (prestamo_id, monto, periodo_yyyymm) VALUES (?, ?, ?)', [pid, amount, period]);
    // Obtener datos para el email
    const [[row]] = await db_1.pool.query('SELECT p.id, p.cliente_id, p.plazo_meses, p.monto, p.interes, c.nombres, c.apellido_paterno, c.apellido_materno, c.email FROM prestamos p INNER JOIN clientes c ON c.id = p.cliente_id WHERE p.id = ? LIMIT 1', [pid]);
    if (row?.email) {
        const interes = Number(row.interes || 0);
        const totalBase = Number(row.monto || 0) * (1 + (interes / 100) * Number(row.plazo_meses || 0));
        const cuota = Number((totalBase / Number(row.plazo_meses || 1)).toFixed(2));
        // saldo restante del periodo (aproximado) = cuota - pagos del periodo
        const [[pg]] = await db_1.pool.query('SELECT COALESCE(SUM(monto),0) AS pagado FROM pagos_prestamo WHERE prestamo_id = ? AND periodo_yyyymm = ?', [pid, period]);
        const saldo = Math.max(cuota - Number(pg?.pagado || 0), 0);
        (0, mailer_1.enviarNotificacionPagoPrestamo)({
            emailCliente: row.email,
            nombreCliente: `${row.nombres} ${row.apellido_paterno || ''} ${row.apellido_materno || ''}`.trim(),
            monto: amount,
            prestamoId: pid,
            periodo: String(period),
            saldoPeriodo: saldo
        }).catch(() => { });
    }
    res.json({ ok: true });
});
exports.default = router;
//# sourceMappingURL=cobranzas.js.map