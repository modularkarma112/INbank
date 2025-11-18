import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comprobante-movimiento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comprobante-movimiento.component.html',
  styleUrl: './comprobante-movimiento.component.css'
})
export class ComprobanteMovimientoComponent implements OnInit {
  api = (window as any).API_BASE || '';
  movimiento = signal<any>(null);
  cargando = signal(true);
  fechaActual = new Date();

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) { this.router.navigate(['/dashboard']); return; }
    const url = `${this.api}/api/cuentas/transacciones/${id}`;
    this.http.get(url).subscribe({
      next: (data: any) => { this.movimiento.set(data); this.cargando.set(false); },
      error: (err) => { alert('No se pudo cargar el comprobante'); this.router.navigate(['/dashboard']); }
    });
  }

  imprimir() { window.print(); }
  async descargarPdf() {
    try {
      const id = this.route.snapshot.paramMap.get('id');
      const url = `${this.api}/api/cuentas/transacciones/${id}/pdf`;
      const blob = await this.http.get(url, { responseType: 'blob' as any }).toPromise();
      const a = document.createElement('a');
      const b = window.URL.createObjectURL(blob as any);
      a.href = b; a.download = `comprobante-${id}.pdf`; a.click();
      setTimeout(() => URL.revokeObjectURL(b), 1000);
    } catch (e) {
      alert('No se pudo descargar el PDF');
    }
  }
  volver() { this.router.navigate(['/dashboard']); }
}
