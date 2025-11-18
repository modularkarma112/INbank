import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-abrir-cuenta',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: './abrir-cuenta.component.html',
	styleUrl: './abrir-cuenta.component.css'
})
export class AbrirCuentaComponent {
  accountForm: FormGroup;
  isSubmitting = signal(false);

  // Estados
  estados = [
    'Aguascalientes',
    'Baja California',
    'Baja California Sur',
    'Campeche',
    'Coahuila',
    'Colima',
    'Chiapas',
    'Chihuahua',
    'Ciudad de México',
    'Durango',
    'Guanajuato',
    'Guerrero',
    'Hidalgo',
    'Jalisco',
    'México',
    'Michoacán',
    'Morelos',
    'Nayarit',
    'Nuevo León',
    'Oaxaca',
    'Puebla',
    'Querétaro',
    'Quintana Roo',
    'San Luis Potosí',
    'Sinaloa',
    'Sonora',
    'Tabasco',
    'Tamaulipas',
    'Tlaxcala',
    'Veracruz',
    'Yucatán',
    'Zacatecas'
  ];

  // Ciudades x estado
  ciudadesPorEstado: { [key: string]: string[] } = {
    'Aguascalientes': ['Aguascalientes', 'Calvillo', 'Jesús María', 'Pabellón de Arteaga'],
    'Baja California': ['Tijuana', 'Mexicali', 'Ensenada', 'Rosarito', 'Tecate'],
    'Baja California Sur': ['La Paz', 'Los Cabos', 'Cabo San Lucas', 'San José del Cabo'],
    'Campeche': ['Campeche', 'Ciudad del Carmen', 'Champotón', 'Escárcega'],
    'Coahuila': ['Saltillo', 'Torreón', 'Monclova', 'Piedras Negras', 'Acuña'],
    'Colima': ['Colima', 'Manzanillo', 'Villa de Álvarez', 'Tecomán'],
    'Chiapas': ['Tuxtla Gutiérrez', 'San Cristóbal de las Casas', 'Tapachula', 'Comitán'],
    'Chihuahua': ['Chihuahua', 'Ciudad Juárez', 'Delicias', 'Parral', 'Cuauhtémoc'],
    'Ciudad de México': ['Álvaro Obregón', 'Azcapotzalco', 'Benito Juárez', 'Coyoacán', 'Cuajimalpa', 'Cuauhtémoc', 'Gustavo A. Madero', 'Iztacalco', 'Iztapalapa', 'Magdalena Contreras', 'Miguel Hidalgo', 'Milpa Alta', 'Tláhuac', 'Tlalpan', 'Venustiano Carranza', 'Xochimilco'],
    'Durango': ['Durango', 'Gómez Palacio', 'Lerdo', 'Santiago Papasquiaro'],
    'Guanajuato': ['León', 'Irapuato', 'Celaya', 'Salamanca', 'Guanajuato', 'Pénjamo'],
    'Guerrero': ['Acapulco', 'Chilpancingo', 'Iguala', 'Taxco', 'Zihuatanejo'],
    'Hidalgo': ['Pachuca', 'Tulancingo', 'Tizayuca', 'Huejutla'],
    'Jalisco': ['Guadalajara', 'Zapopan', 'Tlaquepaque', 'Tonalá', 'Puerto Vallarta', 'Tlajomulco'],
    'México': ['Toluca', 'Ecatepec', 'Naucalpan', 'Nezahualcóyotl', 'Tlalnepantla', 'Chimalhuacán'],
    'Michoacán': ['Morelia', 'Uruapan', 'Zamora', 'Lázaro Cárdenas', 'Apatzingán'],
    'Morelos': ['Cuernavaca', 'Jiutepec', 'Temixco', 'Cuautla', 'Yautepec'],
    'Nayarit': ['Tepic', 'Bahía de Banderas', 'Compostela', 'Santiago Ixcuintla'],
    'Nuevo León': ['Monterrey', 'Guadalupe', 'San Nicolás de los Garza', 'Apodaca', 'Santa Catarina'],
    'Oaxaca': ['Oaxaca de Juárez', 'Salina Cruz', 'Tuxtepec', 'Juchitán', 'Huajuapan'],
    'Puebla': ['Puebla', 'Tehuacán', 'San Martín Texmelucan', 'Atlixco', 'Cholula'],
    'Querétaro': ['Querétaro', 'San Juan del Río', 'Corregidora', 'El Marqués'],
    'Quintana Roo': ['Cancún', 'Chetumal', 'Playa del Carmen', 'Cozumel', 'Tulum'],
    'San Luis Potosí': ['San Luis Potosí', 'Soledad de Graciano Sánchez', 'Ciudad Valles', 'Rioverde'],
    'Sinaloa': ['Culiacán', 'Mazatlán', 'Los Mochis', 'Guasave', 'Guamúchil'],
    'Sonora': ['Hermosillo', 'Ciudad Obregón', 'Nogales', 'San Luis Río Colorado', 'Navojoa'],
    'Tabasco': ['Villahermosa', 'Cárdenas', 'Comalcalco', 'Huimanguillo'],
    'Tamaulipas': ['Reynosa', 'Matamoros', 'Nuevo Laredo', 'Tampico', 'Victoria'],
    'Tlaxcala': ['Tlaxcala', 'Apizaco', 'Huamantla', 'San Pablo del Monte'],
    'Veracruz': ['Veracruz', 'Xalapa', 'Coatzacoalcos', 'Córdoba', 'Orizaba', 'Poza Rica'],
    'Yucatán': ['Mérida', 'Kanasín', 'Umán', 'Progreso', 'Valladolid'],
    'Zacatecas': ['Zacatecas', 'Fresnillo', 'Guadalupe', 'Jerez', 'Río Grande']
  };

