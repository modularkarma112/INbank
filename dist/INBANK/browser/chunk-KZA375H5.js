import {
  CheckboxControlValueAccessor,
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
  DecimalPipe,
  HttpClient,
  NgForOf,
  NgIf,
  Router,
  RouterLink,
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
  ɵɵtextInterpolate2
} from "./chunk-LQXE4UJV.js";

// src/app/pages/transferencias/transferencias.component.ts
function TransferenciasComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "small", 36);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Saldo: ", \u0275\u0275pipeBind2(3, 1, ctx_r0.origenCuenta.saldo, "1.2-2"));
  }
}
function TransferenciasComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 7);
    \u0275\u0275text(2, "Banco destino");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 37);
    \u0275\u0275elementEnd();
  }
}
function TransferenciasComponent_div_55_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function TransferenciasComponent_div_55_button_1_Template_button_click_0_listener() {
      const c_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.usarContacto(c_r3));
    });
    \u0275\u0275elementStart(1, "div", 41)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 36);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "small");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r3.nombre_propietario);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", c_r3.identificador_tipo, " \xB7 ", c_r3.identificador);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r3.alias || c_r3.banco);
  }
}
function TransferenciasComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275template(1, TransferenciasComponent_div_55_button_1_Template, 9, 4, "button", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.contactos());
  }
}
var _TransferenciasComponent = class _TransferenciasComponent {
  constructor(fb, http, router) {
    this.fb = fb;
    this.http = http;
    this.router = router;
    this.api = window.API_BASE || "";
    this.origenCuenta = null;
    this.contactos = signal([], ...ngDevMode ? [{ debugName: "contactos" }] : []);
    this.buscandoContactos = signal(false, ...ngDevMode ? [{ debugName: "buscandoContactos" }] : []);
    this.comision = signal(0, ...ngDevMode ? [{ debugName: "comision" }] : []);
    this.total = computed(() => {
      const monto = Number(this.form.controls.monto.value || 0);
      return monto > 0 ? monto + (this.comision() || 0) : 0;
    }, ...ngDevMode ? [{ debugName: "total" }] : []);
    this.form = this.fb.group({
      // Origen
      origenNumeroCuenta: ["", [Validators.required, Validators.minLength(10)]],
      // Destino
      mismoBanco: [true, Validators.required],
      destinoTipo: ["NUMERO_CUENTA", Validators.required],
      destinoIdentificador: ["", Validators.required],
      destinoNombre: ["", Validators.required],
      destinoBanco: [""],
      // Monto/Concepto
      monto: [null, [Validators.required, Validators.min(1)]],
      concepto: [""],
      // Contacto
      guardarContacto: [true],
      buscarContacto: [""]
    });
  }
  // Buscar cuenta de origen por número para obtener cliente_id
  async resolverOrigen() {
    const numero = this.form.controls.origenNumeroCuenta.value?.toString().trim();
    if (!numero)
      return;
    try {
      this.origenCuenta = await this.http.get(`${this.api}/api/cuentas/numero/${encodeURIComponent(numero)}`).toPromise();
    } catch (e) {
      this.origenCuenta = null;
      alert("No se encontr\xF3 la cuenta de origen");
    }
  }
  // Preview de comisión al cambiar monto
  async actualizarComision() {
    const monto = Number(this.form.controls.monto.value || 0);
    if (!monto || monto <= 0) {
      this.comision.set(0);
      return;
    }
    try {
      const r = await this.http.get(`${this.api}/api/transferencias/comision`, { params: { monto } }).toPromise();
      this.comision.set(Number(r?.comision || 0));
    } catch {
      this.comision.set(0);
    }
  }
  // Búsqueda de contactos por cliente
  async buscarContactos() {
    const q = this.form.controls.buscarContacto.value?.toString().trim() || "";
    if (!this.origenCuenta?.cliente_id) {
      alert("Primero resuelva la cuenta de origen");
      return;
    }
    this.buscandoContactos.set(true);
    try {
      const r = await this.http.get(`${this.api}/api/transferencias/contactos`, {
        params: { cliente_id: this.origenCuenta.cliente_id, q }
      }).toPromise();
      this.contactos.set(r || []);
    } finally {
      this.buscandoContactos.set(false);
    }
  }
  usarContacto(c) {
    this.form.patchValue({
      destinoTipo: c.identificador_tipo,
      destinoIdentificador: c.identificador,
      destinoNombre: c.nombre_propietario,
      destinoBanco: c.banco || ""
    });
  }
  async submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    if (!this.origenCuenta?.id) {
      await this.resolverOrigen();
      if (!this.origenCuenta?.id)
        return;
    }
    await this.actualizarComision();
    const v = this.form.value;
    const payload = {
      cliente_id: this.origenCuenta.cliente_id,
      origen_cuenta_id: this.origenCuenta.id,
      destino_tipo: v.destinoTipo,
      destino_identificador: v.destinoIdentificador,
      destino_nombre: v.destinoNombre,
      destino_banco: v.mismoBanco ? null : v.destinoBanco,
      monto: Number(v.monto),
      concepto: v.concepto,
      guardar_contacto: !!v.guardarContacto
    };
    try {
      const r = await this.http.post(`${this.api}/api/transferencias`, payload).toPromise();
      this.router.navigate(["/comprobante-transferencia", r.id]);
    } catch (e) {
      alert(e?.error?.message || "Error ejecutando transferencia");
    }
  }
};
_TransferenciasComponent.\u0275fac = function TransferenciasComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TransferenciasComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router));
};
_TransferenciasComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransferenciasComponent, selectors: [["app-transferencias"]], decls: 85, vars: 9, consts: [[1, "container", "mt-4"], [1, "d-flex", "justify-content-between", "align-items-center"], ["routerLink", "/dashboard", 1, "btn", "btn-secondary"], [1, "mt-3", 3, "ngSubmit", "formGroup"], [1, "card", "p-3", "mb-3"], [1, "row", "g-2", "align-items-end"], [1, "col-md-6"], [1, "form-label"], ["formControlName", "origenNumeroCuenta", "placeholder", "16 d\xEDgitos", 1, "form-control", 3, "blur"], [4, "ngIf"], [1, "row", "g-2"], [1, "col-md-3"], ["formControlName", "mismoBanco", 1, "form-select"], [3, "ngValue"], ["formControlName", "destinoTipo", 1, "form-select"], ["value", "NUMERO_CUENTA"], ["value", "CLABE"], ["value", "TELEFONO"], ["formControlName", "destinoIdentificador", "placeholder", "Cuenta / CLABE / Tel\xE9fono", 1, "form-control"], ["formControlName", "destinoNombre", 1, "form-control"], ["class", "col-md-6", 4, "ngIf"], [1, "mt-3"], [1, "input-group"], ["formControlName", "buscarContacto", "placeholder", "Nombre/identificador", 1, "form-control"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click", "disabled"], ["class", "list-group mt-2", 4, "ngIf"], [1, "col-md-4"], ["type", "number", "formControlName", "monto", 1, "form-control", 3, "input"], [1, "col-md-8"], ["formControlName", "concepto", 1, "form-control"], [1, "mt-2"], [1, "form-check", "mb-3"], ["type", "checkbox", "id", "guardarContacto", "formControlName", "guardarContacto", 1, "form-check-input"], ["for", "guardarContacto", 1, "form-check-label"], [1, "d-flex", "gap-2"], ["type", "submit", 1, "btn", "btn-primary"], [1, "text-muted"], ["formControlName", "destinoBanco", "placeholder", "Nombre del banco", 1, "form-control"], [1, "list-group", "mt-2"], ["type", "button", "class", "list-group-item list-group-item-action", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "list-group-item", "list-group-item-action", 3, "click"], [1, "d-flex", "justify-content-between"]], template: function TransferenciasComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
    \u0275\u0275text(3, "Transferencias");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 2);
    \u0275\u0275text(5, "Volver");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "form", 3);
    \u0275\u0275listener("ngSubmit", function TransferenciasComponent_Template_form_ngSubmit_6_listener() {
      return ctx.submit();
    });
    \u0275\u0275elementStart(7, "div", 4)(8, "h5");
    \u0275\u0275text(9, "Cuenta Origen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 5)(11, "div", 6)(12, "label", 7);
    \u0275\u0275text(13, "N\xFAmero de cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 8);
    \u0275\u0275listener("blur", function TransferenciasComponent_Template_input_blur_14_listener() {
      return ctx.resolverOrigen();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 6);
    \u0275\u0275template(16, TransferenciasComponent_div_16_Template, 4, 4, "div", 9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 4)(18, "h5");
    \u0275\u0275text(19, "Destino");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 10)(21, "div", 11)(22, "label", 7);
    \u0275\u0275text(23, "Mismo banco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "select", 12)(25, "option", 13);
    \u0275\u0275text(26, "S\xED");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 13);
    \u0275\u0275text(28, "No");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 11)(30, "label", 7);
    \u0275\u0275text(31, "Tipo de identificador");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "select", 14)(33, "option", 15);
    \u0275\u0275text(34, "N\xFAmero de Cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 16);
    \u0275\u0275text(36, "CLABE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option", 17);
    \u0275\u0275text(38, "Tel\xE9fono");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 6)(40, "label", 7);
    \u0275\u0275text(41, "Identificador");
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "input", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 6)(44, "label", 7);
    \u0275\u0275text(45, "Nombre del propietario");
    \u0275\u0275elementEnd();
    \u0275\u0275element(46, "input", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(47, TransferenciasComponent_div_47_Template, 4, 0, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 21)(49, "label", 7);
    \u0275\u0275text(50, "Buscar contacto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 22);
    \u0275\u0275element(52, "input", 23);
    \u0275\u0275elementStart(53, "button", 24);
    \u0275\u0275listener("click", function TransferenciasComponent_Template_button_click_53_listener() {
      return ctx.buscarContactos();
    });
    \u0275\u0275text(54, "Buscar");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(55, TransferenciasComponent_div_55_Template, 2, 1, "div", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 4)(57, "h5");
    \u0275\u0275text(58, "Monto y concepto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 5)(60, "div", 26)(61, "label", 7);
    \u0275\u0275text(62, "Monto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "input", 27);
    \u0275\u0275listener("input", function TransferenciasComponent_Template_input_input_63_listener() {
      return ctx.actualizarComision();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 28)(65, "label", 7);
    \u0275\u0275text(66, "Concepto");
    \u0275\u0275elementEnd();
    \u0275\u0275element(67, "input", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 30)(69, "small");
    \u0275\u0275text(70, "Comisi\xF3n: ");
    \u0275\u0275elementStart(71, "strong");
    \u0275\u0275text(72);
    \u0275\u0275elementEnd();
    \u0275\u0275text(73, " \xB7 Total a debitar: ");
    \u0275\u0275elementStart(74, "strong");
    \u0275\u0275text(75);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(76, "div", 31);
    \u0275\u0275element(77, "input", 32);
    \u0275\u0275elementStart(78, "label", 33);
    \u0275\u0275text(79, "Guardar como contacto");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 34)(81, "button", 35);
    \u0275\u0275text(82, "Transferir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "a", 2);
    \u0275\u0275text(84, "Cancelar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx.origenCuenta);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngValue", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", false);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngIf", !ctx.form.controls.mismoBanco.value);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx.buscandoContactos());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.contactos().length);
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate1("$", ctx.comision());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", ctx.total());
  }
}, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, DecimalPipe], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  max-width: 960px;\n}\n.card[_ngcontent-%COMP%] {\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n}\n/*# sourceMappingURL=transferencias.component.css.map */"] });
var TransferenciasComponent = _TransferenciasComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TransferenciasComponent, [{
    type: Component,
    args: [{ selector: "app-transferencias", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink], template: '<div class="container mt-4">\r\n  <div class="d-flex justify-content-between align-items-center">\r\n    <h2>Transferencias</h2>\r\n    <a class="btn btn-secondary" routerLink="/dashboard">Volver</a>\r\n  </div>\r\n  <form [formGroup]="form" (ngSubmit)="submit()" class="mt-3">\r\n    <div class="card p-3 mb-3">\r\n      <h5>Cuenta Origen</h5>\r\n      <div class="row g-2 align-items-end">\r\n        <div class="col-md-6">\r\n          <label class="form-label">N\xFAmero de cuenta</label>\r\n          <input class="form-control" formControlName="origenNumeroCuenta" (blur)="resolverOrigen()" placeholder="16 d\xEDgitos" />\r\n        </div>\r\n        <div class="col-md-6">\r\n          <div *ngIf="origenCuenta">\r\n            <small class="text-muted">Saldo: {{ origenCuenta.saldo | number:\'1.2-2\' }}</small>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="card p-3 mb-3">\r\n      <h5>Destino</h5>\r\n      <div class="row g-2">\r\n        <div class="col-md-3">\r\n          <label class="form-label">Mismo banco</label>\r\n          <select class="form-select" formControlName="mismoBanco">\r\n            <option [ngValue]="true">S\xED</option>\r\n            <option [ngValue]="false">No</option>\r\n          </select>\r\n        </div>\r\n        <div class="col-md-3">\r\n          <label class="form-label">Tipo de identificador</label>\r\n          <select class="form-select" formControlName="destinoTipo">\r\n            <option value="NUMERO_CUENTA">N\xFAmero de Cuenta</option>\r\n            <option value="CLABE">CLABE</option>\r\n            <option value="TELEFONO">Tel\xE9fono</option>\r\n          </select>\r\n        </div>\r\n        <div class="col-md-6">\r\n          <label class="form-label">Identificador</label>\r\n          <input class="form-control" formControlName="destinoIdentificador" placeholder="Cuenta / CLABE / Tel\xE9fono" />\r\n        </div>\r\n        <div class="col-md-6">\r\n          <label class="form-label">Nombre del propietario</label>\r\n          <input class="form-control" formControlName="destinoNombre" />\r\n        </div>\r\n        <div class="col-md-6" *ngIf="!form.controls.mismoBanco.value">\r\n          <label class="form-label">Banco destino</label>\r\n          <input class="form-control" formControlName="destinoBanco" placeholder="Nombre del banco" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class="mt-3">\r\n        <label class="form-label">Buscar contacto</label>\r\n        <div class="input-group">\r\n          <input class="form-control" formControlName="buscarContacto" placeholder="Nombre/identificador" />\r\n          <button type="button" class="btn btn-outline-secondary" (click)="buscarContactos()" [disabled]="buscandoContactos()">Buscar</button>\r\n        </div>\r\n        <div class="list-group mt-2" *ngIf="contactos().length">\r\n          <button type="button" class="list-group-item list-group-item-action"\r\n                  *ngFor="let c of contactos()"\r\n                  (click)="usarContacto(c)">\r\n            <div class="d-flex justify-content-between">\r\n              <strong>{{ c.nombre_propietario }}</strong>\r\n              <small class="text-muted">{{ c.identificador_tipo }} \xB7 {{ c.identificador }}</small>\r\n            </div>\r\n            <div><small>{{ c.alias || c.banco }}</small></div>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="card p-3 mb-3">\r\n      <h5>Monto y concepto</h5>\r\n      <div class="row g-2 align-items-end">\r\n        <div class="col-md-4">\r\n          <label class="form-label">Monto</label>\r\n          <input type="number" class="form-control" formControlName="monto" (input)="actualizarComision()" />\r\n        </div>\r\n        <div class="col-md-8">\r\n          <label class="form-label">Concepto</label>\r\n          <input class="form-control" formControlName="concepto" />\r\n        </div>\r\n      </div>\r\n      <div class="mt-2">\r\n        <small>Comisi\xF3n: <strong>${{ comision() }}</strong> \xB7 Total a debitar: <strong>${{ total() }}</strong></small>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="form-check mb-3">\r\n      <input type="checkbox" class="form-check-input" id="guardarContacto" formControlName="guardarContacto" />\r\n      <label class="form-check-label" for="guardarContacto">Guardar como contacto</label>\r\n    </div>\r\n\r\n    <div class="d-flex gap-2">\r\n      <button class="btn btn-primary" type="submit">Transferir</button>\r\n      <a routerLink="/dashboard" class="btn btn-secondary">Cancelar</a>\r\n    </div>\r\n  </form>\r\n</div>\r\n', styles: ["/* src/app/pages/transferencias/transferencias.component.css */\n.container {\n  max-width: 960px;\n}\n.card {\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n}\n/*# sourceMappingURL=transferencias.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: HttpClient }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransferenciasComponent, { className: "TransferenciasComponent", filePath: "src/app/pages/transferencias/transferencias.component.ts", lineNumber: 16 });
})();
export {
  TransferenciasComponent
};
//# sourceMappingURL=chunk-KZA375H5.js.map
