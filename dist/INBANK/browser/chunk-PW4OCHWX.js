import {
  AuthService
} from "./chunk-U2NFHBNR.js";
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
  CommonModule,
  Component,
  NgIf,
  RouterLink,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-LQXE4UJV.js";

// src/app/pages/login/login.component.ts
function LoginComponent_small_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 6);
    \u0275\u0275text(1, "Usuario requerido");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_small_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 6);
    \u0275\u0275text(1, "Contrase\xF1a requerida");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
var _LoginComponent = class _LoginComponent {
  constructor(fb, auth) {
    this.fb = fb;
    this.auth = auth;
    this.form = this.fb.group({
      usuario: ["", Validators.required],
      contrasena: ["", Validators.required]
    });
    this.loading = false;
    this.error = "";
  }
  async onSubmit() {
    this.error = "";
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { usuario, contrasena } = this.form.getRawValue();
    this.loading = true;
    try {
      await this.auth.loginApi(usuario, contrasena);
    } catch (e) {
      this.error = e?.message || "Error al iniciar sesi\xF3n";
    } finally {
      this.loading = false;
    }
  }
};
_LoginComponent.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService));
};
_LoginComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 15, vars: 6, consts: [[1, "login-container"], [3, "ngSubmit", "formGroup"], ["type", "text", "formControlName", "usuario"], ["class", "error", 4, "ngIf"], ["type", "password", "formControlName", "contrasena"], ["type", "submit", 3, "disabled"], [1, "error"]], template: function LoginComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h2");
    \u0275\u0275text(2, "INbank - Iniciar sesi\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 1);
    \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(4, "label");
    \u0275\u0275text(5, "Usuario");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 2);
    \u0275\u0275template(7, LoginComponent_small_7_Template, 2, 0, "small", 3);
    \u0275\u0275elementStart(8, "label");
    \u0275\u0275text(9, "Contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 4);
    \u0275\u0275template(11, LoginComponent_small_11_Template, 2, 0, "small", 3);
    \u0275\u0275elementStart(12, "button", 5);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, LoginComponent_p_14_Template, 2, 1, "p", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.form.controls.usuario.touched && ctx.form.controls.usuario.invalid);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.form.controls.contrasena.touched && ctx.form.controls.contrasena.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx.loading ? "Entrando..." : "Entrar");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.error);
  }
}, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.login-container[_ngcontent-%COMP%] {\n  max-width: 360px;\n  margin: 40px auto;\n  padding: 24px;\n  background: #fff;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 12px;\n  color: #333;\n}\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 10px;\n  margin-top: 6px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\nbutton[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  width: 100%;\n  padding: 10px;\n  border: 0;\n  border-radius: 6px;\n  background: #0066ff;\n  color: #fff;\n}\n.error[_ngcontent-%COMP%] {\n  color: #c0392b;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
var LoginComponent = _LoginComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink], template: `<div class="login-container">\r
  <h2>INbank - Iniciar sesi\xF3n</h2>\r
\r
  <form [formGroup]="form" (ngSubmit)="onSubmit()">\r
    <label>Usuario</label>\r
    <input type="text" formControlName="usuario" />\r
    <small class="error" *ngIf="form.controls.usuario.touched && form.controls.usuario.invalid">Usuario requerido</small>\r
\r
    <label>Contrase\xF1a</label>\r
    <input type="password" formControlName="contrasena" />\r
    <small class="error" *ngIf="form.controls.contrasena.touched && form.controls.contrasena.invalid">Contrase\xF1a requerida</small>\r
\r
    <button type="submit" [disabled]="loading">{{ loading ? 'Entrando...' : 'Entrar' }}</button>\r
\r
    <p class="error" *ngIf="error">{{ error }}</p>\r
  </form>\r
</div>\r
`, styles: ["/* src/app/pages/login/login.component.css */\n.login-container {\n  max-width: 360px;\n  margin: 40px auto;\n  padding: 24px;\n  background: #fff;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\nlabel {\n  display: block;\n  margin-top: 12px;\n  color: #333;\n}\ninput {\n  width: 100%;\n  padding: 8px 10px;\n  margin-top: 6px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\nbutton {\n  margin-top: 16px;\n  width: 100%;\n  padding: 10px;\n  border: 0;\n  border-radius: 6px;\n  background: #0066ff;\n  color: #fff;\n}\n.error {\n  color: #c0392b;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=login.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/pages/login/login.component.ts", lineNumber: 14 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-PW4OCHWX.js.map
