import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-QL6LS3FT.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  HttpClient,
  NgForOf,
  NgIf,
  RouterLink,
  computed,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-LQXE4UJV.js";

// src/app/pages/estado-cuenta/estado-cuenta.component.ts
function EstadoCuentaComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "button", 17);
    \u0275\u0275listener("click", function EstadoCuentaComponent_div_19_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.generarMostrarYEnviar());
    });
    \u0275\u0275text(2, "Generar y enviar correo");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.cargando());
  }
}
function EstadoCuentaComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function EstadoCuentaComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1, "Cargando\u2026");
    \u0275\u0275elementEnd();
  }
}
function EstadoCuentaComponent_div_22_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2022 ", ctx_r1.data().cliente.email);
  }
}
function EstadoCuentaComponent_div_22_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1, "Sin cuentas registradas.");
    \u0275\u0275elementEnd();
  }
}
function EstadoCuentaComponent_div_22_div_12_div_12_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 34);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 4, m_r3.fecha, "short"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r3.tipo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.concepto);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$ ", \u0275\u0275pipeBind2(10, 7, m_r3.monto, "1.2-2"));
  }
}
function EstadoCuentaComponent_div_22_div_12_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "table", 33)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Concepto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 34);
    \u0275\u0275text(11, "Monto");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275template(13, EstadoCuentaComponent_div_22_div_12_div_12_tr_13_Template, 11, 10, "tr", 35);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", c_r4.movimientos);
  }
}
function EstadoCuentaComponent_div_22_div_12_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1, "Sin movimientos en el per\xEDodo.");
    \u0275\u0275elementEnd();
  }
}
function EstadoCuentaComponent_div_22_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "div")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 30);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "strong");
    \u0275\u0275text(9, "Saldo:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, EstadoCuentaComponent_div_22_div_12_div_12_Template, 14, 1, "div", 31)(13, EstadoCuentaComponent_div_22_div_12_ng_template_13_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275element(15, "hr");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    const sinMovs_r5 = \u0275\u0275reference(14);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(c_r4.numero_cuenta);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.estatus);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" $ ", \u0275\u0275pipeBind2(11, 5, c_r4.saldo, "1.2-2"), " MXN ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", c_r4.movimientos == null ? null : c_r4.movimientos.length)("ngIfElse", sinMovs_r5);
  }
}
function EstadoCuentaComponent_div_22_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1, "Sin pr\xE9stamos registrados.");
    \u0275\u0275elementEnd();
  }
}
function EstadoCuentaComponent_div_22_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "div", 29)(3, "div")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 27);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 40);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 41);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r6.tipo_prestamo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", p_r6.id);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-success", p_r6.estatus === "PAGADO")("bg-warning", p_r6.estatus !== "PAGADO");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r6.estatus);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Plazo: ", p_r6.plazo_meses, " meses \u2022 Inter\xE9s: ", \u0275\u0275pipeBind2(12, 13, p_r6.interes, "1.2-2"), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Monto: $ ", \u0275\u0275pipeBind2(15, 16, p_r6.monto, "1.2-2"), " \u2022 Total est.: $ ", \u0275\u0275pipeBind2(16, 19, p_r6.total_estimado, "1.2-2"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("Pago mensual est.: $ ", \u0275\u0275pipeBind2(19, 22, p_r6.pago_mensual_est, "1.2-2"), " \u2022 Saldo pendiente est.: $ ", \u0275\u0275pipeBind2(20, 25, p_r6.saldo_pendiente_est, "1.2-2"));
  }
}
function EstadoCuentaComponent_div_22_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275template(1, EstadoCuentaComponent_div_22_div_16_div_1_Template, 21, 28, "div", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.data().prestamos);
  }
}
function EstadoCuentaComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "strong");
    \u0275\u0275text(3, "Cliente:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275template(5, EstadoCuentaComponent_div_22_span_5_Template, 2, 1, "span", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 23)(7, "small");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "h5");
    \u0275\u0275text(10, "Cuentas");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, EstadoCuentaComponent_div_22_div_11_Template, 2, 0, "div", 24)(12, EstadoCuentaComponent_div_22_div_12_Template, 16, 8, "div", 25);
    \u0275\u0275elementStart(13, "h5");
    \u0275\u0275text(14, "Pr\xE9stamos");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, EstadoCuentaComponent_div_22_div_15_Template, 2, 0, "div", 22)(16, EstadoCuentaComponent_div_22_div_16_Template, 2, 1, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.data().cliente.nombre, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.data().cliente.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Periodo: ", ctx_r1.etiquetaPeriodo());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !((tmp_4_0 = ctx_r1.data().cuentas) == null ? null : tmp_4_0.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.data().cuentas);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !((tmp_6_0 = ctx_r1.data().prestamos) == null ? null : tmp_6_0.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_7_0 = ctx_r1.data().prestamos) == null ? null : tmp_7_0.length);
  }
}
function EstadoCuentaComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "h5");
    \u0275\u0275text(2, "Comprobante (HTML)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("innerHTML", ctx_r1.html(), \u0275\u0275sanitizeHtml);
  }
}
var _EstadoCuentaComponent = class _EstadoCuentaComponent {
  constructor(http) {
    this.http = http;
    this.clienteIdInput = "";
    this.numeroCuentaInput = "";
    this.periodoInput = "";
    this.cargando = signal(false, ...ngDevMode ? [{ debugName: "cargando" }] : []);
    this.error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
    this.data = signal(null, ...ngDevMode ? [{ debugName: "data" }] : []);
    this.html = signal("", ...ngDevMode ? [{ debugName: "html" }] : []);
    this.etiquetaPeriodo = computed(() => {
      if (this.periodoInput && /^\d{4}-\d{2}$/.test(this.periodoInput))
        return this.periodoInput;
      const d = /* @__PURE__ */ new Date();
      return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    }, ...ngDevMode ? [{ debugName: "etiquetaPeriodo" }] : []);
  }
  baseUrl() {
    return window["API_BASE"] || "http://localhost:4000";
  }
  cargar() {
    this.error.set("");
    const per = (this.periodoInput || "").trim();
    if (!/^\d{4}-\d{2}$/.test(per)) {
      this.error.set("Periodo inv\xE1lido. Usa el formato YYYY-MM, por ejemplo 2025-11.");
      return;
    }
    const num = (this.numeroCuentaInput || "").trim();
    if (!num) {
      this.error.set("Ingresa el N\xFAmero de cuenta");
      return;
    }
    const params = { periodo: per };
    this.cargando.set(true);
    this.html.set("");
    this.http.get(`${this.baseUrl()}/api/estado-cuenta/por-cuenta/${encodeURIComponent(num)}`, { params }).subscribe({
      next: (resp) => {
        this.data.set(resp || null);
        this.clienteIdInput = String(resp?.cliente?.id || "");
        this.cargando.set(false);
      },
      error: (err) => {
        console.error("Estado de Cuenta: error GET", err);
        const msg = err?.error?.message || err?.message || "Error al cargar estado de cuenta";
        this.error.set(msg);
        this.cargando.set(false);
      }
    });
  }
  generarMostrarYEnviar() {
    const num = (this.numeroCuentaInput || "").trim();
    if (!num)
      return;
    const per = (this.periodoInput || "").trim();
    if (!/^\d{4}-\d{2}$/.test(per)) {
      this.error.set("Periodo inv\xE1lido. Usa el formato YYYY-MM.");
      return;
    }
    const params = { periodo: per };
    this.cargando.set(true);
    this.http.post(`${this.baseUrl()}/api/estado-cuenta/por-cuenta/${encodeURIComponent(num)}/generar`, null, { params }).subscribe({
      next: (resp) => {
        this.cargando.set(false);
        if (resp?.html)
          this.html.set(resp.html);
        alert("Estado de cuenta generado, mostrado en HTML y enviado por correo (PDF adjunto).");
      },
      error: (err) => {
        console.error(err);
        this.cargando.set(false);
        alert("No se pudo generar/enviar el estado de cuenta.");
      }
    });
  }
};
_EstadoCuentaComponent.\u0275fac = function EstadoCuentaComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EstadoCuentaComponent)(\u0275\u0275directiveInject(HttpClient));
};
_EstadoCuentaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EstadoCuentaComponent, selectors: [["app-estado-cuenta"]], decls: 24, vars: 8, consts: [["sinMovs", ""], [1, "container", "mt-4"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "m-0"], ["routerLink", "/dashboard", 1, "btn", "btn-secondary"], [1, "card", "p-3", "mb-3"], [1, "row", "g-2", "align-items-end"], [1, "col-auto"], [1, "form-label"], ["placeholder", "16 d\xEDgitos", 1, "form-control", 3, "ngModelChange", "ngModel"], ["placeholder", "Ej. 2025-11", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "col-auto", 4, "ngIf"], ["class", "text-danger mt-2", 4, "ngIf"], ["class", "alert alert-info", 4, "ngIf"], ["class", "card p-3", 4, "ngIf"], ["class", "card p-3 mt-3", 4, "ngIf"], [1, "btn", "btn-success", 3, "click", "disabled"], [1, "text-danger", "mt-2"], [1, "alert", "alert-info"], [1, "card", "p-3"], [1, "mb-2"], ["class", "text-muted", 4, "ngIf"], [1, "text-muted", "mb-3"], ["class", "text-muted mb-3", 4, "ngIf"], ["class", "mb-3", 4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], [1, "text-muted"], [1, "mb-3"], [1, "d-flex", "justify-content-between"], [1, "badge", "bg-secondary", "ms-2"], ["class", "table-responsive mt-2", 4, "ngIf", "ngIfElse"], [1, "table-responsive", "mt-2"], [1, "table", "table-sm", "align-middle"], [1, "text-end"], [4, "ngFor", "ngForOf"], [1, "row"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], [1, "col-md-6"], [1, "border", "rounded", "p-2", "mb-2"], [1, "badge"], [1, "small", "text-muted"], [1, "card", "p-3", "mt-3"], [1, "border", "rounded", 2, "max-height", "60vh", "overflow", "auto", "background", "#fff", 3, "innerHTML"]], template: function EstadoCuentaComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h2", 3);
    \u0275\u0275text(3, "Estado de Cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 4);
    \u0275\u0275text(5, "Volver");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "label", 8);
    \u0275\u0275text(10, "N\xFAmero de cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 9);
    \u0275\u0275twoWayListener("ngModelChange", function EstadoCuentaComponent_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.numeroCuentaInput, $event) || (ctx.numeroCuentaInput = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 7)(13, "label", 8);
    \u0275\u0275text(14, "Periodo (YYYY-MM)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function EstadoCuentaComponent_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.periodoInput, $event) || (ctx.periodoInput = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 7)(17, "button", 11);
    \u0275\u0275listener("click", function EstadoCuentaComponent_Template_button_click_17_listener() {
      return ctx.cargar();
    });
    \u0275\u0275text(18, "Cargar");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, EstadoCuentaComponent_div_19_Template, 3, 1, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, EstadoCuentaComponent_div_20_Template, 2, 1, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, EstadoCuentaComponent_div_21_Template, 2, 0, "div", 14)(22, EstadoCuentaComponent_div_22_Template, 17, 7, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, EstadoCuentaComponent_div_23_Template, 4, 1, "div", 16);
  }
  if (rf & 2) {
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx.numeroCuentaInput);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.periodoInput);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.cargando());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.data());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.error());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.cargando());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.html());
  }
}, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink, DecimalPipe, DatePipe], encapsulation: 2 });
var EstadoCuentaComponent = _EstadoCuentaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EstadoCuentaComponent, [{
    type: Component,
    args: [{
      selector: "app-estado-cuenta",
      standalone: true,
      imports: [CommonModule, FormsModule, RouterLink],
      template: `
	<div class="container mt-4">
		<div class="d-flex justify-content-between align-items-center mb-3">
			<h2 class="m-0">Estado de Cuenta</h2>
			<a class="btn btn-secondary" routerLink="/dashboard">Volver</a>
		</div>

		<div class="card p-3 mb-3">
			<div class="row g-2 align-items-end">
				<div class="col-auto">
					<label class="form-label">N\xFAmero de cuenta</label>
					<input class="form-control" [(ngModel)]="numeroCuentaInput" placeholder="16 d\xEDgitos" />
				</div>
				<div class="col-auto">
					<label class="form-label">Periodo (YYYY-MM)</label>
					<input class="form-control" [(ngModel)]="periodoInput" placeholder="Ej. 2025-11" />
				</div>
				<div class="col-auto">
					<button class="btn btn-primary" (click)="cargar()" [disabled]="cargando()">Cargar</button>
				</div>
				<div class="col-auto" *ngIf="data()">
					<button class="btn btn-success" (click)="generarMostrarYEnviar()" [disabled]="cargando()">Generar y enviar correo</button>
				</div>
			</div>
			<div class="text-danger mt-2" *ngIf="error()">{{ error() }}</div>
		</div>

		<div *ngIf="cargando()" class="alert alert-info">Cargando\u2026</div>

		<div *ngIf="data()" class="card p-3">
			<div class="mb-2">
				<strong>Cliente:</strong> {{ data()!.cliente.nombre }}
				<span class="text-muted" *ngIf="data()!.cliente.email"> \u2022 {{ data()!.cliente.email }}</span>
			</div>
			<div class="text-muted mb-3">
				<small>Periodo: {{ etiquetaPeriodo() }}</small>
			</div>

			<h5>Cuentas</h5>
			<div *ngIf="!data()!.cuentas?.length" class="text-muted mb-3">Sin cuentas registradas.</div>
			<div *ngFor="let c of data()!.cuentas" class="mb-3">
				<div class="d-flex justify-content-between">
					<div>
						<strong>{{ c.numero_cuenta }}</strong>
						<span class="badge bg-secondary ms-2">{{ c.estatus }}</span>
					</div>
								<div>
									<strong>Saldo:</strong> $ {{ c.saldo | number:'1.2-2' }} MXN
								</div>
				</div>
				<div class="table-responsive mt-2" *ngIf="c.movimientos?.length; else sinMovs">
					<table class="table table-sm align-middle">
						<thead>
							<tr>
								<th>Fecha</th><th>Tipo</th><th>Concepto</th><th class="text-end">Monto</th>
							</tr>
						</thead>
						<tbody>
							<tr *ngFor="let m of c.movimientos">
								<td>{{ m.fecha | date:'short' }}</td>
								<td>{{ m.tipo }}</td>
								<td>{{ m.concepto }}</td>
								<td class="text-end">$ {{ m.monto | number:'1.2-2' }}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<ng-template #sinMovs><div class="text-muted">Sin movimientos en el per\xEDodo.</div></ng-template>
				<hr/>
			</div>

			<h5>Pr\xE9stamos</h5>
			<div *ngIf="!data()!.prestamos?.length" class="text-muted">Sin pr\xE9stamos registrados.</div>
			<div class="row" *ngIf="data()!.prestamos?.length">
				<div class="col-md-6" *ngFor="let p of data()!.prestamos">
					<div class="border rounded p-2 mb-2">
						<div class="d-flex justify-content-between">
							<div><strong>{{ p.tipo_prestamo }}</strong> <span class="text-muted">#{{ p.id }}</span></div>
							<span class="badge" [class.bg-success]="p.estatus==='PAGADO'" [class.bg-warning]="p.estatus!=='PAGADO'">{{ p.estatus }}</span>
						</div>
						<div class="small text-muted">Plazo: {{ p.plazo_meses }} meses \u2022 Inter\xE9s: {{ p.interes | number:'1.2-2' }}%</div>
						<div>Monto: $ {{ p.monto | number:'1.2-2' }} \u2022 Total est.: $ {{ p.total_estimado | number:'1.2-2' }}</div>
						<div>Pago mensual est.: $ {{ p.pago_mensual_est | number:'1.2-2' }} \u2022 Saldo pendiente est.: $ {{ p.saldo_pendiente_est | number:'1.2-2' }}</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div *ngIf="html()" class="card p-3 mt-3">
		<h5>Comprobante (HTML)</h5>
		<div class="border rounded" style="max-height:60vh; overflow:auto; background:#fff;" [innerHTML]="html()"></div>
	</div>
	`
    }]
  }], () => [{ type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EstadoCuentaComponent, { className: "EstadoCuentaComponent", filePath: "src/app/pages/estado-cuenta/estado-cuenta.component.ts", lineNumber: 106 });
})();
export {
  EstadoCuentaComponent
};
//# sourceMappingURL=chunk-LPPFO6M7.js.map
