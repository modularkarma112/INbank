import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-estado-cuenta',
	standalone: true,
	imports: [CommonModule, FormsModule, RouterLink],
	template: `
	<div class="container mt-4">
		<div class="d-flex justify-content-between align-items-center mb-3">
			<h2 class="m-0">Estado de Cuenta</h2>
			<a class="btn btn-secondary" routerLink="/dashboard">Volver</a>
		</div>

		<div class="card p-3 mb-3">
			<div class="row g-2 align-items-end">
				<div class="col-auto">
					<label class="form-label">Número de cuenta</label>
					<input class="form-control" [(ngModel)]="numeroCuentaInput" placeholder="16 dígitos" />
				</div>
				<div class="col-auto">
					<label class="form-label">Periodo (YYYY-MM)</label>
					<input class="form-control" [(ngModel)]="periodoInput" placeholder="Ej. 2025-11" />
				</div>
				<div class="col-auto">
					<button class="btn btn-primary" (click)="cargar()" [disabled]="cargando()">Cargar</button>
				</div>
				<div class="col-auto" *ngIf="data()">
					<button class="btn btn-success" (click)="generarMostrarYEnviar()" [disabled]="cargando()">Generar y enviar correo</button>
				</div>
			</div>
			<div class="text-danger mt-2" *ngIf="error()">{{ error() }}</div>
		</div>

		<div *ngIf="cargando()" class="alert alert-info">Cargando…</div>

		<div *ngIf="data()" class="card p-3">
			<div class="mb-2">
				<strong>Cliente:</strong> {{ data()!.cliente.nombre }}
				<span class="text-muted" *ngIf="data()!.cliente.email"> • {{ data()!.cliente.email }}</span>
			</div>
			<div class="text-muted mb-3">
				<small>Periodo: {{ etiquetaPeriodo() }}</small>
			</div>

			<h5>Cuentas</h5>
			<div *ngIf="!data()!.cuentas?.length" class="text-muted mb-3">Sin cuentas registradas.</div>
			<div *ngFor="let c of data()!.cuentas" class="mb-3">
				<div class="d-flex justify-content-between">
					<div>
						<strong>{{ c.numero_cuenta }}</strong>
						<span class="badge bg-secondary ms-2">{{ c.estatus }}</span>
					</div>
								<div>
									<strong>Saldo:</strong> $ {{ c.saldo | number:'1.2-2' }} MXN
								</div>
				</div>
				<div class="table-responsive mt-2" *ngIf="c.movimientos?.length; else sinMovs">
					<table class="table table-sm align-middle">
						<thead>
							<tr>
								<th>Fecha</th><th>Tipo</th><th>Concepto</th><th class="text-end">Monto</th>
							</tr>
						</thead>
						<tbody>
							<tr *ngFor="let m of c.movimientos">
								<td>{{ m.fecha | date:'short' }}</td>
								<td>{{ m.tipo }}</td>
								<td>{{ m.concepto }}</td>
								<td class="text-end">$ {{ m.monto | number:'1.2-2' }}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<ng-template #sinMovs><div class="text-muted">Sin movimientos en el período.</div></ng-template>
				<hr/>
			</div>

			<h5>Préstamos</h5>
			<div *ngIf="!data()!.prestamos?.length" class="text-muted">Sin préstamos registrados.</div>
			<div class="row" *ngIf="data()!.prestamos?.length">
				<div class="col-md-6" *ngFor="let p of data()!.prestamos">
					<div class="border rounded p-2 mb-2">
						<div class="d-flex justify-content-between">
							<div><strong>{{ p.tipo_prestamo }}</strong> <span class="text-muted">#{{ p.id }}</span></div>
							<span class="badge" [class.bg-success]="p.estatus==='PAGADO'" [class.bg-warning]="p.estatus!=='PAGADO'">{{ p.estatus }}</span>
						</div>
						<div class="small text-muted">Plazo: {{ p.plazo_meses }} meses • Interés: {{ p.interes | number:'1.2-2' }}%</div>
						<div>Monto: $ {{ p.monto | number:'1.2-2' }} • Total est.: $ {{ p.total_estimado | number:'1.2-2' }}</div>
						<div>Pago mensual est.: $ {{ p.pago_mensual_est | number:'1.2-2' }} • Saldo pendiente est.: $ {{ p.saldo_pendiente_est | number:'1.2-2' }}</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div *ngIf="html()" class="card p-3 mt-3">
		<h5>Comprobante (HTML)</h5>
		<div class="border rounded" style="max-height:60vh; overflow:auto; background:#fff;" [innerHTML]="html()"></div>
	</div>
	`
})
export class EstadoCuentaComponent {
	clienteIdInput = '';
	numeroCuentaInput = '';
	periodoInput = '';
	cargando = signal(false);
	error = signal('');
	data = signal<any | null>(null);
	html = signal<string>('');

	constructor(private http: HttpClient) {}

	baseUrl() { return (window as any)["API_BASE"] || 'http://localhost:4000'; }

	etiquetaPeriodo = computed(() => {
		if (this.periodoInput && /^\d{4}-\d{2}$/.test(this.periodoInput)) return this.periodoInput;
		const d = new Date();
		return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;
	});

	cargar() {
		this.error.set('');
		// Validar periodo obligatorio en formato YYYY-MM
		const per = (this.periodoInput || '').trim();
		if (!/^\d{4}-\d{2}$/.test(per)) { this.error.set('Periodo inválido. Usa el formato YYYY-MM, por ejemplo 2025-11.'); return; }
		const num = (this.numeroCuentaInput || '').trim();
		if (!num) { this.error.set('Ingresa el Número de cuenta'); return; }
		const params: any = { periodo: per };
		this.cargando.set(true);
		this.html.set('');
		this.http.get(`${this.baseUrl()}/api/estado-cuenta/por-cuenta/${encodeURIComponent(num)}`, { params }).subscribe({
			next: (resp: any) => { this.data.set(resp || null); this.clienteIdInput = String(resp?.cliente?.id || ''); this.cargando.set(false); },
			error: (err) => {
				console.error('Estado de Cuenta: error GET', err);
				const msg = err?.error?.message || err?.message || 'Error al cargar estado de cuenta';
				this.error.set(msg);
				this.cargando.set(false);
			}
		});
	}

		generarMostrarYEnviar() {
			const num = (this.numeroCuentaInput || '').trim(); if (!num) return;
			const per = (this.periodoInput || '').trim();
			if (!/^\d{4}-\d{2}$/.test(per)) { this.error.set('Periodo inválido. Usa el formato YYYY-MM.'); return; }
			const params: any = { periodo: per };
			this.cargando.set(true);
			this.http.post(`${this.baseUrl()}/api/estado-cuenta/por-cuenta/${encodeURIComponent(num)}/generar`, null, { params }).subscribe({
				next: (resp: any) => { this.cargando.set(false); if (resp?.html) this.html.set(resp.html); alert('Estado de cuenta generado, mostrado en HTML y enviado por correo (PDF adjunto).'); },
				error: (err) => { console.error(err); this.cargando.set(false); alert('No se pudo generar/enviar el estado de cuenta.'); }
			});
		}
}
