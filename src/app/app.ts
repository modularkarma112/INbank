import { Component, signal } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('INBANK');

  // Propiedades para el formulario de login
  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  // Getter para el estado de login
  get isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  // Método para manejar el login
  onLogin() {
    if (this.username && this.password) {
      console.log('Login attempt:', {
        username: this.username,
        password: this.password
      });
      
      // Usar el servicio de autenticación
      const success = this.authService.login(this.username, this.password);
      
      if (success) {
        // Limpiar formulario después del login exitoso
        this.username = '';
        this.password = '';
      }
    } else {
      alert('Por favor, completa todos los campos');
    }
  }

  // Método para cerrar sesión (usado desde el dashboard)
  onLogout() {
    this.authService.logout();
    // Limpiar formulario
    this.username = '';
    this.password = '';
  }
}
