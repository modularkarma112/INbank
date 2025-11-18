import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prestamos-solicitud',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prestamos-solicitud.component.html',
  styleUrl: './prestamos-solicitud.component.css'
})
export class PrestamosSolicitudComponent {

  constructor(private router: Router, private http: HttpClient) {}

  // Búsqueda y selección de cliente
  buscar = { id: '', rfc: '', curp: '', email: '', telefono: '' };
  resultados: any[] = [];
  seleccion: any | null = null;
  buscarNombreLibre: string = '';

  // Datos del préstamo
  tipo: string = '';
  monto: number | null = null;
  plazoMeses: number | null = null;

  // Reglas del negocio (coherentes con el ejemplo dado)
  readonly tasaMensual = 0.033333; // 3.333%
  readonly penalizacionDiaria = 0.004; // 0.4%

  get totalBase(): number {
    if (!this.monto || !this.plazoMeses) return 0;
    const t = this.monto * (1 + this.tasaMensual * this.plazoMeses);
    return Math.round(t * 100) / 100;
  }

  get cuotaMensual(): number {
    if (!this.plazoMeses) return 0;
    return Math.round((this.totalBase / this.plazoMeses) * 100) / 100;
  }

  ejemploTotalCon30DiasMora(): number {
    if (!this.monto || !this.plazoMeses) return 0;
    const t = this.totalBase + this.monto * this.penalizacionDiaria * 30; // ~+12% del principal
    return Math.round(t * 100) / 100;
  }

  goBack() { this.router.navigate(['/dashboard']); }
  onCancel() { this.goBack(); }

  // Buscar cliente
  buscarCliente() {
    const params: any = {};
    for (const k of Object.keys(this.buscar) as (keyof typeof this.buscar)[]) {
      const v = this.buscar[k]; if (v) params[k] = v;
    }
    // Permitir búsqueda libre con q (nombre, email, etc.) si no se especificó campo específico
    if (Object.keys(params).length === 0 && this.buscarNombreLibre?.trim()) {
      params.q = this.buscarNombreLibre.trim();
    }
    if (!Object.keys(params).length) { alert('Ingrese al menos un criterio'); return; }
    this.http.get<any[]>('/api/clientes/buscar', { params }).subscribe({
      next: rows => {
        this.resultados = rows || [];
        this.seleccion = this.resultados.length === 1 ? this.resultados[0] : null;
      },
      error: err => { console.error(err); alert('Error buscando cliente'); }
    });
  }

  seleccionarCliente(c: any) { this.seleccion = c; }

  // Enviar solicitud
  onSubmit() {
    if (!this.seleccion?.id) { alert('Seleccione un cliente'); return; }
    if (!this.tipo) { alert('Seleccione tipo de préstamo'); return; }
    if (!this.monto || !this.plazoMeses) { alert('Capture monto y plazo'); return; }

    const payload = {
      cliente_id: this.seleccion.id,
      tipo_prestamo: this.tipo,
      monto: this.monto,
      plazo_meses: this.plazoMeses
    };

    this.http.post<{ id: number }>("/api/prestamos", payload).subscribe({
      next: r => {
        const id = r?.id;
        alert(`Solicitud #${id} enviada y en revisión. Se notificó por correo si está configurado.`);
        this.router.navigate(['/clientes', this.seleccion.id]);
      },
      error: err => {
        console.error(err);
        alert(err?.error?.message || 'No se pudo crear la solicitud');
      }
    });
  }
}