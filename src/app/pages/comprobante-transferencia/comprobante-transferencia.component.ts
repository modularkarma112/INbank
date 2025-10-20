import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comprobante-transferencia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comprobante-transferencia.component.html',
  styleUrl: './comprobante-transferencia.component.css'
})
export class ComprobanteTransferenciaComponent implements OnInit {
  api = (window as any).API_BASE || '';
  transferencia = signal<any>(null);
  cargando = signal(true);
  fechaActual = new Date();

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID de transferencia:', id);
    
    if (!id) {
      console.error('No se encontró ID en la ruta');
      this.router.navigate(['/dashboard']);
      return;
    }

    const url = `${this.api}/api/transferencias/${id}`;
    console.log('Cargando transferencia desde:', url);

    this.http.get(url).subscribe({
      next: (data: any) => {
        console.log('Transferencia recibida:', data);
        this.transferencia.set(data);
        this.cargando.set(false);
      },
      error: (err) => {
        console.error('Error cargando comprobante:', err);
        alert('No se pudo cargar el comprobante: ' + (err?.error?.message || err?.message || 'Error desconocido'));
        this.router.navigate(['/dashboard']);
      }
    });
  }

  imprimir() {
    window.print();
  }

  volver() {
    this.router.navigate(['/dashboard']);
  }
}
