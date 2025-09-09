import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('INBANK');

  // Propiedades para el formulario de login
  username: string = '';
  password: string = '';

  // Método para manejar el login
  onLogin() {
    if (this.username && this.password) {
      console.log('Login attempt:', {
        username: this.username,
        password: this.password
      });
      // Aquí puedes agregar la lógica de autenticación
      alert(`Bienvenido ${this.username}!`);
    } else {
      alert('Por favor, completa todos los campos');
    }
  }
}
