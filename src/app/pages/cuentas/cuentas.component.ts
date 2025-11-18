import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-cuentas',
	standalone: true,
	imports: [CommonModule, FormsModule, RouterLink],
	template: `
	<div class="container" style="max-width:1100px; margin:20px auto;">
		<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
			<h2 style="margin:0;">Cuentas</h2>
			<a class="btn btn-secondary" routerLink="/dashboard">Volver</a>
		</div>

		<div class="card" style="padding:12px; margin-bottom:12px;">
			<div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:10px;">
				<div>
					<label>Número</label>
					<input class="form-control" [(ngModel)]="f.numero" name="numero" placeholder="16 dígitos" />
				</div>
				<div>
					<label>Nombre cliente</label>
					<input class="form-control" [(ngModel)]="f.nombre" name="nombre" placeholder="Nombre o apellido" />
				</div>
				<div style="display:flex; align-items:flex-end; gap:8px;">
					<button class="btn btn-primary" (click)="buscar()">Buscar</button>
					<button class="btn" (click)="limpiar()">Limpiar</button>
				</div>
			</div>
		</div>

		<div class="table-responsive" *ngIf="rows?.length; else empty">
			<table class="table table-striped" style="width:100%;">
				<thead>
					<tr>
						<th>ID</th>
						<th>Número</th>
						<th>Cliente</th>
						<th>Saldo</th>
						<th>Estatus</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
					<tr *ngFor="let c of rows">
						<td>{{c.id}}</td>
						<td>{{c.numero_cuenta}}</td>
						<td>{{c.nombres}} {{c.apellido_paterno}} {{c.apellido_materno}}</td>
						<td>{{ c.saldo | number:'1.2-2' }}</td>
						<td>
							<span [ngStyle]="badge(c.estatus)">{{c.estatus}}</span>
						</td>
						<td>
							<select [ngModel]="c.estatus" (ngModelChange)="onChangeEstatus(c, $event)">
								<option *ngFor="let s of estatusOpts" [value]="s">{{s}}</option>
							</select>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<ng-template #empty>
			<p style="opacity:0.7;">No hay resultados.</p>
		</ng-template>
	</div>
	`
})
export class CuentasComponent {
	f = { numero: '', nombre: '' };
	rows: any[] = [];
	estatusOpts = ['ACTIVA', 'SUSPENDIDA', 'BLOQUEADA', 'CANCELADA'];

	constructor(private http: HttpClient) {
		this.buscar();
	}

	limpiar(){ this.f = { numero: '', nombre: '' }; this.buscar(); }

	buscar(){
		const params: any = {};
		if (this.f.numero) params.numero = this.f.numero;
		if (this.f.nombre) params.nombre = this.f.nombre;
		this.http.get<any[]>('/api/cuentas/buscar', { params }).subscribe({
			next: r => this.rows = r || [],
			error: err => { console.error(err); alert('Error al buscar cuentas'); }
		});
	}

	onChangeEstatus(c: any, nuevo: string){
		if (nuevo === c.estatus) return;
		if (nuevo === 'CANCELADA'){
			const motivo = prompt('Motivo de cancelación:', 'Solicitud del cliente');
			this.http.post(`/api/cuentas/${c.id}/cancelar`, { motivo_cancelacion: motivo || '' }).subscribe({
				next: _ => { c.estatus = 'CANCELADA'; },
				error: err => { console.error(err); alert('No se pudo cancelar la cuenta'); }
			});
			return;
		}
		this.http.put(`/api/cuentas/${c.id}/estatus`, { estatus: nuevo }).subscribe({
			next: _ => { c.estatus = nuevo; },
			error: err => { console.error(err); alert('No se pudo cambiar el estatus'); }
		});
	}

	badge(s: string){
		const base = { padding: '3px 8px', borderRadius:'12px', fontSize:'12px', background:'#eee' } as any;
		if (s === 'ACTIVA') return { ...base, background: '#E6FAF0', color: '#067647' };
		if (s === 'SUSPENDIDA') return { ...base, background: '#FEF0C7', color: '#9A5812' };
		if (s === 'BLOQUEADA') return { ...base, background: '#FEE4E2', color: '#B42318' };
		if (s === 'CANCELADA') return { ...base, background: '#E5E7EB', color: '#111827' };
		return base;
	}
}
