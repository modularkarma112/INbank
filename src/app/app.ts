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

  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  get isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  async onLogin() {
    if (!this.username || !this.password) {
      alert('Por favor, completa todos los campos');
      return;
    }
    try {
      await this.authService.loginApi(this.username, this.password);
      this.username = '';
      this.password = '';
    } catch (e: any) {
      alert(e?.message || 'Credenciales inválidas');
    }
  }

  onLogout() {
    this.authService.logout();
    this.username = '';
    this.password = '';
  }
}
