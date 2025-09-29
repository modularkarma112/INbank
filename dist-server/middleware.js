"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authGuard = authGuard;
const tslib_1 = require("tslib");
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
function authGuard(req, res, next) {
    const header = req.headers['authorization'];
    const token = header?.startsWith('Bearer ') ? header.slice(7) : undefined;
    if (!token)
        return res.status(401).json({ message: 'No autenticado' });
    try {
        const payload = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || 'secret');
        req.user = payload;
        next();
    }
    catch {
        res.status(401).json({ message: 'Token inválido o expirado' });
    }
}
//# sourceMappingURL=middleware.js.map