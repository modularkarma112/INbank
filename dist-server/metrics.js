"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("./db");
const middleware_1 = require("./middleware");
const router = (0, express_1.Router)();
router.get('/dashboard', middleware_1.authGuard, async (_req, res) => {
    // Cuentas abiertas hoy: si la columna creado_en no existe, usamos un fallback sin filtro por fecha
    let cuentasAbiertasHoy = 0;
    try {
        const [[r1]] = await db_1.pool.query(`SELECT COUNT(*) AS n FROM cuentas WHERE DATE(creado_en) = CURDATE() AND estatus = 'ACTIVA'`);
        cuentasAbiertasHoy = Number(r1?.n || 0);
    }
    catch (e) {
        // Fallback: contar activas (evita 500 por columnas diferentes en distintos esquemas)
        const [[r2]] = await db_1.pool.query(`SELECT COUNT(*) AS n FROM cuentas WHERE estatus = 'ACTIVA'`);
        cuentasAbiertasHoy = Number(r2?.n || 0);
    }
    const [[cancelacionesMes]] = await db_1.pool.query(`SELECT COUNT(*) AS n 
     FROM cancelaciones_cuentas 
     WHERE YEAR(fecha_cancelacion) = YEAR(CURDATE()) 
       AND MONTH(fecha_cancelacion) = MONTH(CURDATE())`);
    const [[creditosAprobar]] = await db_1.pool.query(`SELECT COUNT(*) AS n FROM prestamos WHERE estatus IN ('SOLICITADO','EN_REVISION')`);
    const [[montoPrestamos]] = await db_1.pool.query(`SELECT COALESCE(SUM(monto),0) AS total FROM prestamos WHERE estatus = 'APROBADO'`);
    res.json({
        cuentasAbiertasHoy,
        cancelacionesMes: Number(cancelacionesMes?.n || 0),
        creditosPorAprobar: Number(creditosAprobar?.n || 0),
        montoPrestamosAprobados: Number(montoPrestamos?.total || 0)
    });
});
exports.default = router;
//# sourceMappingURL=metrics.js.map