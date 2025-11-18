import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  filtros: FormGroup;
  cargando = signal(false);
  clientes: any[] = [];
  errorMsg = signal('');

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.filtros = this.fb.group({
      id: [''],
      rfc: [''],
      curp: [''],
      nombre: ['']
    });
    this.buscar();
  }

  private baseUrl() {
    return (window as any)["API_BASE"] || 'http://localhost:4000';
  }

  buscar() {
    this.errorMsg.set('');
    const { id, rfc, curp, nombre } = this.filtros.value || {};
    const base = this.baseUrl();
    this.cargando.set(true);
    // Si hay filtros exactos, usar /buscar; si no, traer listado y filtrar por nombre
    if (id || rfc || curp) {
      const params: any = {};
      if (id) params.id = id;
      if (rfc) params.rfc = rfc;
      if (curp) params.curp = curp;
      this.http.get(`${base}/api/clientes/buscar`, { params }).subscribe({
        next: (rows: any) => {
          let data = Array.isArray(rows) ? rows : [];
          if (nombre) data = this.filtrarPorNombre(data, nombre);
          this.clientes = data;
          this.cargando.set(false);
        },
        error: (err) => {
          console.error(err);
          this.errorMsg.set('Error al buscar clientes');
          this.cargando.set(false);
        }
      });
    } else {
      this.http.get(`${base}/api/clientes`).subscribe({
        next: (rows: any) => {
          let data = Array.isArray(rows) ? rows : [];
          if (nombre) data = this.filtrarPorNombre(data, nombre);
          this.clientes = data;
          this.cargando.set(false);
        },
        error: (err) => {
          console.error(err);
          this.errorMsg.set('Error al cargar clientes');
          this.cargando.set(false);
        }
      });
    }
  }

  limpiar() {
    this.filtros.reset({ id: '', rfc: '', curp: '', nombre: '' });
    this.buscar();
  }

  crearCliente() {
    // Reutilizamos la pantalla de apertura (crea cliente + cuenta)
    this.router.navigate(['/abrir-cuenta']);
  }

  private filtrarPorNombre(rows: any[], nombre: string) {
    const n = String(nombre).trim().toLowerCase();
    if (!n) return rows;
    return rows.filter(r =>
      `${r.nombres || ''} ${r.apellido_paterno || ''} ${r.apellido_materno || ''}`
        .toLowerCase()
        .includes(n)
    );
  }

  generarReporteCliente(c: any) {
    const base = this.baseUrl();
    const defaultPeriodo = this.periodoActual();
    const periodo = (window.prompt('Periodo (YYYY-MM) para el reporte', defaultPeriodo) || '').trim();
    if (!periodo) { return; }
    if (!/^\d{4}-\d{2}$/.test(periodo)) { alert('Periodo inválido. Usa el formato YYYY-MM.'); return; }
    this.cargando.set(true);
    this.http.post(`${base}/api/estado-cuenta/${c.id}/generar`, null, { params: { periodo } }).subscribe({
      next: (resp: any) => { 
        this.cargando.set(false); 
        if (resp?.html) {
          const w = window.open('', '_blank');
          if (w) {
            w.document.open();
            w.document.write(resp.html);
            w.document.close();
          }
        }
        alert(`Reporte generado (HTML abierto) y enviado a ${c.email || 'correo del cliente'}`); 
      },
      error: (err) => { console.error(err); this.cargando.set(false); alert('No se pudo generar/enviar el reporte'); }
    });
  }

  private periodoActual() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;
  }
}
