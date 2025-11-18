import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-dashboard',
	standalone: true,
	imports: [CommonModule, RouterLink],
	templateUrl: './dashboard.component.html',
	styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
	menuOpen = signal(false)

	constructor(private authService: AuthService, private http: HttpClient) {
		this.cargarStats();
	}
	sections = [
		{ title: 'Clientes & Cuentas', open: false, items: [
			{ label: 'Clientes', link: '/clientes' },
			{ label: 'Cuentas', link: '/cuentas' },
			{ label: 'Aperturas', link: '/abrir-cuenta' }
		]},
		{ title: 'Créditos', open: false, items: [
			{ label: 'Solicitudes', link: '/prestamos' },
			{ label: 'Cobranzas', link: '/cobranzas' }
		]},
		{ title: 'Transacciones', open: false, items: [
			{ label: 'Depósitos', link: '/depositos' },
			{ label: 'Retiros', link: '/retiros' },
			{ label: 'Transferencias', link: '/transferencias' }
		]},
		{ title: 'Administración', open: false, items: [
			{ label: 'Usuarios-&-Roles', link: '/usuarios-&-roles' }
		]},
		{ title: 'Reporte', open: false, items: [
			{ label: 'Estado de cuenta', link: '/estado-cuenta' },
			{ label: 'Detalle de Transacciones', link: '/reporte-transacciones' }
		]}
	]
	stats = [
		{ label: 'Cuentas Abiertas Hoy', value: 0, tone: 'green' },
		{ label: 'Créditos por Aprobar', value: 0, tone: 'blue' },
		{ label: 'Monto en Préstamos (MXN)', value: 0, tone: 'blue' },
		{ label: 'Cancelaciones del Mes', value: 0, tone: 'red' }
	]

	private cargarStats() {
		this.http.get<any>('/api/metrics/dashboard').subscribe({
			next: d => {
				this.stats = [
					{ label: 'Cuentas Abiertas Hoy', value: d?.cuentasAbiertasHoy ?? 0, tone: 'green' },
					{ label: 'Créditos por Aprobar', value: d?.creditosPorAprobar ?? 0, tone: 'blue' },
					{ label: 'Monto en Préstamos (MXN)', value: this.formatMoney(d?.montoPrestamosAprobados ?? 0), tone: 'blue' },
					{ label: 'Cancelaciones del Mes', value: d?.cancelacionesMes ?? 0, tone: 'red' }
				];
			},
			error: err => console.error('Error cargando métricas', err)
		});
	}

	private formatMoney(n: number) {
		try { return n.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }); }
		catch { return `$${n}`; }
	}
	toggleMenu() { this.menuOpen.set(!this.menuOpen()) }
	toggleSection(i: number) { this.sections[i].open = !this.sections[i].open }
	onBrandKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.toggleMenu() }
		else if (e.key === 'Escape' && this.menuOpen()) { this.menuOpen.set(false) }
	}

	// Cerrar sesión
	onLogout() {
		this.authService.logout();
	}
}

