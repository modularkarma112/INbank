import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  // Estado de autenticación
  isLoggedIn = signal(false);
  currentUser = signal('');

  constructor(private router: Router) {}

  // Método para iniciar sesión
  login(username: string, password: string): boolean {
    if (username && password) {
      this.isLoggedIn.set(true);
      this.currentUser.set(username);
      this.router.navigate(['/dashboard']);
      console.log(`Bienvenido ${username}! Redirigiendo al dashboard...`);
      return true;
    }
    return false;
  }

  // Método para cerrar sesión
  logout(): void {
    this.isLoggedIn.set(false);
    this.currentUser.set('');
    this.router.navigate(['/']);
    console.log('Sesión cerrada exitosamente');
  }

  // Método para verificar si está logueado
  isAuthenticated(): boolean {
    return this.isLoggedIn();
  }
}