import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-QL6LS3FT.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  HttpClient,
  NgForOf,
  NgIf,
  Router,
  RouterLink,
  setClassMetadata,
  signal,
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
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-LQXE4UJV.js";

// src/app/pages/clientes/clientes.component.ts
var _c0 = (a0) => ["/clientes", a0];
function ClientesComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorMsg());
  }
}
function ClientesComponent_div_33_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
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
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "a", 24);
    \u0275\u0275text(23, "Perfil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 25);
    \u0275\u0275listener("click", function ClientesComponent_div_33_tr_25_Template_button_click_24_listener() {
      const c_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.generarReporteCliente(c_r4));
    });
    \u0275\u0275text(25, "Generar reporte");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", c_r4.nombres, " ", c_r4.apellido_paterno, " ", c_r4.apellido_materno);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.rfc);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.curp);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.telefono);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", c_r4.ciudad || "-", ", ", c_r4.estado || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 13, c_r4.ingresos_mensuales, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 16, c_r4.creado_en, "short"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(19, _c0, c_r4.id));
  }
}
function ClientesComponent_div_33_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 26);
    \u0275\u0275text(2, "Sin resultados");
    \u0275\u0275elementEnd()();
  }
}
function ClientesComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "table", 21)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "RFC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "CURP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Ubicaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Ingresos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Creado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275template(25, ClientesComponent_div_33_tr_25_Template, 26, 21, "tr", 22)(26, ClientesComponent_div_33_tr_26_Template, 3, 0, "tr", 23);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(25);
    \u0275\u0275property("ngForOf", ctx_r1.clientes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.clientes.length === 0);
  }
}
function ClientesComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1, "Cargando clientes\u2026");
    \u0275\u0275elementEnd();
  }
}
var _ClientesComponent = class _ClientesComponent {
  constructor(fb, http, router) {
    this.fb = fb;
    this.http = http;
    this.router = router;
    this.cargando = signal(false, ...ngDevMode ? [{ debugName: "cargando" }] : []);
    this.clientes = [];
    this.errorMsg = signal("", ...ngDevMode ? [{ debugName: "errorMsg" }] : []);
    this.filtros = this.fb.group({
      id: [""],
      rfc: [""],
      curp: [""],
      nombre: [""]
    });
    this.buscar();
  }
  baseUrl() {
    return window["API_BASE"] || "http://localhost:4000";
  }
  buscar() {
    this.errorMsg.set("");
    const { id, rfc, curp, nombre } = this.filtros.value || {};
    const base = this.baseUrl();
    this.cargando.set(true);
    if (id || rfc || curp) {
      const params = {};
      if (id)
        params.id = id;
      if (rfc)
        params.rfc = rfc;
      if (curp)
        params.curp = curp;
      this.http.get(`${base}/api/clientes/buscar`, { params }).subscribe({
        next: (rows) => {
          let data = Array.isArray(rows) ? rows : [];
          if (nombre)
            data = this.filtrarPorNombre(data, nombre);
          this.clientes = data;
          this.cargando.set(false);
        },
        error: (err) => {
          console.error(err);
          this.errorMsg.set("Error al buscar clientes");
          this.cargando.set(false);
        }
      });
    } else {
      this.http.get(`${base}/api/clientes`).subscribe({
        next: (rows) => {
          let data = Array.isArray(rows) ? rows : [];
          if (nombre)
            data = this.filtrarPorNombre(data, nombre);
          this.clientes = data;
          this.cargando.set(false);
        },
        error: (err) => {
          console.error(err);
          this.errorMsg.set("Error al cargar clientes");
          this.cargando.set(false);
        }
      });
    }
  }
  limpiar() {
    this.filtros.reset({ id: "", rfc: "", curp: "", nombre: "" });
    this.buscar();
  }
  crearCliente() {
    this.router.navigate(["/abrir-cuenta"]);
  }
  filtrarPorNombre(rows, nombre) {
    const n = String(nombre).trim().toLowerCase();
    if (!n)
      return rows;
    return rows.filter((r) => `${r.nombres || ""} ${r.apellido_paterno || ""} ${r.apellido_materno || ""}`.toLowerCase().includes(n));
  }
  generarReporteCliente(c) {
    const base = this.baseUrl();
    const defaultPeriodo = this.periodoActual();
    const periodo = (window.prompt("Periodo (YYYY-MM) para el reporte", defaultPeriodo) || "").trim();
    if (!periodo) {
      return;
    }
    if (!/^\d{4}-\d{2}$/.test(periodo)) {
      alert("Periodo inv\xE1lido. Usa el formato YYYY-MM.");
      return;
    }
    this.cargando.set(true);
    this.http.post(`${base}/api/estado-cuenta/${c.id}/generar`, null, { params: { periodo } }).subscribe({
      next: (resp) => {
        this.cargando.set(false);
        if (resp?.html) {
          const w = window.open("", "_blank");
          if (w) {
            w.document.open();
            w.document.write(resp.html);
            w.document.close();
          }
        }
        alert(`Reporte generado (HTML abierto) y enviado a ${c.email || "correo del cliente"}`);
      },
      error: (err) => {
        console.error(err);
        this.cargando.set(false);
        alert("No se pudo generar/enviar el reporte");
      }
    });
  }
  periodoActual() {
    const d = /* @__PURE__ */ new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
  }
};
_ClientesComponent.\u0275fac = function ClientesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ClientesComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router));
};
_ClientesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientesComponent, selectors: [["app-clientes"]], decls: 36, vars: 6, consts: [["loadingTpl", ""], [1, "clientes-container"], [1, "header"], [1, "header-actions"], [1, "btn", 3, "click"], ["routerLink", "/dashboard", 1, "btn", "btn-secondary"], [1, "filters", 3, "ngSubmit", "formGroup"], [1, "row"], [1, "field"], ["type", "number", "formControlName", "id", "placeholder", "N\xFAmero de cliente"], ["type", "text", "formControlName", "rfc", "placeholder", "RFC exacto"], ["type", "text", "formControlName", "curp", "placeholder", "CURP exacto"], [1, "field", "grow"], ["type", "text", "formControlName", "nombre", "placeholder", "Buscar por nombre o apellidos"], [1, "filter-actions"], ["type", "submit", 1, "btn", "primary", 3, "disabled"], ["type", "button", 1, "btn", 3, "click", "disabled"], ["class", "alert error", 4, "ngIf"], ["class", "table-wrapper", 4, "ngIf", "ngIfElse"], [1, "alert", "error"], [1, "table-wrapper"], [1, "table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "btn", 3, "routerLink"], [1, "btn", 2, "margin-left", "6px", 3, "click"], ["colspan", "9", 1, "empty"], [1, "loading"]], template: function ClientesComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h2");
    \u0275\u0275text(3, "Clientes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "button", 4);
    \u0275\u0275listener("click", function ClientesComponent_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.crearCliente());
    });
    \u0275\u0275text(6, "+ Crear cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 5);
    \u0275\u0275text(8, "Volver");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "form", 6);
    \u0275\u0275listener("ngSubmit", function ClientesComponent_Template_form_ngSubmit_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.buscar());
    });
    \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "label");
    \u0275\u0275text(13, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 8)(16, "label");
    \u0275\u0275text(17, "RFC");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 8)(20, "label");
    \u0275\u0275text(21, "CURP");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 12)(24, "label");
    \u0275\u0275text(25, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 14)(28, "button", 15);
    \u0275\u0275text(29, "Buscar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 16);
    \u0275\u0275listener("click", function ClientesComponent_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.limpiar());
    });
    \u0275\u0275text(31, "Limpiar");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(32, ClientesComponent_div_32_Template, 2, 1, "div", 17)(33, ClientesComponent_div_33_Template, 27, 2, "div", 18)(34, ClientesComponent_ng_template_34_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const loadingTpl_r5 = \u0275\u0275reference(35);
    \u0275\u0275advance(9);
    \u0275\u0275property("formGroup", ctx.filtros);
    \u0275\u0275advance(19);
    \u0275\u0275property("disabled", ctx.cargando());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.cargando());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.errorMsg());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.cargando())("ngIfElse", loadingTpl_r5);
  }
}, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, DecimalPipe, DatePipe], styles: ["\n\n.clientes-container[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 24px;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.filters[_ngcontent-%COMP%] {\n  background: #f4f6f9;\n  border: 1px solid #e6e9ef;\n  border-radius: 8px;\n  padding: 16px;\n  margin: 12px 0;\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 180px;\n}\n.field.grow[_ngcontent-%COMP%] {\n  flex: 1;\n}\nlabel[_ngcontent-%COMP%] {\n  font-size: .85rem;\n  color: #333;\n}\ninput[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid #cfd5e1;\n  border-radius: 6px;\n}\n.filter-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-top: 10px;\n}\n.btn[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #cfd5e1;\n  border-radius: 6px;\n  padding: 8px 12px;\n  cursor: pointer;\n}\n.btn.primary[_ngcontent-%COMP%] {\n  background: #0BA5FF;\n  color: #fff;\n  border-color: #0BA5FF;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #eef1f6;\n}\n.alert.error[_ngcontent-%COMP%] {\n  color: #b42318;\n  background: #fee4e2;\n  border: 1px solid #fecdca;\n  border-radius: 6px;\n  padding: 8px 12px;\n  margin: 10px 0;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow: auto;\n  border: 1px solid #e6e9ef;\n  border-radius: 8px;\n  background: #fff;\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border-bottom: 1px solid #eef1f6;\n  text-align: left;\n}\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  font-weight: 600;\n}\n.loading[_ngcontent-%COMP%], \n.empty[_ngcontent-%COMP%] {\n  padding: 16px;\n  text-align: center;\n  color: #667085;\n}\n@media (max-width:768px) {\n  .row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .field[_ngcontent-%COMP%] {\n    min-width: unset;\n  }\n}\n/*# sourceMappingURL=clientes.component.css.map */"] });
var ClientesComponent = _ClientesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientesComponent, [{
    type: Component,
    args: [{ selector: "app-clientes", standalone: true, imports: [CommonModule, RouterLink, ReactiveFormsModule], template: `<div class="clientes-container">\r
	<div class="header">\r
		<h2>Clientes</h2>\r
		<div class="header-actions">\r
			<button class="btn" (click)="crearCliente()">+ Crear cliente</button>\r
			<a class="btn btn-secondary" routerLink="/dashboard">Volver</a>\r
		</div>\r
	</div>\r
\r
	<form [formGroup]="filtros" (ngSubmit)="buscar()" class="filters">\r
		<div class="row">\r
			<div class="field">\r
				<label>ID</label>\r
				<input type="number" formControlName="id" placeholder="N\xFAmero de cliente" />\r
			</div>\r
			<div class="field">\r
				<label>RFC</label>\r
				<input type="text" formControlName="rfc" placeholder="RFC exacto" />\r
			</div>\r
			<div class="field">\r
				<label>CURP</label>\r
				<input type="text" formControlName="curp" placeholder="CURP exacto" />\r
			</div>\r
			<div class="field grow">\r
				<label>Nombre</label>\r
				<input type="text" formControlName="nombre" placeholder="Buscar por nombre o apellidos" />\r
			</div>\r
		</div>\r
		<div class="filter-actions">\r
			<button type="submit" class="btn primary" [disabled]="cargando()">Buscar</button>\r
			<button type="button" class="btn" (click)="limpiar()" [disabled]="cargando()">Limpiar</button>\r
		</div>\r
	</form>\r
\r
	<div class="alert error" *ngIf="errorMsg()">{{ errorMsg() }}</div>\r
\r
	<div class="table-wrapper" *ngIf="!cargando(); else loadingTpl">\r
		<table class="table">\r
			<thead>\r
				<tr>\r
					<th>ID</th>\r
					<th>Nombre</th>\r
					<th>RFC</th>\r
					<th>CURP</th>\r
					<th>Email</th>\r
					<th>Tel\xE9fono</th>\r
					<th>Ubicaci\xF3n</th>\r
					<th>Ingresos</th>\r
					<th>Creado</th>\r
					<th>Acciones</th>\r
				</tr>\r
			</thead>\r
			<tbody>\r
				<tr *ngFor="let c of clientes">\r
					<td>{{ c.id }}</td>\r
					<td>{{ c.nombres }} {{ c.apellido_paterno }} {{ c.apellido_materno }}</td>\r
					<td>{{ c.rfc }}</td>\r
					<td>{{ c.curp }}</td>\r
					<td>{{ c.email }}</td>\r
					<td>{{ c.telefono }}</td>\r
					<td>{{ c.ciudad || '-' }}, {{ c.estado || '-' }}</td>\r
					<td>{{ c.ingresos_mensuales | number:'1.0-2' }}</td>\r
					<td>{{ c.creado_en | date:'short' }}</td>\r
										<td>\r
											<a class="btn" [routerLink]="['/clientes', c.id]">Perfil</a>\r
											<button class="btn" style="margin-left:6px" (click)="generarReporteCliente(c)">Generar reporte</button>\r
										</td>\r
				</tr>\r
				<tr *ngIf="clientes.length === 0">\r
					<td colspan="9" class="empty">Sin resultados</td>\r
				</tr>\r
			</tbody>\r
		</table>\r
	</div>\r
\r
	<ng-template #loadingTpl>\r
		<div class="loading">Cargando clientes\u2026</div>\r
	</ng-template>\r
</div>`, styles: ["/* src/app/pages/clientes/clientes.component.css */\n.clientes-container {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 24px;\n}\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.header-actions {\n  display: flex;\n  gap: 10px;\n}\n.filters {\n  background: #f4f6f9;\n  border: 1px solid #e6e9ef;\n  border-radius: 8px;\n  padding: 16px;\n  margin: 12px 0;\n}\n.row {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 180px;\n}\n.field.grow {\n  flex: 1;\n}\nlabel {\n  font-size: .85rem;\n  color: #333;\n}\ninput {\n  padding: 10px 12px;\n  border: 1px solid #cfd5e1;\n  border-radius: 6px;\n}\n.filter-actions {\n  display: flex;\n  gap: 8px;\n  margin-top: 10px;\n}\n.btn {\n  background: #fff;\n  border: 1px solid #cfd5e1;\n  border-radius: 6px;\n  padding: 8px 12px;\n  cursor: pointer;\n}\n.btn.primary {\n  background: #0BA5FF;\n  color: #fff;\n  border-color: #0BA5FF;\n}\n.btn-secondary {\n  background: #eef1f6;\n}\n.alert.error {\n  color: #b42318;\n  background: #fee4e2;\n  border: 1px solid #fecdca;\n  border-radius: 6px;\n  padding: 8px 12px;\n  margin: 10px 0;\n}\n.table-wrapper {\n  overflow: auto;\n  border: 1px solid #e6e9ef;\n  border-radius: 8px;\n  background: #fff;\n}\n.table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.table th,\n.table td {\n  padding: 10px 12px;\n  border-bottom: 1px solid #eef1f6;\n  text-align: left;\n}\n.table thead th {\n  background: #f8fafc;\n  font-weight: 600;\n}\n.loading,\n.empty {\n  padding: 16px;\n  text-align: center;\n  color: #667085;\n}\n@media (max-width:768px) {\n  .row {\n    flex-direction: column;\n  }\n  .field {\n    min-width: unset;\n  }\n}\n/*# sourceMappingURL=clientes.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: HttpClient }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientesComponent, { className: "ClientesComponent", filePath: "src/app/pages/clientes/clientes.component.ts", lineNumber: 14 });
})();
export {
  ClientesComponent
};
//# sourceMappingURL=chunk-LPOMGOXG.js.map
