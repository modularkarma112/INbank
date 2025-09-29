import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AuthRequest extends Request {
  user?: { sub: number; rol: string; usuario: string };
}

export function authGuard(req: AuthRequest, res: Response, next: NextFunction) {
  const header = req.headers['authorization'];
  const token = header?.startsWith('Bearer ') ? header.slice(7) : undefined;
  if (!token) return res.status(401).json({ message: 'No autenticado' });
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || 'secret') as any;
    req.user = payload;
    next();
  } catch {
    res.status(401).json({ message: 'Token inválido o expirado' });
  }
}
