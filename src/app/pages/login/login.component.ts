import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form = this.fb.group({
    usuario: ['', Validators.required],
    contrasena: ['', Validators.required]
  });
  loading = false;
  error = '';

  constructor(private fb: FormBuilder, private auth: AuthService) {}

  async onSubmit() {
    this.error = '';
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { usuario, contrasena } = this.form.getRawValue();
    this.loading = true;
    try {
      await this.auth.loginApi(usuario!, contrasena!);
    } catch (e: any) {
      this.error = e?.message || 'Error al iniciar sesión';
    } finally {
      this.loading = false;
    }
  }
}
