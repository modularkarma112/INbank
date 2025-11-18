import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-retiros',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule, RouterLink],
	template: `
	<div class="container mt-4" style="max-width: 860px;">
		<div class="d-flex justify-content-between align-items-center mb-3">
			<h2 class="m-0">Retiros</h2>
			<a class="btn btn-secondary" routerLink="/dashboard">Volver</a>
		</div>

		<div class="card shadow-sm">
			<div class="card-body">
				<form [formGroup]="form" (ngSubmit)="retirar()" novalidate>
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

					<ng-container *ngIf="cuenta">
						<hr/>
						<div class="row g-3">
							<div class="col-md-6">
								<div class="p-3 rounded bg-light">
									<div class="small text-muted">Cuenta</div>
									<div class="fw-semibold">{{cuenta.numero_cuenta}}</div>
									<div class="small text-muted mt-2">Titular</div>
									<div class="fw-semibold">{{clienteNombre() || '—'}}</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="p-3 rounded bg-light">
									<div class="small text-muted">Saldo actual</div>
									<div class="display-6" style="font-size: 1.8rem;">{{cuenta.saldo | currency:'MXN':'symbol-narrow'}}</div>
									<div class="small" *ngIf="cuenta.estatus && cuenta.estatus !== 'ACTIVA'">
										Estatus: <span class="badge bg-warning text-dark">{{cuenta.estatus}}</span>
									</div>
								</div>
							</div>
						</div>

						<div class="row g-3 mt-3">
							<div class="col-sm-8">
								<label class="form-label">Nombre del titular (nombre completo para confirmar)</label>
								<input type="text" class="form-control" formControlName="nombreTitular" placeholder="Nombre(s) Apellido Paterno Apellido Materno"/>
								<div class="invalid-feedback d-block" *ngIf="nombreNoCoincide()">
									El nombre no coincide con el titular de la cuenta.
								</div>
							</div>
							<div class="col-sm-4">
								<label class="form-label">Monto a retirar</label>
								<input type="number" min="1" step="0.01" class="form-control" formControlName="monto"/>
								<div class="invalid-feedback d-block" *ngIf="montoInvalido()">
									Ingrese un monto válido mayor a 0 y no mayor al saldo disponible.
								</div>
							</div>
							<div class="col-12">
								<label class="form-label">Concepto (opcional)</label>
								<input type="text" class="form-control" formControlName="concepto" placeholder="Retiro en ventanilla"/>
							</div>
						</div>

						<div class="mt-4 d-flex gap-2">
							<button class="btn btn-danger" type="submit" [disabled]="procesando() || nombreNoCoincide() || montoInvalido()">Retirar</button>
							<button class="btn btn-outline-secondary" type="button" (click)="limpiar()" [disabled]="procesando()">Limpiar</button>
						</div>
					</ng-container>
				</form>
			</div>
		</div>

		<!-- Mensajes -->
		<div class="alert alert-success mt-3" *ngIf="exito()">
			Retiro registrado correctamente.
		</div>
		<div class="alert alert-danger mt-3" *ngIf="errorMsg()">
			{{errorMsg()}}
		</div>
	</div>
	`
})
export class RetirosComponent {
	constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

	api = (window as any).API_BASE || '';

	// Estado UI
	procesando = signal(false);
	exito = signal(false);
	errorMsg = signal('');
	// Mostrar solo nombres en la UI, pero validar contra el nombre completo
	clienteNombre = signal<string>('');
	clienteNombreCompleto = signal<string>('');

	// Cuenta resuelta
	cuenta: any = null; // { id, numero_cuenta, saldo, cliente_id, estatus }

	form = this.fb.group({
		numeroCuenta: ['', [Validators.required, Validators.minLength(10)]],
		nombreTitular: ['', [Validators.required, Validators.minLength(3)]],
		monto: [null as any, [Validators.required, Validators.min(1)]],
		concepto: ['']
	});

	private normalizeName(s: string): string {
		return (s || '')
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.replace(/\s+/g, ' ')
			.trim()
			.toUpperCase();
	}

	nombreNoCoincide() {
		if (!this.cuenta) return false;
		// Validación contra el nombre COMPLETO del titular
		const esperado = this.normalizeName(this.clienteNombreCompleto());
		const ingresado = this.normalizeName(this.form.controls.nombreTitular.value || '');
		return !!esperado && !!ingresado && esperado !== ingresado;
	}

	montoInvalido() {
		const monto = Number(this.form.controls.monto.value || 0);
		if (!this.cuenta) return true;
		return !(monto > 0) || monto > Number(this.cuenta.saldo || 0);
	}

	async buscarCuenta() {
		this.exito.set(false); this.errorMsg.set('');
		const numero = this.form.controls.numeroCuenta.value?.toString().trim();
		if (!numero) { this.errorMsg.set('Ingrese un número de cuenta'); return; }
		try {
			this.cuenta = await this.http.get(`${this.api}/api/cuentas/numero/${encodeURIComponent(numero)}`).toPromise();
			// Cargar nombre del cliente
			if (this.cuenta?.cliente_id) {
				try {
					const cli: any = await this.http.get(`${this.api}/api/clientes/${this.cuenta.cliente_id}`).toPromise();
					// Mostrar solo nombres en la tarjeta
					this.clienteNombre.set(String(cli?.nombres || '').trim());
					// Guardar nombre completo para la validación de confirmación
					this.clienteNombreCompleto.set(`${cli?.nombres || ''} ${cli?.apellido_paterno || ''} ${cli?.apellido_materno || ''}`.trim());
				} catch { this.clienteNombre.set(''); this.clienteNombreCompleto.set(''); }
			}
		} catch (e: any) {
			this.cuenta = null;
			this.errorMsg.set(e?.error?.message || 'No se encontró la cuenta');
		}
	}

	async retirar() {
		this.exito.set(false); this.errorMsg.set('');
		if (!this.cuenta?.id) { await this.buscarCuenta(); if (!this.cuenta?.id) return; }
		if (this.form.invalid || this.nombreNoCoincide() || this.montoInvalido()) {
			this.form.markAllAsTouched();
			if (this.nombreNoCoincide()) this.errorMsg.set('El nombre del titular no coincide.');
			else if (this.montoInvalido()) this.errorMsg.set('Monto inválido o mayor al saldo disponible.');
			return;
		}

		const monto = Number(this.form.controls.monto.value || 0);
		const concepto = this.form.controls.concepto.value || 'Retiro';
		this.procesando.set(true);
			try {
				const r: any = await this.http.post(`${this.api}/api/cuentas/${this.cuenta.id}/retiro`, { monto, concepto }).toPromise();
				this.exito.set(true);
			// refrescar saldo
			const nueva = await this.http.get(`${this.api}/api/cuentas/numero/${encodeURIComponent(this.cuenta.numero_cuenta)}`).toPromise();
			this.cuenta = nueva;
			// limpiar monto/concepto, mantener número de cuenta para más retiros
			this.form.patchValue({ monto: null as any, concepto: '' });
				if (r?.transaccion_id) {
					this.router.navigate(['/comprobante-movimiento', r.transaccion_id]);
				}
		} catch (e: any) {
			this.errorMsg.set(e?.error?.message || 'Error registrando retiro');
		} finally {
			this.procesando.set(false);
		}
	}

	limpiar() {
		this.form.reset();
		this.cuenta = null;
		this.exito.set(false); this.errorMsg.set('');
		this.clienteNombre.set('');
		this.clienteNombreCompleto.set('');
	}
}
