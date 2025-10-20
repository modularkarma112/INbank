import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  isLoggedIn = signal(false);
  currentUser = signal('');

  constructor(private router: Router, private http: HttpClient) {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (token && user) {
      this.isLoggedIn.set(true);
      this.currentUser.set(JSON.parse(user)?.usuario || '');
    }
  }


  async loginApi(usuario: string, contrasena: string): Promise<void> {
    const base = (window as any)["API_BASE"] || 'http://localhost:4000';
    try {
      const resp = await firstValueFrom(
        this.http.post<{ token: string; user: any }>(`${base}/api/auth/login`, { usuario, contrasena })
      );
      if (!resp?.token) throw new Error('Respuesta inválida del servidor');
      localStorage.setItem('token', resp.token);
      localStorage.setItem('user', JSON.stringify(resp.user));
      this.isLoggedIn.set(true);
      this.currentUser.set(resp.user?.usuario || usuario);
      this.router.navigate(['/dashboard']);
    } catch (err: any) {
      if (err instanceof HttpErrorResponse) {
        let msg = 'Error al iniciar sesión';
        if (err.status === 0) msg = 'No se pudo conectar con el servidor.';
        else if (err.status === 400) msg = 'Debes ingresar usuario y contraseña.';
        else if (err.status === 401) msg = 'Usuario o contraseña incorrectos.';
        else if (err.status >= 500) msg = 'Error interno del servidor. Inténtalo más tarde.';
        throw new Error(msg);
      }
      throw err;
    }
  }

  logout(): void {
    this.isLoggedIn.set(false);
    this.currentUser.set('');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
    console.log('Sesión cerrada');
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn() || !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}