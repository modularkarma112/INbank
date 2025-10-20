import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

type DestinoTipo = 'NUMERO_CUENTA' | 'CLABE' | 'TELEFONO';

@Component({
  selector: 'app-transferencias',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './transferencias.component.html',
  styleUrl: './transferencias.component.css'
})
export class TransferenciasComponent {
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

  api = (window as any).API_BASE || '';

  origenCuenta: any = null; // { id, numero_cuenta, cliente_id, saldo, ... }
  contactos = signal<any[]>([]);
  buscandoContactos = signal(false);
  comision = signal<number>(0);
  total = computed(() => {
    const monto = Number(this.form.controls.monto.value || 0);
    return monto > 0 ? monto + (this.comision() || 0) : 0;
  });

  form = this.fb.group({
    // Origen
    origenNumeroCuenta: ['', [Validators.required, Validators.minLength(10)]],
    // Destino
    mismoBanco: [true, Validators.required],
    destinoTipo: ['NUMERO_CUENTA' as DestinoTipo, Validators.required],
    destinoIdentificador: ['', Validators.required],
    destinoNombre: ['', Validators.required],
    destinoBanco: [''],
    // Monto/Concepto
    monto: [null as any, [Validators.required, Validators.min(1)]],
    concepto: [''],
    // Contacto
    guardarContacto: [true],
    buscarContacto: ['']
  });

  // Buscar cuenta de origen por número para obtener cliente_id
  async resolverOrigen() {
    const numero = this.form.controls.origenNumeroCuenta.value?.toString().trim();
    if (!numero) return;
    try {
      this.origenCuenta = await this.http.get(`${this.api}/api/cuentas/numero/${encodeURIComponent(numero)}`).toPromise();
    } catch (e) {
      this.origenCuenta = null;
      alert('No se encontró la cuenta de origen');
    }
  }

  // Preview de comisión al cambiar monto
  async actualizarComision() {
    const monto = Number(this.form.controls.monto.value || 0);
    if (!monto || monto <= 0) { this.comision.set(0); return; }
    try {
      const r: any = await this.http.get(`${this.api}/api/transferencias/comision`, { params: { monto } }).toPromise();
      this.comision.set(Number(r?.comision || 0));
    } catch {
      this.comision.set(0);
    }
  }

  // Búsqueda de contactos por cliente
  async buscarContactos() {
    const q = this.form.controls.buscarContacto.value?.toString().trim() || '';
    if (!this.origenCuenta?.cliente_id) { alert('Primero resuelva la cuenta de origen'); return; }
    this.buscandoContactos.set(true);
    try {
      const r = await this.http.get(`${this.api}/api/transferencias/contactos`, {
        params: { cliente_id: this.origenCuenta.cliente_id, q }
      }).toPromise();
      this.contactos.set((r as any[]) || []);
    } finally {
      this.buscandoContactos.set(false);
    }
  }

  usarContacto(c: any) {
    this.form.patchValue({
      destinoTipo: c.identificador_tipo,
      destinoIdentificador: c.identificador,
      destinoNombre: c.nombre_propietario,
      destinoBanco: c.banco || ''
    });
  }

  async submit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    if (!this.origenCuenta?.id) { await this.resolverOrigen(); if (!this.origenCuenta?.id) return; }
    await this.actualizarComision();
    const v = this.form.value;
    const payload = {
      cliente_id: this.origenCuenta.cliente_id,
      origen_cuenta_id: this.origenCuenta.id,
      destino_tipo: v.destinoTipo,
      destino_identificador: v.destinoIdentificador,
      destino_nombre: v.destinoNombre,
      destino_banco: v.mismoBanco ? null : v.destinoBanco,
      monto: Number(v.monto),
      concepto: v.concepto,
      guardar_contacto: !!v.guardarContacto
    };
    try {
      const r: any = await this.http.post(`${this.api}/api/transferencias`, payload).toPromise();
      alert(`Transferencia realizada. Comisión: $${r?.comision ?? this.comision()}. Total debitado: $${r?.totalDebitar ?? this.total()}`);
      this.router.navigate(['/dashboard']);
    } catch (e: any) {
      alert(e?.error?.message || 'Error ejecutando transferencia');
    }
  }
}
