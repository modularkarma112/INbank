import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
	selector:'app-reporte-transacciones',
	standalone:true,
	imports:[CommonModule, FormsModule, RouterLink],
	template:`
	<div class="container mt-4">
		<div class="d-flex justify-content-between align-items-center mb-3">
			<h2 class="m-0">Detalle de Transacciones</h2>
			<a class="btn btn-secondary" routerLink="/dashboard">Volver</a>
		</div>

		<div class="card p-3 mb-3">
			<div class="row g-2 align-items-end">
				<div class="col-auto">
					<label class="form-label">Rango</label>
								<select class="form-select" [(ngModel)]="rango">
									<option value="todos">Todos</option>
						<option value="hoy">Hoy</option>
						<option value="semana">Esta semana</option>
						<option value="mes">Este mes</option>
						<option value="personal">Personalizado</option>
					</select>
				</div>
							<div class="col-auto" *ngIf="rango==='personal'">
					<label class="form-label">Desde</label>
					<input type="date" class="form-control" [(ngModel)]="desde" />
				</div>
				<div class="col-auto" *ngIf="rango==='personal'">
					<label class="form-label">Hasta</label>
					<input type="date" class="form-control" [(ngModel)]="hasta" />
				</div>
				<div class="col-auto">
					<label class="form-label">Cliente</label>
					<input class="form-control" [(ngModel)]="cliente" placeholder="Nombre o ID" />
				</div>
				<div class="col-auto">
					<label class="form-label">Número de cuenta</label>
					<input class="form-control" [(ngModel)]="numero" placeholder="Parcial o exacto" />
				</div>
				<div class="col-auto">
					<label class="form-label">Tipo</label>
					<select class="form-select" [(ngModel)]="tipo">
						<option value="">Todos</option>
						<option>DEPOSITO</option>
						<option>RETIRO</option>
						<option>TRANSFERENCIA_ENTRADA</option>
						<option>TRANSFERENCIA_SALIDA</option>
					</select>
				</div>
				<div class="col-auto">
					<button class="btn btn-primary" (click)="buscar()" [disabled]="cargando()">Buscar</button>
				</div>
			</div>
			<div class="text-danger mt-2" *ngIf="error()">{{ error() }}</div>
		</div>

		<div *ngIf="cargando()" class="alert alert-info">Cargando…</div>

		<div class="table-responsive" *ngIf="rows().length">
			<table class="table table-sm align-middle">
				<thead>
					<tr>
						<th>Fecha</th><th>Tipo</th><th>Concepto</th><th class="text-end">Monto</th>
						<th>Cuenta</th><th>Cliente</th>
					</tr>
				</thead>
				<tbody>
					<tr *ngFor="let r of rows()">
						<td>{{ r.fecha | date:'short' }}</td>
						<td>{{ r.tipo }}</td>
						<td>{{ r.concepto }}</td>
						<td class="text-end">$ {{ r.monto | number:'1.2-2' }}</td>
						<td>{{ r.numero_cuenta }}</td>
						<td>{{ r.cliente_nombre }}</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div *ngIf="!cargando() && !rows().length" class="alert alert-secondary">Sin resultados.</div>

		<div class="d-flex justify-content-between align-items-center mt-2" *ngIf="total()>0">
			<div>
				Mostrando {{ inicio() }}-{{ fin() }} de {{ total() }}
			</div>
			<div class="btn-group">
				<button class="btn btn-outline-secondary" (click)="prev()" [disabled]="page()<=1">Anterior</button>
				<button class="btn btn-outline-secondary" (click)="next()" [disabled]="fin()>=total()">Siguiente</button>
			</div>
		</div>
	</div>
	`
})
export class ReporteTransaccionesComponent{
	constructor(private http: HttpClient) {}

	baseUrl(){ return (window as any)["API_BASE"] || 'http://localhost:4000'; }

		rango: 'todos'|'hoy'|'semana'|'mes'|'personal' = 'todos';
	desde = '';
	hasta = '';
	cliente = '';
	numero = '';
	tipo = '';

	cargando = signal(false);
	error = signal('');
	rows = signal<any[]>([]);
	page = signal(1);
	pageSize = 50;
	total = signal(0);

	inicio = computed(() => (this.page()-1)*this.pageSize + (this.rows().length?1:0));
	fin = computed(() => (this.page()-1)*this.pageSize + this.rows().length);

	private buildParams(){
		const params: any = { page: this.page(), limit: this.pageSize };
		if (this.tipo) params.tipo = this.tipo;
		if (this.numero) params.numero = this.numero.trim();
		const id = Number(this.cliente.trim());
		if (this.cliente){ if (Number.isFinite(id)) params.clienteId = id; else params.cliente = this.cliente.trim(); }
			if (this.rango==='personal'){ if (this.desde) params.desde = this.desde; if (this.hasta) params.hasta = this.hasta; }
			else if (this.rango!=='todos') { params.periodo = this.rango; }
		return params;
	}

	buscar(){
		this.error.set('');
		this.cargando.set(true);
		const params = this.buildParams();
		this.http.get(`${this.baseUrl()}/api/transacciones`, { params }).subscribe({
			next: (resp: any) => { this.rows.set(resp?.rows||[]); this.total.set(resp?.total||0); this.cargando.set(false); },
			error: (err) => { this.cargando.set(false); this.error.set(err?.error?.message || 'Error cargando transacciones'); }
		});
	}

	next(){ if (this.fin() < this.total()) { this.page.set(this.page()+1); this.buscar(); } }
	prev(){ if (this.page()>1) { this.page.set(this.page()-1); this.buscar(); } }

	ngOnInit(){ this.buscar(); }
}
