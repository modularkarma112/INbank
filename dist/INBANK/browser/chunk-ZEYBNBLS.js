import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-QL6LS3FT.js";
import {
  CommonModule,
  Component,
  HttpClient,
  NgForOf,
  NgIf,
  Router,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-LQXE4UJV.js";

// src/app/pages/abrir-cuenta/abrir-cuenta.component.ts
function AbrirCuentaComponent_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("firstName"), " ");
  }
}
function AbrirCuentaComponent_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("lastName"), " ");
  }
}
function AbrirCuentaComponent_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("rfc"), " ");
  }
}
function AbrirCuentaComponent_span_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("curp"), " ");
  }
}
function AbrirCuentaComponent_span_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("email"), " ");
  }
}
function AbrirCuentaComponent_span_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("phone"), " ");
  }
}
function AbrirCuentaComponent_option_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const estado_r2 = ctx.$implicit;
    \u0275\u0275property("value", estado_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(estado_r2);
  }
}
function AbrirCuentaComponent_span_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("estado"), " ");
  }
}
function AbrirCuentaComponent_option_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const city_r3 = ctx.$implicit;
    \u0275\u0275property("value", city_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(city_r3);
  }
}
function AbrirCuentaComponent_span_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("city"), " ");
  }
}
function AbrirCuentaComponent_span_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("address"), " ");
  }
}
function AbrirCuentaComponent_span_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("postalCode"), " ");
  }
}
function AbrirCuentaComponent_option_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const occupation_r4 = ctx.$implicit;
    \u0275\u0275property("value", occupation_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(occupation_r4);
  }
}
function AbrirCuentaComponent_span_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("occupation"), " ");
  }
}
function AbrirCuentaComponent_span_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("monthlyIncome"), " ");
  }
}
function AbrirCuentaComponent_option_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r5 = ctx.$implicit;
    \u0275\u0275property("value", type_r5.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(type_r5.label);
  }
}
function AbrirCuentaComponent_span_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("accountType"), " ");
  }
}
function AbrirCuentaComponent_span_121_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("initialDeposit"), " ");
  }
}
function AbrirCuentaComponent_span_126_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Crear Cuenta");
    \u0275\u0275elementEnd();
  }
}
function AbrirCuentaComponent_span_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1, " Procesando... ");
    \u0275\u0275elementEnd();
  }
}
var _AbrirCuentaComponent = class _AbrirCuentaComponent {
  constructor(fb, router, http) {
    this.fb = fb;
    this.router = router;
    this.http = http;
    this.isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : []);
    this.estados = [
      "Aguascalientes",
      "Baja California",
      "Baja California Sur",
      "Campeche",
      "Coahuila",
      "Colima",
      "Chiapas",
      "Chihuahua",
      "Ciudad de M\xE9xico",
      "Durango",
      "Guanajuato",
      "Guerrero",
      "Hidalgo",
      "Jalisco",
      "M\xE9xico",
      "Michoac\xE1n",
      "Morelos",
      "Nayarit",
      "Nuevo Le\xF3n",
      "Oaxaca",
      "Puebla",
      "Quer\xE9taro",
      "Quintana Roo",
      "San Luis Potos\xED",
      "Sinaloa",
      "Sonora",
      "Tabasco",
      "Tamaulipas",
      "Tlaxcala",
      "Veracruz",
      "Yucat\xE1n",
      "Zacatecas"
    ];
    this.ciudadesPorEstado = {
      "Aguascalientes": ["Aguascalientes", "Calvillo", "Jes\xFAs Mar\xEDa", "Pabell\xF3n de Arteaga"],
      "Baja California": ["Tijuana", "Mexicali", "Ensenada", "Rosarito", "Tecate"],
      "Baja California Sur": ["La Paz", "Los Cabos", "Cabo San Lucas", "San Jos\xE9 del Cabo"],
      "Campeche": ["Campeche", "Ciudad del Carmen", "Champot\xF3n", "Esc\xE1rcega"],
      "Coahuila": ["Saltillo", "Torre\xF3n", "Monclova", "Piedras Negras", "Acu\xF1a"],
      "Colima": ["Colima", "Manzanillo", "Villa de \xC1lvarez", "Tecom\xE1n"],
      "Chiapas": ["Tuxtla Guti\xE9rrez", "San Crist\xF3bal de las Casas", "Tapachula", "Comit\xE1n"],
      "Chihuahua": ["Chihuahua", "Ciudad Ju\xE1rez", "Delicias", "Parral", "Cuauht\xE9moc"],
      "Ciudad de M\xE9xico": ["\xC1lvaro Obreg\xF3n", "Azcapotzalco", "Benito Ju\xE1rez", "Coyoac\xE1n", "Cuajimalpa", "Cuauht\xE9moc", "Gustavo A. Madero", "Iztacalco", "Iztapalapa", "Magdalena Contreras", "Miguel Hidalgo", "Milpa Alta", "Tl\xE1huac", "Tlalpan", "Venustiano Carranza", "Xochimilco"],
      "Durango": ["Durango", "G\xF3mez Palacio", "Lerdo", "Santiago Papasquiaro"],
      "Guanajuato": ["Le\xF3n", "Irapuato", "Celaya", "Salamanca", "Guanajuato", "P\xE9njamo"],
      "Guerrero": ["Acapulco", "Chilpancingo", "Iguala", "Taxco", "Zihuatanejo"],
      "Hidalgo": ["Pachuca", "Tulancingo", "Tizayuca", "Huejutla"],
      "Jalisco": ["Guadalajara", "Zapopan", "Tlaquepaque", "Tonal\xE1", "Puerto Vallarta", "Tlajomulco"],
      "M\xE9xico": ["Toluca", "Ecatepec", "Naucalpan", "Nezahualc\xF3yotl", "Tlalnepantla", "Chimalhuac\xE1n"],
      "Michoac\xE1n": ["Morelia", "Uruapan", "Zamora", "L\xE1zaro C\xE1rdenas", "Apatzing\xE1n"],
      "Morelos": ["Cuernavaca", "Jiutepec", "Temixco", "Cuautla", "Yautepec"],
      "Nayarit": ["Tepic", "Bah\xEDa de Banderas", "Compostela", "Santiago Ixcuintla"],
      "Nuevo Le\xF3n": ["Monterrey", "Guadalupe", "San Nicol\xE1s de los Garza", "Apodaca", "Santa Catarina"],
      "Oaxaca": ["Oaxaca de Ju\xE1rez", "Salina Cruz", "Tuxtepec", "Juchit\xE1n", "Huajuapan"],
      "Puebla": ["Puebla", "Tehuac\xE1n", "San Mart\xEDn Texmelucan", "Atlixco", "Cholula"],
      "Quer\xE9taro": ["Quer\xE9taro", "San Juan del R\xEDo", "Corregidora", "El Marqu\xE9s"],
      "Quintana Roo": ["Canc\xFAn", "Chetumal", "Playa del Carmen", "Cozumel", "Tulum"],
      "San Luis Potos\xED": ["San Luis Potos\xED", "Soledad de Graciano S\xE1nchez", "Ciudad Valles", "Rioverde"],
      "Sinaloa": ["Culiac\xE1n", "Mazatl\xE1n", "Los Mochis", "Guasave", "Guam\xFAchil"],
      "Sonora": ["Hermosillo", "Ciudad Obreg\xF3n", "Nogales", "San Luis R\xEDo Colorado", "Navojoa"],
      "Tabasco": ["Villahermosa", "C\xE1rdenas", "Comalcalco", "Huimanguillo"],
      "Tamaulipas": ["Reynosa", "Matamoros", "Nuevo Laredo", "Tampico", "Victoria"],
      "Tlaxcala": ["Tlaxcala", "Apizaco", "Huamantla", "San Pablo del Monte"],
      "Veracruz": ["Veracruz", "Xalapa", "Coatzacoalcos", "C\xF3rdoba", "Orizaba", "Poza Rica"],
      "Yucat\xE1n": ["M\xE9rida", "Kanas\xEDn", "Um\xE1n", "Progreso", "Valladolid"],
      "Zacatecas": ["Zacatecas", "Fresnillo", "Guadalupe", "Jerez", "R\xEDo Grande"]
    };
    this.ciudadesDisponibles = [];
    this.occupations = [
      "Empleado",
      "Independiente",
      "Empresario",
      "Profesionista",
      "Estudiante",
      "Jubilado",
      "Hogar",
      "Comerciante",
      "T\xE9cnico",
      "Obrero",
      "Funcionario P\xFAblico",
      "Docente",
      "Otro"
    ];
    this.accountTypes = [
      { value: "nomina", label: "Cuenta de N\xF3mina" },
      { value: "ahorro", label: "Cuenta de Ahorro" },
      { value: "inversion", label: "Cuenta de Inversi\xF3n" }
    ];
    this.accountForm = this.fb.group({
      // Datos cliente
      firstName: ["", [Validators.required, Validators.minLength(2)]],
      lastName: ["", [Validators.required, Validators.minLength(2)]],
      rfc: ["", [Validators.required, Validators.pattern(/^[A-ZÑ&]{3,4}\d{6}[A-V1-9][A-Z1-9][0-9A]$/)]],
      curp: ["", [Validators.required, Validators.pattern(/^[A-Z]{4}\d{6}[HM][A-Z]{5}[A-Z0-9]\d$/)]],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required, Validators.pattern(/^(\+52|52)?\s?[1-9]\d{9}$/)]],
      estado: ["", Validators.required],
      city: ["", Validators.required],
      address: ["", [Validators.required, Validators.minLength(10)]],
      postalCode: ["", [Validators.required, Validators.pattern(/^\d{5}$/)]],
      // Info financiera
      occupation: ["", Validators.required],
      monthlyIncome: ["", [Validators.required, Validators.min(0)]],
      // Tipo cuenta
      accountType: ["", Validators.required],
      initialDeposit: ["", [Validators.required, Validators.min(500)]]
    });
    this.accountForm.get("city")?.disable({ emitEvent: false });
  }
  onSubmit() {
    if (this.accountForm.valid) {
      this.isSubmitting.set(true);
      const formData = this.accountForm.value;
      const payload = {
        nombres: formData.firstName,
        apellido_paterno: (formData.lastName || "").split(" ")[0] || "",
        apellido_materno: (formData.lastName || "").split(" ")[1] || "",
        rfc: formData.rfc,
        curp: formData.curp,
        email: formData.email,
        telefono: (formData.phone || "").replace(/\D/g, "").slice(-10),
        estado: formData.estado,
        ciudad: formData.city,
        direccion: formData.address,
        ingresos_mensuales: formData.monthlyIncome
      };
      const base = window["API_BASE"] || "http://localhost:4000";
      const telefono = payload.telefono;
      this.http.get(`${base}/api/clientes/existe`, { params: { rfc: payload.rfc, curp: payload.curp, email: payload.email, telefono } }).subscribe({
        next: (chk) => {
          if (chk?.exists) {
            const f = chk.fields || {};
            alert("Ya existe un cliente con: " + [f.rfc && "RFC", f.curp && "CURP", f.email && "Email", f.telefono && "Tel\xE9fono"].filter(Boolean).join(", "));
            this.isSubmitting.set(false);
            return;
          }
          const payloadCompleto = __spreadProps(__spreadValues({}, payload), {
            // Mapear valor seleccionado -> id esperado por el backend
            tipo_cuenta_id: formData.accountType === "nomina" ? 1 : formData.accountType === "ahorro" ? 2 : formData.accountType === "inversion" ? 3 : 1,
            deposito_inicial: Number(formData.initialDeposit)
          });
          this.http.post(`${base}/api/clientes/con-cuenta`, payloadCompleto).subscribe({
            next: (res) => {
              alert(`\xA1Cuenta creada exitosamente!

Cliente ID: ${res.cliente_id}
N\xFAmero de cuenta: ${res.numero_cuenta}
Saldo inicial: $${res.saldo_inicial.toFixed(2)} MXN

Se ha enviado un email de confirmaci\xF3n.`);
              this.isSubmitting.set(false);
              this.goBack();
            },
            error: (err) => {
              console.error("Error creando cliente con cuenta:", err);
              const baseMsg = err?.error?.message || err?.message || "Error creando cliente con cuenta";
              const detail = err?.error?.error || err?.error?.sqlMessage || "";
              const msg = detail ? `${baseMsg}

Detalle: ${detail}` : baseMsg;
              alert(msg);
              this.isSubmitting.set(false);
            }
          });
        },
        error: (err) => {
          console.error(err);
          alert("Error validando duplicados");
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
    this.router.navigate(["/dashboard"]);
  }
  // Actualiza ciudades al cambiar estado
  onEstadoChange(estado) {
    if (estado && this.ciudadesPorEstado[estado]) {
      this.ciudadesDisponibles = this.ciudadesPorEstado[estado];
      this.accountForm.patchValue({ city: "" });
      this.accountForm.get("city")?.enable({ emitEvent: false });
    } else {
      this.ciudadesDisponibles = [];
      this.accountForm.patchValue({ city: "" });
      this.accountForm.get("city")?.disable({ emitEvent: false });
    }
  }
  markFormGroupTouched() {
    Object.keys(this.accountForm.controls).forEach((key) => {
      const control = this.accountForm.get(key);
      if (control) {
        control.markAsTouched();
      }
    });
  }
  // Errores de validación
  getFieldError(fieldName) {
    const field = this.accountForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors["required"])
        return `${this.getFieldLabel(fieldName)} es requerido`;
      if (field.errors["email"])
        return "Email inv\xE1lido";
      if (field.errors["minlength"])
        return `${this.getFieldLabel(fieldName)} es muy corto`;
      if (field.errors["pattern"])
        return `${this.getFieldLabel(fieldName)} tiene formato inv\xE1lido`;
      if (field.errors["min"])
        return `${this.getFieldLabel(fieldName)} debe ser mayor a ${field.errors["min"].min}`;
    }
    return "";
  }
  getFieldLabel(fieldName) {
    const labels = {
      firstName: "Nombres",
      lastName: "Apellidos",
      rfc: "RFC",
      curp: "CURP",
      email: "Correo Electr\xF3nico",
      phone: "Tel\xE9fono",
      estado: "Estado",
      city: "Ciudad",
      address: "Direcci\xF3n",
      postalCode: "C\xF3digo Postal",
      occupation: "Ocupaci\xF3n",
      monthlyIncome: "Ingresos Mensuales",
      accountType: "Tipo de Cuenta",
      initialDeposit: "Dep\xF3sito Inicial"
    };
    return labels[fieldName] || fieldName;
  }
};
_AbrirCuentaComponent.\u0275fac = function AbrirCuentaComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AbrirCuentaComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HttpClient));
};
_AbrirCuentaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AbrirCuentaComponent, selectors: [["app-abrir-cuenta"]], decls: 128, vars: 51, consts: [[1, "open-account-container"], [1, "form-header"], [1, "back-button", 3, "click"], [1, "header-content"], [1, "header-icon"], [1, "account-form", 3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "section-header"], [1, "section-icon"], [1, "section-description"], [1, "form-row"], [1, "form-group"], ["for", "firstName"], ["id", "firstName", "type", "text", "formControlName", "firstName", "placeholder", "Ingresa tu nombre"], ["class", "error-message", 4, "ngIf"], ["for", "lastName"], ["id", "lastName", "type", "text", "formControlName", "lastName", "placeholder", "Ingresa tus apellidos"], ["for", "rfc"], ["id", "rfc", "type", "text", "formControlName", "rfc", "placeholder", "ABCD123456EFG"], ["for", "curp"], ["id", "curp", "type", "text", "formControlName", "curp", "placeholder", "ABCD123456HDFRML09"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "correo@gmail.com"], ["for", "phone"], ["id", "phone", "type", "tel", "formControlName", "phone", "placeholder", "55 1234 5678"], ["for", "estado"], ["id", "estado", "formControlName", "estado", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "city"], ["id", "city", "formControlName", "city"], ["for", "address"], ["id", "address", "type", "text", "formControlName", "address", "placeholder", "Calle, n\xFAmero, colonia"], ["for", "postalCode"], ["id", "postalCode", "type", "text", "formControlName", "postalCode", "placeholder", "12345"], ["for", "occupation"], ["id", "occupation", "formControlName", "occupation"], ["for", "monthlyIncome"], ["id", "monthlyIncome", "type", "number", "formControlName", "monthlyIncome", "placeholder", "15000"], ["for", "accountType"], ["id", "accountType", "formControlName", "accountType"], ["for", "initialDeposit"], ["id", "initialDeposit", "type", "number", "formControlName", "initialDeposit", "placeholder", "500"], [1, "form-actions"], ["type", "button", 1, "btn-cancel", 3, "click"], ["type", "submit", 1, "btn-submit", 3, "disabled"], [4, "ngIf"], ["class", "loading", 4, "ngIf"], [1, "error-message"], [3, "value"], [1, "loading"]], template: function AbrirCuentaComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
    \u0275\u0275listener("click", function AbrirCuentaComponent_Template_button_click_2_listener() {
      return ctx.goBack();
    });
    \u0275\u0275text(3, " \u2190 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "div", 4);
    \u0275\u0275text(6, " \u{1F464} ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "h1");
    \u0275\u0275text(9, "Abrir Nueva Cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11, "Formulario de apertura bancaria ejecutiva");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "form", 5);
    \u0275\u0275listener("ngSubmit", function AbrirCuentaComponent_Template_form_ngSubmit_12_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(13, "section", 6)(14, "div", 7)(15, "div", 8);
    \u0275\u0275text(16, " \u{1F464} ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "h2");
    \u0275\u0275text(18, "Datos del Cliente");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "p", 9);
    \u0275\u0275text(20, "Complete todos los campos requeridos para procesar la apertura de cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 10)(22, "div", 11)(23, "label", 12);
    \u0275\u0275text(24, "Nombres*");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 13);
    \u0275\u0275template(26, AbrirCuentaComponent_span_26_Template, 2, 1, "span", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 11)(28, "label", 15);
    \u0275\u0275text(29, "Apellidos*");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "input", 16);
    \u0275\u0275template(31, AbrirCuentaComponent_span_31_Template, 2, 1, "span", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 10)(33, "div", 11)(34, "label", 17);
    \u0275\u0275text(35, "RFC*");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "input", 18);
    \u0275\u0275template(37, AbrirCuentaComponent_span_37_Template, 2, 1, "span", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 11)(39, "label", 19);
    \u0275\u0275text(40, "CURP*");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "input", 20);
    \u0275\u0275template(42, AbrirCuentaComponent_span_42_Template, 2, 1, "span", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 10)(44, "div", 11)(45, "label", 21);
    \u0275\u0275text(46, "Correo Electr\xF3nico*");
    \u0275\u0275elementEnd();
    \u0275\u0275element(47, "input", 22);
    \u0275\u0275template(48, AbrirCuentaComponent_span_48_Template, 2, 1, "span", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 11)(50, "label", 23);
    \u0275\u0275text(51, "Tel\xE9fono*");
    \u0275\u0275elementEnd();
    \u0275\u0275element(52, "input", 24);
    \u0275\u0275template(53, AbrirCuentaComponent_span_53_Template, 2, 1, "span", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 11)(55, "label", 25);
    \u0275\u0275text(56, "Estado*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "select", 26);
    \u0275\u0275listener("change", function AbrirCuentaComponent_Template_select_change_57_listener($event) {
      return ctx.onEstadoChange($event.target.value);
    });
    \u0275\u0275elementStart(58, "option", 27);
    \u0275\u0275text(59, "Selecciona tu estado");
    \u0275\u0275elementEnd();
    \u0275\u0275template(60, AbrirCuentaComponent_option_60_Template, 2, 2, "option", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275template(61, AbrirCuentaComponent_span_61_Template, 2, 1, "span", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 10)(63, "div", 11)(64, "label", 29);
    \u0275\u0275text(65, "Ciudad*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "select", 30)(67, "option", 27);
    \u0275\u0275text(68);
    \u0275\u0275elementEnd();
    \u0275\u0275template(69, AbrirCuentaComponent_option_69_Template, 2, 2, "option", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275template(70, AbrirCuentaComponent_span_70_Template, 2, 1, "span", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 10)(72, "div", 11)(73, "label", 31);
    \u0275\u0275text(74, "Direcci\xF3n completa*");
    \u0275\u0275elementEnd();
    \u0275\u0275element(75, "input", 32);
    \u0275\u0275template(76, AbrirCuentaComponent_span_76_Template, 2, 1, "span", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "div", 11)(78, "label", 33);
    \u0275\u0275text(79, "C\xF3digo Postal*");
    \u0275\u0275elementEnd();
    \u0275\u0275element(80, "input", 34);
    \u0275\u0275template(81, AbrirCuentaComponent_span_81_Template, 2, 1, "span", 14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(82, "section", 6)(83, "div", 7)(84, "div", 8);
    \u0275\u0275text(85, " \u{1F4BC} ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "h2");
    \u0275\u0275text(87, "Informaci\xF3n Financiera");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "div", 10)(89, "div", 11)(90, "label", 35);
    \u0275\u0275text(91, "Ocupaci\xF3n*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "select", 36)(93, "option", 27);
    \u0275\u0275text(94, "Profesi\xF3n u ocupaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275template(95, AbrirCuentaComponent_option_95_Template, 2, 2, "option", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275template(96, AbrirCuentaComponent_span_96_Template, 2, 1, "span", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "div", 11)(98, "label", 37);
    \u0275\u0275text(99, "Ingresos mensuales* (MXN)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(100, "input", 38);
    \u0275\u0275template(101, AbrirCuentaComponent_span_101_Template, 2, 1, "span", 14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(102, "section", 6)(103, "div", 7)(104, "div", 8);
    \u0275\u0275text(105, " \u{1F4B3} ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "h2");
    \u0275\u0275text(107, "Detalles de la cuenta");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(108, "div", 10)(109, "div", 11)(110, "label", 39);
    \u0275\u0275text(111, "Tipo de cuenta*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "select", 40)(113, "option", 27);
    \u0275\u0275text(114, "Selecciona el tipo de cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275template(115, AbrirCuentaComponent_option_115_Template, 2, 2, "option", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275template(116, AbrirCuentaComponent_span_116_Template, 2, 1, "span", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "div", 11)(118, "label", 41);
    \u0275\u0275text(119, "Dep\xF3sito inicial* (MXN)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(120, "input", 42);
    \u0275\u0275template(121, AbrirCuentaComponent_span_121_Template, 2, 1, "span", 14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(122, "div", 43)(123, "button", 44);
    \u0275\u0275listener("click", function AbrirCuentaComponent_Template_button_click_123_listener() {
      return ctx.onCancel();
    });
    \u0275\u0275text(124, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "button", 45);
    \u0275\u0275template(126, AbrirCuentaComponent_span_126_Template, 2, 0, "span", 46)(127, AbrirCuentaComponent_span_127_Template, 2, 0, "span", 47);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_17_0;
    \u0275\u0275advance(12);
    \u0275\u0275property("formGroup", ctx.accountForm);
    \u0275\u0275advance(13);
    \u0275\u0275classProp("error", ctx.getFieldError("firstName"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.getFieldError("firstName"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ctx.getFieldError("lastName"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.getFieldError("lastName"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("error", ctx.getFieldError("rfc"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.getFieldError("rfc"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ctx.getFieldError("curp"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.getFieldError("curp"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("error", ctx.getFieldError("email"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.getFieldError("email"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ctx.getFieldError("phone"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.getFieldError("phone"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ctx.getFieldError("estado"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx.estados);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.getFieldError("estado"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("error", ctx.getFieldError("city"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(!((tmp_17_0 = ctx.accountForm.get("estado")) == null ? null : tmp_17_0.value) ? "Primero selecciona un estado" : "Selecciona tu ciudad");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.ciudadesDisponibles);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.getFieldError("city"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("error", ctx.getFieldError("address"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.getFieldError("address"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ctx.getFieldError("postalCode"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.getFieldError("postalCode"));
    \u0275\u0275advance(11);
    \u0275\u0275classProp("error", ctx.getFieldError("occupation"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx.occupations);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.getFieldError("occupation"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ctx.getFieldError("monthlyIncome"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.getFieldError("monthlyIncome"));
    \u0275\u0275advance(11);
    \u0275\u0275classProp("error", ctx.getFieldError("accountType"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx.accountTypes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.getFieldError("accountType"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ctx.getFieldError("initialDeposit"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.getFieldError("initialDeposit"));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx.accountForm.invalid || ctx.isSubmitting());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isSubmitting());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isSubmitting());
  }
}, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #c3cfe2 100%);\n  font-family:\n    Inter,\n    system-ui,\n    "Segoe UI",\n    Roboto,\n    Helvetica,\n    Arial,\n    sans-serif;\n}\n.open-account-container[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 30px 20px;\n}\n.form-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 40px;\n  gap: 20px;\n}\n.back-button[_ngcontent-%COMP%] {\n  background: rgba(240, 242, 247, 0.75);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  border-radius: 12px;\n  font-size: 24px;\n  cursor: pointer;\n  color: #0BA5FF;\n  width: 50px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n  font-weight: 600;\n}\n.back-button[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.9);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(11, 165, 255, 0.2);\n}\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.header-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background: #0BA5FF;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 32px;\n  box-shadow: 0 8px 25px rgba(11, 165, 255, 0.3);\n}\n.header-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  font-weight: 600;\n  color: #1d1d1d;\n  margin-bottom: 4px;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\n.header-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(35, 35, 35, 0.9);\n  font-size: 0.95rem;\n  font-weight: 300;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\n.account-form[_ngcontent-%COMP%] {\n  background: rgba(240, 242, 247, 0.75);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-radius: 16px;\n  padding: 40px;\n  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.4);\n}\n.form-section[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n.form-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 30px;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  margin-bottom: 8px;\n}\n.section-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: #0BA5FF;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  box-shadow: 0 4px 15px rgba(11, 165, 255, 0.3);\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 600;\n  color: #1d1d1d;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\n.section-description[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #4e4e4e;\n  margin-bottom: 30px;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  font-weight: 400;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 25px;\n  margin-bottom: 25px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\nlabel[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: #1d1d1d;\n  margin-bottom: 8px;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\ninput[type=text][_ngcontent-%COMP%], \ninput[type=email][_ngcontent-%COMP%], \ninput[type=tel][_ngcontent-%COMP%], \ninput[type=number][_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 16px 18px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  font-size: 1rem;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  font-weight: 400;\n  background: rgba(255, 255, 255, 0.9);\n  transition: all 0.3s ease;\n  outline: none;\n}\ninput[type=text][_ngcontent-%COMP%]:focus, \ninput[type=email][_ngcontent-%COMP%]:focus, \ninput[type=tel][_ngcontent-%COMP%]:focus, \ninput[type=number][_ngcontent-%COMP%]:focus, \nselect[_ngcontent-%COMP%]:focus {\n  border-color: #0BA5FF;\n  background: rgba(255, 255, 255, 1);\n  box-shadow: 0 0 0 4px rgba(11, 165, 255, 0.08);\n}\ninput[type=text][_ngcontent-%COMP%]::placeholder, \ninput[type=email][_ngcontent-%COMP%]::placeholder, \ninput[type=tel][_ngcontent-%COMP%]::placeholder, \ninput[type=number][_ngcontent-%COMP%]::placeholder {\n  color: #4e4e4e;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\nselect[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.error[_ngcontent-%COMP%] {\n  border-color: #e74c3c !important;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #e74c3c;\n  font-size: 0.8rem;\n  margin-top: 5px;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  justify-content: flex-end;\n  margin-top: 40px;\n}\n.btn-cancel[_ngcontent-%COMP%], \n.btn-submit[_ngcontent-%COMP%] {\n  padding: 16px 30px;\n  border-radius: 4px;\n  font-size: 1rem;\n  font-weight: 600;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: none;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.9);\n  color: #4e4e4e;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 1);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n}\n.btn-submit[_ngcontent-%COMP%] {\n  background: #0BA5FF;\n  color: white;\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #1976D2 0%,\n      #1565C0 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(33, 150, 243, 0.3);\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  background: #ccc;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n@media (max-width: 768px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-group.full-width[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .open-account-container[_ngcontent-%COMP%] {\n    padding: 20px 15px;\n  }\n  .account-form[_ngcontent-%COMP%] {\n    padding: 25px 20px;\n  }\n  .header-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n  .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n}\n/*# sourceMappingURL=abrir-cuenta.component.css.map */'] });
var AbrirCuentaComponent = _AbrirCuentaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbrirCuentaComponent, [{
    type: Component,
    args: [{ selector: "app-abrir-cuenta", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<div class="open-account-container">\r
  <div class="form-header">\r
    <button class="back-button" (click)="goBack()">\r
      \u2190\r
    </button>\r
    <div class="header-content">\r
      <div class="header-icon">\r
        \u{1F464}\r
      </div>\r
      <div>\r
        <h1>Abrir Nueva Cuenta</h1>\r
        <p>Formulario de apertura bancaria ejecutiva</p>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <form [formGroup]="accountForm" (ngSubmit)="onSubmit()" class="account-form">\r
\r
    <!-- Datos del Cliente -->\r
    <section class="form-section">\r
      <div class="section-header">\r
        <div class="section-icon">\r
          \u{1F464}\r
        </div>\r
        <h2>Datos del Cliente</h2>\r
      </div>\r
      <p class="section-description">Complete todos los campos requeridos para procesar la apertura de cuenta</p>\r
      \r
      <div class="form-row">\r
        <div class="form-group">\r
          <label for="firstName">Nombres*</label>\r
          <input\r
            id="firstName"\r
            type="text"\r
            formControlName="firstName"\r
            placeholder="Ingresa tu nombre"\r
            [class.error]="getFieldError('firstName')"\r
          >\r
          <span class="error-message" *ngIf="getFieldError('firstName')">\r
            {{ getFieldError('firstName') }}\r
          </span>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="lastName">Apellidos*</label>\r
          <input\r
            id="lastName"\r
            type="text"\r
            formControlName="lastName"\r
            placeholder="Ingresa tus apellidos"\r
            [class.error]="getFieldError('lastName')"\r
          >\r
          <span class="error-message" *ngIf="getFieldError('lastName')">\r
            {{ getFieldError('lastName') }}\r
          </span>\r
        </div>\r
      </div>\r
\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label for="rfc">RFC*</label>\r
          <input\r
            id="rfc"\r
            type="text"\r
            formControlName="rfc"\r
            placeholder="ABCD123456EFG"\r
            [class.error]="getFieldError('rfc')"\r
          >\r
          <span class="error-message" *ngIf="getFieldError('rfc')">\r
            {{ getFieldError('rfc') }}\r
          </span>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="curp">CURP*</label>\r
          <input\r
            id="curp"\r
            type="text"\r
            formControlName="curp"\r
            placeholder="ABCD123456HDFRML09"\r
            [class.error]="getFieldError('curp')"\r
          >\r
          <span class="error-message" *ngIf="getFieldError('curp')">\r
            {{ getFieldError('curp') }}\r
          </span>\r
        </div>\r
      </div>\r
\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label for="email">Correo Electr\xF3nico*</label>\r
          <input\r
            id="email"\r
            type="email"\r
            formControlName="email"\r
            placeholder="correo@gmail.com"\r
            [class.error]="getFieldError('email')"\r
          >\r
          <span class="error-message" *ngIf="getFieldError('email')">\r
            {{ getFieldError('email') }}\r
          </span>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="phone">Tel\xE9fono*</label>\r
          <input\r
            id="phone"\r
            type="tel"\r
            formControlName="phone"\r
            placeholder="55 1234 5678"\r
            [class.error]="getFieldError('phone')"\r
          >\r
          <span class="error-message" *ngIf="getFieldError('phone')">\r
            {{ getFieldError('phone') }}\r
          </span>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="estado">Estado*</label>\r
          <select\r
            id="estado"\r
            formControlName="estado"\r
            (change)="onEstadoChange($event.target.value)"\r
            [class.error]="getFieldError('estado')"\r
          >\r
            <option value="">Selecciona tu estado</option>\r
            <option *ngFor="let estado of estados" [value]="estado">{{ estado }}</option>\r
          </select>\r
          <span class="error-message" *ngIf="getFieldError('estado')">\r
            {{ getFieldError('estado') }}\r
          </span>\r
        </div>\r
      </div>\r
\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label for="city">Ciudad*</label>\r
          <select\r
            id="city"\r
            formControlName="city"\r
            [class.error]="getFieldError('city')"\r
          >\r
            <option value="">{{!accountForm.get('estado')?.value ? 'Primero selecciona un estado' : 'Selecciona tu ciudad'}}</option>\r
            <option *ngFor="let city of ciudadesDisponibles" [value]="city">{{ city }}</option>\r
          </select>\r
          <span class="error-message" *ngIf="getFieldError('city')">\r
            {{ getFieldError('city') }}\r
          </span>\r
        </div>\r
      </div>\r
\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label for="address">Direcci\xF3n completa*</label>\r
          <input\r
            id="address"\r
            type="text"\r
            formControlName="address"\r
            placeholder="Calle, n\xFAmero, colonia"\r
            [class.error]="getFieldError('address')"\r
          >\r
          <span class="error-message" *ngIf="getFieldError('address')">\r
            {{ getFieldError('address') }}\r
          </span>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="postalCode">C\xF3digo Postal*</label>\r
          <input\r
            id="postalCode"\r
            type="text"\r
            formControlName="postalCode"\r
            placeholder="12345"\r
            [class.error]="getFieldError('postalCode')"\r
          >\r
          <span class="error-message" *ngIf="getFieldError('postalCode')">\r
            {{ getFieldError('postalCode') }}\r
          </span>\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- Informaci\xF3n Financiera -->\r
    <section class="form-section">\r
      <div class="section-header">\r
        <div class="section-icon">\r
          \u{1F4BC}\r
        </div>\r
        <h2>Informaci\xF3n Financiera</h2>\r
      </div>\r
\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label for="occupation">Ocupaci\xF3n*</label>\r
          <select\r
            id="occupation"\r
            formControlName="occupation"\r
            [class.error]="getFieldError('occupation')"\r
          >\r
            <option value="">Profesi\xF3n u ocupaci\xF3n</option>\r
            <option *ngFor="let occupation of occupations" [value]="occupation">{{ occupation }}</option>\r
          </select>\r
          <span class="error-message" *ngIf="getFieldError('occupation')">\r
            {{ getFieldError('occupation') }}\r
          </span>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="monthlyIncome">Ingresos mensuales* (MXN)</label>\r
          <input\r
            id="monthlyIncome"\r
            type="number"\r
            formControlName="monthlyIncome"\r
            placeholder="15000"\r
            [class.error]="getFieldError('monthlyIncome')"\r
          >\r
          <span class="error-message" *ngIf="getFieldError('monthlyIncome')">\r
            {{ getFieldError('monthlyIncome') }}\r
          </span>\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- Detalles de la cuenta -->\r
    <section class="form-section">\r
      <div class="section-header">\r
        <div class="section-icon">\r
          \u{1F4B3}\r
        </div>\r
        <h2>Detalles de la cuenta</h2>\r
      </div>\r
\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label for="accountType">Tipo de cuenta*</label>\r
          <select\r
            id="accountType"\r
            formControlName="accountType"\r
            [class.error]="getFieldError('accountType')"\r
          >\r
            <option value="">Selecciona el tipo de cuenta</option>\r
            <option *ngFor="let type of accountTypes" [value]="type.value">{{ type.label }}</option>\r
          </select>\r
          <span class="error-message" *ngIf="getFieldError('accountType')">\r
            {{ getFieldError('accountType') }}\r
          </span>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="initialDeposit">Dep\xF3sito inicial* (MXN)</label>\r
          <input\r
            id="initialDeposit"\r
            type="number"\r
            formControlName="initialDeposit"\r
            placeholder="500"\r
            [class.error]="getFieldError('initialDeposit')"\r
          >\r
          <span class="error-message" *ngIf="getFieldError('initialDeposit')">\r
            {{ getFieldError('initialDeposit') }}\r
          </span>\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- Botones de acci\xF3n -->\r
    <div class="form-actions">\r
      <button type="button" class="btn-cancel" (click)="onCancel()">\r
        Cancelar\r
      </button>\r
      <button\r
        type="submit"\r
        class="btn-submit"\r
        [disabled]="accountForm.invalid || isSubmitting()"\r
      >\r
        <span *ngIf="!isSubmitting()">Crear Cuenta</span>\r
        <span *ngIf="isSubmitting()" class="loading">\r
          Procesando...\r
        </span>\r
      </button>\r
    </div>\r
\r
  </form>\r
</div>`, styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";\n\n/* src/app/pages/abrir-cuenta/abrir-cuenta.component.css */\n:host {\n  display: block;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #c3cfe2 100%);\n  font-family:\n    Inter,\n    system-ui,\n    "Segoe UI",\n    Roboto,\n    Helvetica,\n    Arial,\n    sans-serif;\n}\n.open-account-container {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 30px 20px;\n}\n.form-header {\n  display: flex;\n  align-items: center;\n  margin-bottom: 40px;\n  gap: 20px;\n}\n.back-button {\n  background: rgba(240, 242, 247, 0.75);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  border-radius: 12px;\n  font-size: 24px;\n  cursor: pointer;\n  color: #0BA5FF;\n  width: 50px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n  font-weight: 600;\n}\n.back-button:hover {\n  background: rgba(255, 255, 255, 0.9);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(11, 165, 255, 0.2);\n}\n.header-content {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.header-icon {\n  width: 60px;\n  height: 60px;\n  background: #0BA5FF;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 32px;\n  box-shadow: 0 8px 25px rgba(11, 165, 255, 0.3);\n}\n.header-content h1 {\n  font-size: 2.2rem;\n  font-weight: 600;\n  color: #1d1d1d;\n  margin-bottom: 4px;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\n.header-content p {\n  color: rgba(35, 35, 35, 0.9);\n  font-size: 0.95rem;\n  font-weight: 300;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\n.account-form {\n  background: rgba(240, 242, 247, 0.75);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-radius: 16px;\n  padding: 40px;\n  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.4);\n}\n.form-section {\n  margin-bottom: 50px;\n}\n.form-section:last-child {\n  margin-bottom: 30px;\n}\n.section-header {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  margin-bottom: 8px;\n}\n.section-icon {\n  width: 40px;\n  height: 40px;\n  background: #0BA5FF;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  box-shadow: 0 4px 15px rgba(11, 165, 255, 0.3);\n}\n.section-header h2 {\n  font-size: 1.4rem;\n  font-weight: 600;\n  color: #1d1d1d;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\n.section-description {\n  font-size: 0.9rem;\n  color: #4e4e4e;\n  margin-bottom: 30px;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  font-weight: 400;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 25px;\n  margin-bottom: 25px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n}\n.form-group.full-width {\n  grid-column: span 2;\n}\nlabel {\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: #1d1d1d;\n  margin-bottom: 8px;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\ninput[type=text],\ninput[type=email],\ninput[type=tel],\ninput[type=number],\nselect {\n  width: 100%;\n  padding: 16px 18px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  font-size: 1rem;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  font-weight: 400;\n  background: rgba(255, 255, 255, 0.9);\n  transition: all 0.3s ease;\n  outline: none;\n}\ninput[type=text]:focus,\ninput[type=email]:focus,\ninput[type=tel]:focus,\ninput[type=number]:focus,\nselect:focus {\n  border-color: #0BA5FF;\n  background: rgba(255, 255, 255, 1);\n  box-shadow: 0 0 0 4px rgba(11, 165, 255, 0.08);\n}\ninput[type=text]::placeholder,\ninput[type=email]::placeholder,\ninput[type=tel]::placeholder,\ninput[type=number]::placeholder {\n  color: #4e4e4e;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\nselect {\n  cursor: pointer;\n}\n.error {\n  border-color: #e74c3c !important;\n}\n.error-message {\n  color: #e74c3c;\n  font-size: 0.8rem;\n  margin-top: 5px;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\n.form-actions {\n  display: flex;\n  gap: 20px;\n  justify-content: flex-end;\n  margin-top: 40px;\n}\n.btn-cancel,\n.btn-submit {\n  padding: 16px 30px;\n  border-radius: 4px;\n  font-size: 1rem;\n  font-weight: 600;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: none;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n}\n.btn-cancel {\n  background: rgba(255, 255, 255, 0.9);\n  color: #4e4e4e;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.btn-cancel:hover {\n  background: rgba(255, 255, 255, 1);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n}\n.btn-submit {\n  background: #0BA5FF;\n  color: white;\n}\n.btn-submit:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #1976D2 0%,\n      #1565C0 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(33, 150, 243, 0.3);\n}\n.btn-submit:disabled {\n  background: #ccc;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.loading {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n@media (max-width: 768px) {\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n  .form-group.full-width {\n    grid-column: span 1;\n  }\n  .form-actions {\n    flex-direction: column;\n  }\n  .open-account-container {\n    padding: 20px 15px;\n  }\n  .account-form {\n    padding: 25px 20px;\n  }\n  .header-content h1 {\n    font-size: 1.8rem;\n  }\n  .section-header h2 {\n    font-size: 1.2rem;\n  }\n}\n/*# sourceMappingURL=abrir-cuenta.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: Router }, { type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AbrirCuentaComponent, { className: "AbrirCuentaComponent", filePath: "src/app/pages/abrir-cuenta/abrir-cuenta.component.ts", lineNumber: 14 });
})();
export {
  AbrirCuentaComponent
};
//# sourceMappingURL=chunk-ZEYBNBLS.js.map
