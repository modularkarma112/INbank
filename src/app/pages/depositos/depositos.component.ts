import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-depositos',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule, RouterLink],
	changeDetection: ChangeDetectionStrategy.Default,
	template: `
	<div class="container mt-4" style="max-width: 860px;">
		<div class="d-flex justify-content-between align-items-center mb-3">
			<h2 class="m-0">Depósitos</h2>
			<a class="btn btn-secondary" routerLink="/dashboard">Volver</a>
		</div>

		<div class="card shadow-sm">
			<div class="card-body">
				<form [formGroup]="form" (ngSubmit)="depositar()" novalidate>
					<!-- Buscar cuenta por número -->
					<div class="row g-3 align-items-end">
						<div class="col-sm-6">
							<label class="form-label">Número de cuenta</label>
							<input type="text" class="form-control" formControlName="numeroCuenta" placeholder="0000 0000 0000 0000"/>
							<div class="form-text">Ingrese el número de 16 dígitos y presione "Buscar".</div>
						</div>
						<div class="col-sm-auto">
							<button class="btn btn-primary" type="button" (click)="buscarCuenta()">Buscar</button>
						</div>
					</div>

					<ng-container *ngIf="cuenta() as c">
						<hr/>
						<div class="row g-3">
							<div class="col-md-6">
								<div class="p-3 rounded bg-light">
									<div class="small text-muted">Cuenta</div>
									<div class="fw-semibold">{{c.numero_cuenta}}</div>
									<div class="small text-muted mt-2">Titular</div>
									<div class="fw-semibold">{{clienteNombre() || '—'}}</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="p-3 rounded bg-light">
									<div class="small text-muted">Saldo actual</div>
									<div class="display-6" style="font-size: 1.8rem;">{{c.saldo | currency:'MXN':'symbol-narrow'}}</div>
									<div class="small" *ngIf="c.estatus && c.estatus !== 'ACTIVA'">
										Estatus: <span class="badge bg-warning text-dark">{{c.estatus}}</span>
									</div>
								</div>
							</div>
						</div>

						<div class="row g-3 mt-3">
							<div class="col-sm-4">
								<label class="form-label">Monto a depositar</label>
								<input type="number" min="1" step="0.01" class="form-control" formControlName="monto"/>
								<div class="invalid-feedback d-block" *ngIf="form.controls.monto.touched && form.controls.monto.invalid">
									Ingrese un monto válido mayor a 0.
								</div>
							</div>
							<div class="col-sm-8">
								<label class="form-label">Concepto (opcional)</label>
								<input type="text" class="form-control" formControlName="concepto" placeholder="Depósito en ventanilla"/>
							</div>
						</div>

						<div class="mt-4 d-flex gap-2">
							<button class="btn btn-success" type="submit" [disabled]="procesando()">Depositar</button>
							<button class="btn btn-outline-secondary" type="button" (click)="limpiar()" [disabled]="procesando()">Limpiar</button>
						</div>
					</ng-container>
				</form>
			</div>
		</div>

		<!-- Mensajes -->
		<div class="alert alert-success mt-3" *ngIf="exito()">
			Depósito registrado correctamente.
		</div>
		<div class="alert alert-danger mt-3" *ngIf="errorMsg()">
			{{errorMsg()}}
		</div>
	</div>
	`
})
export class DepositosComponent {
	constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

	api = (window as any).API_BASE || '';

	// Estado UI
	procesando = signal(false);
	exito = signal(false);
	errorMsg = signal('');
	clienteNombre = signal<string>('');


	cuenta = signal<any | null>(null); 

	form = this.fb.group({
		numeroCuenta: ['', [Validators.required, Validators.minLength(10)]],
		monto: [null as any, [Validators.required, Validators.min(1)]],
		concepto: ['']
	});

	async buscarCuenta() {
		this.exito.set(false); this.errorMsg.set('');
		const numero = this.form.controls.numeroCuenta.value?.toString().trim();
		if (!numero) { this.errorMsg.set('Ingrese un número de cuenta'); return; }
		try {
			const cta = await this.http.get(`${this.api}/api/cuentas/numero/${encodeURIComponent(numero)}`).toPromise();
			this.cuenta.set(cta);
			this.form.controls.monto.enable();
			if ((this.cuenta() as any)?.cliente_id) {
				try {
					const cli: any = await this.http.get(`${this.api}/api/clientes/${(this.cuenta() as any).cliente_id}`).toPromise();
					this.clienteNombre.set(`${cli.nombres} ${cli.apellido_paterno || ''} ${cli.apellido_materno || ''}`.trim());
				} catch { this.clienteNombre.set(''); }
			}
		} catch (e: any) {
			this.cuenta.set(null);
			this.errorMsg.set(e?.error?.message || 'No se encontró la cuenta');
		}
	}

	async depositar() {
		this.exito.set(false); this.errorMsg.set('');
		if (!(this.cuenta() as any)?.id) { await this.buscarCuenta(); if (!(this.cuenta() as any)?.id) return; }
		if (this.form.controls.monto.invalid) { this.form.controls.monto.markAsTouched(); return; }

		const monto = Number(this.form.controls.monto.value || 0);
		const concepto = this.form.controls.concepto.value || 'Depósito';
		this.procesando.set(true);
			try {
				const r: any = await this.http.post(`${this.api}/api/cuentas/${(this.cuenta() as any).id}/deposito`, { monto, concepto }).toPromise();
				this.exito.set(true);

			const nueva = await this.http.get(`${this.api}/api/cuentas/numero/${encodeURIComponent((this.cuenta() as any).numero_cuenta)}`).toPromise();
			this.cuenta.set(nueva);

			this.form.patchValue({ monto: null as any, concepto: '' });

				if (r?.transaccion_id) {
					this.router.navigate(['/comprobante-movimiento', r.transaccion_id]);
				}
		} catch (e: any) {
			this.errorMsg.set(e?.error?.message || 'Error registrando depósito');
		} finally {
			this.procesando.set(false);
		}
	}

	limpiar() {
		this.form.reset();
		this.cuenta.set(null);
		this.exito.set(false); this.errorMsg.set('');
		this.clienteNombre.set('');
	}
}
