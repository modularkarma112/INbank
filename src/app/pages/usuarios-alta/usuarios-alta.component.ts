import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuarios-alta',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './usuarios-alta.component.html',
  styleUrl: './usuarios-alta.component.css'
})
export class UsuariosAltaComponent {
  form = this.fb.group({
    usuario: ['', [Validators.required, Validators.minLength(3)]],
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    apellido_paterno: [''],
    apellido_materno: [''],
    correo: ['', [Validators.required, Validators.email]],
    contrasena: ['', [Validators.required, Validators.minLength(6)]],
    curp: [''],
    direccion: [''],
    telefono: ['', [Validators.pattern(/^\d{10}$/)]],
    rol: ['GERENTE', Validators.required]
  });

  isSubmitting = signal(false);
  roles = ['GERENTE', 'CAJERO', 'EJECUTIVO', 'ADMIN'];

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

  get api() { return (window as any).API_BASE || ''; }

  submit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.isSubmitting.set(true);
    this.http.post(`${this.api}/api/usuarios`, this.form.value).subscribe({
      next: () => {
        alert('Usuario creado correctamente');
        this.isSubmitting.set(false);
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.isSubmitting.set(false);
        if (err.status === 409 && err.error?.fields) {
          const f = err.error.fields;
          const msg = [ f.usuario ? 'usuario' : null, f.correo ? 'correo' : null ].filter(Boolean).join(' y ');
          alert(`Ya existe un ${msg} registrado`);
        } else {
          alert('Error al crear usuario');
        }
      }
    });
  }
}
