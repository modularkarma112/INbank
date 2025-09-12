import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent) },
	{ path: 'abrir-cuenta', loadComponent: () => import('./pages/abrir-cuenta/abrir-cuenta.component').then(m => m.AbrirCuentaComponent) },
	{ path: 'cancelar-cuenta', loadComponent: () => import('./pages/cancelar-cuenta/cancelar-cuenta.component').then(m => m.CancelarCuentaComponent) },
	{ path: 'prestamos-solicitud', loadComponent: () => import('./pages/prestamos-solicitud/prestamos-solicitud.component').then(m => m.PrestamosSolicitudComponent) },
	{ path: '**', redirectTo: '/dashboard' }
];

