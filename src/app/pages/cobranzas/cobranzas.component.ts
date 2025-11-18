import { Component, signal } from '@angular/core';
import { CommonModule, CurrencyPipe, NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

type Cobranza = {
	id: number;
	cliente_id: number;
	nombre_cliente: string;
	tipo_prestamo: string;
	monto: number;
	plazo_meses: number;
	interes: number; // % mes
	interes_penalizacion: number; // % día
	total_base: number;
	cuota_mensual: number;
	fecha_aprobacion: string | null;
	fecha_vencimiento: string | null;
	fecha_corte: string | null;
	dias_vencidos: number;
	total_con_mora: number;
	estado_pago: 'AL_DIA' | 'VENCIDO' | 'SIN_FECHA' | 'PAGADO' | string;
	pagado_periodo?: number;
	saldo_periodo?: number;
};

@Component({
	selector: 'app-cobranzas',
	standalone: true,
	imports: [CommonModule, RouterLink, CurrencyPipe, NgClass, FormsModule],
		styles: [`
			.inb-backdrop{position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:1040}
			.inb-modal{position:fixed;display:block;top:50%;left:50%;transform:translate(-50%,-50%);width:min(520px,90vw);background:#fff;border-radius:8px;box-shadow:0 10px 30px rgba(0,0,0,.2);z-index:1050;overflow:hidden}
			.inb-modal-header,.inb-modal-footer{padding:12px 16px;border-bottom:1px solid #e5e7eb;background:#fff}
			.inb-modal-footer{border-top:1px solid #e5e7eb;border-bottom:none;display:flex;gap:8px;justify-content:flex-end;align-items:center}
			.inb-modal-body{padding:16px;background:#fff}
		.badge{display:inline-block;padding:.25rem .5rem;border-radius:.5rem;color:#fff}
		.bg-success{background:#10B981}
		.bg-danger{background:#EF4444}
		.bg-secondary{background:#6B7280}
	`],
	template: `
	<div class="container mt-4">
		<div class='d-flex justify-content-between align-items-center mb-3'>
			<h2 class="m-0">Cobranzas</h2>
			<a class='btn btn-secondary' routerLink='/dashboard'>Volver</a>
		</div>

		<div class="card p-3 mb-3">
			<div class="row g-2 align-items-end">
				<div class="col-auto">
					<label class="form-label">Filtro</label>
					<select class="form-select" [(ngModel)]="filtroEstado" (change)="aplicarFiltro()">
						<option value="">Todos</option>
						<option value="AL_DIA">Al día</option>
						<option value="VENCIDO">Vencido</option>
						<option value="SIN_FECHA">Sin fecha</option>
					</select>
				</div>
				<div class="col-auto">
					<label class="form-label">Buscar</label>
					<input class="form-control" [(ngModel)]="q" (input)="aplicarFiltro()" placeholder="Cliente, id, tipo..." />
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
						<th class="text-center">Estado pago</th>
						<th class="text-center">Corte</th>
						<th class="text-center">Vence (20)</th>
						<th class="text-end">Cuota mes</th>
						<th class="text-end">Cuota c/ mora</th>
							<th class="text-end">Pagado</th>
							<th class="text-end">Saldo</th>
							<th class="text-end">Acciones</th>
					</tr>
				</thead>
				<tbody>
					@if(filtrados().length === 0){
						<tr>
								<td colspan="13" class="text-center text-muted py-4">Sin créditos aprobados</td>
						</tr>
					} @else {
						@for(c of filtrados(); track c.id){
							<tr>
								<td>{{ c.id }}</td>
								<td>
									<a [routerLink]="['/clientes', c.cliente_id]">{{ c.nombre_cliente }}</a>
								</td>
								<td>{{ c.tipo_prestamo }}</td>
								<td class="text-end">{{ c.monto | currency:'MXN':'symbol':'1.0-0' }}</td>
								<td class="text-center">{{ c.plazo_meses }} m</td>
								<td class="text-center">
									<span class="badge" [ngClass]="{
											'bg-success': c.estado_pago==='AL_DIA' || c.estado_pago==='PAGADO',
										'bg-danger': c.estado_pago==='VENCIDO',
										'bg-secondary': c.estado_pago==='SIN_FECHA'
									}">{{ etiquetaEstado(c.estado_pago) }}</span>
									<div class="small text-muted" *ngIf="c.dias_vencidos>0">{{ c.dias_vencidos }} día(s)</div>
								</td>
								<td class="text-center">{{ c.fecha_corte ? (c.fecha_corte | date:'yyyy-MM-dd') : '—' }}</td>
								<td class="text-center">{{ c.fecha_vencimiento ? (c.fecha_vencimiento | date:'yyyy-MM-dd') : '—' }}</td>
								<td class="text-end">{{ c.cuota_mensual | currency:'MXN':'symbol':'1.0-0' }}</td>
								<td class="text-end">{{ c.total_con_mora | currency:'MXN':'symbol':'1.0-0' }}</td>
									<td class="text-end">{{ c.pagado_periodo || 0 | currency:'MXN':'symbol':'1.0-0' }}</td>
									<td class="text-end">{{ c.saldo_periodo ?? c.cuota_mensual | currency:'MXN':'symbol':'1.0-0' }}</td>
									<td class="text-end">
										<button class="btn btn-sm btn-outline-primary" (click)="abrirPago(c)" [disabled]="c.estado_pago==='PAGADO'">Registrar pago</button>
									</td>
							</tr>
						}
					}
				</tbody>
			</table>
		</div>

					<!-- Modal de pago -->
					<div class="inb-backdrop" *ngIf="showPago()" (click)="cerrarPago()"></div>
					<div class="inb-modal" *ngIf="showPago()">
						<div class="inb-modal-header">
					<h5 class="m-0">Registrar pago - Préstamo #{{ sel()?.id }}</h5>
				</div>
						<div class="inb-modal-body">
					<div class="mb-2">Cliente: <strong>{{ sel()?.nombre_cliente }}</strong></div>
					<div class="mb-2">Saldo del periodo: <strong>{{ sel()?.saldo_periodo ?? sel()?.cuota_mensual | currency:'MXN':'symbol':'1.0-0' }}</strong></div>
					<label class="form-label">Monto a pagar</label>
					<input class="form-control" type="number" min="0" step="0.01" [(ngModel)]="montoPago" />
					<div class="text-danger small mt-1" *ngIf="error()">{{ error() }}</div>
				</div>
						<div class="inb-modal-footer">
					<button class="btn btn-secondary" (click)="cerrarPago()">Cancelar</button>
					<button class="btn btn-primary" (click)="confirmarPago()" [disabled]="cargando()">Pagar</button>
				</div>
			</div>
	</div>
	`
})
export class CobranzasComponent{
	cobranzas = signal<Cobranza[]>([]);
	filtrados = signal<Cobranza[]>([]);
	cargando = signal(false);
	error = signal<string|undefined>(undefined);
	filtroEstado: '' | 'AL_DIA' | 'VENCIDO' | 'SIN_FECHA' = '';
	q = '';
		showPago = signal(false);
		sel = signal<Cobranza|undefined>(undefined);
		montoPago: any = '';

	constructor(private http: HttpClient) {}
	ngOnInit(){ this.cargar(); }

	cargar(){
		this.cargando.set(true); this.error.set(undefined);
		this.http.get<Cobranza[]>('/api/cobranzas/aprobados').subscribe({
			next: data => { this.cobranzas.set(data || []); this.aplicarFiltro(); },
			error: err => { this.error.set('Error cargando cobranzas'); console.error(err); this.cargando.set(false); },
			complete: () => this.cargando.set(false)
		});
	}

	aplicarFiltro(){
		const list = this.cobranzas();
		const s = this.q.trim().toLowerCase();
		let res = list;
			if (this.filtroEstado) res = res.filter(x => x.estado_pago === this.filtroEstado);
		if (s) res = res.filter(x =>
			x.nombre_cliente.toLowerCase().includes(s) ||
			String(x.id).includes(s) ||
			x.tipo_prestamo.toLowerCase().includes(s)
		);
		this.filtrados.set(res);
	}

	etiquetaEstado(e: string){
			if(e==='AL_DIA') return 'Al día';
		if(e==='VENCIDO') return 'Vencido';
		if(e==='SIN_FECHA') return 'Sin fecha';
			if(e==='PAGADO') return 'Pagado';
		return e;
	}

		abrirPago(c: Cobranza){
			this.sel.set(c);
			this.montoPago = (c.saldo_periodo ?? c.cuota_mensual) || 0;
			this.showPago.set(true);
		}
		cerrarPago(){ this.showPago.set(false); this.sel.set(undefined); this.montoPago = ''; this.error.set(undefined); }
		confirmarPago(){
			const c = this.sel();
			const m = Number(this.montoPago);
			if (!c || !(m>0)) { this.error.set('Monto inválido'); return; }
			this.cargando.set(true);
			this.http.post('/api/cobranzas/pago', { prestamo_id: c.id, monto: m }).subscribe({
				next: _ => { this.cerrarPago(); this.cargar(); },
				error: err => { this.error.set('No se pudo registrar el pago'); console.error(err); this.cargando.set(false); }
			});
		}
}
