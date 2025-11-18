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
	{ path: 'transferencias', canActivate: [canActivateAuth], loadComponent: () => import('./pages/transferencias/transferencias.component').then(m => m.TransferenciasComponent) },
	{ path: 'comprobante-transferencia/:id', canActivate: [canActivateAuth], loadComponent: () => import('./pages/comprobante-transferencia/comprobante-transferencia.component').then(m => m.ComprobanteTransferenciaComponent) },
	{ path: 'comprobante-movimiento/:id', canActivate: [canActivateAuth], loadComponent: () => import('./pages/comprobante-movimiento/comprobante-movimiento.component').then(m => m.ComprobanteMovimientoComponent) },
	{ path: 'usuarios/alta', canActivate: [canActivateAuth], loadComponent: () => import('./pages/usuarios-alta/usuarios-alta.component').then(m => m.UsuariosAltaComponent) },
	{ path: 'clientes', canActivate: [canActivateAuth], loadComponent: () => import('./pages/clientes/clientes.component').then(m => m.ClientesComponent) },
	{ path: 'clientes/:id', canActivate: [canActivateAuth], loadComponent: () => import('./pages/cliente-perfil/cliente-perfil.component').then(m => m.ClientePerfilComponent) },
	{ path: 'cuentas', canActivate: [canActivateAuth], loadComponent: () => import('./pages/cuentas/cuentas.component').then(m => m.CuentasComponent) },
	{ path: 'prestamos', canActivate: [canActivateAuth], loadComponent: () => import('./pages/prestamos/prestamos.component').then(m => m.PrestamosComponent) },
	{ path: 'cobranzas', canActivate: [canActivateAuth], loadComponent: () => import('./pages/cobranzas/cobranzas.component').then(m => m.CobranzasComponent) },
	{ path: 'depositos', canActivate: [canActivateAuth], loadComponent: () => import('./pages/depositos/depositos.component').then(m => m.DepositosComponent) },
	{ path: 'retiros', canActivate: [canActivateAuth], loadComponent: () => import('./pages/retiros/retiros.component').then(m => m.RetirosComponent) },
	{ path: 'usuarios-&-roles', canActivate: [canActivateAuth], loadComponent: () => import('./pages/usuarios-roles/usuarios-roles.component').then(m => m.UsuariosRolesComponent) },
	{ path: 'estado-cuenta', canActivate: [canActivateAuth], loadComponent: () => import('./pages/estado-cuenta/estado-cuenta.component').then(m => m.EstadoCuentaComponent) },
	{ path: 'reporte-transacciones', canActivate: [canActivateAuth], loadComponent: () => import('./pages/reporte-transacciones/reporte-transacciones.component').then(m => m.ReporteTransaccionesComponent) },
	{ path: '**', redirectTo: '/dashboard' }
];

