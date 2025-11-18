import {
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
  CurrencyPipe,
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

// src/app/pages/prestamos/prestamos.component.ts
var _c0 = (a0) => ["/clientes", a0];
var _c1 = (a0, a1, a2) => ({ "bg-secondary": a0, "bg-success": a1, "bg-danger": a2 });
var _forTrack0 = ($index, $item) => $item.id;
function PrestamosComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function PrestamosComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 21);
    \u0275\u0275text(2, "Sin resultados");
    \u0275\u0275elementEnd()();
  }
}
function PrestamosComponent_Conditional_48_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "a", 22);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 17);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 18);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 18)(14, "span", 23);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 17);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 17);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 17)(21, "div", 24)(22, "button", 25);
    \u0275\u0275listener("click", function PrestamosComponent_Conditional_48_For_1_Template_button_click_22_listener() {
      const p_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cambiarEstatus(p_r3, "APROBADO"));
    });
    \u0275\u0275text(23, "Aprobar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 26);
    \u0275\u0275listener("click", function PrestamosComponent_Conditional_48_For_1_Template_button_click_24_listener() {
      const p_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cambiarEstatus(p_r3, "RECHAZADO"));
    });
    \u0275\u0275text(25, "Rechazar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c0, p_r3.cliente_id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("#", p_r3.cliente_id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r3.tipo_prestamo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(10, 12, p_r3.monto, "MXN", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", p_r3.plazo_meses, " meses");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(19, _c1, p_r3.estatus === "EN_REVISION", p_r3.estatus === "APROBADO", p_r3.estatus === "RECHAZADO"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.etiquetaEstatus(p_r3.estatus));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", p_r3.interes ?? 0, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", p_r3.interes_penalizacion ?? 0, "%");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.cargando() || p_r3.estatus !== "EN_REVISION");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.cargando() || p_r3.estatus !== "EN_REVISION");
  }
}
function PrestamosComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PrestamosComponent_Conditional_48_For_1_Template, 26, 23, "tr", null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r0.filtrados());
  }
}
var _PrestamosComponent = class _PrestamosComponent {
  constructor(http) {
    this.http = http;
    this.prestamos = signal([], ...ngDevMode ? [{ debugName: "prestamos" }] : []);
    this.filtrados = signal([], ...ngDevMode ? [{ debugName: "filtrados" }] : []);
    this.cargando = signal(false, ...ngDevMode ? [{ debugName: "cargando" }] : []);
    this.error = signal(void 0, ...ngDevMode ? [{ debugName: "error" }] : []);
    this.filtroEstatus = "EN_REVISION";
  }
  ngOnInit() {
    this.cargar();
  }
  cargar() {
    this.cargando.set(true);
    this.error.set(void 0);
    this.http.get("/api/prestamos").subscribe({
      next: (data) => {
        this.prestamos.set(data || []);
        this.aplicarFiltro();
      },
      error: (err) => {
        this.error.set("Error cargando pr\xE9stamos");
        console.error(err);
        this.cargando.set(false);
      },
      complete: () => this.cargando.set(false)
    });
  }
  aplicarFiltro() {
    const all = this.prestamos();
    this.filtrados.set(this.filtroEstatus ? all.filter((p) => p.estatus === this.filtroEstatus) : all);
  }
  etiquetaEstatus(e) {
    return e === "EN_REVISION" ? "En revisi\xF3n" : e.charAt(0) + e.slice(1).toLowerCase();
  }
  cambiarEstatus(p, estatus) {
    if (!confirm(`\xBFConfirmas ${estatus === "APROBADO" ? "aprobar" : "rechazar"} el pr\xE9stamo #${p.id}?`))
      return;
    this.cargando.set(true);
    this.error.set(void 0);
    this.http.put(`/api/prestamos/${p.id}/estatus`, { estatus }).subscribe({
      next: () => {
        p.estatus = estatus;
        this.aplicarFiltro();
      },
      error: (err) => {
        this.error.set("No fue posible actualizar el estatus");
        console.error(err);
      },
      complete: () => this.cargando.set(false)
    });
  }
};
_PrestamosComponent.\u0275fac = function PrestamosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PrestamosComponent)(\u0275\u0275directiveInject(HttpClient));
};
_PrestamosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrestamosComponent, selectors: [["app-prestamos"]], decls: 49, vars: 4, consts: [[1, "container", "mt-4"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "m-0"], ["routerLink", "/dashboard", 1, "btn", "btn-secondary"], [1, "card", "p-3", "mb-3"], [1, "row", "g-2", "align-items-end"], [1, "col-auto"], [1, "form-label"], [1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "EN_REVISION"], ["value", "APROBADO"], ["value", "RECHAZADO"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "col", 4, "ngIf"], [1, "table-responsive"], [1, "table", "table-sm", "align-middle"], [1, "text-end"], [1, "text-center"], [1, "col"], [1, "alert", "alert-danger", "py-2", "px-3", "m-0"], ["colspan", "9", 1, "text-center", "text-muted", "py-4"], [3, "routerLink"], [1, "badge", 3, "ngClass"], ["role", "group", 1, "btn-group", "btn-group-sm"], ["title", "Aprobar", 1, "btn", "btn-outline-success", 3, "click", "disabled"], ["title", "Rechazar", 1, "btn", "btn-outline-danger", 3, "click", "disabled"]], template: function PrestamosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
    \u0275\u0275text(3, "Pr\xE9stamos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 3);
    \u0275\u0275text(5, "Volver");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "label", 7);
    \u0275\u0275text(10, "Estatus");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 8);
    \u0275\u0275twoWayListener("ngModelChange", function PrestamosComponent_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filtroEstatus, $event) || (ctx.filtroEstatus = $event);
      return $event;
    });
    \u0275\u0275listener("change", function PrestamosComponent_Template_select_change_11_listener() {
      return ctx.aplicarFiltro();
    });
    \u0275\u0275elementStart(12, "option", 9);
    \u0275\u0275text(13, "Todos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 10);
    \u0275\u0275text(15, "En revisi\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 11);
    \u0275\u0275text(17, "Aprobado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 12);
    \u0275\u0275text(19, "Rechazado");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 6)(21, "button", 13);
    \u0275\u0275listener("click", function PrestamosComponent_Template_button_click_21_listener() {
      return ctx.cargar();
    });
    \u0275\u0275text(22, "Refrescar");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, PrestamosComponent_div_23_Template, 3, 1, "div", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 15)(25, "table", 16)(26, "thead")(27, "tr")(28, "th");
    \u0275\u0275text(29, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th");
    \u0275\u0275text(31, "Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th");
    \u0275\u0275text(33, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th", 17);
    \u0275\u0275text(35, "Monto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th", 18);
    \u0275\u0275text(37, "Plazo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th", 18);
    \u0275\u0275text(39, "Estatus");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "th", 17);
    \u0275\u0275text(41, "Tasa %/mes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "th", 17);
    \u0275\u0275text(43, "Mora %/d\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "th", 17);
    \u0275\u0275text(45, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "tbody");
    \u0275\u0275conditionalCreate(47, PrestamosComponent_Conditional_47_Template, 3, 0, "tr")(48, PrestamosComponent_Conditional_48_Template, 2, 0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx.filtroEstatus);
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx.cargando());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.error());
    \u0275\u0275advance(24);
    \u0275\u0275conditional(ctx.filtrados().length === 0 ? 47 : 48);
  }
}, dependencies: [CommonModule, NgClass, NgIf, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, CurrencyPipe], encapsulation: 2 });
var PrestamosComponent = _PrestamosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrestamosComponent, [{
    type: Component,
    args: [{
      selector: "app-prestamos",
      standalone: true,
      imports: [CommonModule, RouterLink, CurrencyPipe, NgClass, FormsModule],
      template: `
	<div class="container mt-4">
		<div class='d-flex justify-content-between align-items-center mb-3'>
			<h2 class="m-0">Pr\xE9stamos</h2>
			<a class='btn btn-secondary' routerLink='/dashboard'>Volver</a>
		</div>

		<div class="card p-3 mb-3">
			<div class="row g-2 align-items-end">
				<div class="col-auto">
					<label class="form-label">Estatus</label>
					<select class="form-select" [(ngModel)]="filtroEstatus" (change)="aplicarFiltro()">
						<option value="">Todos</option>
						<option value="EN_REVISION">En revisi\xF3n</option>
						<option value="APROBADO">Aprobado</option>
						<option value="RECHAZADO">Rechazado</option>
					</select>
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
						<th class="text-center">Estatus</th>
						<th class="text-end">Tasa %/mes</th>
						<th class="text-end">Mora %/d\xEDa</th>
						<th class="text-end">Acciones</th>
					</tr>
				</thead>
				<tbody>
					@if(filtrados().length === 0){
						<tr>
							<td colspan="9" class="text-center text-muted py-4">Sin resultados</td>
						</tr>
					} @else {
						@for(p of filtrados(); track p.id){
							<tr>
								<td>{{ p.id }}</td>
								<td>
									<a [routerLink]="['/clientes', p.cliente_id]">#{{ p.cliente_id }}</a>
								</td>
								<td>{{ p.tipo_prestamo }}</td>
								<td class="text-end">{{ p.monto | currency:'MXN':'symbol':'1.0-0' }}</td>
								<td class="text-center">{{ p.plazo_meses }} meses</td>
								<td class="text-center">
									<span class="badge" [ngClass]="{
										'bg-secondary': p.estatus==='EN_REVISION',
										'bg-success': p.estatus==='APROBADO',
										'bg-danger': p.estatus==='RECHAZADO'
									}">{{ etiquetaEstatus(p.estatus) }}</span>
								</td>
								<td class="text-end">{{ p.interes ?? 0 }}%</td>
								<td class="text-end">{{ p.interes_penalizacion ?? 0 }}%</td>
								<td class="text-end">
									<div class="btn-group btn-group-sm" role="group">
										<button class="btn btn-outline-success" title="Aprobar" (click)="cambiarEstatus(p,'APROBADO')" [disabled]="cargando() || p.estatus!=='EN_REVISION'">Aprobar</button>
										<button class="btn btn-outline-danger" title="Rechazar" (click)="cambiarEstatus(p,'RECHAZADO')" [disabled]="cargando() || p.estatus!=='EN_REVISION'">Rechazar</button>
									</div>
								</td>
							</tr>
						}
					}
				</tbody>
			</table>
		</div>
	</div>
	`
    }]
  }], () => [{ type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrestamosComponent, { className: "PrestamosComponent", filePath: "src/app/pages/prestamos/prestamos.component.ts", lineNumber: 103 });
})();
export {
  PrestamosComponent
};
//# sourceMappingURL=chunk-YV6YMLUK.js.map
