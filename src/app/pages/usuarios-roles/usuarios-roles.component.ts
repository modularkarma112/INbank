import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';

@Component({
	selector:'app-usuarios-roles',
	standalone:true,
	imports:[CommonModule, RouterLink],
		template: `
	<div class="container mt-4">
			<div class="d-flex justify-content-between align-items-center mb-3">
			<h2>Usuarios & Roles</h2>
				<div class="d-flex gap-2">
					<a class="btn btn-secondary" routerLink="/dashboard">Volver</a>
					<a class="btn btn-primary" routerLink="/usuarios/alta">Agregar Usuario</a>
				</div>
		</div>
		<div class="table-responsive">
			<table class="table table-sm table-striped">
				<thead>
					<tr>
						<th>ID</th>
						<th>Usuario</th>
						<th>Nombre</th>
						<th>Correo</th>
						<th>Rol</th>
						<th>Teléfono</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
					<tr *ngFor="let u of usuarios()">
						<td>{{u.id}}</td>
						<td>{{u.usuario}}</td>
						<td>{{u.nombre}} {{u.apellido_paterno || ''}} {{u.apellido_materno || ''}}</td>
						<td>{{u.correo}}</td>
						<td>{{u.rol}}</td>
						<td>{{u.telefono || '-'}}</td>
						<td>
							<button class="btn btn-sm btn-outline-danger" (click)="eliminar(u)">Eliminar</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	`
})
export class UsuariosRolesComponent{
	api = (window as any).API_BASE || '';
	usuarios = signal<any[]>([]);
	constructor(private http: HttpClient, private router: Router){ this.cargar(); }
	cargar(){ this.http.get(`${this.api}/api/usuarios`).subscribe((r:any)=> this.usuarios.set(r||[])); }
	eliminar(u:any){
		if(!confirm(`¿Eliminar al usuario ${u.usuario}?`)) return;
		this.http.delete(`${this.api}/api/usuarios/${u.id}`).subscribe({
			next:()=>{ this.cargar(); },
			error:(e)=> alert(e?.error?.message || 'Error eliminando usuario')
		});
	}
}
