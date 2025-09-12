import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-cancelar-cuenta',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cancelar-cuenta.component.html',
  styleUrl: './cancelar-cuenta.component.css'
})
export class CancelarCuentaComponent {
  cancelForm: FormGroup;
  isSubmitting = signal(false);

  // Opciones para motivos de cierre - México
  closeReasons = [
    { value: 'insatisfaccion_servicio', label: 'Insatisfacción con el servicio' },
    { value: 'cambio_banco', label: 'Cambio a otro banco' },
    { value: 'costos_elevados', label: 'Costos y comisiones elevadas' },
    { value: 'falta_uso', label: 'Falta de uso de la cuenta' },
    { value: 'cambio_residencia', label: 'Cambio de residencia' },
    { value: 'fallecimiento', label: 'Fallecimiento del titular' },
    { value: 'cierre_negocio', label: 'Cierre de negocio' },
    { value: 'otros', label: 'Otros motivos' }
  ];

  // Bancos mexicanos principales
  bancosMexicanos = [
    'BBVA México',
    'Santander México',
    'Banamex (Citibanamex)',
    'Banorte',
    'HSBC México',
    'Scotiabank México',
    'Inbursa',
    'Azteca',
    'Afirme',
    'Mifel',
    'Invex',
    'Ve por Más',
    'Banco del Bajío',
    'Banregio',
    'Multiva',
    'Actinver',
    'Otro'
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.cancelForm = this.fb.group({
      // Datos del titular
      accountNumber: ['', [Validators.required, Validators.pattern(/^\d{10,20}$/)]],
      rfc: ['', [Validators.required, Validators.pattern(/^[A-ZÑ&]{3,4}\d{6}[A-V1-9][A-Z1-9][0-9A]$/)]],
      curp: ['', [Validators.required, Validators.pattern(/^[A-Z]{4}\d{6}[HM][A-Z]{5}[A-Z0-9]\d$/)]],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^(\+52|52)?\s?[1-9]\d{9}$/)]],

      // Motivo de cierre
      closeReason: ['', Validators.required],

      // Transferencia de saldo (opcional)
      transferAccount: [''],
      destinationBank: [''],

      // Confirmación
      confirmIrreversible: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.cancelForm.valid) {
      this.isSubmitting.set(true);

      const formData = this.cancelForm.value;
      console.log('Datos de cancelación:', formData);

      // Simular proceso de cancelación
      setTimeout(() => {
        alert('¡Solicitud de cierre procesada exitosamente!\nRecibirás confirmación por correo electrónico en las próximas 24 horas.');
        this.isSubmitting.set(false);
        this.cancelForm.reset();
        
        // Redirigir al dashboard después de un tiempo
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 1000);
      }, 2000);
    } else {
      this.markFormGroupTouched();
    }
  }

  onCancel() {
    if (confirm('¿Estás seguro de que quieres salir? Se perderán los datos ingresados.')) {
      this.router.navigate(['/dashboard']);
    }
  }

  goBack() {
    if (confirm('¿Estás seguro de que quieres salir? Se perderán los datos ingresados.')) {
      this.router.navigate(['/dashboard']);
    }
  }

  private markFormGroupTouched() {
    Object.keys(this.cancelForm.controls).forEach(key => {
      const control = this.cancelForm.get(key);
      if (control) {
        control.markAsTouched();
      }
    });
  }

  // Métodos de utilidad para validación
  getFieldError(fieldName: string): string {
    const field = this.cancelForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) return `${this.getFieldLabel(fieldName)} es requerido`;
      if (field.errors['email']) return 'Email inválido';
      if (field.errors['minlength']) return `${this.getFieldLabel(fieldName)} es muy corto`;
      if (field.errors['pattern']) return `${this.getFieldLabel(fieldName)} tiene formato inválido`;
      if (field.errors['requiredTrue']) return 'Debe confirmar que entiende que el proceso es irreversible';
    }
    return '';
  }

  private getFieldLabel(fieldName: string): string {
    const labels: { [key: string]: string } = {
      accountNumber: 'Número de Cuenta',
      rfc: 'RFC',
      curp: 'CURP',
      firstName: 'Nombres',
      lastName: 'Apellidos',
      email: 'Correo Electrónico',
      phone: 'Teléfono',
      closeReason: 'Motivo de Cierre',
      transferAccount: 'Cuenta de Transferencia',
      destinationBank: 'Banco de Destino',
      confirmIrreversible: 'Confirmación'
    };
    return labels[fieldName] || fieldName;
  }

  // Método para verificar si el formulario está completo
  isFormComplete(): boolean {
    const requiredFields = ['accountNumber', 'rfc', 'curp', 'firstName', 'lastName', 'email', 'phone', 'closeReason'];
    const allFieldsValid = requiredFields.every(fieldName => {
      const field = this.cancelForm.get(fieldName);
      return field?.valid;
    });

    const isConfirmed = this.cancelForm.get('confirmIrreversible')?.value;

    return allFieldsValid && isConfirmed;
  }
}

