import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cliente-perfil',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './cliente-perfil.component.html',
  styleUrl: './cliente-perfil.component.css'
})
export class ClientePerfilComponent implements OnInit {
  form!: FormGroup;
  id!: number;
  cargando = signal(false);
  editMode = signal(false);
  errorMsg = signal('');
  infoMsg = signal('');
  solicitudes = signal<any[]>([]);
  aprobados = computed(() => (this.solicitudes() || []).filter(s => s?.estatus === 'APROBADO'));

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nombres: ['', Validators.required],
      apellido_paterno: [''],
      apellido_materno: [''],
      rfc: [''],
      curp: [''],
      email: [''],
      telefono: [''],
      estado: [''],
      ciudad: [''],
      direccion: [''],
      ingresos_mensuales: ['']
    });
    this.form.disable();

    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (!this.id) { this.errorMsg.set('ID inválido'); return; }
    this.cargar();
  }

  cargar(){
    this.cargando.set(true);
    this.http.get<any>(`/api/clientes/${this.id}`).subscribe({
      next: c => {
        this.form.patchValue(c || {});
        this.cargando.set(false);
        this.cargarSolicitudes();
      },
      error: err => { console.error(err); this.errorMsg.set('No se pudo cargar el cliente'); this.cargando.set(false); }
    });
  }

  private cargarSolicitudes(){
    this.http.get<any[]>(`/api/prestamos/cliente/${this.id}`).subscribe({
      next: rows => { this.solicitudes.set(rows || []); },
      error: err => { console.error('No se pudieron cargar solicitudes', err); }
    });
  }

  toggleEdit(){
    this.editMode.set(!this.editMode());
    if (this.editMode()) this.form.enable(); else this.form.disable();
  }

  guardar(){
    if (!this.editMode()) return;
    const password = prompt('Por seguridad, ingrese su contraseña:');
    if (!password) return;
    const body = { ...this.form.value, password };
    this.cargando.set(true);
    this.http.put(`/api/clientes/${this.id}`, body).subscribe({
      next: _ => { this.infoMsg.set('Cambios guardados'); this.editMode.set(false); this.form.disable(); this.cargando.set(false); },
      error: err => { console.error(err); this.errorMsg.set(err?.error?.message || 'No se pudo guardar'); this.cargando.set(false); }
    });
  }
}
