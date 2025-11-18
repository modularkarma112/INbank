import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-QL6LS3FT.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  DecimalPipe,
  HttpClient,
  NgForOf,
  NgIf,
  NgStyle,
  Router,
  RouterLink,
  __spreadProps,
  __spreadValues,
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate4
} from "./chunk-LQXE4UJV.js";

// src/app/pages/cliente-perfil/cliente-perfil.component.ts
var _c0 = (a0) => ({ padding: "2px 6px", borderRadius: "4px", backgroundColor: a0 });
function ClientePerfilComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMsg());
  }
}
function ClientePerfilComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.infoMsg());
  }
}
function ClientePerfilComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1, "Este cliente no tiene solicitudes registradas.");
    \u0275\u0275elementEnd();
  }
}
function ClientePerfilComponent_div_62_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 31)(1, "td", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 32)(4, "span", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 32);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 32);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 32);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 32);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 32);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(11, _c0, s_r2.estatus === "APROBADO" ? "#d1fae5" : s_r2.estatus === "RECHAZADO" ? "#fee2e2" : "#e5e7eb"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r2.estatus);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", s_r2.monto);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.plazo_meses);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", s_r2.interes, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", s_r2.interes_penalizacion, "%/d\xEDa");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(16, 8, s_r2.monto * (1 + s_r2.interes / 100 * s_r2.plazo_meses), "1.2-2"));
  }
}
function ClientePerfilComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 27)(2, "table", 28)(3, "thead")(4, "tr")(5, "th", 29);
    \u0275\u0275text(6, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 29);
    \u0275\u0275text(8, "Estatus");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 29);
    \u0275\u0275text(10, "Monto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 29);
    \u0275\u0275text(12, "Plazo (meses)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 29);
    \u0275\u0275text(14, "Inter\xE9s mensual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 29);
    \u0275\u0275text(16, "Penalizaci\xF3n diaria");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 29);
    \u0275\u0275text(18, "Total estimado");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275template(20, ClientePerfilComponent_div_62_tr_20_Template, 17, 13, "tr", 30);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r0.solicitudes());
  }
}
function ClientePerfilComponent_div_63_li_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate4("#", a_r3.id, " - ", a_r3.tipo_prestamo, " por $", \u0275\u0275pipeBind2(2, 4, a_r3.monto, "1.0-0"), " a ", a_r3.plazo_meses, " meses");
  }
}
function ClientePerfilComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1, " Cr\xE9dito(s) aprobado(s): ");
    \u0275\u0275elementStart(2, "ul", 35);
    \u0275\u0275template(3, ClientePerfilComponent_div_63_li_3_Template, 3, 7, "li", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.aprobados());
  }
}
var _ClientePerfilComponent = class _ClientePerfilComponent {
  constructor(fb, http, route, router) {
    this.fb = fb;
    this.http = http;
    this.route = route;
    this.router = router;
    this.cargando = signal(false, ...ngDevMode ? [{ debugName: "cargando" }] : []);
    this.editMode = signal(false, ...ngDevMode ? [{ debugName: "editMode" }] : []);
    this.errorMsg = signal("", ...ngDevMode ? [{ debugName: "errorMsg" }] : []);
    this.infoMsg = signal("", ...ngDevMode ? [{ debugName: "infoMsg" }] : []);
    this.solicitudes = signal([], ...ngDevMode ? [{ debugName: "solicitudes" }] : []);
    this.aprobados = computed(() => (this.solicitudes() || []).filter((s) => s?.estatus === "APROBADO"), ...ngDevMode ? [{ debugName: "aprobados" }] : []);
  }
  ngOnInit() {
    this.form = this.fb.group({
      nombres: ["", Validators.required],
      apellido_paterno: [""],
      apellido_materno: [""],
      rfc: [""],
      curp: [""],
      email: [""],
      telefono: [""],
      estado: [""],
      ciudad: [""],
      direccion: [""],
      ingresos_mensuales: [""]
    });
    this.form.disable();
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    if (!this.id) {
      this.errorMsg.set("ID inv\xE1lido");
      return;
    }
    this.cargar();
  }
  cargar() {
    this.cargando.set(true);
    this.http.get(`/api/clientes/${this.id}`).subscribe({
      next: (c) => {
        this.form.patchValue(c || {});
        this.cargando.set(false);
        this.cargarSolicitudes();
      },
      error: (err) => {
        console.error(err);
        this.errorMsg.set("No se pudo cargar el cliente");
        this.cargando.set(false);
      }
    });
  }
  cargarSolicitudes() {
    this.http.get(`/api/prestamos/cliente/${this.id}`).subscribe({
      next: (rows) => {
        this.solicitudes.set(rows || []);
      },
      error: (err) => {
        console.error("No se pudieron cargar solicitudes", err);
      }
    });
  }
  toggleEdit() {
    this.editMode.set(!this.editMode());
    if (this.editMode())
      this.form.enable();
    else
      this.form.disable();
  }
  guardar() {
    if (!this.editMode())
      return;
    const password = prompt("Por seguridad, ingrese su contrase\xF1a:");
    if (!password)
      return;
    const body = __spreadProps(__spreadValues({}, this.form.value), { password });
    this.cargando.set(true);
    this.http.put(`/api/clientes/${this.id}`, body).subscribe({
      next: (_) => {
        this.infoMsg.set("Cambios guardados");
        this.editMode.set(false);
        this.form.disable();
        this.cargando.set(false);
      },
      error: (err) => {
        console.error(err);
        this.errorMsg.set(err?.error?.message || "No se pudo guardar");
        this.cargando.set(false);
      }
    });
  }
};
_ClientePerfilComponent.\u0275fac = function ClientePerfilComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ClientePerfilComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
};
_ClientePerfilComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientePerfilComponent, selectors: [["app-cliente-perfil"]], decls: 64, vars: 9, consts: [[1, "perfil-container"], [1, "header"], [1, "actions"], ["routerLink", "/clientes", 1, "btn"], [1, "btn", "primary", 3, "click"], [1, "btn", "success", 3, "click", "disabled"], ["class", "alert error", 4, "ngIf"], ["class", "alert info", 4, "ngIf"], [1, "form-grid", 3, "formGroup"], [1, "field"], ["formControlName", "nombres", 1, "form-control"], ["formControlName", "apellido_paterno", 1, "form-control"], ["formControlName", "apellido_materno", 1, "form-control"], ["formControlName", "rfc", 1, "form-control"], ["formControlName", "curp", 1, "form-control"], ["formControlName", "email", 1, "form-control"], ["formControlName", "telefono", 1, "form-control"], ["formControlName", "estado", 1, "form-control"], ["formControlName", "ciudad", 1, "form-control"], [1, "field", "grow"], ["formControlName", "direccion", 1, "form-control"], ["formControlName", "ingresos_mensuales", 1, "form-control"], [2, "margin-top", "24px"], [4, "ngIf"], ["class", "alert success", "style", "margin-top:12px;", 4, "ngIf"], [1, "alert", "error"], [1, "alert", "info"], [2, "overflow", "auto"], [2, "width", "100%", "border-collapse", "collapse"], [2, "text-align", "left", "padding", "6px"], ["style", "border-top:1px solid #eee;", 4, "ngFor", "ngForOf"], [2, "border-top", "1px solid #eee"], [2, "padding", "6px"], [3, "ngStyle"], [1, "alert", "success", 2, "margin-top", "12px"], [2, "margin", "6px 0 0 16px"], [4, "ngFor", "ngForOf"]], template: function ClientePerfilComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 2)(5, "button", 3);
    \u0275\u0275text(6, "Volver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 4);
    \u0275\u0275listener("click", function ClientePerfilComponent_Template_button_click_7_listener() {
      return ctx.toggleEdit();
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 5);
    \u0275\u0275listener("click", function ClientePerfilComponent_Template_button_click_9_listener() {
      return ctx.guardar();
    });
    \u0275\u0275text(10, "Guardar");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(11, ClientePerfilComponent_div_11_Template, 2, 1, "div", 6)(12, ClientePerfilComponent_div_12_Template, 2, 1, "div", 7);
    \u0275\u0275elementStart(13, "form", 8)(14, "div", 9)(15, "label");
    \u0275\u0275text(16, "Nombres");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 9)(19, "label");
    \u0275\u0275text(20, "Apellido paterno");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 9)(23, "label");
    \u0275\u0275text(24, "Apellido materno");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 9)(27, "label");
    \u0275\u0275text(28, "RFC");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 9)(31, "label");
    \u0275\u0275text(32, "CURP");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 9)(35, "label");
    \u0275\u0275text(36, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "input", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 9)(39, "label");
    \u0275\u0275text(40, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "input", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 9)(43, "label");
    \u0275\u0275text(44, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275element(45, "input", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 9)(47, "label");
    \u0275\u0275text(48, "Ciudad");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "input", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 19)(51, "label");
    \u0275\u0275text(52, "Direcci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "input", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 9)(55, "label");
    \u0275\u0275text(56, "Ingresos mensuales");
    \u0275\u0275elementEnd();
    \u0275\u0275element(57, "input", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 22)(59, "h3");
    \u0275\u0275text(60, "Solicitudes de Pr\xE9stamo");
    \u0275\u0275elementEnd();
    \u0275\u0275template(61, ClientePerfilComponent_div_61_Template, 2, 0, "div", 7)(62, ClientePerfilComponent_div_62_Template, 21, 1, "div", 23)(63, ClientePerfilComponent_div_63_Template, 4, 1, "div", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Perfil de Cliente #", ctx.id);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.editMode() ? "Cancelar edici\xF3n" : "Editar");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx.editMode());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.errorMsg());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.infoMsg());
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(48);
    \u0275\u0275property("ngIf", !((tmp_6_0 = ctx.solicitudes()) == null ? null : tmp_6_0.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_7_0 = ctx.solicitudes()) == null ? null : tmp_7_0.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_8_0 = ctx.aprobados()) == null ? null : tmp_8_0.length);
  }
}, dependencies: [CommonModule, NgForOf, NgIf, NgStyle, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, DecimalPipe], styles: ["\n\n.perfil-container[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 20px;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #cfd5e1;\n  border-radius: 6px;\n  padding: 8px 12px;\n  cursor: pointer;\n}\n.btn.primary[_ngcontent-%COMP%] {\n  background: #0BA5FF;\n  color: #fff;\n  border-color: #0BA5FF;\n}\n.btn.success[_ngcontent-%COMP%] {\n  background: #10B981;\n  color: #fff;\n  border-color: #10B981;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border-radius: 6px;\n  margin: 10px 0;\n}\n.alert.error[_ngcontent-%COMP%] {\n  background: #fee4e2;\n  color: #b42318;\n  border: 1px solid #fecdca;\n}\n.alert.info[_ngcontent-%COMP%] {\n  background: #eff8ff;\n  color: #175CD3;\n  border: 1px solid #B2DDFF;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n  background: #f9fafb;\n  border: 1px solid #e6e9ef;\n  border-radius: 8px;\n  padding: 16px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.field.grow[_ngcontent-%COMP%] {\n  grid-column: span 3;\n}\nlabel[_ngcontent-%COMP%] {\n  font-size: .85rem;\n  color: #333;\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid #cfd5e1;\n  border-radius: 6px;\n}\n/*# sourceMappingURL=cliente-perfil.component.css.map */"] });
var ClientePerfilComponent = _ClientePerfilComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientePerfilComponent, [{
    type: Component,
    args: [{ selector: "app-cliente-perfil", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink], template: `<div class="perfil-container">\r
  <div class="header">\r
    <h2>Perfil de Cliente #{{id}}</h2>\r
    <div class="actions">\r
      <button class="btn" routerLink="/clientes">Volver</button>\r
      <button class="btn primary" (click)="toggleEdit()">{{ editMode() ? 'Cancelar edici\xF3n' : 'Editar' }}</button>\r
      <button class="btn success" (click)="guardar()" [disabled]="!editMode()">Guardar</button>\r
    </div>\r
  </div>\r
\r
  <div class="alert error" *ngIf="errorMsg()">{{errorMsg()}}</div>\r
  <div class="alert info" *ngIf="infoMsg()">{{infoMsg()}}</div>\r
\r
  <form [formGroup]="form" class="form-grid">\r
    <div class="field">\r
      <label>Nombres</label>\r
      <input class="form-control" formControlName="nombres" />\r
    </div>\r
    <div class="field"><label>Apellido paterno</label><input class="form-control" formControlName="apellido_paterno" /></div>\r
    <div class="field"><label>Apellido materno</label><input class="form-control" formControlName="apellido_materno" /></div>\r
    <div class="field"><label>RFC</label><input class="form-control" formControlName="rfc" /></div>\r
    <div class="field"><label>CURP</label><input class="form-control" formControlName="curp" /></div>\r
    <div class="field"><label>Email</label><input class="form-control" formControlName="email" /></div>\r
    <div class="field"><label>Tel\xE9fono</label><input class="form-control" formControlName="telefono" /></div>\r
    <div class="field"><label>Estado</label><input class="form-control" formControlName="estado" /></div>\r
    <div class="field"><label>Ciudad</label><input class="form-control" formControlName="ciudad" /></div>\r
    <div class="field grow"><label>Direcci\xF3n</label><input class="form-control" formControlName="direccion" /></div>\r
    <div class="field"><label>Ingresos mensuales</label><input class="form-control" formControlName="ingresos_mensuales" /></div>\r
  </form>\r
\r
  <div style="margin-top:24px;">\r
  <h3>Solicitudes de Pr\xE9stamo</h3>\r
    <div *ngIf="!(solicitudes()?.length)" class="alert info">Este cliente no tiene solicitudes registradas.</div>\r
    <div *ngIf="solicitudes()?.length">\r
      <div style="overflow:auto;">\r
        <table style="width:100%; border-collapse:collapse;">\r
          <thead>\r
            <tr>\r
              <th style="text-align:left; padding:6px;">ID</th>\r
              <th style="text-align:left; padding:6px;">Estatus</th>\r
              <th style="text-align:left; padding:6px;">Monto</th>\r
              <th style="text-align:left; padding:6px;">Plazo (meses)</th>\r
              <th style="text-align:left; padding:6px;">Inter\xE9s mensual</th>\r
              <th style="text-align:left; padding:6px;">Penalizaci\xF3n diaria</th>\r
              <th style="text-align:left; padding:6px;">Total estimado</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let s of solicitudes()" style="border-top:1px solid #eee;">\r
              <td style="padding:6px;">{{s.id}}</td>\r
              <td style="padding:6px;">\r
                <span [ngStyle]="{padding:'2px 6px', borderRadius:'4px', backgroundColor: s.estatus==='APROBADO' ? '#d1fae5' : (s.estatus==='RECHAZADO' ? '#fee2e2' : '#e5e7eb')}" >{{s.estatus}}</span>\r
              </td>\r
              <td style="padding:6px;">\${{s.monto}}</td>\r
              <td style="padding:6px;">{{s.plazo_meses}}</td>\r
              <td style="padding:6px;">{{s.interes}}%</td>\r
              <td style="padding:6px;">{{s.interes_penalizacion}}%/d\xEDa</td>\r
              <td style="padding:6px;">\${{ (s.monto * (1 + (s.interes/100) * s.plazo_meses)) | number:'1.2-2' }}</td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
    </div>\r
    <div *ngIf="aprobados()?.length" class="alert success" style="margin-top:12px;">\r
      Cr\xE9dito(s) aprobado(s):\r
      <ul style="margin:6px 0 0 16px;">\r
        <li *ngFor="let a of aprobados()">#{{a.id}} - {{a.tipo_prestamo}} por \${{a.monto | number:'1.0-0'}} a {{a.plazo_meses}} meses</li>\r
      </ul>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/pages/cliente-perfil/cliente-perfil.component.css */\n.perfil-container {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 20px;\n}\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.actions {\n  display: flex;\n  gap: 8px;\n}\n.btn {\n  background: #fff;\n  border: 1px solid #cfd5e1;\n  border-radius: 6px;\n  padding: 8px 12px;\n  cursor: pointer;\n}\n.btn.primary {\n  background: #0BA5FF;\n  color: #fff;\n  border-color: #0BA5FF;\n}\n.btn.success {\n  background: #10B981;\n  color: #fff;\n  border-color: #10B981;\n}\n.alert {\n  padding: 8px 12px;\n  border-radius: 6px;\n  margin: 10px 0;\n}\n.alert.error {\n  background: #fee4e2;\n  color: #b42318;\n  border: 1px solid #fecdca;\n}\n.alert.info {\n  background: #eff8ff;\n  color: #175CD3;\n  border: 1px solid #B2DDFF;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n  background: #f9fafb;\n  border: 1px solid #e6e9ef;\n  border-radius: 8px;\n  padding: 16px;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.field.grow {\n  grid-column: span 3;\n}\nlabel {\n  font-size: .85rem;\n  color: #333;\n}\n.form-control {\n  padding: 10px 12px;\n  border: 1px solid #cfd5e1;\n  border-radius: 6px;\n}\n/*# sourceMappingURL=cliente-perfil.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: HttpClient }, { type: ActivatedRoute }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientePerfilComponent, { className: "ClientePerfilComponent", filePath: "src/app/pages/cliente-perfil/cliente-perfil.component.ts", lineNumber: 14 });
})();
export {
  ClientePerfilComponent
};
//# sourceMappingURL=chunk-JQR7DXFD.js.map
