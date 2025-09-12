import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prestamos-solicitud',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prestamos-solicitud.component.html',
  styleUrl: './prestamos-solicitud.component.css'
})
export class PrestamosSolicitudComponent {

  // Datos del formulario - México
  solicitante = {
    nombres: '',
    apellidos: '',
    rfc: '',
    curp: '',
    email: '',
    telefono: '',
    estado: '',
    ciudad: '',
    direccion: '',
    codigoPostal: ''
  };

  laboral = {
    ocupacion: '',
    empleador: '',
    anosTraboajo: null,
    ingresosMensuales: '',
    otrosIngresos: '',
    gastosMensuales: ''
  };

  prestamo = {
    tipo: '',
    monto: '',
    plazo: ''
  };

  // Tipos de préstamo en México
  tiposPrestamo = [
    { value: 'personal', label: 'Préstamo Personal' },
    { value: 'hipotecario', label: 'Crédito Hipotecario' },
    { value: 'automotriz', label: 'Crédito Automotriz' },
    { value: 'nomina', label: 'Préstamo de Nómina' },
    { value: 'pyme', label: 'Crédito PyME' }
  ];

  // Montos sugeridos en pesos mexicanos
  montosSugeridos = [
    { value: '50000', label: '$50,000 MXN' },
    { value: '100000', label: '$100,000 MXN' },
    { value: '250000', label: '$250,000 MXN' },
    { value: '500000', label: '$500,000 MXN' },
    { value: '1000000', label: '$1,000,000 MXN' }
  ];

  // Plazos en meses
  plazos = [
    { value: '12', label: '12 meses' },
    { value: '24', label: '24 meses' },
    { value: '36', label: '36 meses' },
    { value: '48', label: '48 meses' },
    { value: '60', label: '60 meses' }
  ];

  // Estados de México
  estados = [
    'Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche', 'Coahuila',
    'Colima', 'Chiapas', 'Chihuahua', 'Ciudad de México', 'Durango', 'Guanajuato',
    'Guerrero', 'Hidalgo', 'Jalisco', 'México', 'Michoacán', 'Morelos', 'Nayarit',
    'Nuevo León', 'Oaxaca', 'Puebla', 'Querétaro', 'Quintana Roo', 'San Luis Potosí',
    'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatán', 'Zacatecas'
  ];

  // Ciudades principales por estado
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

  // Lista de ciudades para el estado seleccionado
  ciudadesDisponibles: string[] = [];

  constructor(private router: Router) {}

  // Método para regresar al dashboard
  goBack() {
    this.router.navigate(['/dashboard']);
  }

  // Método para cancelar
  onCancel() {
    this.goBack();
  }

  // Método para actualizar ciudades cuando se selecciona un estado
  onEstadoChange(estado: string) {
    if (estado && this.ciudadesPorEstado[estado]) {
      this.ciudadesDisponibles = this.ciudadesPorEstado[estado];
      // Limpiar la selección de ciudad cuando cambia el estado
      this.solicitante.ciudad = '';
    } else {
      this.ciudadesDisponibles = [];
    }
  }

  // Método para enviar la solicitud
  onSubmit() {
    // Validación básica
    if (this.isFormValid()) {
      console.log('Solicitud de préstamo:', {
        solicitante: this.solicitante,
        laboral: this.laboral,
        prestamo: this.prestamo
      });
      
      alert('Solicitud enviada exitosamente. Un ejecutivo se pondrá en contacto con usted.');
      this.goBack();
    } else {
      alert('Por favor, complete todos los campos requeridos.');
    }
  }

  // Validación del formulario
  private isFormValid(): boolean {
    return !!(
      this.solicitante.nombres &&
      this.solicitante.apellidos &&
      this.solicitante.rfc &&
      this.solicitante.curp &&
      this.solicitante.email &&
      this.solicitante.telefono &&
      this.solicitante.estado &&
      this.solicitante.ciudad &&
      this.solicitante.direccion &&
      this.solicitante.codigoPostal &&
      this.laboral.ocupacion &&
      this.laboral.empleador &&
      this.laboral.anosTraboajo &&
      this.laboral.ingresosMensuales &&
      this.laboral.gastosMensuales &&
      this.prestamo.tipo &&
      this.prestamo.monto &&
      this.prestamo.plazo
    );
  }
}