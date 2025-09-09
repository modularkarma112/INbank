import { Component } from '@angular/core';

@Component({
	selector: 'app-prestamos',
	standalone: true,
	template: `<div class="page"><h2>Préstamos</h2><p>Listado y evaluación de solicitudes</p></div>`,
	styles: [`.page{padding:1rem;max-width:900px;margin:0 auto}`]
})
export class PrestamosComponent {}

