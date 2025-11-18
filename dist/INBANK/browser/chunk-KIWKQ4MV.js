import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-QL6LS3FT.js";
import {
  CommonModule,
  Component,
  CurrencyPipe,
  DatePipe,
  HttpClient,
  NgClass,
  NgIf,
  RouterLink,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-LQXE4UJV.js";

// src/app/pages/cobranzas/cobranzas.component.ts
var _c0 = (a0) => ["/clientes", a0];
var _c1 = (a0, a1, a2) => ({ "bg-success": a0, "bg-danger": a1, "bg-secondary": a2 });
var _forTrack0 = ($index, $item) => $item.id;
function CobranzasComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function CobranzasComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 24);
    \u0275\u0275text(2, "Sin cr\xE9ditos aprobados");
    \u0275\u0275elementEnd()();
  }
}
function CobranzasComponent_Conditional_60_For_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", c_r3.dias_vencidos, " d\xEDa(s)");
  }
}
function CobranzasComponent_Conditional_60_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "a", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 18);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 19);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 19)(14, "span", 26);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, CobranzasComponent_Conditional_60_For_1_div_16_Template, 2, 1, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 19);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 19);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 18);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td", 18);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td", 18);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "td", 18);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "td", 18)(36, "button", 28);
    \u0275\u0275listener("click", function CobranzasComponent_Conditional_60_For_1_Template_button_click_36_listener() {
      const c_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.abrirPago(c_r3));
    });
    \u0275\u0275text(37, "Registrar pago");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(47, _c0, c_r3.cliente_id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r3.nombre_cliente);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.tipo_prestamo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(10, 16, c_r3.monto, "MXN", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", c_r3.plazo_meses, " m");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(49, _c1, c_r3.estado_pago === "AL_DIA" || c_r3.estado_pago === "PAGADO", c_r3.estado_pago === "VENCIDO", c_r3.estado_pago === "SIN_FECHA"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.etiquetaEstado(c_r3.estado_pago));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r3.dias_vencidos > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.fecha_corte ? \u0275\u0275pipeBind2(19, 21, c_r3.fecha_corte, "yyyy-MM-dd") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r3.fecha_vencimiento ? \u0275\u0275pipeBind2(22, 24, c_r3.fecha_vencimiento, "yyyy-MM-dd") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(25, 27, c_r3.cuota_mensual, "MXN", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(28, 32, c_r3.total_con_mora, "MXN", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(31, 37, c_r3.pagado_periodo || 0, "MXN", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(34, 42, c_r3.saldo_periodo ?? c_r3.cuota_mensual, "MXN", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", c_r3.estado_pago === "PAGADO");
  }
}
function CobranzasComponent_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CobranzasComponent_Conditional_60_For_1_Template, 38, 53, "tr", null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r0.filtrados());
  }
}
function CobranzasComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275listener("click", function CobranzasComponent_div_61_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarPago());
    });
    \u0275\u0275elementEnd();
  }
}
function CobranzasComponent_div_62_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function CobranzasComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "h5", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 33)(5, "div", 34);
    \u0275\u0275text(6, "Cliente: ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 34);
    \u0275\u0275text(10, "Saldo del periodo: ");
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "label", 7);
    \u0275\u0275text(15, "Monto a pagar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function CobranzasComponent_div_62_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.montoPago, $event) || (ctx_r0.montoPago = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, CobranzasComponent_div_62_div_17_Template, 2, 1, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 37)(19, "button", 38);
    \u0275\u0275listener("click", function CobranzasComponent_div_62_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarPago());
    });
    \u0275\u0275text(20, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 14);
    \u0275\u0275listener("click", function CobranzasComponent_div_62_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmarPago());
    });
    \u0275\u0275text(22, "Pagar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Registrar pago - Pr\xE9stamo #", (tmp_1_0 = ctx_r0.sel()) == null ? null : tmp_1_0.id);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r0.sel()) == null ? null : tmp_2_0.nombre_cliente);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(13, 6, ((tmp_3_0 = ctx_r0.sel()) == null ? null : tmp_3_0.saldo_periodo) ?? ((tmp_3_0 = ctx_r0.sel()) == null ? null : tmp_3_0.cuota_mensual), "MXN", "symbol", "1.0-0"));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.montoPago);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.error());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.cargando());
  }
}
var _CobranzasComponent = class _CobranzasComponent {
  constructor(http) {
    this.http = http;
    this.cobranzas = signal([], ...ngDevMode ? [{ debugName: "cobranzas" }] : []);
    this.filtrados = signal([], ...ngDevMode ? [{ debugName: "filtrados" }] : []);
    this.cargando = signal(false, ...ngDevMode ? [{ debugName: "cargando" }] : []);
    this.error = signal(void 0, ...ngDevMode ? [{ debugName: "error" }] : []);
    this.filtroEstado = "";
    this.q = "";
    this.showPago = signal(false, ...ngDevMode ? [{ debugName: "showPago" }] : []);
    this.sel = signal(void 0, ...ngDevMode ? [{ debugName: "sel" }] : []);
    this.montoPago = "";
  }
  ngOnInit() {
    this.cargar();
  }
  cargar() {
    this.cargando.set(true);
    this.error.set(void 0);
    this.http.get("/api/cobranzas/aprobados").subscribe({
      next: (data) => {
        this.cobranzas.set(data || []);
        this.aplicarFiltro();
      },
      error: (err) => {
        this.error.set("Error cargando cobranzas");
        console.error(err);
        this.cargando.set(false);
      },
      complete: () => this.cargando.set(false)
    });
  }
  aplicarFiltro() {
    const list = this.cobranzas();
    const s = this.q.trim().toLowerCase();
    let res = list;
    if (this.filtroEstado)
      res = res.filter((x) => x.estado_pago === this.filtroEstado);
    if (s)
      res = res.filter((x) => x.nombre_cliente.toLowerCase().includes(s) || String(x.id).includes(s) || x.tipo_prestamo.toLowerCase().includes(s));
    this.filtrados.set(res);
  }
  etiquetaEstado(e) {
    if (e === "AL_DIA")
      return "Al d\xEDa";
    if (e === "VENCIDO")
      return "Vencido";
    if (e === "SIN_FECHA")
      return "Sin fecha";
    if (e === "PAGADO")
      return "Pagado";
    return e;
  }
  abrirPago(c) {
    this.sel.set(c);
    this.montoPago = (c.saldo_periodo ?? c.cuota_mensual) || 0;
    this.showPago.set(true);
  }
  cerrarPago() {
    this.showPago.set(false);
    this.sel.set(void 0);
    this.montoPago = "";
    this.error.set(void 0);
  }
  confirmarPago() {
    const c = this.sel();
    const m = Number(this.montoPago);
    if (!c || !(m > 0)) {
      this.error.set("Monto inv\xE1lido");
      return;
    }
    this.cargando.set(true);
    this.http.post("/api/cobranzas/pago", { prestamo_id: c.id, monto: m }).subscribe({
      next: (_) => {
        this.cerrarPago();
        this.cargar();
      },
      error: (err) => {
        this.error.set("No se pudo registrar el pago");
        console.error(err);
        this.cargando.set(false);
      }
    });
  }
};
_CobranzasComponent.\u0275fac = function CobranzasComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CobranzasComponent)(\u0275\u0275directiveInject(HttpClient));
};
_CobranzasComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CobranzasComponent, selectors: [["app-cobranzas"]], decls: 63, vars: 7, consts: [[1, "container", "mt-4"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "m-0"], ["routerLink", "/dashboard", 1, "btn", "btn-secondary"], [1, "card", "p-3", "mb-3"], [1, "row", "g-2", "align-items-end"], [1, "col-auto"], [1, "form-label"], [1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "AL_DIA"], ["value", "VENCIDO"], ["value", "SIN_FECHA"], ["placeholder", "Cliente, id, tipo...", 1, "form-control", 3, "ngModelChange", "input", "ngModel"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "col", 4, "ngIf"], [1, "table-responsive"], [1, "table", "table-sm", "align-middle"], [1, "text-end"], [1, "text-center"], ["class", "inb-backdrop", 3, "click", 4, "ngIf"], ["class", "inb-modal", 4, "ngIf"], [1, "col"], [1, "alert", "alert-danger", "py-2", "px-3", "m-0"], ["colspan", "13", 1, "text-center", "text-muted", "py-4"], [3, "routerLink"], [1, "badge", 3, "ngClass"], ["class", "small text-muted", 4, "ngIf"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click", "disabled"], [1, "small", "text-muted"], [1, "inb-backdrop", 3, "click"], [1, "inb-modal"], [1, "inb-modal-header"], [1, "inb-modal-body"], [1, "mb-2"], ["type", "number", "min", "0", "step", "0.01", 1, "form-control", 3, "ngModelChange", "ngModel"], ["class", "text-danger small mt-1", 4, "ngIf"], [1, "inb-modal-footer"], [1, "btn", "btn-secondary", 3, "click"], [1, "text-danger", "small", "mt-1"]], template: function CobranzasComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
    \u0275\u0275text(3, "Cobranzas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 3);
    \u0275\u0275text(5, "Volver");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "label", 7);
    \u0275\u0275text(10, "Filtro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 8);
    \u0275\u0275twoWayListener("ngModelChange", function CobranzasComponent_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filtroEstado, $event) || (ctx.filtroEstado = $event);
      return $event;
    });
    \u0275\u0275listener("change", function CobranzasComponent_Template_select_change_11_listener() {
      return ctx.aplicarFiltro();
    });
    \u0275\u0275elementStart(12, "option", 9);
    \u0275\u0275text(13, "Todos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 10);
    \u0275\u0275text(15, "Al d\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 11);
    \u0275\u0275text(17, "Vencido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 12);
    \u0275\u0275text(19, "Sin fecha");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 6)(21, "label", 7);
    \u0275\u0275text(22, "Buscar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function CobranzasComponent_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.q, $event) || (ctx.q = $event);
      return $event;
    });
    \u0275\u0275listener("input", function CobranzasComponent_Template_input_input_23_listener() {
      return ctx.aplicarFiltro();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 6)(25, "button", 14);
    \u0275\u0275listener("click", function CobranzasComponent_Template_button_click_25_listener() {
      return ctx.cargar();
    });
    \u0275\u0275text(26, "Refrescar");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(27, CobranzasComponent_div_27_Template, 3, 1, "div", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 16)(29, "table", 17)(30, "thead")(31, "tr")(32, "th");
    \u0275\u0275text(33, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th");
    \u0275\u0275text(35, "Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th");
    \u0275\u0275text(37, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th", 18);
    \u0275\u0275text(39, "Monto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "th", 19);
    \u0275\u0275text(41, "Plazo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "th", 19);
    \u0275\u0275text(43, "Estado pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "th", 19);
    \u0275\u0275text(45, "Corte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "th", 19);
    \u0275\u0275text(47, "Vence (20)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th", 18);
    \u0275\u0275text(49, "Cuota mes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "th", 18);
    \u0275\u0275text(51, "Cuota c/ mora");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "th", 18);
    \u0275\u0275text(53, "Pagado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "th", 18);
    \u0275\u0275text(55, "Saldo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "th", 18);
    \u0275\u0275text(57, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "tbody");
    \u0275\u0275conditionalCreate(59, CobranzasComponent_Conditional_59_Template, 3, 0, "tr")(60, CobranzasComponent_Conditional_60_Template, 2, 0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(61, CobranzasComponent_div_61_Template, 1, 0, "div", 20)(62, CobranzasComponent_div_62_Template, 23, 11, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx.filtroEstado);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx.q);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.cargando());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.error());
    \u0275\u0275advance(32);
    \u0275\u0275conditional(ctx.filtrados().length === 0 ? 59 : 60);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.showPago());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.showPago());
  }
}, dependencies: [CommonModule, NgClass, NgIf, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, CurrencyPipe, DatePipe], styles: ["\n\n.inb-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, .45);\n  z-index: 1040;\n}\n.inb-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  display: block;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: min(520px, 90vw);\n  background: #fff;\n  border-radius: 8px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, .2);\n  z-index: 1050;\n  overflow: hidden;\n}\n.inb-modal-header[_ngcontent-%COMP%], \n.inb-modal-footer[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.inb-modal-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #e5e7eb;\n  border-bottom: none;\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n  align-items: center;\n}\n.inb-modal-body[_ngcontent-%COMP%] {\n  padding: 16px;\n  background: #fff;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: .25rem .5rem;\n  border-radius: .5rem;\n  color: #fff;\n}\n.bg-success[_ngcontent-%COMP%] {\n  background: #10B981;\n}\n.bg-danger[_ngcontent-%COMP%] {\n  background: #EF4444;\n}\n.bg-secondary[_ngcontent-%COMP%] {\n  background: #6B7280;\n}\n/*# sourceMappingURL=cobranzas.component.css.map */"] });
var CobranzasComponent = _CobranzasComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CobranzasComponent, [{
    type: Component,
    args: [{ selector: "app-cobranzas", standalone: true, imports: [CommonModule, RouterLink, CurrencyPipe, NgClass, FormsModule], template: `
	<div class="container mt-4">
		<div class='d-flex justify-content-between align-items-center mb-3'>
			<h2 class="m-0">Cobranzas</h2>
			<a class='btn btn-secondary' routerLink='/dashboard'>Volver</a>
		</div>

		<div class="card p-3 mb-3">
			<div class="row g-2 align-items-end">
				<div class="col-auto">
					<label class="form-label">Filtro</label>
					<select class="form-select" [(ngModel)]="filtroEstado" (change)="aplicarFiltro()">
						<option value="">Todos</option>
						<option value="AL_DIA">Al d\xEDa</option>
						<option value="VENCIDO">Vencido</option>
						<option value="SIN_FECHA">Sin fecha</option>
					</select>
				</div>
				<div class="col-auto">
					<label class="form-label">Buscar</label>
					<input class="form-control" [(ngModel)]="q" (input)="aplicarFiltro()" placeholder="Cliente, id, tipo..." />
				</div>
				<div class="col-auto">
					<button class="btn btn-primary" (click)="cargar()" [disabled]="cargando()">Refrescar</button>
				</div>
				<div class="col" *ngIf="error()">
					<div class="alert alert-danger py-2 px-3 m-0">{{ error() }}</div>
				</div>
			</div>
		</div>

			<div class="table-responsive">
			<table class="table table-sm align-middle">
				<thead>
					<tr>
						<th>ID</th>
						<th>Cliente</th>
						<th>Tipo</th>
						<th class="text-end">Monto</th>
						<th class="text-center">Plazo</th>
						<th class="text-center">Estado pago</th>
						<th class="text-center">Corte</th>
						<th class="text-center">Vence (20)</th>
						<th class="text-end">Cuota mes</th>
						<th class="text-end">Cuota c/ mora</th>
							<th class="text-end">Pagado</th>
							<th class="text-end">Saldo</th>
							<th class="text-end">Acciones</th>
					</tr>
				</thead>
				<tbody>
					@if(filtrados().length === 0){
						<tr>
								<td colspan="13" class="text-center text-muted py-4">Sin cr\xE9ditos aprobados</td>
						</tr>
					} @else {
						@for(c of filtrados(); track c.id){
							<tr>
								<td>{{ c.id }}</td>
								<td>
									<a [routerLink]="['/clientes', c.cliente_id]">{{ c.nombre_cliente }}</a>
								</td>
								<td>{{ c.tipo_prestamo }}</td>
								<td class="text-end">{{ c.monto | currency:'MXN':'symbol':'1.0-0' }}</td>
								<td class="text-center">{{ c.plazo_meses }} m</td>
								<td class="text-center">
									<span class="badge" [ngClass]="{
											'bg-success': c.estado_pago==='AL_DIA' || c.estado_pago==='PAGADO',
										'bg-danger': c.estado_pago==='VENCIDO',
										'bg-secondary': c.estado_pago==='SIN_FECHA'
									}">{{ etiquetaEstado(c.estado_pago) }}</span>
									<div class="small text-muted" *ngIf="c.dias_vencidos>0">{{ c.dias_vencidos }} d\xEDa(s)</div>
								</td>
								<td class="text-center">{{ c.fecha_corte ? (c.fecha_corte | date:'yyyy-MM-dd') : '\u2014' }}</td>
								<td class="text-center">{{ c.fecha_vencimiento ? (c.fecha_vencimiento | date:'yyyy-MM-dd') : '\u2014' }}</td>
								<td class="text-end">{{ c.cuota_mensual | currency:'MXN':'symbol':'1.0-0' }}</td>
								<td class="text-end">{{ c.total_con_mora | currency:'MXN':'symbol':'1.0-0' }}</td>
									<td class="text-end">{{ c.pagado_periodo || 0 | currency:'MXN':'symbol':'1.0-0' }}</td>
									<td class="text-end">{{ c.saldo_periodo ?? c.cuota_mensual | currency:'MXN':'symbol':'1.0-0' }}</td>
									<td class="text-end">
										<button class="btn btn-sm btn-outline-primary" (click)="abrirPago(c)" [disabled]="c.estado_pago==='PAGADO'">Registrar pago</button>
									</td>
							</tr>
						}
					}
				</tbody>
			</table>
		</div>

					<!-- Modal de pago -->
					<div class="inb-backdrop" *ngIf="showPago()" (click)="cerrarPago()"></div>
					<div class="inb-modal" *ngIf="showPago()">
						<div class="inb-modal-header">
					<h5 class="m-0">Registrar pago - Pr\xE9stamo #{{ sel()?.id }}</h5>
				</div>
						<div class="inb-modal-body">
					<div class="mb-2">Cliente: <strong>{{ sel()?.nombre_cliente }}</strong></div>
					<div class="mb-2">Saldo del periodo: <strong>{{ sel()?.saldo_periodo ?? sel()?.cuota_mensual | currency:'MXN':'symbol':'1.0-0' }}</strong></div>
					<label class="form-label">Monto a pagar</label>
					<input class="form-control" type="number" min="0" step="0.01" [(ngModel)]="montoPago" />
					<div class="text-danger small mt-1" *ngIf="error()">{{ error() }}</div>
				</div>
						<div class="inb-modal-footer">
					<button class="btn btn-secondary" (click)="cerrarPago()">Cancelar</button>
					<button class="btn btn-primary" (click)="confirmarPago()" [disabled]="cargando()">Pagar</button>
				</div>
			</div>
	</div>
	`, styles: ["/* angular:styles/component:css;6d2198f072134102b8e271350f99a68a0960a22a1c9546ccab1a54d87fb214b3;C:/Users/david/OneDrive/Escritorio/Escuela/noveno/Inteligencia de Negocios/repo/INbank/src/app/pages/cobranzas/cobranzas.component.ts */\n.inb-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, .45);\n  z-index: 1040;\n}\n.inb-modal {\n  position: fixed;\n  display: block;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: min(520px, 90vw);\n  background: #fff;\n  border-radius: 8px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, .2);\n  z-index: 1050;\n  overflow: hidden;\n}\n.inb-modal-header,\n.inb-modal-footer {\n  padding: 12px 16px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.inb-modal-footer {\n  border-top: 1px solid #e5e7eb;\n  border-bottom: none;\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n  align-items: center;\n}\n.inb-modal-body {\n  padding: 16px;\n  background: #fff;\n}\n.badge {\n  display: inline-block;\n  padding: .25rem .5rem;\n  border-radius: .5rem;\n  color: #fff;\n}\n.bg-success {\n  background: #10B981;\n}\n.bg-danger {\n  background: #EF4444;\n}\n.bg-secondary {\n  background: #6B7280;\n}\n/*# sourceMappingURL=cobranzas.component.css.map */\n"] }]
  }], () => [{ type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CobranzasComponent, { className: "CobranzasComponent", filePath: "src/app/pages/cobranzas/cobranzas.component.ts", lineNumber: 153 });
})();
export {
  CobranzasComponent
};
//# sourceMappingURL=chunk-KIWKQ4MV.js.map
