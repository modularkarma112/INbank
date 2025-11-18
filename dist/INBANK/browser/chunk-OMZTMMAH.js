import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-QL6LS3FT.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  HttpClient,
  NgForOf,
  NgIf,
  Router,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-LQXE4UJV.js";

// src/app/pages/prestamos-solicitud/prestamos-solicitud.component.ts
function PrestamosSolicitudComponent_div_52_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 34)(1, "td", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 32);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 32);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 35)(12, "button", 26);
    \u0275\u0275listener("click", function PrestamosSolicitudComponent_div_52_tr_18_Template_button_click_12_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.seleccionarCliente(c_r2));
    });
    \u0275\u0275text(13, "Seleccionar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", c_r2.nombres, " ", c_r2.apellido_paterno, " ", c_r2.apellido_materno);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.rfc);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.telefono);
  }
}
function PrestamosSolicitudComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "table", 30)(3, "thead")(4, "tr")(5, "th", 31);
    \u0275\u0275text(6, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 31);
    \u0275\u0275text(8, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 31);
    \u0275\u0275text(10, "RFC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 31);
    \u0275\u0275text(12, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 31);
    \u0275\u0275text(14, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 32);
    \u0275\u0275text(16, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275template(18, PrestamosSolicitudComponent_div_52_tr_18_Template, 14, 7, "tr", 33);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r2.resultados);
  }
}
function PrestamosSolicitudComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1, " Cliente seleccionado: ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", ctx_r2.seleccion.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate4(" \u2014 ", ctx_r2.seleccion.nombres, " ", ctx_r2.seleccion.apellido_paterno, " ", ctx_r2.seleccion.apellido_materno, " (", ctx_r2.seleccion.rfc, ") ");
  }
}
function PrestamosSolicitudComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "span");
    \u0275\u0275text(4, "\u{1F464}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 11)(6, "h2");
    \u0275\u0275text(7, "Datos del Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "Se llenan autom\xE1ticamente desde el registro");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 12)(11, "div", 13)(12, "label");
    \u0275\u0275text(13, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 13)(16, "label");
    \u0275\u0275text(17, "RFC");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 13)(20, "label");
    \u0275\u0275text(21, "CURP");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 13)(24, "label");
    \u0275\u0275text(25, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 13)(28, "label");
    \u0275\u0275text(29, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 13)(32, "label");
    \u0275\u0275text(33, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 13)(36, "label");
    \u0275\u0275text(37, "Ciudad");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 38)(40, "label");
    \u0275\u0275text(41, "Direcci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "input", 37);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275property("value", ctx_r2.seleccion.nombres + " " + (ctx_r2.seleccion.apellido_paterno || "") + " " + (ctx_r2.seleccion.apellido_materno || ""));
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r2.seleccion.rfc);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r2.seleccion.curp);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r2.seleccion.email);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r2.seleccion.telefono);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r2.seleccion.estado);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r2.seleccion.ciudad);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r2.seleccion.direccion);
  }
}
function PrestamosSolicitudComponent_div_55_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1, " Mora diaria estimada por atraso: ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " por d\xEDa ");
    \u0275\u0275element(6, "br");
    \u0275\u0275text(7, " Si se atrasa 30 d\xEDas, total estimado: ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(4, 2, ctx_r2.monto * 4e-3, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("$", ctx_r2.ejemploTotalCon30DiasMora());
  }
}
function PrestamosSolicitudComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "span");
    \u0275\u0275text(4, "\uFFFD");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 11)(6, "h2");
    \u0275\u0275text(7, "Datos del Pr\xE9stamo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "Inter\xE9s base del 3.333% mensual y penalizaci\xF3n de 0.4% diario por mora");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 12)(11, "div", 13)(12, "label");
    \u0275\u0275text(13, "Tipo de pr\xE9stamo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "select", 39);
    \u0275\u0275twoWayListener("ngModelChange", function PrestamosSolicitudComponent_div_55_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.tipo, $event) || (ctx_r2.tipo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(15, "option", 40);
    \u0275\u0275text(16, "Seleccione...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 41);
    \u0275\u0275text(18, "Personal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 42);
    \u0275\u0275text(20, "Hipotecario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 43);
    \u0275\u0275text(22, "Automotriz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 44);
    \u0275\u0275text(24, "N\xF3mina");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 45);
    \u0275\u0275text(26, "PyME");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 13)(28, "label");
    \u0275\u0275text(29, "Monto (MXN)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function PrestamosSolicitudComponent_div_55_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.monto, $event) || (ctx_r2.monto = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 13)(32, "label");
    \u0275\u0275text(33, "Plazo (meses)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "select", 47);
    \u0275\u0275twoWayListener("ngModelChange", function PrestamosSolicitudComponent_div_55_Template_select_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.plazoMeses, $event) || (ctx_r2.plazoMeses = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(35, "option", 48);
    \u0275\u0275text(36, "Seleccione...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option", 48);
    \u0275\u0275text(38, "6");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "option", 48);
    \u0275\u0275text(40, "12");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "option", 48);
    \u0275\u0275text(42, "24");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "option", 48);
    \u0275\u0275text(44, "36");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 13)(46, "label");
    \u0275\u0275text(47, "Pago mensual estimado");
    \u0275\u0275elementEnd();
    \u0275\u0275element(48, "input", 37);
    \u0275\u0275pipe(49, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 13)(51, "label");
    \u0275\u0275text(52, "Total a pagar (sin mora)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "input", 37);
    \u0275\u0275pipe(54, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(55, PrestamosSolicitudComponent_div_55_div_55_Template, 10, 5, "div", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.tipo);
    \u0275\u0275advance(16);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.monto);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.plazoMeses);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 6);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 12);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 24);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 36);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", \u0275\u0275pipeBind2(49, 11, ctx_r2.cuotaMensual || 0, "1.2-2"));
    \u0275\u0275advance(5);
    \u0275\u0275property("value", \u0275\u0275pipeBind2(54, 14, ctx_r2.totalBase || 0, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.monto && ctx_r2.plazoMeses);
  }
}
var _PrestamosSolicitudComponent = class _PrestamosSolicitudComponent {
  constructor(router, http) {
    this.router = router;
    this.http = http;
    this.buscar = { id: "", rfc: "", curp: "", email: "", telefono: "" };
    this.resultados = [];
    this.seleccion = null;
    this.buscarNombreLibre = "";
    this.tipo = "";
    this.monto = null;
    this.plazoMeses = null;
    this.tasaMensual = 0.033333;
    this.penalizacionDiaria = 4e-3;
  }
  get totalBase() {
    if (!this.monto || !this.plazoMeses)
      return 0;
    const t = this.monto * (1 + this.tasaMensual * this.plazoMeses);
    return Math.round(t * 100) / 100;
  }
  get cuotaMensual() {
    if (!this.plazoMeses)
      return 0;
    return Math.round(this.totalBase / this.plazoMeses * 100) / 100;
  }
  ejemploTotalCon30DiasMora() {
    if (!this.monto || !this.plazoMeses)
      return 0;
    const t = this.totalBase + this.monto * this.penalizacionDiaria * 30;
    return Math.round(t * 100) / 100;
  }
  goBack() {
    this.router.navigate(["/dashboard"]);
  }
  onCancel() {
    this.goBack();
  }
  // Buscar cliente
  buscarCliente() {
    const params = {};
    for (const k of Object.keys(this.buscar)) {
      const v = this.buscar[k];
      if (v)
        params[k] = v;
    }
    if (Object.keys(params).length === 0 && this.buscarNombreLibre?.trim()) {
      params.q = this.buscarNombreLibre.trim();
    }
    if (!Object.keys(params).length) {
      alert("Ingrese al menos un criterio");
      return;
    }
    this.http.get("/api/clientes/buscar", { params }).subscribe({
      next: (rows) => {
        this.resultados = rows || [];
        this.seleccion = this.resultados.length === 1 ? this.resultados[0] : null;
      },
      error: (err) => {
        console.error(err);
        alert("Error buscando cliente");
      }
    });
  }
  seleccionarCliente(c) {
    this.seleccion = c;
  }
  // Enviar solicitud
  onSubmit() {
    if (!this.seleccion?.id) {
      alert("Seleccione un cliente");
      return;
    }
    if (!this.tipo) {
      alert("Seleccione tipo de pr\xE9stamo");
      return;
    }
    if (!this.monto || !this.plazoMeses) {
      alert("Capture monto y plazo");
      return;
    }
    const payload = {
      cliente_id: this.seleccion.id,
      tipo_prestamo: this.tipo,
      monto: this.monto,
      plazo_meses: this.plazoMeses
    };
    this.http.post("/api/prestamos", payload).subscribe({
      next: (r) => {
        const id = r?.id;
        alert(`Solicitud #${id} enviada y en revisi\xF3n. Se notific\xF3 por correo si est\xE1 configurado.`);
        this.router.navigate(["/clientes", this.seleccion.id]);
      },
      error: (err) => {
        console.error(err);
        alert(err?.error?.message || "No se pudo crear la solicitud");
      }
    });
  }
};
_PrestamosSolicitudComponent.\u0275fac = function PrestamosSolicitudComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PrestamosSolicitudComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HttpClient));
};
_PrestamosSolicitudComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrestamosSolicitudComponent, selectors: [["app-prestamos-solicitud"]], decls: 61, vars: 11, consts: [[1, "container"], [1, "header"], [1, "back-button", 3, "click"], [1, "header-content"], [1, "currency-icon"], [1, "header-text"], [1, "form-container"], [3, "ngSubmit"], [1, "form-section"], [1, "section-header"], [1, "section-icon"], [1, "section-title"], [1, "form-grid"], [1, "form-group"], ["type", "text", "name", "buscar_q", "placeholder", "Nombre, email, tel\xE9fono...", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "buscar_id", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "buscar_rfc", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "buscar_curp", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "buscar_email", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "buscar_telefono", 3, "ngModelChange", "ngModel"], [1, "button-group", 2, "justify-content", "flex-start", "margin-top", "10px"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["style", "margin-top: 15px;", 4, "ngIf"], ["class", "info-banner", "style", "margin-top:10px;", 4, "ngIf"], ["class", "form-section", 4, "ngIf"], [1, "button-group"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [2, "margin-top", "15px"], [2, "overflow", "auto"], [2, "width", "100%", "border-collapse", "collapse"], [2, "text-align", "left", "padding", "6px"], [2, "padding", "6px"], ["style", "border-top:1px solid #eee;", 4, "ngFor", "ngForOf"], [2, "border-top", "1px solid #eee"], [2, "padding", "6px", "text-align", "center"], [1, "info-banner", 2, "margin-top", "10px"], ["type", "text", "readonly", "", 3, "value"], [1, "form-group", 2, "grid-column", "span 2"], ["name", "tipo_prestamo", "required", "", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "personal"], ["value", "hipotecario"], ["value", "automotriz"], ["value", "nomina"], ["value", "pyme"], ["type", "number", "name", "monto", "min", "1000", "step", "100", "required", "", 3, "ngModelChange", "ngModel"], ["name", "plazoMeses", "required", "", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["class", "info-banner", 4, "ngIf"], [1, "info-banner"]], template: function PrestamosSolicitudComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
    \u0275\u0275listener("click", function PrestamosSolicitudComponent_Template_button_click_2_listener() {
      return ctx.goBack();
    });
    \u0275\u0275text(3, "\u2190");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "div", 4);
    \u0275\u0275text(6, "\u{1F4B2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 5)(8, "h1");
    \u0275\u0275text(9, "Solicitud de Pr\xE9stamo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11, "Buscar cliente, capturar datos y enviar a revisi\xF3n");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 6)(13, "form", 7);
    \u0275\u0275listener("ngSubmit", function PrestamosSolicitudComponent_Template_form_ngSubmit_13_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(14, "div", 8)(15, "div", 9)(16, "div", 10)(17, "span");
    \u0275\u0275text(18, "\u{1F50E}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 11)(20, "h2");
    \u0275\u0275text(21, "Buscar Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p");
    \u0275\u0275text(23, "Busque por ID, RFC, CURP, email o tel\xE9fono");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 12)(25, "div", 13)(26, "label");
    \u0275\u0275text(27, "Texto libre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function PrestamosSolicitudComponent_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.buscarNombreLibre, $event) || (ctx.buscarNombreLibre = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 13)(30, "label");
    \u0275\u0275text(31, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function PrestamosSolicitudComponent_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.buscar.id, $event) || (ctx.buscar.id = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 13)(34, "label");
    \u0275\u0275text(35, "RFC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function PrestamosSolicitudComponent_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.buscar.rfc, $event) || (ctx.buscar.rfc = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 13)(38, "label");
    \u0275\u0275text(39, "CURP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function PrestamosSolicitudComponent_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.buscar.curp, $event) || (ctx.buscar.curp = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 13)(42, "label");
    \u0275\u0275text(43, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function PrestamosSolicitudComponent_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.buscar.email, $event) || (ctx.buscar.email = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 13)(46, "label");
    \u0275\u0275text(47, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function PrestamosSolicitudComponent_Template_input_ngModelChange_48_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.buscar.telefono, $event) || (ctx.buscar.telefono = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 20)(50, "button", 21);
    \u0275\u0275listener("click", function PrestamosSolicitudComponent_Template_button_click_50_listener() {
      return ctx.buscarCliente();
    });
    \u0275\u0275text(51, "Buscar");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(52, PrestamosSolicitudComponent_div_52_Template, 19, 1, "div", 22)(53, PrestamosSolicitudComponent_div_53_Template, 5, 5, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(54, PrestamosSolicitudComponent_div_54_Template, 43, 8, "div", 24)(55, PrestamosSolicitudComponent_div_55_Template, 56, 17, "div", 24);
    \u0275\u0275elementStart(56, "div", 25)(57, "button", 26);
    \u0275\u0275listener("click", function PrestamosSolicitudComponent_Template_button_click_57_listener() {
      return ctx.onCancel();
    });
    \u0275\u0275text(58, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "button", 27);
    \u0275\u0275text(60, "Enviar Solicitud");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(28);
    \u0275\u0275twoWayProperty("ngModel", ctx.buscarNombreLibre);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.buscar.id);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.buscar.rfc);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.buscar.curp);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.buscar.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.buscar.telefono);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.resultados.length > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.seleccion && ctx.resultados.length !== 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.seleccion);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.seleccion);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx.seleccion);
  }
}, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, NgModel, NgForm, DecimalPipe], styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";\n\n\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #c3cfe2 100%);\n  font-family:\n    Inter,\n    system-ui,\n    "Segoe UI",\n    Roboto,\n    Helvetica,\n    Arial,\n    sans-serif;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 30px 20px;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 40px;\n  gap: 15px;\n}\n.back-button[_ngcontent-%COMP%] {\n  background: rgba(240, 242, 247, 0.75);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  border-radius: 10px;\n  font-size: 20px;\n  cursor: pointer;\n  color: #0BA5FF;\n  width: 45px;\n  height: 45px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n  font-weight: 600;\n}\n.back-button[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.9);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(11, 165, 255, 0.2);\n}\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.currency-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background: #0BA5FF;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 24px;\n  font-weight: bold;\n  box-shadow: 0 8px 25px rgba(11, 165, 255, 0.3);\n}\n.header-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 600;\n  color: #1d1d1d;\n  margin-bottom: 4px;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\n.header-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(35, 35, 35, 0.9);\n  font-size: 0.9rem;\n  font-weight: 300;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\n.form-container[_ngcontent-%COMP%] {\n  background: rgba(240, 242, 247, 0.75);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-radius: 16px;\n  padding: 40px;\n  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.4);\n}\n.form-section[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n.form-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  margin-bottom: 25px;\n}\n.section-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: #0BA5FF;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  box-shadow: 0 4px 15px rgba(11, 165, 255, 0.3);\n}\n.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 600;\n  color: #1d1d1d;\n  margin-bottom: 4px;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\n.section-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #4e4e4e;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  font-weight: 400;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #1d1d1d;\n  margin-bottom: 25px;\n  font-weight: 600;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 25px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\nlabel[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: #1d1d1d;\n  margin-bottom: 8px;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\n.required[_ngcontent-%COMP%] {\n  color: #e74c3c;\n}\ninput[type=text][_ngcontent-%COMP%], \ninput[type=email][_ngcontent-%COMP%], \ninput[type=tel][_ngcontent-%COMP%], \ninput[type=number][_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 16px 18px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  font-size: 1rem;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  font-weight: 400;\n  background: rgba(255, 255, 255, 0.9);\n  transition: all 0.3s ease;\n  outline: none;\n}\ninput[type=text][_ngcontent-%COMP%]:focus, \ninput[type=email][_ngcontent-%COMP%]:focus, \ninput[type=tel][_ngcontent-%COMP%]:focus, \ninput[type=number][_ngcontent-%COMP%]:focus, \nselect[_ngcontent-%COMP%]:focus {\n  border-color: #0BA5FF;\n  background: rgba(255, 255, 255, 1);\n  box-shadow: 0 0 0 4px rgba(11, 165, 255, 0.08);\n}\ninput[type=text][_ngcontent-%COMP%]::placeholder, \ninput[type=email][_ngcontent-%COMP%]::placeholder, \ninput[type=tel][_ngcontent-%COMP%]::placeholder, \ninput[type=number][_ngcontent-%COMP%]::placeholder {\n  color: #4e4e4e;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\nselect[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.button-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  margin-top: 50px;\n  justify-content: flex-end;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 16px 30px;\n  border-radius: 4px;\n  font-size: 1rem;\n  font-weight: 600;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.9);\n  color: #4e4e4e;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 1);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #0BA5FF;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #1976D2 0%,\n      #1565C0 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(33, 150, 243, 0.3);\n}\n.btn-primary[_ngcontent-%COMP%]:active, \n.btn-secondary[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n@media (max-width: 768px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-group.full-width[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n  .button-group[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .container[_ngcontent-%COMP%] {\n    padding: 20px 15px;\n  }\n  .form-container[_ngcontent-%COMP%] {\n    padding: 25px 20px;\n  }\n  .header-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n}\n/*# sourceMappingURL=prestamos-solicitud.component.css.map */'] });
var PrestamosSolicitudComponent = _PrestamosSolicitudComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrestamosSolicitudComponent, [{
    type: Component,
    args: [{ selector: "app-prestamos-solicitud", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="container">\r
  <div class="header">\r
    <button class="back-button" (click)="goBack()">\u2190</button>\r
    <div class="header-content">\r
      <div class="currency-icon">\u{1F4B2}</div>\r
      <div class="header-text">\r
        <h1>Solicitud de Pr\xE9stamo</h1>\r
        <p>Buscar cliente, capturar datos y enviar a revisi\xF3n</p>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div class="form-container">\r
    <form (ngSubmit)="onSubmit()">\r
      <div class="form-section">\r
        <div class="section-header">\r
          <div class="section-icon"><span>\u{1F50E}</span></div>\r
          <div class="section-title">\r
            <h2>Buscar Cliente</h2>\r
            <p>Busque por ID, RFC, CURP, email o tel\xE9fono</p>\r
          </div>\r
        </div>\r
        <div class="form-grid">\r
          <div class="form-group"><label>Texto libre</label><input type="text" [(ngModel)]="buscarNombreLibre" name="buscar_q" placeholder="Nombre, email, tel\xE9fono..."/></div>\r
          <div class="form-group"><label>ID</label><input type="text" [(ngModel)]="buscar.id" name="buscar_id" /></div>\r
          <div class="form-group"><label>RFC</label><input type="text" [(ngModel)]="buscar.rfc" name="buscar_rfc" /></div>\r
          <div class="form-group"><label>CURP</label><input type="text" [(ngModel)]="buscar.curp" name="buscar_curp" /></div>\r
          <div class="form-group"><label>Email</label><input type="email" [(ngModel)]="buscar.email" name="buscar_email" /></div>\r
          <div class="form-group"><label>Tel\xE9fono</label><input type="text" [(ngModel)]="buscar.telefono" name="buscar_telefono" /></div>\r
        </div>\r
        <div class="button-group" style="justify-content:flex-start; margin-top: 10px;">\r
          <button type="button" class="btn btn-primary" (click)="buscarCliente()">Buscar</button>\r
        </div>\r
\r
        <div *ngIf="resultados.length > 1" style="margin-top: 15px;">\r
          <div style="overflow:auto;">\r
            <table style="width:100%; border-collapse:collapse;">\r
              <thead>\r
                <tr>\r
                  <th style="text-align:left; padding:6px;">ID</th>\r
                  <th style="text-align:left; padding:6px;">Nombre</th>\r
                  <th style="text-align:left; padding:6px;">RFC</th>\r
                  <th style="text-align:left; padding:6px;">Email</th>\r
                  <th style="text-align:left; padding:6px;">Tel\xE9fono</th>\r
                  <th style="padding:6px;">Acciones</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                <tr *ngFor="let c of resultados" style="border-top:1px solid #eee;">\r
                  <td style="padding:6px;">{{c.id}}</td>\r
                  <td style="padding:6px;">{{c.nombres}} {{c.apellido_paterno}} {{c.apellido_materno}}</td>\r
                  <td style="padding:6px;">{{c.rfc}}</td>\r
                  <td style="padding:6px;">{{c.email}}</td>\r
                  <td style="padding:6px;">{{c.telefono}}</td>\r
                  <td style="padding:6px; text-align:center;">\r
                    <button type="button" class="btn btn-secondary" (click)="seleccionarCliente(c)">Seleccionar</button>\r
                  </td>\r
                </tr>\r
              </tbody>\r
            </table>\r
          </div>\r
        </div>\r
        <div *ngIf="seleccion && resultados.length !== 1" class="info-banner" style="margin-top:10px;">\r
          Cliente seleccionado: <strong>#{{seleccion.id}}</strong> \u2014 {{seleccion.nombres}} {{seleccion.apellido_paterno}} {{seleccion.apellido_materno}} ({{seleccion.rfc}})\r
        </div>\r
      </div>\r
\r
      <div class="form-section" *ngIf="seleccion">\r
        <div class="section-header">\r
          <div class="section-icon"><span>\u{1F464}</span></div>\r
          <div class="section-title">\r
            <h2>Datos del Cliente</h2>\r
            <p>Se llenan autom\xE1ticamente desde el registro</p>\r
          </div>\r
        </div>\r
        <div class="form-grid">\r
          <div class="form-group"><label>Nombre</label><input type="text" [value]="seleccion.nombres + ' ' + (seleccion.apellido_paterno||'') + ' ' + (seleccion.apellido_materno||'')" readonly></div>\r
          <div class="form-group"><label>RFC</label><input type="text" [value]="seleccion.rfc" readonly></div>\r
          <div class="form-group"><label>CURP</label><input type="text" [value]="seleccion.curp" readonly></div>\r
          <div class="form-group"><label>Email</label><input type="text" [value]="seleccion.email" readonly></div>\r
          <div class="form-group"><label>Tel\xE9fono</label><input type="text" [value]="seleccion.telefono" readonly></div>\r
          <div class="form-group"><label>Estado</label><input type="text" [value]="seleccion.estado" readonly></div>\r
          <div class="form-group"><label>Ciudad</label><input type="text" [value]="seleccion.ciudad" readonly></div>\r
          <div class="form-group" style="grid-column: span 2;"><label>Direcci\xF3n</label><input type="text" [value]="seleccion.direccion" readonly></div>\r
        </div>\r
      </div>\r
\r
      <div class="form-section" *ngIf="seleccion">\r
        <div class="section-header">\r
          <div class="section-icon"><span>\uFFFD</span></div>\r
          <div class="section-title">\r
            <h2>Datos del Pr\xE9stamo</h2>\r
            <p>Inter\xE9s base del 3.333% mensual y penalizaci\xF3n de 0.4% diario por mora</p>\r
          </div>\r
        </div>\r
        <div class="form-grid">\r
          <div class="form-group">\r
            <label>Tipo de pr\xE9stamo</label>\r
            <select [(ngModel)]="tipo" name="tipo_prestamo" required>\r
              <option value="">Seleccione...</option>\r
              <option value="personal">Personal</option>\r
              <option value="hipotecario">Hipotecario</option>\r
              <option value="automotriz">Automotriz</option>\r
              <option value="nomina">N\xF3mina</option>\r
              <option value="pyme">PyME</option>\r
            </select>\r
          </div>\r
          <div class="form-group">\r
            <label>Monto (MXN)</label>\r
            <input type="number" [(ngModel)]="monto" name="monto" min="1000" step="100" required />\r
          </div>\r
          <div class="form-group">\r
            <label>Plazo (meses)</label>\r
            <select [(ngModel)]="plazoMeses" name="plazoMeses" required>\r
              <option [ngValue]="null">Seleccione...</option>\r
              <option [ngValue]="6">6</option>\r
              <option [ngValue]="12">12</option>\r
              <option [ngValue]="24">24</option>\r
              <option [ngValue]="36">36</option>\r
            </select>\r
          </div>\r
          <div class="form-group">\r
            <label>Pago mensual estimado</label>\r
            <input type="text" [value]="(cuotaMensual || 0) | number:'1.2-2'" readonly />\r
          </div>\r
          <div class="form-group">\r
            <label>Total a pagar (sin mora)</label>\r
            <input type="text" [value]="(totalBase || 0) | number:'1.2-2'" readonly />\r
          </div>\r
        </div>\r
        <div class="info-banner" *ngIf="monto && plazoMeses">\r
          Mora diaria estimada por atraso: <strong>\${{ (monto * 0.004) | number:'1.2-2' }}</strong> por d\xEDa\r
          <br>\r
          Si se atrasa 30 d\xEDas, total estimado: <strong>\${{ejemploTotalCon30DiasMora()}}</strong>\r
        </div>\r
      </div>\r
\r
      <div class="button-group">\r
        <button type="button" class="btn btn-secondary" (click)="onCancel()">Cancelar</button>\r
        <button type="submit" class="btn btn-primary" [disabled]="!seleccion">Enviar Solicitud</button>\r
      </div>\r
    </form>\r
  </div>\r
</div>`, styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";\n\n/* src/app/pages/prestamos-solicitud/prestamos-solicitud.component.css */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n:host {\n  display: block;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #c3cfe2 100%);\n  font-family:\n    Inter,\n    system-ui,\n    "Segoe UI",\n    Roboto,\n    Helvetica,\n    Arial,\n    sans-serif;\n}\n.container {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 30px 20px;\n}\n.header {\n  display: flex;\n  align-items: center;\n  margin-bottom: 40px;\n  gap: 15px;\n}\n.back-button {\n  background: rgba(240, 242, 247, 0.75);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  border-radius: 10px;\n  font-size: 20px;\n  cursor: pointer;\n  color: #0BA5FF;\n  width: 45px;\n  height: 45px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n  font-weight: 600;\n}\n.back-button:hover {\n  background: rgba(255, 255, 255, 0.9);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(11, 165, 255, 0.2);\n}\n.header-content {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.currency-icon {\n  width: 50px;\n  height: 50px;\n  background: #0BA5FF;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 24px;\n  font-weight: bold;\n  box-shadow: 0 8px 25px rgba(11, 165, 255, 0.3);\n}\n.header-text h1 {\n  font-size: 2rem;\n  font-weight: 600;\n  color: #1d1d1d;\n  margin-bottom: 4px;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\n.header-text p {\n  color: rgba(35, 35, 35, 0.9);\n  font-size: 0.9rem;\n  font-weight: 300;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\n.form-container {\n  background: rgba(240, 242, 247, 0.75);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-radius: 16px;\n  padding: 40px;\n  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.4);\n}\n.form-section {\n  margin-bottom: 50px;\n}\n.form-section:last-child {\n  margin-bottom: 0;\n}\n.section-header {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  margin-bottom: 25px;\n}\n.section-icon {\n  width: 40px;\n  height: 40px;\n  background: #0BA5FF;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  box-shadow: 0 4px 15px rgba(11, 165, 255, 0.3);\n}\n.section-title h2 {\n  font-size: 1.3rem;\n  font-weight: 600;\n  color: #1d1d1d;\n  margin-bottom: 4px;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\n.section-title p {\n  font-size: 0.85rem;\n  color: #4e4e4e;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  font-weight: 400;\n}\nh3 {\n  font-size: 1.1rem;\n  color: #1d1d1d;\n  margin-bottom: 25px;\n  font-weight: 600;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 25px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n}\n.form-group.full-width {\n  grid-column: span 2;\n}\nlabel {\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: #1d1d1d;\n  margin-bottom: 8px;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\n.required {\n  color: #e74c3c;\n}\ninput[type=text],\ninput[type=email],\ninput[type=tel],\ninput[type=number],\nselect {\n  width: 100%;\n  padding: 16px 18px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  font-size: 1rem;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  font-weight: 400;\n  background: rgba(255, 255, 255, 0.9);\n  transition: all 0.3s ease;\n  outline: none;\n}\ninput[type=text]:focus,\ninput[type=email]:focus,\ninput[type=tel]:focus,\ninput[type=number]:focus,\nselect:focus {\n  border-color: #0BA5FF;\n  background: rgba(255, 255, 255, 1);\n  box-shadow: 0 0 0 4px rgba(11, 165, 255, 0.08);\n}\ninput[type=text]::placeholder,\ninput[type=email]::placeholder,\ninput[type=tel]::placeholder,\ninput[type=number]::placeholder {\n  color: #4e4e4e;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\nselect {\n  cursor: pointer;\n}\n.button-group {\n  display: flex;\n  gap: 20px;\n  margin-top: 50px;\n  justify-content: flex-end;\n}\n.btn {\n  padding: 16px 30px;\n  border-radius: 4px;\n  font-size: 1rem;\n  font-weight: 600;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n}\n.btn-secondary {\n  background: rgba(255, 255, 255, 0.9);\n  color: #4e4e4e;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.btn-secondary:hover {\n  background: rgba(255, 255, 255, 1);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n}\n.btn-primary {\n  background: #0BA5FF;\n  color: white;\n}\n.btn-primary:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #1976D2 0%,\n      #1565C0 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(33, 150, 243, 0.3);\n}\n.btn-primary:active,\n.btn-secondary:active {\n  transform: translateY(0);\n}\n@media (max-width: 768px) {\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n  .form-group.full-width {\n    grid-column: span 1;\n  }\n  .button-group {\n    flex-direction: column;\n  }\n  .container {\n    padding: 20px 15px;\n  }\n  .form-container {\n    padding: 25px 20px;\n  }\n  .header-text h1 {\n    font-size: 1.5rem;\n  }\n  .section-title h2 {\n    font-size: 1.1rem;\n  }\n}\n/*# sourceMappingURL=prestamos-solicitud.component.css.map */\n'] }]
  }], () => [{ type: Router }, { type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrestamosSolicitudComponent, { className: "PrestamosSolicitudComponent", filePath: "src/app/pages/prestamos-solicitud/prestamos-solicitud.component.ts", lineNumber: 14 });
})();
export {
  PrestamosSolicitudComponent
};
//# sourceMappingURL=chunk-OMZTMMAH.js.map
