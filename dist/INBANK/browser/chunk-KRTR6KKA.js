import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-QL6LS3FT.js";
import {
  CommonModule,
  Component,
  CurrencyPipe,
  HttpClient,
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-LQXE4UJV.js";

// src/app/pages/retiros/retiros.component.ts
function RetirosComponent_ng_container_19_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1, " Estatus: ");
    \u0275\u0275elementStart(2, "span", 37);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.cuenta.estatus);
  }
}
function RetirosComponent_ng_container_19_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1, " El nombre no coincide con el titular de la cuenta. ");
    \u0275\u0275elementEnd();
  }
}
function RetirosComponent_ng_container_19_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1, " Ingrese un monto v\xE1lido mayor a 0 y no mayor al saldo disponible. ");
    \u0275\u0275elementEnd();
  }
}
function RetirosComponent_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "hr");
    \u0275\u0275elementStart(2, "div", 17)(3, "div", 18)(4, "div", 19)(5, "div", 20);
    \u0275\u0275text(6, "Cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 21);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 22);
    \u0275\u0275text(10, "Titular");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 21);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 18)(14, "div", 19)(15, "div", 20);
    \u0275\u0275text(16, "Saldo actual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 23);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, RetirosComponent_ng_container_19_div_20_Template, 4, 1, "div", 24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 25)(22, "div", 26)(23, "label", 9);
    \u0275\u0275text(24, "Nombre del titular (nombre completo para confirmar)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 27);
    \u0275\u0275template(26, RetirosComponent_ng_container_19_div_26_Template, 2, 0, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 29)(28, "label", 9);
    \u0275\u0275text(29, "Monto a retirar");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "input", 30);
    \u0275\u0275template(31, RetirosComponent_ng_container_19_div_31_Template, 2, 0, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 31)(33, "label", 9);
    \u0275\u0275text(34, "Concepto (opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "input", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 33)(37, "button", 34);
    \u0275\u0275text(38, "Retirar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 35);
    \u0275\u0275listener("click", function RetirosComponent_ng_container_19_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.limpiar());
    });
    \u0275\u0275text(40, "Limpiar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.cuenta.numero_cuenta);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.clienteNombre() || "\u2014");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(19, 8, ctx_r1.cuenta.saldo, "MXN", "symbol-narrow"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.cuenta.estatus && ctx_r1.cuenta.estatus !== "ACTIVA");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.nombreNoCoincide());
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.montoInvalido());
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.procesando() || ctx_r1.nombreNoCoincide() || ctx_r1.montoInvalido());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.procesando());
  }
}
function RetirosComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1, " Retiro registrado correctamente. ");
    \u0275\u0275elementEnd();
  }
}
function RetirosComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMsg(), " ");
  }
}
var _RetirosComponent = class _RetirosComponent {
  constructor(fb, http, router) {
    this.fb = fb;
    this.http = http;
    this.router = router;
    this.api = window.API_BASE || "";
    this.procesando = signal(false, ...ngDevMode ? [{ debugName: "procesando" }] : []);
    this.exito = signal(false, ...ngDevMode ? [{ debugName: "exito" }] : []);
    this.errorMsg = signal("", ...ngDevMode ? [{ debugName: "errorMsg" }] : []);
    this.clienteNombre = signal("", ...ngDevMode ? [{ debugName: "clienteNombre" }] : []);
    this.clienteNombreCompleto = signal("", ...ngDevMode ? [{ debugName: "clienteNombreCompleto" }] : []);
    this.cuenta = null;
    this.form = this.fb.group({
      numeroCuenta: ["", [Validators.required, Validators.minLength(10)]],
      nombreTitular: ["", [Validators.required, Validators.minLength(3)]],
      monto: [null, [Validators.required, Validators.min(1)]],
      concepto: [""]
    });
  }
  normalizeName(s) {
    return (s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, " ").trim().toUpperCase();
  }
  nombreNoCoincide() {
    if (!this.cuenta)
      return false;
    const esperado = this.normalizeName(this.clienteNombreCompleto());
    const ingresado = this.normalizeName(this.form.controls.nombreTitular.value || "");
    return !!esperado && !!ingresado && esperado !== ingresado;
  }
  montoInvalido() {
    const monto = Number(this.form.controls.monto.value || 0);
    if (!this.cuenta)
      return true;
    return !(monto > 0) || monto > Number(this.cuenta.saldo || 0);
  }
  async buscarCuenta() {
    this.exito.set(false);
    this.errorMsg.set("");
    const numero = this.form.controls.numeroCuenta.value?.toString().trim();
    if (!numero) {
      this.errorMsg.set("Ingrese un n\xFAmero de cuenta");
      return;
    }
    try {
      this.cuenta = await this.http.get(`${this.api}/api/cuentas/numero/${encodeURIComponent(numero)}`).toPromise();
      if (this.cuenta?.cliente_id) {
        try {
          const cli = await this.http.get(`${this.api}/api/clientes/${this.cuenta.cliente_id}`).toPromise();
          this.clienteNombre.set(String(cli?.nombres || "").trim());
          this.clienteNombreCompleto.set(`${cli?.nombres || ""} ${cli?.apellido_paterno || ""} ${cli?.apellido_materno || ""}`.trim());
        } catch {
          this.clienteNombre.set("");
          this.clienteNombreCompleto.set("");
        }
      }
    } catch (e) {
      this.cuenta = null;
      this.errorMsg.set(e?.error?.message || "No se encontr\xF3 la cuenta");
    }
  }
  async retirar() {
    this.exito.set(false);
    this.errorMsg.set("");
    if (!this.cuenta?.id) {
      await this.buscarCuenta();
      if (!this.cuenta?.id)
        return;
    }
    if (this.form.invalid || this.nombreNoCoincide() || this.montoInvalido()) {
      this.form.markAllAsTouched();
      if (this.nombreNoCoincide())
        this.errorMsg.set("El nombre del titular no coincide.");
      else if (this.montoInvalido())
        this.errorMsg.set("Monto inv\xE1lido o mayor al saldo disponible.");
      return;
    }
    const monto = Number(this.form.controls.monto.value || 0);
    const concepto = this.form.controls.concepto.value || "Retiro";
    this.procesando.set(true);
    try {
      const r = await this.http.post(`${this.api}/api/cuentas/${this.cuenta.id}/retiro`, { monto, concepto }).toPromise();
      this.exito.set(true);
      const nueva = await this.http.get(`${this.api}/api/cuentas/numero/${encodeURIComponent(this.cuenta.numero_cuenta)}`).toPromise();
      this.cuenta = nueva;
      this.form.patchValue({ monto: null, concepto: "" });
      if (r?.transaccion_id) {
        this.router.navigate(["/comprobante-movimiento", r.transaccion_id]);
      }
    } catch (e) {
      this.errorMsg.set(e?.error?.message || "Error registrando retiro");
    } finally {
      this.procesando.set(false);
    }
  }
  limpiar() {
    this.form.reset();
    this.cuenta = null;
    this.exito.set(false);
    this.errorMsg.set("");
    this.clienteNombre.set("");
    this.clienteNombreCompleto.set("");
  }
};
_RetirosComponent.\u0275fac = function RetirosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RetirosComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router));
};
_RetirosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RetirosComponent, selectors: [["app-retiros"]], decls: 22, vars: 4, consts: [[1, "container", "mt-4", 2, "max-width", "860px"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "m-0"], ["routerLink", "/dashboard", 1, "btn", "btn-secondary"], [1, "card", "shadow-sm"], [1, "card-body"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "row", "g-3", "align-items-end"], [1, "col-sm-6"], [1, "form-label"], ["type", "text", "formControlName", "numeroCuenta", "placeholder", "0000 0000 0000 0000", 1, "form-control"], [1, "form-text"], [1, "col-sm-auto"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [4, "ngIf"], ["class", "alert alert-success mt-3", 4, "ngIf"], ["class", "alert alert-danger mt-3", 4, "ngIf"], [1, "row", "g-3"], [1, "col-md-6"], [1, "p-3", "rounded", "bg-light"], [1, "small", "text-muted"], [1, "fw-semibold"], [1, "small", "text-muted", "mt-2"], [1, "display-6", 2, "font-size", "1.8rem"], ["class", "small", 4, "ngIf"], [1, "row", "g-3", "mt-3"], [1, "col-sm-8"], ["type", "text", "formControlName", "nombreTitular", "placeholder", "Nombre(s) Apellido Paterno Apellido Materno", 1, "form-control"], ["class", "invalid-feedback d-block", 4, "ngIf"], [1, "col-sm-4"], ["type", "number", "min", "1", "step", "0.01", "formControlName", "monto", 1, "form-control"], [1, "col-12"], ["type", "text", "formControlName", "concepto", "placeholder", "Retiro en ventanilla", 1, "form-control"], [1, "mt-4", "d-flex", "gap-2"], ["type", "submit", 1, "btn", "btn-danger", 3, "disabled"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click", "disabled"], [1, "small"], [1, "badge", "bg-warning", "text-dark"], [1, "invalid-feedback", "d-block"], [1, "alert", "alert-success", "mt-3"], [1, "alert", "alert-danger", "mt-3"]], template: function RetirosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
    \u0275\u0275text(3, "Retiros");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 3);
    \u0275\u0275text(5, "Volver");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "form", 6);
    \u0275\u0275listener("ngSubmit", function RetirosComponent_Template_form_ngSubmit_8_listener() {
      return ctx.retirar();
    });
    \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "label", 9);
    \u0275\u0275text(12, "N\xFAmero de cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 10);
    \u0275\u0275elementStart(14, "div", 11);
    \u0275\u0275text(15, 'Ingrese el n\xFAmero de 16 d\xEDgitos y presione "Buscar".');
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 12)(17, "button", 13);
    \u0275\u0275listener("click", function RetirosComponent_Template_button_click_17_listener() {
      return ctx.buscarCuenta();
    });
    \u0275\u0275text(18, "Buscar");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(19, RetirosComponent_ng_container_19_Template, 41, 12, "ng-container", 14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(20, RetirosComponent_div_20_Template, 2, 0, "div", 15)(21, RetirosComponent_div_21_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx.cuenta);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.exito());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorMsg());
  }
}, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, RouterLink, CurrencyPipe], encapsulation: 2 });
var RetirosComponent = _RetirosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RetirosComponent, [{
    type: Component,
    args: [{
      selector: "app-retiros",
      standalone: true,
      imports: [CommonModule, ReactiveFormsModule, RouterLink],
      template: `
	<div class="container mt-4" style="max-width: 860px;">
		<div class="d-flex justify-content-between align-items-center mb-3">
			<h2 class="m-0">Retiros</h2>
			<a class="btn btn-secondary" routerLink="/dashboard">Volver</a>
		</div>

		<div class="card shadow-sm">
			<div class="card-body">
				<form [formGroup]="form" (ngSubmit)="retirar()" novalidate>
					<!-- Buscar cuenta por n\xFAmero -->
					<div class="row g-3 align-items-end">
						<div class="col-sm-6">
							<label class="form-label">N\xFAmero de cuenta</label>
							<input type="text" class="form-control" formControlName="numeroCuenta" placeholder="0000 0000 0000 0000"/>
							<div class="form-text">Ingrese el n\xFAmero de 16 d\xEDgitos y presione "Buscar".</div>
						</div>
						<div class="col-sm-auto">
							<button class="btn btn-primary" type="button" (click)="buscarCuenta()">Buscar</button>
						</div>
					</div>

					<ng-container *ngIf="cuenta">
						<hr/>
						<div class="row g-3">
							<div class="col-md-6">
								<div class="p-3 rounded bg-light">
									<div class="small text-muted">Cuenta</div>
									<div class="fw-semibold">{{cuenta.numero_cuenta}}</div>
									<div class="small text-muted mt-2">Titular</div>
									<div class="fw-semibold">{{clienteNombre() || '\u2014'}}</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="p-3 rounded bg-light">
									<div class="small text-muted">Saldo actual</div>
									<div class="display-6" style="font-size: 1.8rem;">{{cuenta.saldo | currency:'MXN':'symbol-narrow'}}</div>
									<div class="small" *ngIf="cuenta.estatus && cuenta.estatus !== 'ACTIVA'">
										Estatus: <span class="badge bg-warning text-dark">{{cuenta.estatus}}</span>
									</div>
								</div>
							</div>
						</div>

						<div class="row g-3 mt-3">
							<div class="col-sm-8">
								<label class="form-label">Nombre del titular (nombre completo para confirmar)</label>
								<input type="text" class="form-control" formControlName="nombreTitular" placeholder="Nombre(s) Apellido Paterno Apellido Materno"/>
								<div class="invalid-feedback d-block" *ngIf="nombreNoCoincide()">
									El nombre no coincide con el titular de la cuenta.
								</div>
							</div>
							<div class="col-sm-4">
								<label class="form-label">Monto a retirar</label>
								<input type="number" min="1" step="0.01" class="form-control" formControlName="monto"/>
								<div class="invalid-feedback d-block" *ngIf="montoInvalido()">
									Ingrese un monto v\xE1lido mayor a 0 y no mayor al saldo disponible.
								</div>
							</div>
							<div class="col-12">
								<label class="form-label">Concepto (opcional)</label>
								<input type="text" class="form-control" formControlName="concepto" placeholder="Retiro en ventanilla"/>
							</div>
						</div>

						<div class="mt-4 d-flex gap-2">
							<button class="btn btn-danger" type="submit" [disabled]="procesando() || nombreNoCoincide() || montoInvalido()">Retirar</button>
							<button class="btn btn-outline-secondary" type="button" (click)="limpiar()" [disabled]="procesando()">Limpiar</button>
						</div>
					</ng-container>
				</form>
			</div>
		</div>

		<!-- Mensajes -->
		<div class="alert alert-success mt-3" *ngIf="exito()">
			Retiro registrado correctamente.
		</div>
		<div class="alert alert-danger mt-3" *ngIf="errorMsg()">
			{{errorMsg()}}
		</div>
	</div>
	`
    }]
  }], () => [{ type: FormBuilder }, { type: HttpClient }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RetirosComponent, { className: "RetirosComponent", filePath: "src/app/pages/retiros/retiros.component.ts", lineNumber: 95 });
})();
export {
  RetirosComponent
};
//# sourceMappingURL=chunk-KRTR6KKA.js.map
