"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const bcryptjs_1 = tslib_1.__importDefault(require("bcryptjs"));
const db_1 = require("./db");
const router = (0, express_1.Router)();
router.post('/login', async (req, res) => {
    const raw = req.body;
    const usuario = raw.usuario?.trim();
    const contrasena = raw.contrasena || '';
    if (!usuario || !contrasena)
        return res.status(400).json({ message: 'Credenciales requeridas' });
    try {
        const [rows] = await db_1.pool.query('SELECT id, usuario, nombre, correo, contrasena, rol FROM usuarios WHERE usuario = ? LIMIT 1', [usuario]);
        const list = rows;
        if (!list.length)
            return res.status(401).json({ message: 'Usuario o contraseña inválidos' });
        const user = list[0];
        const ok = await bcryptjs_1.default.compare(contrasena, user.contrasena);
        if (!ok)
            return res.status(401).json({ message: 'Usuario o contraseña inválidos' });
        const secret = (process.env.JWT_SECRET || 'secret');
        const options = { expiresIn: (process.env.JWT_EXPIRES_IN || '2h') };
        const token = jsonwebtoken_1.default.sign({ sub: user.id, rol: user.rol, usuario: user.usuario }, secret, options);
        return res.json({
            token,
            user: { id: user.id, usuario: user.usuario, nombre: user.nombre, correo: user.correo, rol: user.rol }
        });
    }
    catch (err) {
        console.error('Error en /api/auth/login', err);
        return res.status(500).json({ message: 'Error al iniciar sesión' });
    }
});
exports.default = router;
//# sourceMappingURL=auth.js.map