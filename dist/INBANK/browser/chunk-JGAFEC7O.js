import {
  AuthService
} from "./chunk-U2NFHBNR.js";
import {
  CheckboxControlValueAccessor,
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
  NgForOf,
  NgIf,
  Router,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵtextInterpolate1
} from "./chunk-LQXE4UJV.js";

// src/app/pages/cancelar-cuenta/cancelar-cuenta.component.ts
function CancelarCuentaComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("accountNumber"), " ");
  }
}
function CancelarCuentaComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("rfc"), " ");
  }
}
function CancelarCuentaComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("curp"), " ");
  }
}
function CancelarCuentaComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("firstName"), " ");
  }
}
function CancelarCuentaComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("lastName"), " ");
  }
}
function CancelarCuentaComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("email"), " ");
  }
}
function CancelarCuentaComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("phone"), " ");
  }
}
function CancelarCuentaComponent_option_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reason_r2 = ctx.$implicit;
    \u0275\u0275property("value", reason_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", reason_r2.label, " ");
  }
}
function CancelarCuentaComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("closeReason"), " ");
  }
}
function CancelarCuentaComponent_option_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const banco_r3 = ctx.$implicit;
    \u0275\u0275property("value", banco_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", banco_r3, " ");
  }
}
function CancelarCuentaComponent_div_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("confirmIrreversible"), " ");
  }
}
function CancelarCuentaComponent_span_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Procesar Cierre");
    \u0275\u0275elementEnd();
  }
}
function CancelarCuentaComponent_span_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1, " \u23F3 Procesando... ");
    \u0275\u0275elementEnd();
  }
}
var _CancelarCuentaComponent = class _CancelarCuentaComponent {
  constructor(fb, router, authService) {
    this.fb = fb;
    this.router = router;
    this.authService = authService;
    this.isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : []);
    this.closeReasons = [
      { value: "insatisfaccion_servicio", label: "Insatisfacci\xF3n con el servicio" },
      { value: "cambio_banco", label: "Cambio a otro banco" },
      { value: "costos_elevados", label: "Costos y comisiones elevadas" },
      { value: "falta_uso", label: "Falta de uso de la cuenta" },
      { value: "cambio_residencia", label: "Cambio de residencia" },
      { value: "fallecimiento", label: "Fallecimiento del titular" },
      { value: "cierre_negocio", label: "Cierre de negocio" },
      { value: "otros", label: "Otros motivos" }
    ];
    this.bancosMexicanos = [
      "BBVA M\xE9xico",
      "Santander M\xE9xico",
      "Banamex (Citibanamex)",
      "Banorte",
      "HSBC M\xE9xico",
      "Scotiabank M\xE9xico",
      "Inbursa",
      "Azteca",
      "Afirme",
      "Mifel",
      "Invex",
      "Ve por M\xE1s",
      "Banco del Baj\xEDo",
      "Banregio",
      "Multiva",
      "Actinver",
      "Otro"
    ];
    this.cancelForm = this.fb.group({
      // Datos titular
      accountNumber: ["", [Validators.required, Validators.pattern(/^\d{10,20}$/)]],
      rfc: ["", [Validators.required, Validators.pattern(/^[A-ZÑ&]{3,4}\d{6}[A-V1-9][A-Z1-9][0-9A]$/)]],
      curp: ["", [Validators.required, Validators.pattern(/^[A-Z]{4}\d{6}[HM][A-Z]{5}[A-Z0-9]\d$/)]],
      firstName: ["", [Validators.required, Validators.minLength(2)]],
      lastName: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required, Validators.pattern(/^(\+52|52)?\s?[1-9]\d{9}$/)]],
      // Motivo de cierre
      closeReason: ["", Validators.required],
      // Transferencia saldo
      transferAccount: [""],
      destinationBank: [""],
      // Confirmación
      confirmIrreversible: [false, Validators.requiredTrue]
    });
  }
  onSubmit() {
    if (this.cancelForm.valid) {
      this.isSubmitting.set(true);
      const formData = this.cancelForm.value;
      console.log("Datos de cancelaci\xF3n:", formData);
      setTimeout(() => {
        alert("\xA1Solicitud de cierre procesada exitosamente!\nRecibir\xE1s confirmaci\xF3n por correo electr\xF3nico en las pr\xF3ximas 24 horas.");
        this.isSubmitting.set(false);
        this.cancelForm.reset();
        setTimeout(() => {
          this.router.navigate(["/dashboard"]);
        }, 1e3);
      }, 2e3);
    } else {
      this.markFormGroupTouched();
    }
  }
  onCancel() {
    if (confirm("\xBFEst\xE1s seguro de que quieres salir? Se perder\xE1n los datos ingresados.")) {
      this.router.navigate(["/dashboard"]);
    }
  }
  goBack() {
    if (confirm("\xBFEst\xE1s seguro de que quieres salir? Se perder\xE1n los datos ingresados.")) {
      this.router.navigate(["/dashboard"]);
    }
  }
  markFormGroupTouched() {
    Object.keys(this.cancelForm.controls).forEach((key) => {
      const control = this.cancelForm.get(key);
      if (control) {
        control.markAsTouched();
      }
    });
  }
  // Errores validación
  getFieldError(fieldName) {
    const field = this.cancelForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors["required"])
        return `${this.getFieldLabel(fieldName)} es requerido`;
      if (field.errors["email"])
        return "Email inv\xE1lido";
      if (field.errors["minlength"])
        return `${this.getFieldLabel(fieldName)} es muy corto`;
      if (field.errors["pattern"])
        return `${this.getFieldLabel(fieldName)} tiene formato inv\xE1lido`;
      if (field.errors["requiredTrue"])
        return "Debe confirmar que entiende que el proceso es irreversible";
    }
    return "";
  }
  getFieldLabel(fieldName) {
    const labels = {
      accountNumber: "N\xFAmero de Cuenta",
      rfc: "RFC",
      curp: "CURP",
      firstName: "Nombres",
      lastName: "Apellidos",
      email: "Correo Electr\xF3nico",
      phone: "Tel\xE9fono",
      closeReason: "Motivo de Cierre",
      transferAccount: "Cuenta de Transferencia",
      destinationBank: "Banco de Destino",
      confirmIrreversible: "Confirmaci\xF3n"
    };
    return labels[fieldName] || fieldName;
  }
  // Check si está completo
  isFormComplete() {
    const requiredFields = ["accountNumber", "rfc", "curp", "firstName", "lastName", "email", "phone", "closeReason"];
    const allFieldsValid = requiredFields.every((fieldName) => {
      const field = this.cancelForm.get(fieldName);
      return field?.valid;
    });
    const isConfirmed = this.cancelForm.get("confirmIrreversible")?.value;
    return allFieldsValid && isConfirmed;
  }
};
_CancelarCuentaComponent.\u0275fac = function CancelarCuentaComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CancelarCuentaComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
};
_CancelarCuentaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CancelarCuentaComponent, selectors: [["app-cancelar-cuenta"]], decls: 113, vars: 31, consts: [[1, "cancel-account-container"], [1, "form-header"], [1, "back-button", 3, "click"], [1, "header-content"], [1, "header-icon"], [1, "cancel-form"], [1, "warning-banner"], [1, "warning-icon"], [1, "warning-text"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "section-header"], [1, "section-icon"], [1, "section-description"], [1, "form-row"], [1, "form-group"], ["for", "accountNumber"], ["type", "text", "id", "accountNumber", "formControlName", "accountNumber", "placeholder", "1234567890984"], ["class", "error-message", 4, "ngIf"], ["for", "rfc"], ["type", "text", "id", "rfc", "formControlName", "rfc", "placeholder", "ABCD123456EFG"], ["for", "curp"], ["type", "text", "id", "curp", "formControlName", "curp", "placeholder", "ABCD123456HDFRML09"], ["for", "firstName"], ["type", "text", "id", "firstName", "formControlName", "firstName", "placeholder", "Nombres del titular"], ["for", "lastName"], ["type", "text", "id", "lastName", "formControlName", "lastName", "placeholder", "Apellidos del titular"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "cliente@gmail.com"], ["for", "phone"], ["type", "tel", "id", "phone", "formControlName", "phone", "placeholder", "55 1234 5678"], [1, "form-group", "full-width"], ["for", "closeReason"], ["id", "closeReason", "formControlName", "closeReason"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "transferAccount"], ["type", "text", "id", "transferAccount", "formControlName", "transferAccount", "placeholder", "N\xFAmero de cuenta de destino"], ["for", "destinationBank"], ["id", "destinationBank", "formControlName", "destinationBank"], [1, "confirmation-section"], [1, "confirmation-checkbox"], ["type", "checkbox", "id", "confirmIrreversible", "formControlName", "confirmIrreversible"], ["for", "confirmIrreversible"], [1, "form-actions"], ["type", "button", 1, "btn-cancel", 3, "click"], ["type", "submit", 1, "btn-submit", 3, "disabled"], [4, "ngIf"], ["class", "loading", 4, "ngIf"], [1, "error-message"], [3, "value"], [1, "loading"]], template: function CancelarCuentaComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
    \u0275\u0275listener("click", function CancelarCuentaComponent_Template_button_click_2_listener() {
      return ctx.goBack();
    });
    \u0275\u0275text(3, " \u2190 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "div", 4);
    \u0275\u0275text(6, "\u2296");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "h1");
    \u0275\u0275text(9, "Cancelar Cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11, "Proceso de cierre bancario");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 5)(13, "div", 6)(14, "div", 7);
    \u0275\u0275text(15, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 8);
    \u0275\u0275text(17, "Esta acci\xF3n es irreversible. Aseg\xFArate de transferir todos los fondos antes de continuar.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "form", 9);
    \u0275\u0275listener("ngSubmit", function CancelarCuentaComponent_Template_form_ngSubmit_18_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(19, "div", 10)(20, "div", 11)(21, "div", 12);
    \u0275\u0275text(22, "\u{1F464}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "h2");
    \u0275\u0275text(24, "Datos para Cierre de Cuenta");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "p", 13);
    \u0275\u0275text(26, "Complete la informaci\xF3n requerida para procesar el cierre de cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 14)(28, "div", 15)(29, "label", 16);
    \u0275\u0275text(30, "N\xFAmero de Cuenta *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 17);
    \u0275\u0275template(32, CancelarCuentaComponent_div_32_Template, 2, 1, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 15)(34, "label", 19);
    \u0275\u0275text(35, "RFC *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "input", 20);
    \u0275\u0275template(37, CancelarCuentaComponent_div_37_Template, 2, 1, "div", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 14)(39, "div", 15)(40, "label", 21);
    \u0275\u0275text(41, "CURP *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "input", 22);
    \u0275\u0275template(43, CancelarCuentaComponent_div_43_Template, 2, 1, "div", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 14)(45, "div", 15)(46, "label", 23);
    \u0275\u0275text(47, "Nombres *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(48, "input", 24);
    \u0275\u0275template(49, CancelarCuentaComponent_div_49_Template, 2, 1, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 15)(51, "label", 25);
    \u0275\u0275text(52, "Apellidos *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "input", 26);
    \u0275\u0275template(54, CancelarCuentaComponent_div_54_Template, 2, 1, "div", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 14)(56, "div", 15)(57, "label", 27);
    \u0275\u0275text(58, "Correo Electr\xF3nico *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(59, "input", 28);
    \u0275\u0275template(60, CancelarCuentaComponent_div_60_Template, 2, 1, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 15)(62, "label", 29);
    \u0275\u0275text(63, "Tel\xE9fono *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(64, "input", 30);
    \u0275\u0275template(65, CancelarCuentaComponent_div_65_Template, 2, 1, "div", 18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(66, "div", 10)(67, "div", 11)(68, "div", 12);
    \u0275\u0275text(69, "\u2753");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "h2");
    \u0275\u0275text(71, "Motivo de cierre");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 14)(73, "div", 31)(74, "label", 32);
    \u0275\u0275text(75, "Motivo principal *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "select", 33)(77, "option", 34);
    \u0275\u0275text(78, "Seleccione el motivo de cierre");
    \u0275\u0275elementEnd();
    \u0275\u0275template(79, CancelarCuentaComponent_option_79_Template, 2, 2, "option", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275template(80, CancelarCuentaComponent_div_80_Template, 2, 1, "div", 18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(81, "div", 10)(82, "div", 11)(83, "div", 12);
    \u0275\u0275text(84, "\u{1F4B8}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "h2");
    \u0275\u0275text(86, "Transferencia de Saldo Restante");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "div", 14)(88, "div", 15)(89, "label", 36);
    \u0275\u0275text(90, "Cuenta de Transferencia");
    \u0275\u0275elementEnd();
    \u0275\u0275element(91, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "div", 15)(93, "label", 38);
    \u0275\u0275text(94, "Banco de destino");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "select", 39)(96, "option", 34);
    \u0275\u0275text(97, "Seleccione el banco de destino");
    \u0275\u0275elementEnd();
    \u0275\u0275template(98, CancelarCuentaComponent_option_98_Template, 2, 2, "option", 35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(99, "div", 40)(100, "h3");
    \u0275\u0275text(101, "Confirmaci\xF3n Requerida:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "div", 41);
    \u0275\u0275element(103, "input", 42);
    \u0275\u0275elementStart(104, "label", 43);
    \u0275\u0275text(105, " Entiendo que el cierre de cuenta es irreversible ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(106, CancelarCuentaComponent_div_106_Template, 2, 1, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "div", 44)(108, "button", 45);
    \u0275\u0275listener("click", function CancelarCuentaComponent_Template_button_click_108_listener() {
      return ctx.onCancel();
    });
    \u0275\u0275text(109, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "button", 46);
    \u0275\u0275template(111, CancelarCuentaComponent_span_111_Template, 2, 0, "span", 47)(112, CancelarCuentaComponent_span_112_Template, 2, 0, "span", 48);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_3_0;
    let tmp_5_0;
    let tmp_7_0;
    let tmp_9_0;
    let tmp_11_0;
    let tmp_13_0;
    let tmp_15_0;
    \u0275\u0275advance(18);
    \u0275\u0275property("formGroup", ctx.cancelForm);
    \u0275\u0275advance(13);
    \u0275\u0275classProp("error", ((tmp_1_0 = ctx.cancelForm.get("accountNumber")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.cancelForm.get("accountNumber")) == null ? null : tmp_1_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.getFieldError("accountNumber"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ((tmp_3_0 = ctx.cancelForm.get("rfc")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.cancelForm.get("rfc")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.getFieldError("rfc"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("error", ((tmp_5_0 = ctx.cancelForm.get("curp")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.cancelForm.get("curp")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.getFieldError("curp"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("error", ((tmp_7_0 = ctx.cancelForm.get("firstName")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx.cancelForm.get("firstName")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.getFieldError("firstName"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ((tmp_9_0 = ctx.cancelForm.get("lastName")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx.cancelForm.get("lastName")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.getFieldError("lastName"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("error", ((tmp_11_0 = ctx.cancelForm.get("email")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx.cancelForm.get("email")) == null ? null : tmp_11_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.getFieldError("email"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ((tmp_13_0 = ctx.cancelForm.get("phone")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx.cancelForm.get("phone")) == null ? null : tmp_13_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.getFieldError("phone"));
    \u0275\u0275advance(11);
    \u0275\u0275classProp("error", ((tmp_15_0 = ctx.cancelForm.get("closeReason")) == null ? null : tmp_15_0.invalid) && ((tmp_15_0 = ctx.cancelForm.get("closeReason")) == null ? null : tmp_15_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx.closeReasons);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.getFieldError("closeReason"));
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx.bancosMexicanos);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx.getFieldError("confirmIrreversible"));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx.isFormComplete() || ctx.isSubmitting());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isSubmitting());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isSubmitting());
  }
}, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #c3cfe2 100%);\n  font-family:\n    Inter,\n    system-ui,\n    "Segoe UI",\n    Roboto,\n    Helvetica,\n    Arial,\n    sans-serif;\n}\n.cancel-account-container[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 30px 20px;\n}\n.form-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 40px;\n  gap: 20px;\n}\n.back-button[_ngcontent-%COMP%] {\n  background: rgba(240, 242, 247, 0.75);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  border-radius: 12px;\n  font-size: 24px;\n  cursor: pointer;\n  color: #0BA5FF;\n  width: 50px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n  font-weight: 600;\n}\n.back-button[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.9);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(11, 165, 255, 0.2);\n}\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.header-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background: #dc3545;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 32px;\n  box-shadow: 0 8px 25px rgba(220, 53, 69, 0.3);\n}\n.header-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  font-weight: 600;\n  color: #1d1d1d;\n  margin-bottom: 4px;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\n.header-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(35, 35, 35, 0.9);\n  font-size: 0.95rem;\n  font-weight: 300;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\n.cancel-form[_ngcontent-%COMP%] {\n  background: rgba(240, 242, 247, 0.75);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-radius: 16px;\n  padding: 40px;\n  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.4);\n}\n.warning-banner[_ngcontent-%COMP%] {\n  background: rgba(255, 243, 205, 0.9);\n  border: 1px solid rgba(255, 236, 181, 0.8);\n  border-radius: 12px;\n  padding: 20px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.warning-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #856404;\n}\n.warning-text[_ngcontent-%COMP%] {\n  color: #856404;\n  font-weight: 500;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  font-size: 0.95rem;\n}\n.form-section[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n.form-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 30px;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  margin-bottom: 8px;\n}\n.section-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: #dc3545;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  color: white;\n  box-shadow: 0 4px 15px rgba(220, 53, 69, 0.3);\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 600;\n  color: #1d1d1d;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\n.section-description[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #4e4e4e;\n  margin-bottom: 30px;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  font-weight: 400;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 25px;\n  margin-bottom: 25px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\nlabel[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: #1d1d1d;\n  margin-bottom: 8px;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\ninput[type=text][_ngcontent-%COMP%], \ninput[type=email][_ngcontent-%COMP%], \ninput[type=tel][_ngcontent-%COMP%], \ninput[type=number][_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 16px 18px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  font-size: 1rem;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  font-weight: 400;\n  background: rgba(255, 255, 255, 0.9);\n  transition: all 0.3s ease;\n  outline: none;\n}\ninput[type=text][_ngcontent-%COMP%]:focus, \ninput[type=email][_ngcontent-%COMP%]:focus, \ninput[type=tel][_ngcontent-%COMP%]:focus, \ninput[type=number][_ngcontent-%COMP%]:focus, \nselect[_ngcontent-%COMP%]:focus {\n  border-color: #dc3545;\n  background: rgba(255, 255, 255, 1);\n  box-shadow: 0 0 0 4px rgba(220, 53, 69, 0.08);\n}\ninput[type=text][_ngcontent-%COMP%]::placeholder, \ninput[type=email][_ngcontent-%COMP%]::placeholder, \ninput[type=tel][_ngcontent-%COMP%]::placeholder, \ninput[type=number][_ngcontent-%COMP%]::placeholder {\n  color: #4e4e4e;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\nselect[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.confirmation-section[_ngcontent-%COMP%] {\n  background: rgba(248, 249, 250, 0.8);\n  border: 1px solid rgba(222, 226, 230, 0.6);\n  border-radius: 12px;\n  padding: 25px;\n  margin-bottom: 30px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.confirmation-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #1d1d1d;\n  margin-bottom: 15px;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\n.confirmation-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.confirmation-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  margin-top: 2px;\n  transform: scale(1.3);\n  accent-color: #dc3545;\n}\n.confirmation-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #495057;\n  font-weight: 500;\n  line-height: 1.4;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  cursor: pointer;\n}\n.error[_ngcontent-%COMP%] {\n  border-color: #e74c3c !important;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #e74c3c;\n  font-size: 0.8rem;\n  margin-top: 5px;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  justify-content: flex-end;\n  margin-top: 40px;\n  padding-top: 30px;\n  border-top: 1px solid rgba(222, 226, 230, 0.6);\n}\n.btn-cancel[_ngcontent-%COMP%], \n.btn-submit[_ngcontent-%COMP%] {\n  padding: 16px 30px;\n  border-radius: 4px;\n  font-size: 1rem;\n  font-weight: 600;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: none;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.9);\n  color: #4e4e4e;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 1);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n}\n.btn-submit[_ngcontent-%COMP%] {\n  background: #dc3545;\n  color: white;\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #c82333;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(220, 53, 69, 0.4);\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  background: #6c757d;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n@media (max-width: 768px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-group.full-width[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .cancel-account-container[_ngcontent-%COMP%] {\n    padding: 20px 15px;\n  }\n  .cancel-form[_ngcontent-%COMP%] {\n    padding: 25px 20px;\n  }\n  .header-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n  .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .warning-banner[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=cancelar-cuenta.component.css.map */'] });
var CancelarCuentaComponent = _CancelarCuentaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CancelarCuentaComponent, [{
    type: Component,
    args: [{ selector: "app-cancelar-cuenta", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<div class="cancel-account-container">\r
  <!-- Header -->\r
  <div class="form-header">\r
    <button class="back-button" (click)="goBack()">\r
      \u2190\r
    </button>\r
    <div class="header-content">\r
      <div class="header-icon">\u2296</div>\r
      <div>\r
        <h1>Cancelar Cuenta</h1>\r
        <p>Proceso de cierre bancario</p>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Formulario de cancelaci\xF3n -->\r
  <div class="cancel-form">\r
    <div class="warning-banner">\r
      <div class="warning-icon">\u26A0\uFE0F</div>\r
      <div class="warning-text">Esta acci\xF3n es irreversible. Aseg\xFArate de transferir todos los fondos antes de continuar.</div>\r
    </div>\r
\r
    <form [formGroup]="cancelForm" (ngSubmit)="onSubmit()">\r
      <!-- Datos para Cierre de Cuenta -->\r
      <div class="form-section">\r
        <div class="section-header">\r
          <div class="section-icon">\u{1F464}</div>\r
          <h2>Datos para Cierre de Cuenta</h2>\r
        </div>\r
        <p class="section-description">Complete la informaci\xF3n requerida para procesar el cierre de cuenta</p>\r
\r
        <div class="form-row">\r
          <div class="form-group">\r
            <label for="accountNumber">N\xFAmero de Cuenta *</label>\r
            <input \r
              type="text" \r
              id="accountNumber" \r
              formControlName="accountNumber"\r
              placeholder="1234567890984"\r
              [class.error]="cancelForm.get('accountNumber')?.invalid && cancelForm.get('accountNumber')?.touched">\r
            <div class="error-message" *ngIf="getFieldError('accountNumber')">\r
              {{ getFieldError('accountNumber') }}\r
            </div>\r
          </div>\r
          \r
          <div class="form-group">\r
            <label for="rfc">RFC *</label>\r
            <input \r
              type="text" \r
              id="rfc" \r
              formControlName="rfc"\r
              placeholder="ABCD123456EFG"\r
              [class.error]="cancelForm.get('rfc')?.invalid && cancelForm.get('rfc')?.touched">\r
            <div class="error-message" *ngIf="getFieldError('rfc')">\r
              {{ getFieldError('rfc') }}\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="form-row">\r
          <div class="form-group">\r
            <label for="curp">CURP *</label>\r
            <input \r
              type="text" \r
              id="curp" \r
              formControlName="curp"\r
              placeholder="ABCD123456HDFRML09"\r
              [class.error]="cancelForm.get('curp')?.invalid && cancelForm.get('curp')?.touched">\r
            <div class="error-message" *ngIf="getFieldError('curp')">\r
              {{ getFieldError('curp') }}\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="form-row">\r
          <div class="form-group">\r
            <label for="firstName">Nombres *</label>\r
            <input \r
              type="text" \r
              id="firstName" \r
              formControlName="firstName"\r
              placeholder="Nombres del titular"\r
              [class.error]="cancelForm.get('firstName')?.invalid && cancelForm.get('firstName')?.touched">\r
            <div class="error-message" *ngIf="getFieldError('firstName')">\r
              {{ getFieldError('firstName') }}\r
            </div>\r
          </div>\r
          \r
          <div class="form-group">\r
            <label for="lastName">Apellidos *</label>\r
            <input \r
              type="text" \r
              id="lastName" \r
              formControlName="lastName"\r
              placeholder="Apellidos del titular"\r
              [class.error]="cancelForm.get('lastName')?.invalid && cancelForm.get('lastName')?.touched">\r
            <div class="error-message" *ngIf="getFieldError('lastName')">\r
              {{ getFieldError('lastName') }}\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="form-row">\r
          <div class="form-group">\r
            <label for="email">Correo Electr\xF3nico *</label>\r
            <input \r
              type="email" \r
              id="email" \r
              formControlName="email"\r
              placeholder="cliente@gmail.com"\r
              [class.error]="cancelForm.get('email')?.invalid && cancelForm.get('email')?.touched">\r
            <div class="error-message" *ngIf="getFieldError('email')">\r
              {{ getFieldError('email') }}\r
            </div>\r
          </div>\r
          \r
          <div class="form-group">\r
            <label for="phone">Tel\xE9fono *</label>\r
            <input \r
              type="tel" \r
              id="phone" \r
              formControlName="phone"\r
              placeholder="55 1234 5678"\r
              [class.error]="cancelForm.get('phone')?.invalid && cancelForm.get('phone')?.touched">\r
            <div class="error-message" *ngIf="getFieldError('phone')">\r
              {{ getFieldError('phone') }}\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Motivo de cierre -->\r
      <div class="form-section">\r
        <div class="section-header">\r
          <div class="section-icon">\u2753</div>\r
          <h2>Motivo de cierre</h2>\r
        </div>\r
\r
        <div class="form-row">\r
          <div class="form-group full-width">\r
            <label for="closeReason">Motivo principal *</label>\r
            <select \r
              id="closeReason" \r
              formControlName="closeReason"\r
              [class.error]="cancelForm.get('closeReason')?.invalid && cancelForm.get('closeReason')?.touched">\r
              <option value="">Seleccione el motivo de cierre</option>\r
              <option *ngFor="let reason of closeReasons" [value]="reason.value">\r
                {{ reason.label }}\r
              </option>\r
            </select>\r
            <div class="error-message" *ngIf="getFieldError('closeReason')">\r
              {{ getFieldError('closeReason') }}\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Transferencia de Saldo Restante -->\r
      <div class="form-section">\r
        <div class="section-header">\r
          <div class="section-icon">\u{1F4B8}</div>\r
          <h2>Transferencia de Saldo Restante</h2>\r
        </div>\r
\r
        <div class="form-row">\r
          <div class="form-group">\r
            <label for="transferAccount">Cuenta de Transferencia</label>\r
            <input \r
              type="text" \r
              id="transferAccount" \r
              formControlName="transferAccount"\r
              placeholder="N\xFAmero de cuenta de destino">\r
          </div>\r
          \r
          <div class="form-group">\r
            <label for="destinationBank">Banco de destino</label>\r
            <select \r
              id="destinationBank" \r
              formControlName="destinationBank">\r
              <option value="">Seleccione el banco de destino</option>\r
              <option *ngFor="let banco of bancosMexicanos" [value]="banco">\r
                {{ banco }}\r
              </option>\r
            </select>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Confirmaci\xF3n Requerida -->\r
      <div class="confirmation-section">\r
        <h3>Confirmaci\xF3n Requerida:</h3>\r
        <div class="confirmation-checkbox">\r
          <input \r
            type="checkbox" \r
            id="confirmIrreversible" \r
            formControlName="confirmIrreversible">\r
          <label for="confirmIrreversible">\r
            Entiendo que el cierre de cuenta es irreversible\r
          </label>\r
        </div>\r
        <div class="error-message" *ngIf="getFieldError('confirmIrreversible')">\r
          {{ getFieldError('confirmIrreversible') }}\r
        </div>\r
      </div>\r
\r
      <!-- Botones de acci\xF3n -->\r
      <div class="form-actions">\r
        <button type="button" class="btn-cancel" (click)="onCancel()">\r
          Cancelar\r
        </button>\r
        <button \r
          type="submit" \r
          class="btn-submit" \r
          [disabled]="!isFormComplete() || isSubmitting()">\r
          <span *ngIf="!isSubmitting()">Procesar Cierre</span>\r
          <span *ngIf="isSubmitting()" class="loading">\r
            \u23F3 Procesando...\r
          </span>\r
        </button>\r
      </div>\r
    </form>\r
  </div>\r
</div>`, styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";\n\n/* src/app/pages/cancelar-cuenta/cancelar-cuenta.component.css */\n:host {\n  display: block;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #c3cfe2 100%);\n  font-family:\n    Inter,\n    system-ui,\n    "Segoe UI",\n    Roboto,\n    Helvetica,\n    Arial,\n    sans-serif;\n}\n.cancel-account-container {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 30px 20px;\n}\n.form-header {\n  display: flex;\n  align-items: center;\n  margin-bottom: 40px;\n  gap: 20px;\n}\n.back-button {\n  background: rgba(240, 242, 247, 0.75);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  border-radius: 12px;\n  font-size: 24px;\n  cursor: pointer;\n  color: #0BA5FF;\n  width: 50px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n  font-weight: 600;\n}\n.back-button:hover {\n  background: rgba(255, 255, 255, 0.9);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(11, 165, 255, 0.2);\n}\n.header-content {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.header-icon {\n  width: 60px;\n  height: 60px;\n  background: #dc3545;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 32px;\n  box-shadow: 0 8px 25px rgba(220, 53, 69, 0.3);\n}\n.header-content h1 {\n  font-size: 2.2rem;\n  font-weight: 600;\n  color: #1d1d1d;\n  margin-bottom: 4px;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\n.header-content p {\n  color: rgba(35, 35, 35, 0.9);\n  font-size: 0.95rem;\n  font-weight: 300;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\n.cancel-form {\n  background: rgba(240, 242, 247, 0.75);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-radius: 16px;\n  padding: 40px;\n  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.4);\n}\n.warning-banner {\n  background: rgba(255, 243, 205, 0.9);\n  border: 1px solid rgba(255, 236, 181, 0.8);\n  border-radius: 12px;\n  padding: 20px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.warning-icon {\n  font-size: 24px;\n  color: #856404;\n}\n.warning-text {\n  color: #856404;\n  font-weight: 500;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  font-size: 0.95rem;\n}\n.form-section {\n  margin-bottom: 50px;\n}\n.form-section:last-child {\n  margin-bottom: 30px;\n}\n.section-header {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  margin-bottom: 8px;\n}\n.section-icon {\n  width: 40px;\n  height: 40px;\n  background: #dc3545;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  color: white;\n  box-shadow: 0 4px 15px rgba(220, 53, 69, 0.3);\n}\n.section-header h2 {\n  font-size: 1.4rem;\n  font-weight: 600;\n  color: #1d1d1d;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\n.section-description {\n  font-size: 0.9rem;\n  color: #4e4e4e;\n  margin-bottom: 30px;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  font-weight: 400;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 25px;\n  margin-bottom: 25px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n}\n.form-group.full-width {\n  grid-column: span 2;\n}\nlabel {\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: #1d1d1d;\n  margin-bottom: 8px;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\ninput[type=text],\ninput[type=email],\ninput[type=tel],\ninput[type=number],\nselect {\n  width: 100%;\n  padding: 16px 18px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  font-size: 1rem;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  font-weight: 400;\n  background: rgba(255, 255, 255, 0.9);\n  transition: all 0.3s ease;\n  outline: none;\n}\ninput[type=text]:focus,\ninput[type=email]:focus,\ninput[type=tel]:focus,\ninput[type=number]:focus,\nselect:focus {\n  border-color: #dc3545;\n  background: rgba(255, 255, 255, 1);\n  box-shadow: 0 0 0 4px rgba(220, 53, 69, 0.08);\n}\ninput[type=text]::placeholder,\ninput[type=email]::placeholder,\ninput[type=tel]::placeholder,\ninput[type=number]::placeholder {\n  color: #4e4e4e;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\nselect {\n  cursor: pointer;\n}\n.confirmation-section {\n  background: rgba(248, 249, 250, 0.8);\n  border: 1px solid rgba(222, 226, 230, 0.6);\n  border-radius: 12px;\n  padding: 25px;\n  margin-bottom: 30px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.confirmation-section h3 {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #1d1d1d;\n  margin-bottom: 15px;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\n.confirmation-checkbox {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.confirmation-checkbox input[type=checkbox] {\n  margin-top: 2px;\n  transform: scale(1.3);\n  accent-color: #dc3545;\n}\n.confirmation-checkbox label {\n  color: #495057;\n  font-weight: 500;\n  line-height: 1.4;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  cursor: pointer;\n}\n.error {\n  border-color: #e74c3c !important;\n}\n.error-message {\n  color: #e74c3c;\n  font-size: 0.8rem;\n  margin-top: 5px;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\n.form-actions {\n  display: flex;\n  gap: 20px;\n  justify-content: flex-end;\n  margin-top: 40px;\n  padding-top: 30px;\n  border-top: 1px solid rgba(222, 226, 230, 0.6);\n}\n.btn-cancel,\n.btn-submit {\n  padding: 16px 30px;\n  border-radius: 4px;\n  font-size: 1rem;\n  font-weight: 600;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: none;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n}\n.btn-cancel {\n  background: rgba(255, 255, 255, 0.9);\n  color: #4e4e4e;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.btn-cancel:hover {\n  background: rgba(255, 255, 255, 1);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n}\n.btn-submit {\n  background: #dc3545;\n  color: white;\n}\n.btn-submit:hover:not(:disabled) {\n  background: #c82333;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(220, 53, 69, 0.4);\n}\n.btn-submit:disabled {\n  background: #6c757d;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.loading {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n@media (max-width: 768px) {\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n  .form-group.full-width {\n    grid-column: span 1;\n  }\n  .form-actions {\n    flex-direction: column;\n  }\n  .cancel-account-container {\n    padding: 20px 15px;\n  }\n  .cancel-form {\n    padding: 25px 20px;\n  }\n  .header-content h1 {\n    font-size: 1.8rem;\n  }\n  .section-header h2 {\n    font-size: 1.2rem;\n  }\n  .warning-banner {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=cancelar-cuenta.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: Router }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CancelarCuentaComponent, { className: "CancelarCuentaComponent", filePath: "src/app/pages/cancelar-cuenta/cancelar-cuenta.component.ts", lineNumber: 14 });
})();
export {
  CancelarCuentaComponent
};
//# sourceMappingURL=chunk-JGAFEC7O.js.map
