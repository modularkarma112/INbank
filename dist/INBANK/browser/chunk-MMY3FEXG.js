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
  DecimalPipe,
  HttpClient,
  NgForOf,
  NgIf,
  NgStyle,
  RouterLink,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-LQXE4UJV.js";

// src/app/pages/cuentas/cuentas.component.ts
function CuentasComponent_div_21_tr_17_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    \u0275\u0275property("value", s_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r5);
  }
}
function CuentasComponent_div_21_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span", 16);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "select", 17);
    \u0275\u0275listener("ngModelChange", function CuentasComponent_div_21_tr_17_Template_select_ngModelChange_14_listener($event) {
      const c_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onChangeEstatus(c_r3, $event));
    });
    \u0275\u0275template(15, CuentasComponent_div_21_tr_17_option_15_Template, 2, 2, "option", 18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.numero_cuenta);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", c_r3.nombres, " ", c_r3.apellido_paterno, " ", c_r3.apellido_materno);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 10, c_r3.saldo, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngStyle", ctx_r3.badge(c_r3.estatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r3.estatus);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", c_r3.estatus);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.estatusOpts);
  }
}
function CuentasComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "table", 14)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "N\xFAmero");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Saldo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Estatus");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, CuentasComponent_div_21_tr_17_Template, 16, 13, "tr", 15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r3.rows);
  }
}
function CuentasComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1, "No hay resultados.");
    \u0275\u0275elementEnd();
  }
}
var _CuentasComponent = class _CuentasComponent {
  constructor(http) {
    this.http = http;
    this.f = { numero: "", nombre: "" };
    this.rows = [];
    this.estatusOpts = ["ACTIVA", "SUSPENDIDA", "BLOQUEADA", "CANCELADA"];
    this.buscar();
  }
  limpiar() {
    this.f = { numero: "", nombre: "" };
    this.buscar();
  }
  buscar() {
    const params = {};
    if (this.f.numero)
      params.numero = this.f.numero;
    if (this.f.nombre)
      params.nombre = this.f.nombre;
    this.http.get("/api/cuentas/buscar", { params }).subscribe({
      next: (r) => this.rows = r || [],
      error: (err) => {
        console.error(err);
        alert("Error al buscar cuentas");
      }
    });
  }
  onChangeEstatus(c, nuevo) {
    if (nuevo === c.estatus)
      return;
    if (nuevo === "CANCELADA") {
      const motivo = prompt("Motivo de cancelaci\xF3n:", "Solicitud del cliente");
      this.http.post(`/api/cuentas/${c.id}/cancelar`, { motivo_cancelacion: motivo || "" }).subscribe({
        next: (_) => {
          c.estatus = "CANCELADA";
        },
        error: (err) => {
          console.error(err);
          alert("No se pudo cancelar la cuenta");
        }
      });
      return;
    }
    this.http.put(`/api/cuentas/${c.id}/estatus`, { estatus: nuevo }).subscribe({
      next: (_) => {
        c.estatus = nuevo;
      },
      error: (err) => {
        console.error(err);
        alert("No se pudo cambiar el estatus");
      }
    });
  }
  badge(s) {
    const base = { padding: "3px 8px", borderRadius: "12px", fontSize: "12px", background: "#eee" };
    if (s === "ACTIVA")
      return __spreadProps(__spreadValues({}, base), { background: "#E6FAF0", color: "#067647" });
    if (s === "SUSPENDIDA")
      return __spreadProps(__spreadValues({}, base), { background: "#FEF0C7", color: "#9A5812" });
    if (s === "BLOQUEADA")
      return __spreadProps(__spreadValues({}, base), { background: "#FEE4E2", color: "#B42318" });
    if (s === "CANCELADA")
      return __spreadProps(__spreadValues({}, base), { background: "#E5E7EB", color: "#111827" });
    return base;
  }
};
_CuentasComponent.\u0275fac = function CuentasComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CuentasComponent)(\u0275\u0275directiveInject(HttpClient));
};
_CuentasComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CuentasComponent, selectors: [["app-cuentas"]], decls: 24, vars: 4, consts: [["empty", ""], [1, "container", 2, "max-width", "1100px", "margin", "20px auto"], [2, "display", "flex", "justify-content", "space-between", "align-items", "center", "margin-bottom", "12px"], [2, "margin", "0"], ["routerLink", "/dashboard", 1, "btn", "btn-secondary"], [1, "card", 2, "padding", "12px", "margin-bottom", "12px"], [2, "display", "grid", "grid-template-columns", "repeat(3, 1fr)", "gap", "10px"], ["name", "numero", "placeholder", "16 d\xEDgitos", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "nombre", "placeholder", "Nombre o apellido", 1, "form-control", 3, "ngModelChange", "ngModel"], [2, "display", "flex", "align-items", "flex-end", "gap", "8px"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", 3, "click"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], [1, "table-responsive"], [1, "table", "table-striped", 2, "width", "100%"], [4, "ngFor", "ngForOf"], [3, "ngStyle"], [3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [2, "opacity", "0.7"]], template: function CuentasComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h2", 3);
    \u0275\u0275text(3, "Cuentas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 4);
    \u0275\u0275text(5, "Volver");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "div")(9, "label");
    \u0275\u0275text(10, "N\xFAmero");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 7);
    \u0275\u0275twoWayListener("ngModelChange", function CuentasComponent_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.f.numero, $event) || (ctx.f.numero = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div")(13, "label");
    \u0275\u0275text(14, "Nombre cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function CuentasComponent_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.f.nombre, $event) || (ctx.f.nombre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 9)(17, "button", 10);
    \u0275\u0275listener("click", function CuentasComponent_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.buscar());
    });
    \u0275\u0275text(18, "Buscar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 11);
    \u0275\u0275listener("click", function CuentasComponent_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.limpiar());
    });
    \u0275\u0275text(20, "Limpiar");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(21, CuentasComponent_div_21_Template, 18, 1, "div", 12)(22, CuentasComponent_ng_template_22_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const empty_r6 = \u0275\u0275reference(23);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx.f.numero);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.f.nombre);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx.rows == null ? null : ctx.rows.length)("ngIfElse", empty_r6);
  }
}, dependencies: [CommonModule, NgForOf, NgIf, NgStyle, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterLink, DecimalPipe], encapsulation: 2 });
var CuentasComponent = _CuentasComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CuentasComponent, [{
    type: Component,
    args: [{
      selector: "app-cuentas",
      standalone: true,
      imports: [CommonModule, FormsModule, RouterLink],
      template: `
	<div class="container" style="max-width:1100px; margin:20px auto;">
		<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
			<h2 style="margin:0;">Cuentas</h2>
			<a class="btn btn-secondary" routerLink="/dashboard">Volver</a>
		</div>

		<div class="card" style="padding:12px; margin-bottom:12px;">
			<div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:10px;">
				<div>
					<label>N\xFAmero</label>
					<input class="form-control" [(ngModel)]="f.numero" name="numero" placeholder="16 d\xEDgitos" />
				</div>
				<div>
					<label>Nombre cliente</label>
					<input class="form-control" [(ngModel)]="f.nombre" name="nombre" placeholder="Nombre o apellido" />
				</div>
				<div style="display:flex; align-items:flex-end; gap:8px;">
					<button class="btn btn-primary" (click)="buscar()">Buscar</button>
					<button class="btn" (click)="limpiar()">Limpiar</button>
				</div>
			</div>
		</div>

		<div class="table-responsive" *ngIf="rows?.length; else empty">
			<table class="table table-striped" style="width:100%;">
				<thead>
					<tr>
						<th>ID</th>
						<th>N\xFAmero</th>
						<th>Cliente</th>
						<th>Saldo</th>
						<th>Estatus</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
					<tr *ngFor="let c of rows">
						<td>{{c.id}}</td>
						<td>{{c.numero_cuenta}}</td>
						<td>{{c.nombres}} {{c.apellido_paterno}} {{c.apellido_materno}}</td>
						<td>{{ c.saldo | number:'1.2-2' }}</td>
						<td>
							<span [ngStyle]="badge(c.estatus)">{{c.estatus}}</span>
						</td>
						<td>
							<select [ngModel]="c.estatus" (ngModelChange)="onChangeEstatus(c, $event)">
								<option *ngFor="let s of estatusOpts" [value]="s">{{s}}</option>
							</select>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<ng-template #empty>
			<p style="opacity:0.7;">No hay resultados.</p>
		</ng-template>
	</div>
	`
    }]
  }], () => [{ type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CuentasComponent, { className: "CuentasComponent", filePath: "src/app/pages/cuentas/cuentas.component.ts", lineNumber: 71 });
})();
export {
  CuentasComponent
};
//# sourceMappingURL=chunk-MMY3FEXG.js.map
