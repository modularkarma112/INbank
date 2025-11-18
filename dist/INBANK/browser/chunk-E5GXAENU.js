import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
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
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-LQXE4UJV.js";

// src/app/pages/reporte-transacciones/reporte-transacciones.component.ts
function ReporteTransaccionesComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 7);
    \u0275\u0275text(2, "Desde");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function ReporteTransaccionesComponent_div_22_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.desde, $event) || (ctx_r1.desde = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.desde);
  }
}
function ReporteTransaccionesComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 7);
    \u0275\u0275text(2, "Hasta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function ReporteTransaccionesComponent_div_23_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.hasta, $event) || (ctx_r1.hasta = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.hasta);
  }
}
function ReporteTransaccionesComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function ReporteTransaccionesComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1, "Cargando\u2026");
    \u0275\u0275elementEnd();
  }
}
function ReporteTransaccionesComponent_div_51_tr_17_Template(rf, ctx) {
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
    \u0275\u0275elementStart(8, "td", 29);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 6, r_r4.fecha, "short"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r4.tipo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.concepto);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$ ", \u0275\u0275pipeBind2(10, 9, r_r4.monto, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r4.numero_cuenta);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.cliente_nombre);
  }
}
function ReporteTransaccionesComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "table", 28)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Concepto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 29);
    \u0275\u0275text(11, "Monto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Cliente");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, ReporteTransaccionesComponent_div_51_tr_17_Template, 15, 12, "tr", 30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r1.rows());
  }
}
function ReporteTransaccionesComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1, "Sin resultados.");
    \u0275\u0275elementEnd();
  }
}
function ReporteTransaccionesComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 33)(4, "button", 34);
    \u0275\u0275listener("click", function ReporteTransaccionesComponent_div_53_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prev());
    });
    \u0275\u0275text(5, "Anterior");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 34);
    \u0275\u0275listener("click", function ReporteTransaccionesComponent_div_53_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.next());
    });
    \u0275\u0275text(7, "Siguiente");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" Mostrando ", ctx_r1.inicio(), "-", ctx_r1.fin(), " de ", ctx_r1.total(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.page() <= 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.fin() >= ctx_r1.total());
  }
}
var _ReporteTransaccionesComponent = class _ReporteTransaccionesComponent {
  constructor(http) {
    this.http = http;
    this.rango = "todos";
    this.desde = "";
    this.hasta = "";
    this.cliente = "";
    this.numero = "";
    this.tipo = "";
    this.cargando = signal(false, ...ngDevMode ? [{ debugName: "cargando" }] : []);
    this.error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
    this.rows = signal([], ...ngDevMode ? [{ debugName: "rows" }] : []);
    this.page = signal(1, ...ngDevMode ? [{ debugName: "page" }] : []);
    this.pageSize = 50;
    this.total = signal(0, ...ngDevMode ? [{ debugName: "total" }] : []);
    this.inicio = computed(() => (this.page() - 1) * this.pageSize + (this.rows().length ? 1 : 0), ...ngDevMode ? [{ debugName: "inicio" }] : []);
    this.fin = computed(() => (this.page() - 1) * this.pageSize + this.rows().length, ...ngDevMode ? [{ debugName: "fin" }] : []);
  }
  baseUrl() {
    return window["API_BASE"] || "http://localhost:4000";
  }
  buildParams() {
    const params = { page: this.page(), limit: this.pageSize };
    if (this.tipo)
      params.tipo = this.tipo;
    if (this.numero)
      params.numero = this.numero.trim();
    const id = Number(this.cliente.trim());
    if (this.cliente) {
      if (Number.isFinite(id))
        params.clienteId = id;
      else
        params.cliente = this.cliente.trim();
    }
    if (this.rango === "personal") {
      if (this.desde)
        params.desde = this.desde;
      if (this.hasta)
        params.hasta = this.hasta;
    } else if (this.rango !== "todos") {
      params.periodo = this.rango;
    }
    return params;
  }
  buscar() {
    this.error.set("");
    this.cargando.set(true);
    const params = this.buildParams();
    this.http.get(`${this.baseUrl()}/api/transacciones`, { params }).subscribe({
      next: (resp) => {
        this.rows.set(resp?.rows || []);
        this.total.set(resp?.total || 0);
        this.cargando.set(false);
      },
      error: (err) => {
        this.cargando.set(false);
        this.error.set(err?.error?.message || "Error cargando transacciones");
      }
    });
  }
  next() {
    if (this.fin() < this.total()) {
      this.page.set(this.page() + 1);
      this.buscar();
    }
  }
  prev() {
    if (this.page() > 1) {
      this.page.set(this.page() - 1);
      this.buscar();
    }
  }
  ngOnInit() {
    this.buscar();
  }
};
_ReporteTransaccionesComponent.\u0275fac = function ReporteTransaccionesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReporteTransaccionesComponent)(\u0275\u0275directiveInject(HttpClient));
};
_ReporteTransaccionesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReporteTransaccionesComponent, selectors: [["app-reporte-transacciones"]], decls: 54, vars: 12, consts: [[1, "container", "mt-4"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "m-0"], ["routerLink", "/dashboard", 1, "btn", "btn-secondary"], [1, "card", "p-3", "mb-3"], [1, "row", "g-2", "align-items-end"], [1, "col-auto"], [1, "form-label"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "todos"], ["value", "hoy"], ["value", "semana"], ["value", "mes"], ["value", "personal"], ["class", "col-auto", 4, "ngIf"], ["placeholder", "Nombre o ID", 1, "form-control", 3, "ngModelChange", "ngModel"], ["placeholder", "Parcial o exacto", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "text-danger mt-2", 4, "ngIf"], ["class", "alert alert-info", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], ["class", "alert alert-secondary", 4, "ngIf"], ["class", "d-flex justify-content-between align-items-center mt-2", 4, "ngIf"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "text-danger", "mt-2"], [1, "alert", "alert-info"], [1, "table-responsive"], [1, "table", "table-sm", "align-middle"], [1, "text-end"], [4, "ngFor", "ngForOf"], [1, "alert", "alert-secondary"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-2"], [1, "btn-group"], [1, "btn", "btn-outline-secondary", 3, "click", "disabled"]], template: function ReporteTransaccionesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
    \u0275\u0275text(3, "Detalle de Transacciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 3);
    \u0275\u0275text(5, "Volver");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "label", 7);
    \u0275\u0275text(10, "Rango");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 8);
    \u0275\u0275twoWayListener("ngModelChange", function ReporteTransaccionesComponent_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.rango, $event) || (ctx.rango = $event);
      return $event;
    });
    \u0275\u0275elementStart(12, "option", 9);
    \u0275\u0275text(13, "Todos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 10);
    \u0275\u0275text(15, "Hoy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 11);
    \u0275\u0275text(17, "Esta semana");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 12);
    \u0275\u0275text(19, "Este mes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 13);
    \u0275\u0275text(21, "Personalizado");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(22, ReporteTransaccionesComponent_div_22_Template, 4, 1, "div", 14)(23, ReporteTransaccionesComponent_div_23_Template, 4, 1, "div", 14);
    \u0275\u0275elementStart(24, "div", 6)(25, "label", 7);
    \u0275\u0275text(26, "Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function ReporteTransaccionesComponent_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.cliente, $event) || (ctx.cliente = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 6)(29, "label", 7);
    \u0275\u0275text(30, "N\xFAmero de cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function ReporteTransaccionesComponent_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.numero, $event) || (ctx.numero = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 6)(33, "label", 7);
    \u0275\u0275text(34, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "select", 8);
    \u0275\u0275twoWayListener("ngModelChange", function ReporteTransaccionesComponent_Template_select_ngModelChange_35_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.tipo, $event) || (ctx.tipo = $event);
      return $event;
    });
    \u0275\u0275elementStart(36, "option", 17);
    \u0275\u0275text(37, "Todos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "option");
    \u0275\u0275text(39, "DEPOSITO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "option");
    \u0275\u0275text(41, "RETIRO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "option");
    \u0275\u0275text(43, "TRANSFERENCIA_ENTRADA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "option");
    \u0275\u0275text(45, "TRANSFERENCIA_SALIDA");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 6)(47, "button", 18);
    \u0275\u0275listener("click", function ReporteTransaccionesComponent_Template_button_click_47_listener() {
      return ctx.buscar();
    });
    \u0275\u0275text(48, "Buscar");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(49, ReporteTransaccionesComponent_div_49_Template, 2, 1, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(50, ReporteTransaccionesComponent_div_50_Template, 2, 0, "div", 20)(51, ReporteTransaccionesComponent_div_51_Template, 18, 1, "div", 21)(52, ReporteTransaccionesComponent_div_52_Template, 2, 0, "div", 22)(53, ReporteTransaccionesComponent_div_53_Template, 8, 5, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx.rango);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx.rango === "personal");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.rango === "personal");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.cliente);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.numero);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.tipo);
    \u0275\u0275advance(12);
    \u0275\u0275property("disabled", ctx.cargando());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.error());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.cargando());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.rows().length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.cargando() && !ctx.rows().length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.total() > 0);
  }
}, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterLink, DecimalPipe, DatePipe], encapsulation: 2 });
var ReporteTransaccionesComponent = _ReporteTransaccionesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReporteTransaccionesComponent, [{
    type: Component,
    args: [{
      selector: "app-reporte-transacciones",
      standalone: true,
      imports: [CommonModule, FormsModule, RouterLink],
      template: `
	<div class="container mt-4">
		<div class="d-flex justify-content-between align-items-center mb-3">
			<h2 class="m-0">Detalle de Transacciones</h2>
			<a class="btn btn-secondary" routerLink="/dashboard">Volver</a>
		</div>

		<div class="card p-3 mb-3">
			<div class="row g-2 align-items-end">
				<div class="col-auto">
					<label class="form-label">Rango</label>
								<select class="form-select" [(ngModel)]="rango">
									<option value="todos">Todos</option>
						<option value="hoy">Hoy</option>
						<option value="semana">Esta semana</option>
						<option value="mes">Este mes</option>
						<option value="personal">Personalizado</option>
					</select>
				</div>
							<div class="col-auto" *ngIf="rango==='personal'">
					<label class="form-label">Desde</label>
					<input type="date" class="form-control" [(ngModel)]="desde" />
				</div>
				<div class="col-auto" *ngIf="rango==='personal'">
					<label class="form-label">Hasta</label>
					<input type="date" class="form-control" [(ngModel)]="hasta" />
				</div>
				<div class="col-auto">
					<label class="form-label">Cliente</label>
					<input class="form-control" [(ngModel)]="cliente" placeholder="Nombre o ID" />
				</div>
				<div class="col-auto">
					<label class="form-label">N\xFAmero de cuenta</label>
					<input class="form-control" [(ngModel)]="numero" placeholder="Parcial o exacto" />
				</div>
				<div class="col-auto">
					<label class="form-label">Tipo</label>
					<select class="form-select" [(ngModel)]="tipo">
						<option value="">Todos</option>
						<option>DEPOSITO</option>
						<option>RETIRO</option>
						<option>TRANSFERENCIA_ENTRADA</option>
						<option>TRANSFERENCIA_SALIDA</option>
					</select>
				</div>
				<div class="col-auto">
					<button class="btn btn-primary" (click)="buscar()" [disabled]="cargando()">Buscar</button>
				</div>
			</div>
			<div class="text-danger mt-2" *ngIf="error()">{{ error() }}</div>
		</div>

		<div *ngIf="cargando()" class="alert alert-info">Cargando\u2026</div>

		<div class="table-responsive" *ngIf="rows().length">
			<table class="table table-sm align-middle">
				<thead>
					<tr>
						<th>Fecha</th><th>Tipo</th><th>Concepto</th><th class="text-end">Monto</th>
						<th>Cuenta</th><th>Cliente</th>
					</tr>
				</thead>
				<tbody>
					<tr *ngFor="let r of rows()">
						<td>{{ r.fecha | date:'short' }}</td>
						<td>{{ r.tipo }}</td>
						<td>{{ r.concepto }}</td>
						<td class="text-end">$ {{ r.monto | number:'1.2-2' }}</td>
						<td>{{ r.numero_cuenta }}</td>
						<td>{{ r.cliente_nombre }}</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div *ngIf="!cargando() && !rows().length" class="alert alert-secondary">Sin resultados.</div>

		<div class="d-flex justify-content-between align-items-center mt-2" *ngIf="total()>0">
			<div>
				Mostrando {{ inicio() }}-{{ fin() }} de {{ total() }}
			</div>
			<div class="btn-group">
				<button class="btn btn-outline-secondary" (click)="prev()" [disabled]="page()<=1">Anterior</button>
				<button class="btn btn-outline-secondary" (click)="next()" [disabled]="fin()>=total()">Siguiente</button>
			</div>
		</div>
	</div>
	`
    }]
  }], () => [{ type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReporteTransaccionesComponent, { className: "ReporteTransaccionesComponent", filePath: "src/app/pages/reporte-transacciones/reporte-transacciones.component.ts", lineNumber: 100 });
})();
export {
  ReporteTransaccionesComponent
};
//# sourceMappingURL=chunk-E5GXAENU.js.map