  ciudadesDisponibles: string[] = [];

  occupations = [
    'Empleado',
    'Independiente',
    'Empresario',
    'Profesionista',
    'Estudiante',
    'Jubilado',
    'Hogar',
    'Comerciante',
    'Técnico',
    'Obrero',
    'Funcionario Público',
    'Docente',
    'Otro'
  ];

  // Tipos de cuenta disponibles (alineados con el catálogo del backend)
  // 1 = Nómina, 2 = Ahorro, 3 = Inversión
  accountTypes = [
    { value: 'nomina', label: 'Cuenta de Nómina' },
    { value: 'ahorro', label: 'Cuenta de Ahorro' },
    { value: 'inversion', label: 'Cuenta de Inversión' }
  ];

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {
    this.accountForm = this.fb.group({
      // Datos cliente
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      rfc: ['', [Validators.required, Validators.pattern(/^[A-ZÑ&]{3,4}\d{6}[A-V1-9][A-Z1-9][0-9A]$/)]],
      curp: ['', [Validators.required, Validators.pattern(/^[A-Z]{4}\d{6}[HM][A-Z]{5}[A-Z0-9]\d$/)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^(\+52|52)?\s?[1-9]\d{9}$/)]],
      estado: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', [Validators.required, Validators.minLength(10)]],
      postalCode: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],

      // Info financiera
      occupation: ['', Validators.required],
      monthlyIncome: ['', [Validators.required, Validators.min(0)]],

      // Tipo cuenta
      accountType: ['', Validators.required],
      initialDeposit: ['', [Validators.required, Validators.min(500)]]
    });


    this.accountForm.get('city')?.disable({ emitEvent: false });
  }

  onSubmit() {
    if (this.accountForm.valid) {
      this.isSubmitting.set(true);

      const formData = this.accountForm.value;
      const payload = {
        nombres: formData.firstName,
        apellido_paterno: (formData.lastName || '').split(' ')[0] || '',
        apellido_materno: (formData.lastName || '').split(' ')[1] || '',
        rfc: formData.rfc,
        curp: formData.curp,
        email: formData.email,
        telefono: (formData.phone || '').replace(/\D/g, '').slice(-10),
        estado: formData.estado,
        ciudad: formData.city,
        direccion: formData.address,
        ingresos_mensuales: formData.monthlyIncome
      };

      const base = (window as any)["API_BASE"] || 'http://localhost:4000';
      const telefono = payload.telefono;
      this.http.get(`${base}/api/clientes/existe`, { params: { rfc: payload.rfc, curp: payload.curp, email: payload.email, telefono } }).subscribe({
        next: (chk: any) => {
          if (chk?.exists) {
            const f = chk.fields || {};
            alert('Ya existe un cliente con: ' + [f.rfc && 'RFC', f.curp && 'CURP', f.email && 'Email', f.telefono && 'Teléfono'].filter(Boolean).join(', '));
            this.isSubmitting.set(false);
            return;
          }
          
          // Agregar datos de la cuenta al payload
          const payloadCompleto = {
            ...payload,
            // Mapear valor seleccionado -> id esperado por el backend
            tipo_cuenta_id: formData.accountType === 'nomina' ? 1 :
                            formData.accountType === 'ahorro' ? 2 :
                            formData.accountType === 'inversion' ? 3 : 1,
            deposito_inicial: Number(formData.initialDeposit)
          };
          
          // Usar el nuevo endpoint que crea cliente Y cuenta
          this.http.post(`${base}/api/clientes/con-cuenta`, payloadCompleto).subscribe({
            next: (res: any) => {
              alert(`¡Cuenta creada exitosamente!\n\nCliente ID: ${res.cliente_id}\nNúmero de cuenta: ${res.numero_cuenta}\nSaldo inicial: $${res.saldo_inicial.toFixed(2)} MXN\n\nSe ha enviado un email de confirmación.`);
              this.isSubmitting.set(false);
              this.goBack();
            },
            error: (err) => {
              console.error('Error creando cliente con cuenta:', err);
              const baseMsg = err?.error?.message || err?.message || 'Error creando cliente con cuenta';
              const detail = err?.error?.error || err?.error?.sqlMessage || '';
              const msg = detail ? `${baseMsg}\n\nDetalle: ${detail}` : baseMsg;
              alert(msg);
              this.isSubmitting.set(false);
            }
          });
        },
        error: (err) => {
          console.error(err);
          alert('Error validando duplicados');
          this.isSubmitting.set(false);
        }
      });
    } else {
      this.markFormGroupTouched();
    }
  }

  onCancel() {
    this.goBack();
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }

  // Actualiza ciudades al cambiar estado
  onEstadoChange(estado: string) {
    if (estado && this.ciudadesPorEstado[estado]) {
      this.ciudadesDisponibles = this.ciudadesPorEstado[estado];
      // Limpia ciudad al cambiar estado
      this.accountForm.patchValue({ city: '' });
      this.accountForm.get('city')?.enable({ emitEvent: false });
    } else {
      this.ciudadesDisponibles = [];
      this.accountForm.patchValue({ city: '' });
      this.accountForm.get('city')?.disable({ emitEvent: false });
    }
  }

  private markFormGroupTouched() {
    Object.keys(this.accountForm.controls).forEach(key => {
      const control = this.accountForm.get(key);
      if (control) {
        control.markAsTouched();
      }
    });
  }

  // Errores de validación
  getFieldError(fieldName: string): string {
    const field = this.accountForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) return `${this.getFieldLabel(fieldName)} es requerido`;
      if (field.errors['email']) return 'Email inválido';
      if (field.errors['minlength']) return `${this.getFieldLabel(fieldName)} es muy corto`;
      if (field.errors['pattern']) return `${this.getFieldLabel(fieldName)} tiene formato inválido`;
      if (field.errors['min']) return `${this.getFieldLabel(fieldName)} debe ser mayor a ${field.errors['min'].min}`;
    }
    return '';
  }

  private getFieldLabel(fieldName: string): string {
    const labels: { [key: string]: string } = {
      firstName: 'Nombres',
      lastName: 'Apellidos',
      rfc: 'RFC',
      curp: 'CURP',
      email: 'Correo Electrónico',
      phone: 'Teléfono',
      estado: 'Estado',
      city: 'Ciudad',
      address: 'Dirección',
      postalCode: 'Código Postal',
      occupation: 'Ocupación',
      monthlyIncome: 'Ingresos Mensuales',
      accountType: 'Tipo de Cuenta',
      initialDeposit: 'Depósito Inicial'
    };
    return labels[fieldName] || fieldName;
  }
}

