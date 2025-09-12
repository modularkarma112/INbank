import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
	selector: 'app-dashboard',
	standalone: true,
	imports: [CommonModule, RouterLink],
	templateUrl: './dashboard.component.html',
	styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
	menuOpen = signal(false)

	constructor(private authService: AuthService) {}
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
		]},
		{ title: 'Sistema', open: false, items: [
			{ label: 'Centro de Ayuda', link: '/centro-ayuda' },
			{ label: 'Estado de Sistema', link: '/estado-sistema' }
		]}
	]
	stats = [
		{ label: 'Cuentas Abiertas Hoy', value: 32, tone: 'green' },
		{ label: 'Créditos por Aprobar', value: 8, tone: 'blue' },
		{ label: 'Monto en Préstamos (MXN)', value: '2.5M', tone: 'blue' },
		{ label: 'Cancelaciones del Mes', value: 7, tone: 'red' }
	]
	toggleMenu() { this.menuOpen.set(!this.menuOpen()) }
	toggleSection(i: number) { this.sections[i].open = !this.sections[i].open }
	onBrandKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.toggleMenu() }
		else if (e.key === 'Escape' && this.menuOpen()) { this.menuOpen.set(false) }
	}

	// Método para cerrar sesión
	onLogout() {
		this.authService.logout();
	}
}

