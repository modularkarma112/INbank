import { Component, signal } from '@angular/core';
import { CommonModule, CurrencyPipe, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

type Prestamo = {
	id: number;
	cliente_id: number;
	tipo_prestamo: string;
	monto: number;
	plazo_meses: number;
	estatus: 'EN_REVISION' | 'APROBADO' | 'RECHAZADO' | string;
	interes?: number; // % mensual
	interes_penalizacion?: number; // % diaria
};

@Component({
	selector: 'app-prestamos',
	standalone: true,
		imports: [CommonModule, RouterLink, CurrencyPipe, NgClass, FormsModule],
	template: `
	<div class="container mt-4">
		<div class='d-flex justify-content-between align-items-center mb-3'>
			<h2 class="m-0">Préstamos</h2>
			<a class='btn btn-secondary' routerLink='/dashboard'>Volver</a>
		</div>

		<div class="card p-3 mb-3">
			<div class="row g-2 align-items-end">
				<div class="col-auto">
					<label class="form-label">Estatus</label>
					<select class="form-select" [(ngModel)]="filtroEstatus" (change)="aplicarFiltro()">
						<option value="">Todos</option>
						<option value="EN_REVISION">En revisión</option>
						<option value="APROBADO">Aprobado</option>
						<option value="RECHAZADO">Rechazado</option>
					</select>
				</div>
				<div class="col-auto">
					<button class="btn btn-primary" (click)="cargar()" [disabled]="cargando()">Refrescar</button>
				</div>
				<div class="col" *ngIf="error()">
					<div class="alert alert-danger py-2 px-3 m-0">{{ error() }}</div>
				</div>
			</div>
		</div>

		<div class="table-responsive">
			<table class="table table-sm align-middle">
				<thead>
					<tr>
						<th>ID</th>
						<th>Cliente</th>
						<th>Tipo</th>
						<th class="text-end">Monto</th>
						<th class="text-center">Plazo</th>
						<th class="text-center">Estatus</th>
						<th class="text-end">Tasa %/mes</th>
						<th class="text-end">Mora %/día</th>
						<th class="text-end">Acciones</th>
					</tr>
				</thead>
				<tbody>
					@if(filtrados().length === 0){
						<tr>
							<td colspan="9" class="text-center text-muted py-4">Sin resultados</td>
						</tr>
					} @else {
						@for(p of filtrados(); track p.id){
							<tr>
								<td>{{ p.id }}</td>
								<td>
									<a [routerLink]="['/clientes', p.cliente_id]">#{{ p.cliente_id }}</a>
								</td>
								<td>{{ p.tipo_prestamo }}</td>
								<td class="text-end">{{ p.monto | currency:'MXN':'symbol':'1.0-0' }}</td>
								<td class="text-center">{{ p.plazo_meses }} meses</td>
								<td class="text-center">
									<span class="badge" [ngClass]="{
										'bg-secondary': p.estatus==='EN_REVISION',
										'bg-success': p.estatus==='APROBADO',
										'bg-danger': p.estatus==='RECHAZADO'
									}">{{ etiquetaEstatus(p.estatus) }}</span>
								</td>
								<td class="text-end">{{ p.interes ?? 0 }}%</td>
								<td class="text-end">{{ p.interes_penalizacion ?? 0 }}%</td>
								<td class="text-end">
									<div class="btn-group btn-group-sm" role="group">
										<button class="btn btn-outline-success" title="Aprobar" (click)="cambiarEstatus(p,'APROBADO')" [disabled]="cargando() || p.estatus!=='EN_REVISION'">Aprobar</button>
										<button class="btn btn-outline-danger" title="Rechazar" (click)="cambiarEstatus(p,'RECHAZADO')" [disabled]="cargando() || p.estatus!=='EN_REVISION'">Rechazar</button>
									</div>
								</td>
							</tr>
						}
					}
				</tbody>
			</table>
		</div>
	</div>
	`
})
export class PrestamosComponent {
	prestamos = signal<Prestamo[]>([]);
	filtrados = signal<Prestamo[]>([]);
	cargando = signal(false);
	error = signal<string|undefined>(undefined);
	filtroEstatus: '' | 'EN_REVISION' | 'APROBADO' | 'RECHAZADO' = 'EN_REVISION';

	constructor(private http: HttpClient) {}

	ngOnInit() { this.cargar(); }

	cargar() {
		this.cargando.set(true); this.error.set(undefined);
		this.http.get<Prestamo[]>('/api/prestamos').subscribe({
			next: data => { this.prestamos.set(data || []); this.aplicarFiltro(); },
			error: err => { this.error.set('Error cargando préstamos'); console.error(err); this.cargando.set(false); },
			complete: () => this.cargando.set(false)
		});
	}

	aplicarFiltro() {
		const all = this.prestamos();
		this.filtrados.set(this.filtroEstatus ? all.filter(p => p.estatus === this.filtroEstatus) : all);
	}

	etiquetaEstatus(e: string) {
		return e === 'EN_REVISION' ? 'En revisión' : e.charAt(0) + e.slice(1).toLowerCase();
	}

	cambiarEstatus(p: Prestamo, estatus: 'APROBADO'|'RECHAZADO') {
		if (!confirm(`¿Confirmas ${estatus==='APROBADO'?'aprobar':'rechazar'} el préstamo #${p.id}?`)) return;
		this.cargando.set(true); this.error.set(undefined);
		this.http.put(`/api/prestamos/${p.id}/estatus`, { estatus }).subscribe({
			next: () => { p.estatus = estatus; this.aplicarFiltro(); },
			error: err => { this.error.set('No fue posible actualizar el estatus'); console.error(err); },
			complete: () => this.cargando.set(false)
		});
	}
}
