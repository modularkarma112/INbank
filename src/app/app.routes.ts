import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: '', loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent) },
	{ path: 'abrir-cuenta', loadComponent: () => import('./pages/abrir-cuenta/abrir-cuenta.component').then(m => m.AbrirCuentaComponent) },
	{ path: 'cancelar-cuenta', loadComponent: () => import('./pages/cancelar-cuenta/cancelar-cuenta.component').then(m => m.CancelarCuentaComponent) },
	{ path: 'prestamos', loadComponent: () => import('./pages/prestamos/prestamos.component').then(m => m.PrestamosComponent) },
	{ path: '**', redirectTo: '' }
];

