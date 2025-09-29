import { Routes, CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

const canActivateAuth: CanActivateFn = () => {
	const auth = inject(AuthService);
	const router = inject(Router);
	if (auth.isAuthenticated()) return true;
	router.navigate(['/login']);
	return false;
};

export const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
	{ path: 'dashboard', canActivate: [canActivateAuth], loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent) },
	{ path: 'abrir-cuenta', canActivate: [canActivateAuth], loadComponent: () => import('./pages/abrir-cuenta/abrir-cuenta.component').then(m => m.AbrirCuentaComponent) },
	{ path: 'cancelar-cuenta', canActivate: [canActivateAuth], loadComponent: () => import('./pages/cancelar-cuenta/cancelar-cuenta.component').then(m => m.CancelarCuentaComponent) },
	{ path: 'prestamos-solicitud', canActivate: [canActivateAuth], loadComponent: () => import('./pages/prestamos-solicitud/prestamos-solicitud.component').then(m => m.PrestamosSolicitudComponent) },
	{ path: '**', redirectTo: '/dashboard' }
];

