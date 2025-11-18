import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-QL6LS3FT.js";
import {
  CommonModule,
  Component,
  HttpClient,
  NgForOf,
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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-LQXE4UJV.js";

// src/app/pages/usuarios-alta/usuarios-alta.component.ts
function UsuariosAltaComponent_option_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    \u0275\u0275property("value", r_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r1);
  }
}
var _UsuariosAltaComponent = class _UsuariosAltaComponent {
  constructor(fb, http, router) {
    this.fb = fb;
    this.http = http;
    this.router = router;
    this.form = this.fb.group({
      usuario: ["", [Validators.required, Validators.minLength(3)]],
      nombre: ["", [Validators.required, Validators.minLength(2)]],
      apellido_paterno: [""],
      apellido_materno: [""],
      correo: ["", [Validators.required, Validators.email]],
      contrasena: ["", [Validators.required, Validators.minLength(6)]],
      curp: [""],
      direccion: [""],
      telefono: ["", [Validators.pattern(/^\d{10}$/)]],
      rol: ["GERENTE", Validators.required]
    });
    this.isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : []);
    this.roles = ["GERENTE", "CAJERO", "EJECUTIVO", "ADMIN"];
  }
  get api() {
    return window.API_BASE || "";
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.isSubmitting.set(true);
    this.http.post(`${this.api}/api/usuarios`, this.form.value).subscribe({
      next: () => {
        alert("Usuario creado correctamente");
        this.isSubmitting.set(false);
        this.router.navigate(["/dashboard"]);
      },
      error: (err) => {
        this.isSubmitting.set(false);
        if (err.status === 409 && err.error?.fields) {
          const f = err.error.fields;
          const msg = [f.usuario ? "usuario" : null, f.correo ? "correo" : null].filter(Boolean).join(" y ");
          alert(`Ya existe un ${msg} registrado`);
        } else {
          alert("Error al crear usuario");
        }
      }
    });
  }
};
_UsuariosAltaComponent.\u0275fac = function UsuariosAltaComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UsuariosAltaComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router));
};
_UsuariosAltaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsuariosAltaComponent, selectors: [["app-usuarios-alta"]], decls: 54, vars: 3, consts: [[1, "container", "mt-4"], [1, "d-flex", "justify-content-between", "align-items-center"], ["routerLink", "/dashboard", 1, "btn", "btn-secondary"], [1, "mt-3", 3, "ngSubmit", "formGroup"], [1, "row", "g-3"], [1, "col-md-4"], [1, "form-label"], ["formControlName", "usuario", 1, "form-control"], ["formControlName", "nombre", 1, "form-control"], ["formControlName", "apellido_paterno", 1, "form-control"], ["formControlName", "apellido_materno", 1, "form-control"], ["formControlName", "correo", "type", "email", 1, "form-control"], ["formControlName", "contrasena", "type", "password", 1, "form-control"], ["formControlName", "curp", 1, "form-control"], [1, "col-12"], ["rows", "2", "formControlName", "direccion", 1, "form-control"], ["formControlName", "telefono", 1, "form-control"], ["formControlName", "rol", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], [1, "mt-3", "d-flex", "gap-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [3, "value"]], template: function UsuariosAltaComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
    \u0275\u0275text(3, "Alta de Usuarios");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 2);
    \u0275\u0275text(5, "Volver");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "form", 3);
    \u0275\u0275listener("ngSubmit", function UsuariosAltaComponent_Template_form_ngSubmit_6_listener() {
      return ctx.submit();
    });
    \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "label", 6);
    \u0275\u0275text(10, "Usuario");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 5)(13, "label", 6);
    \u0275\u0275text(14, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 5)(17, "label", 6);
    \u0275\u0275text(18, "Apellido Paterno");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 5)(21, "label", 6);
    \u0275\u0275text(22, "Apellido Materno");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 5)(25, "label", 6);
    \u0275\u0275text(26, "Correo");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 5)(29, "label", 6);
    \u0275\u0275text(30, "Contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 5)(33, "label", 6);
    \u0275\u0275text(34, "CURP");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "input", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 14)(37, "label", 6);
    \u0275\u0275text(38, "Direcci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "textarea", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 5)(41, "label", 6);
    \u0275\u0275text(42, "Tel\xE9fono (10 d\xEDgitos)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "input", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 5)(45, "label", 6);
    \u0275\u0275text(46, "Rol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "select", 17);
    \u0275\u0275template(48, UsuariosAltaComponent_option_48_Template, 2, 2, "option", 18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 19)(50, "button", 20);
    \u0275\u0275text(51, "Crear");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "a", 2);
    \u0275\u0275text(53, "Cancelar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(42);
    \u0275\u0275property("ngForOf", ctx.roles);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.isSubmitting());
  }
}, dependencies: [CommonModule, NgForOf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  max-width: 960px;\n}\n/*# sourceMappingURL=usuarios-alta.component.css.map */"] });
var UsuariosAltaComponent = _UsuariosAltaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsuariosAltaComponent, [{
    type: Component,
    args: [{ selector: "app-usuarios-alta", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink], template: '<div class="container mt-4">\r\n  <div class="d-flex justify-content-between align-items-center">\r\n    <h2>Alta de Usuarios</h2>\r\n    <a class="btn btn-secondary" routerLink="/dashboard">Volver</a>\r\n  </div>\r\n  <form [formGroup]="form" (ngSubmit)="submit()" class="mt-3">\r\n    <div class="row g-3">\r\n      <div class="col-md-4">\r\n        <label class="form-label">Usuario</label>\r\n        <input class="form-control" formControlName="usuario" />\r\n      </div>\r\n      <div class="col-md-4">\r\n        <label class="form-label">Nombre</label>\r\n        <input class="form-control" formControlName="nombre" />\r\n      </div>\r\n      <div class="col-md-4">\r\n        <label class="form-label">Apellido Paterno</label>\r\n        <input class="form-control" formControlName="apellido_paterno" />\r\n      </div>\r\n      <div class="col-md-4">\r\n        <label class="form-label">Apellido Materno</label>\r\n        <input class="form-control" formControlName="apellido_materno" />\r\n      </div>\r\n      <div class="col-md-4">\r\n        <label class="form-label">Correo</label>\r\n        <input class="form-control" formControlName="correo" type="email" />\r\n      </div>\r\n      <div class="col-md-4">\r\n        <label class="form-label">Contrase\xF1a</label>\r\n        <input class="form-control" formControlName="contrasena" type="password" />\r\n      </div>\r\n      <div class="col-md-4">\r\n        <label class="form-label">CURP</label>\r\n        <input class="form-control" formControlName="curp" />\r\n      </div>\r\n      <div class="col-12">\r\n        <label class="form-label">Direcci\xF3n</label>\r\n        <textarea class="form-control" rows="2" formControlName="direccion"></textarea>\r\n      </div>\r\n      <div class="col-md-4">\r\n        <label class="form-label">Tel\xE9fono (10 d\xEDgitos)</label>\r\n        <input class="form-control" formControlName="telefono" />\r\n      </div>\r\n      <div class="col-md-4">\r\n        <label class="form-label">Rol</label>\r\n        <select class="form-select" formControlName="rol">\r\n          <option *ngFor="let r of roles" [value]="r">{{r}}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="mt-3 d-flex gap-2">\r\n      <button class="btn btn-primary" type="submit" [disabled]="isSubmitting()">Crear</button>\r\n      <a class="btn btn-secondary" routerLink="/dashboard">Cancelar</a>\r\n    </div>\r\n  </form>\r\n</div>\r\n', styles: ["/* src/app/pages/usuarios-alta/usuarios-alta.component.css */\n.container {\n  max-width: 960px;\n}\n/*# sourceMappingURL=usuarios-alta.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: HttpClient }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsuariosAltaComponent, { className: "UsuariosAltaComponent", filePath: "src/app/pages/usuarios-alta/usuarios-alta.component.ts", lineNumber: 14 });
})();
export {
  UsuariosAltaComponent
};
//# sourceMappingURL=chunk-EPIXAFNZ.js.map
