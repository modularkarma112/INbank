"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const db_1 = require("./db");
const middleware_1 = require("./middleware");
const bcryptjs_1 = tslib_1.__importDefault(require("bcryptjs"));
const router = (0, express_1.Router)();
// Listar usuarios (limitado)
router.get('/', middleware_1.authGuard, async (_req, res) => {
    const [rows] = await db_1.pool.query(`SELECT id, usuario, nombre, apellido_paterno, apellido_materno, correo, curp, direccion, telefono, rol FROM usuarios ORDER BY id DESC LIMIT 200`);
    res.json(rows);
});
// Crear usuario con hash de contraseña
router.post('/', middleware_1.authGuard, async (req, res) => {
    const { usuario, nombre, apellido_paterno, apellido_materno, correo, contrasena, curp, direccion, telefono, rol } = req.body || {};
    if (!usuario || !nombre || !correo || !contrasena) {
        return res.status(400).json({ message: 'usuario, nombre, correo y contrasena son requeridos' });
    }
    // Reglas básicas
    if (telefono && !/^\d{10}$/.test(String(telefono)))
        return res.status(400).json({ message: 'telefono debe tener 10 dígitos' });
    // Verificar duplicados usuario/correo
    const [dups] = await db_1.pool.query('SELECT usuario, correo FROM usuarios WHERE usuario = ? OR correo = ? LIMIT 1', [usuario, correo]);
    if (dups.length) {
        const d = dups[0];
        return res.status(409).json({ message: 'Duplicado', fields: { usuario: d.usuario === usuario, correo: d.correo === correo } });
    }
    const hash = await bcryptjs_1.default.hash(String(contrasena), 10);
    const [result] = await db_1.pool.execute(`INSERT INTO usuarios (usuario, nombre, apellido_paterno, apellido_materno, correo, contrasena, curp, direccion, telefono, rol)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [usuario, nombre, apellido_paterno ?? null, apellido_materno ?? null, correo, hash, curp ?? null, direccion ?? null, telefono ?? null, rol || 'GERENTE']);
    res.status(201).json({ id: result.insertId });
});
// Eliminar usuario por id
router.delete('/:id', middleware_1.authGuard, async (req, res) => {
    const id = Number(req.params.id);
    await db_1.pool.execute('DELETE FROM usuarios WHERE id = ?', [id]);
    res.json({ ok: true });
});
exports.default = router;
//# sourceMappingURL=usuarios.js.map