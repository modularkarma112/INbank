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
  ChangeDetectionStrategy,
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

// src/app/pages/depositos/depositos.component.ts
function DepositosComponent_ng_container_19_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1, " Estatus: ");
    \u0275\u0275elementStart(2, "span", 35);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r2 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r2.estatus);
  }
}
function DepositosComponent_ng_container_19_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1, " Ingrese un monto v\xE1lido mayor a 0. ");
    \u0275\u0275elementEnd();
  }
}
function DepositosComponent_ng_container_19_Template(rf, ctx) {
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
    \u0275\u0275template(20, DepositosComponent_ng_container_19_div_20_Template, 4, 1, "div", 24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 25)(22, "div", 26)(23, "label", 9);
    \u0275\u0275text(24, "Monto a depositar");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 27);
    \u0275\u0275template(26, DepositosComponent_ng_container_19_div_26_Template, 2, 0, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 29)(28, "label", 9);
    \u0275\u0275text(29, "Concepto (opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "input", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 31)(32, "button", 32);
    \u0275\u0275text(33, "Depositar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 33);
    \u0275\u0275listener("click", function DepositosComponent_ng_container_19_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.limpiar());
    });
    \u0275\u0275text(35, "Limpiar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const c_r2 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(c_r2.numero_cuenta);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.clienteNombre() || "\u2014");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(19, 7, c_r2.saldo, "MXN", "symbol-narrow"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", c_r2.estatus && c_r2.estatus !== "ACTIVA");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r2.form.controls.monto.touched && ctx_r2.form.controls.monto.invalid);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r2.procesando());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.procesando());
  }
}
function DepositosComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1, " Dep\xF3sito registrado correctamente. ");
    \u0275\u0275elementEnd();
  }
}
function DepositosComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.errorMsg(), " ");
  }
}
var _DepositosComponent = class _DepositosComponent {
  constructor(fb, http, router) {
    this.fb = fb;
    this.http = http;
    this.router = router;
    this.api = window.API_BASE || "";
    this.procesando = signal(false, ...ngDevMode ? [{ debugName: "procesando" }] : []);
    this.exito = signal(false, ...ngDevMode ? [{ debugName: "exito" }] : []);
    this.errorMsg = signal("", ...ngDevMode ? [{ debugName: "errorMsg" }] : []);
    this.clienteNombre = signal("", ...ngDevMode ? [{ debugName: "clienteNombre" }] : []);
    this.cuenta = signal(null, ...ngDevMode ? [{ debugName: "cuenta" }] : []);
    this.form = this.fb.group({
      numeroCuenta: ["", [Validators.required, Validators.minLength(10)]],
      monto: [null, [Validators.required, Validators.min(1)]],
      concepto: [""]
    });
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
      const cta = await this.http.get(`${this.api}/api/cuentas/numero/${encodeURIComponent(numero)}`).toPromise();
      this.cuenta.set(cta);
      this.form.controls.monto.enable();
      if (this.cuenta()?.cliente_id) {
        try {
          const cli = await this.http.get(`${this.api}/api/clientes/${this.cuenta().cliente_id}`).toPromise();
          this.clienteNombre.set(`${cli.nombres} ${cli.apellido_paterno || ""} ${cli.apellido_materno || ""}`.trim());
        } catch {
          this.clienteNombre.set("");
        }
      }
    } catch (e) {
      this.cuenta.set(null);
      this.errorMsg.set(e?.error?.message || "No se encontr\xF3 la cuenta");
    }
  }
  async depositar() {
    this.exito.set(false);
    this.errorMsg.set("");
    if (!this.cuenta()?.id) {
      await this.buscarCuenta();
      if (!this.cuenta()?.id)
        return;
    }
    if (this.form.controls.monto.invalid) {
      this.form.controls.monto.markAsTouched();
      return;
    }
    const monto = Number(this.form.controls.monto.value || 0);
    const concepto = this.form.controls.concepto.value || "Dep\xF3sito";
    this.procesando.set(true);
    try {
      const r = await this.http.post(`${this.api}/api/cuentas/${this.cuenta().id}/deposito`, { monto, concepto }).toPromise();
      this.exito.set(true);
      const nueva = await this.http.get(`${this.api}/api/cuentas/numero/${encodeURIComponent(this.cuenta().numero_cuenta)}`).toPromise();
      this.cuenta.set(nueva);
      this.form.patchValue({ monto: null, concepto: "" });
      if (r?.transaccion_id) {
        this.router.navigate(["/comprobante-movimiento", r.transaccion_id]);
      }
    } catch (e) {
      this.errorMsg.set(e?.error?.message || "Error registrando dep\xF3sito");
    } finally {
      this.procesando.set(false);
    }
  }
  limpiar() {
    this.form.reset();
    this.cuenta.set(null);
    this.exito.set(false);
    this.errorMsg.set("");
    this.clienteNombre.set("");
  }
};
_DepositosComponent.\u0275fac = function DepositosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DepositosComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router));
};
_DepositosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DepositosComponent, selectors: [["app-depositos"]], decls: 22, vars: 4, consts: [[1, "container", "mt-4", 2, "max-width", "860px"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "m-0"], ["routerLink", "/dashboard", 1, "btn", "btn-secondary"], [1, "card", "shadow-sm"], [1, "card-body"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "row", "g-3", "align-items-end"], [1, "col-sm-6"], [1, "form-label"], ["type", "text", "formControlName", "numeroCuenta", "placeholder", "0000 0000 0000 0000", 1, "form-control"], [1, "form-text"], [1, "col-sm-auto"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [4, "ngIf"], ["class", "alert alert-success mt-3", 4, "ngIf"], ["class", "alert alert-danger mt-3", 4, "ngIf"], [1, "row", "g-3"], [1, "col-md-6"], [1, "p-3", "rounded", "bg-light"], [1, "small", "text-muted"], [1, "fw-semibold"], [1, "small", "text-muted", "mt-2"], [1, "display-6", 2, "font-size", "1.8rem"], ["class", "small", 4, "ngIf"], [1, "row", "g-3", "mt-3"], [1, "col-sm-4"], ["type", "number", "min", "1", "step", "0.01", "formControlName", "monto", 1, "form-control"], ["class", "invalid-feedback d-block", 4, "ngIf"], [1, "col-sm-8"], ["type", "text", "formControlName", "concepto", "placeholder", "Dep\xF3sito en ventanilla", 1, "form-control"], [1, "mt-4", "d-flex", "gap-2"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click", "disabled"], [1, "small"], [1, "badge", "bg-warning", "text-dark"], [1, "invalid-feedback", "d-block"], [1, "alert", "alert-success", "mt-3"], [1, "alert", "alert-danger", "mt-3"]], template: function DepositosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
    \u0275\u0275text(3, "Dep\xF3sitos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 3);
    \u0275\u0275text(5, "Volver");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "form", 6);
    \u0275\u0275listener("ngSubmit", function DepositosComponent_Template_form_ngSubmit_8_listener() {
      return ctx.depositar();
    });
    \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "label", 9);
    \u0275\u0275text(12, "N\xFAmero de cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 10);
    \u0275\u0275elementStart(14, "div", 11);
    \u0275\u0275text(15, 'Ingrese el n\xFAmero de 16 d\xEDgitos y presione "Buscar".');
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 12)(17, "button", 13);
    \u0275\u0275listener("click", function DepositosComponent_Template_button_click_17_listener() {
      return ctx.buscarCuenta();
    });
    \u0275\u0275text(18, "Buscar");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(19, DepositosComponent_ng_container_19_Template, 36, 11, "ng-container", 14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(20, DepositosComponent_div_20_Template, 2, 0, "div", 15)(21, DepositosComponent_div_21_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx.cuenta());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.exito());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorMsg());
  }
}, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, RouterLink, CurrencyPipe], encapsulation: 2 });
var DepositosComponent = _DepositosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DepositosComponent, [{
    type: Component,
    args: [{
      selector: "app-depositos",
      standalone: true,
      imports: [CommonModule, ReactiveFormsModule, RouterLink],
      changeDetection: ChangeDetectionStrategy.Default,
      template: `
	<div class="container mt-4" style="max-width: 860px;">
		<div class="d-flex justify-content-between align-items-center mb-3">
			<h2 class="m-0">Dep\xF3sitos</h2>
			<a class="btn btn-secondary" routerLink="/dashboard">Volver</a>
		</div>

		<div class="card shadow-sm">
			<div class="card-body">
				<form [formGroup]="form" (ngSubmit)="depositar()" novalidate>
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

					<ng-container *ngIf="cuenta() as c">
						<hr/>
						<div class="row g-3">
							<div class="col-md-6">
								<div class="p-3 rounded bg-light">
									<div class="small text-muted">Cuenta</div>
									<div class="fw-semibold">{{c.numero_cuenta}}</div>
									<div class="small text-muted mt-2">Titular</div>
									<div class="fw-semibold">{{clienteNombre() || '\u2014'}}</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="p-3 rounded bg-light">
									<div class="small text-muted">Saldo actual</div>
									<div class="display-6" style="font-size: 1.8rem;">{{c.saldo | currency:'MXN':'symbol-narrow'}}</div>
									<div class="small" *ngIf="c.estatus && c.estatus !== 'ACTIVA'">
										Estatus: <span class="badge bg-warning text-dark">{{c.estatus}}</span>
									</div>
								</div>
							</div>
						</div>

						<div class="row g-3 mt-3">
							<div class="col-sm-4">
								<label class="form-label">Monto a depositar</label>
								<input type="number" min="1" step="0.01" class="form-control" formControlName="monto"/>
								<div class="invalid-feedback d-block" *ngIf="form.controls.monto.touched && form.controls.monto.invalid">
									Ingrese un monto v\xE1lido mayor a 0.
								</div>
							</div>
							<div class="col-sm-8">
								<label class="form-label">Concepto (opcional)</label>
								<input type="text" class="form-control" formControlName="concepto" placeholder="Dep\xF3sito en ventanilla"/>
							</div>
						</div>

						<div class="mt-4 d-flex gap-2">
							<button class="btn btn-success" type="submit" [disabled]="procesando()">Depositar</button>
							<button class="btn btn-outline-secondary" type="button" (click)="limpiar()" [disabled]="procesando()">Limpiar</button>
						</div>
					</ng-container>
				</form>
			</div>
		</div>

		<!-- Mensajes -->
		<div class="alert alert-success mt-3" *ngIf="exito()">
			Dep\xF3sito registrado correctamente.
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DepositosComponent, { className: "DepositosComponent", filePath: "src/app/pages/depositos/depositos.component.ts", lineNumber: 89 });
})();
export {
  DepositosComponent
};
//# sourceMappingURL=chunk-PKDUHW3H.js.map
