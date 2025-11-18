import {
  AuthService
} from "./chunk-U2NFHBNR.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-QL6LS3FT.js";
import {
  CommonModule,
  Component,
  NgIf,
  Router,
  RouterOutlet,
  bootstrapApplication,
  catchError,
  inject,
  provideBrowserGlobalErrorListeners,
  provideClientHydration,
  provideHttpClient,
  provideRouter,
  provideZonelessChangeDetection,
  setClassMetadata,
  signal,
  throwError,
  withEventReplay,
  withInterceptors,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-LQXE4UJV.js";

// src/app/app.routes.ts
var canActivateAuth = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isAuthenticated())
    return true;
  router.navigate(["/login"]);
  return false;
};
var routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "login", loadComponent: () => import("./chunk-PW4OCHWX.js").then((m) => m.LoginComponent) },
  { path: "dashboard", canActivate: [canActivateAuth], loadComponent: () => import("./chunk-UZ3SX262.js").then((m) => m.DashboardComponent) },
  { path: "abrir-cuenta", canActivate: [canActivateAuth], loadComponent: () => import("./chunk-ZEYBNBLS.js").then((m) => m.AbrirCuentaComponent) },
  { path: "cancelar-cuenta", canActivate: [canActivateAuth], loadComponent: () => import("./chunk-JGAFEC7O.js").then((m) => m.CancelarCuentaComponent) },
  { path: "prestamos-solicitud", canActivate: [canActivateAuth], loadComponent: () => import("./chunk-OMZTMMAH.js").then((m) => m.PrestamosSolicitudComponent) },
  { path: "transferencias", canActivate: [canActivateAuth], loadComponent: () => import("./chunk-KZA375H5.js").then((m) => m.TransferenciasComponent) },
  { path: "comprobante-transferencia/:id", canActivate: [canActivateAuth], loadComponent: () => import("./chunk-Z3CLG4AG.js").then((m) => m.ComprobanteTransferenciaComponent) },
  { path: "comprobante-movimiento/:id", canActivate: [canActivateAuth], loadComponent: () => import("./chunk-7HGAG3PC.js").then((m) => m.ComprobanteMovimientoComponent) },
  { path: "usuarios/alta", canActivate: [canActivateAuth], loadComponent: () => import("./chunk-EPIXAFNZ.js").then((m) => m.UsuariosAltaComponent) },
  { path: "clientes", canActivate: [canActivateAuth], loadComponent: () => import("./chunk-LPOMGOXG.js").then((m) => m.ClientesComponent) },
  { path: "clientes/:id", canActivate: [canActivateAuth], loadComponent: () => import("./chunk-JQR7DXFD.js").then((m) => m.ClientePerfilComponent) },
  { path: "cuentas", canActivate: [canActivateAuth], loadComponent: () => import("./chunk-MMY3FEXG.js").then((m) => m.CuentasComponent) },
  { path: "prestamos", canActivate: [canActivateAuth], loadComponent: () => import("./chunk-YV6YMLUK.js").then((m) => m.PrestamosComponent) },
  { path: "cobranzas", canActivate: [canActivateAuth], loadComponent: () => import("./chunk-KIWKQ4MV.js").then((m) => m.CobranzasComponent) },
  { path: "depositos", canActivate: [canActivateAuth], loadComponent: () => import("./chunk-PKDUHW3H.js").then((m) => m.DepositosComponent) },
  { path: "retiros", canActivate: [canActivateAuth], loadComponent: () => import("./chunk-KRTR6KKA.js").then((m) => m.RetirosComponent) },
  { path: "usuarios-&-roles", canActivate: [canActivateAuth], loadComponent: () => import("./chunk-VLUTWRCC.js").then((m) => m.UsuariosRolesComponent) },
  { path: "estado-cuenta", canActivate: [canActivateAuth], loadComponent: () => import("./chunk-LPPFO6M7.js").then((m) => m.EstadoCuentaComponent) },
  { path: "reporte-transacciones", canActivate: [canActivateAuth], loadComponent: () => import("./chunk-E5GXAENU.js").then((m) => m.ReporteTransaccionesComponent) },
  { path: "**", redirectTo: "/dashboard" }
];

// src/app/app.config.ts
function authInterceptor(req, next) {
  const auth = inject(AuthService);
  const router = inject(Router);
  const token = auth.getToken();
  const cloned = token ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) : req;
  return next(cloned).pipe(catchError((err) => {
    if (err?.status === 401) {
      auth.logout();
      router.navigate(["/login"]);
    }
    return throwError(() => err);
  }));
}
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};

// src/app/app.ts
function App_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    \u0275\u0275element(3, "img", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1");
    \u0275\u0275text(5, "INBANK");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Panel de gesti\xF3n");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 6)(9, "h2");
    \u0275\u0275text(10, "INICIAR SESI\xD3N");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 7);
    \u0275\u0275text(12, "Ingrese sus credenciales de ejecutivo para acceder al sistema");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "form", 8);
    \u0275\u0275listener("ngSubmit", function App_div_0_Template_form_ngSubmit_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLogin());
    });
    \u0275\u0275elementStart(14, "div", 9)(15, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function App_div_0_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.username, $event) || (ctx_r1.username = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 11);
    \u0275\u0275text(17, "\u{1F464}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 9)(19, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function App_div_0_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.password, $event) || (ctx_r1.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 11);
    \u0275\u0275text(21, "\u{1F512}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "button", 13);
    \u0275\u0275text(23, "Acceder al sistema");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "p", 14);
    \u0275\u0275text(25, "Sistema seguro para ejecutivos bancarios");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.username);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.password);
  }
}
function App_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "router-outlet");
    \u0275\u0275elementEnd();
  }
}
var _App = class _App {
  constructor(router, authService) {
    this.router = router;
    this.authService = authService;
    this.title = signal("INBANK", ...ngDevMode ? [{ debugName: "title" }] : []);
    this.username = "";
    this.password = "";
  }
  get isLoggedIn() {
    return this.authService.isAuthenticated();
  }
  async onLogin() {
    if (!this.username || !this.password) {
      alert("Por favor, completa todos los campos");
      return;
    }
    try {
      await this.authService.loginApi(this.username, this.password);
      this.username = "";
      this.password = "";
    } catch (e) {
      alert(e?.message || "Credenciales inv\xE1lidas");
    }
  }
  onLogout() {
    this.authService.logout();
    this.username = "";
    this.password = "";
  }
};
_App.\u0275fac = function App_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _App)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
};
_App.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 2, vars: 2, consts: [["class", "login-container", 4, "ngIf"], ["class", "dashboard-container", 4, "ngIf"], [1, "login-container"], [1, "header"], [1, "bank-icon"], ["src", "logo.png", "alt", "Logo del Banco"], [1, "login-panel"], [1, "subtitle"], [3, "ngSubmit"], [1, "form-group"], ["type", "text", "id", "username", "name", "username", "placeholder", "Usuario", "required", "", 3, "ngModelChange", "ngModel"], [1, "input-icon"], ["type", "password", "id", "password", "name", "password", "placeholder", "Contrase\xF1a", "required", "", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "login-btn"], [1, "security-note"], [1, "dashboard-container"]], template: function App_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, App_div_0_Template, 26, 2, "div", 0)(1, App_div_1_Template, 2, 0, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", !ctx.isLoggedIn);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isLoggedIn);
  }
}, dependencies: [RouterOutlet, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, CommonModule, NgIf], styles: ['\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody[_ngcontent-%COMP%] {\n  font-family:\n    Inter,\n    system-ui,\n    "Segoe UI",\n    Roboto,\n    Helvetica,\n    Arial,\n    sans-serif;\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #c3cfe2 100%);\n  min-height: 100vh;\n}\n.login-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-image: url("./media/background.jpg");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  position: relative;\n  overflow: hidden;\n}\n.header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 30px;\n  z-index: 1;\n  position: relative;\n}\n.bank-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 15px;\n}\n.bank-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  object-fit: contain;\n}\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: rgb(0, 0, 0);\n  font-size: 2rem;\n  font-weight: 600;\n  margin-bottom: 5px;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\n.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(35, 35, 35, 0.9);\n  font-size: 0.9rem;\n  font-weight: 300;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\n.login-panel[_ngcontent-%COMP%] {\n  background: rgba(240, 242, 247, 0.75);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-radius: 16px;\n  padding: 45px;\n  width: 420px;\n  max-width: 90vw;\n  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);\n  text-align: center;\n  z-index: 1;\n  position: relative;\n  border: 1px solid rgba(255, 255, 255, 0.4);\n}\n.login-panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #1d1d1d;\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin-bottom: 10px;\n  letter-spacing: 1px;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: #3e3e3e;\n  font-size: 0.85rem;\n  margin-bottom: 30px;\n  line-height: 1.4;\n  text-align: left;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  font-weight: 400;\n}\n.form-group[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 24px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 16px 45px 16px 18px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  font-size: 1rem;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  font-weight: 400;\n  background: rgba(255, 255, 255, 0.9);\n  transition: all 0.3s ease;\n  outline: none;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #2196F3;\n  background: rgba(255, 255, 255, 1);\n  box-shadow: 0 0 0 4px rgba(33, 150, 243, 0.08);\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #4e4e4e;\n  font-weight: 400;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\n.input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #0BA5FF;\n  font-size: 1rem;\n}\n.login-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #0BA5FF;\n  color: white;\n  border: none;\n  padding: 18px;\n  border-radius: 4px;\n  font-size: 1rem;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  margin-top: 5px;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n}\n.login-btn[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #1976D2 0%,\n      #1565C0 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(33, 150, 243, 0.3);\n}\n.login-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.security-note[_ngcontent-%COMP%] {\n  color: #4A4A4A;\n  font-size: 0.78rem;\n  margin-top: 15px;\n  font-style: italic;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  font-weight: 400;\n  opacity: 0.8;\n}\n@media (max-width: 480px) {\n  .login-panel[_ngcontent-%COMP%] {\n    padding: 30px 20px;\n    margin: 20px;\n  }\n  .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.7rem;\n  }\n  .bank-icon[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n  }\n  .bank-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 35px;\n    height: 35px;\n  }\n}\n.dashboard-container[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100vh;\n  background: #f5f7fa;\n}\n/*# sourceMappingURL=app.css.map */'] });
var App = _App;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [RouterOutlet, FormsModule, CommonModule], template: '<!-- LOGIN SCREEN - Solo visible cuando no est\xE1 logueado -->\r\n<div class="login-container" *ngIf="!isLoggedIn">\r\n  <div class="header">\r\n    <div class="bank-icon">\r\n      <img src="logo.png" alt="Logo del Banco">\r\n    </div>\r\n    <h1>INBANK</h1>\r\n    <p>Panel de gesti\xF3n</p>\r\n  </div>\r\n\r\n  <div class="login-panel">\r\n    <h2>INICIAR SESI\xD3N</h2>\r\n    <p class="subtitle">Ingrese sus credenciales de ejecutivo para acceder al sistema</p>\r\n\r\n    <form (ngSubmit)="onLogin()">\r\n      <div class="form-group">\r\n        <input\r\n          type="text"\r\n          id="username"\r\n          name="username"\r\n          [(ngModel)]="username"\r\n          placeholder="Usuario"\r\n          required>\r\n        <span class="input-icon">\u{1F464}</span>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <input\r\n          type="password"\r\n          id="password"\r\n          name="password"\r\n          [(ngModel)]="password"\r\n          placeholder="Contrase\xF1a"\r\n          required>\r\n        <span class="input-icon">\u{1F512}</span>\r\n      </div>\r\n\r\n      <button type="submit" class="login-btn">Acceder al sistema</button>\r\n    </form>\r\n\r\n    <p class="security-note">Sistema seguro para ejecutivos bancarios</p>\r\n  </div>\r\n</div>\r\n\r\n<!-- DASHBOARD - Solo visible cuando est\xE1 logueado -->\r\n<div class="dashboard-container" *ngIf="isLoggedIn">\r\n  <router-outlet />\r\n</div>\r\n', styles: ['/* src/app/app.css */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  font-family:\n    Inter,\n    system-ui,\n    "Segoe UI",\n    Roboto,\n    Helvetica,\n    Arial,\n    sans-serif;\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #c3cfe2 100%);\n  min-height: 100vh;\n}\n.login-container {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-image: url("./media/background.jpg");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  position: relative;\n  overflow: hidden;\n}\n.header {\n  text-align: center;\n  margin-bottom: 30px;\n  z-index: 1;\n  position: relative;\n}\n.bank-icon {\n  width: 50px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 15px;\n}\n.bank-icon img {\n  width: 50px;\n  height: 50px;\n  object-fit: contain;\n}\n.header h1 {\n  color: rgb(0, 0, 0);\n  font-size: 2rem;\n  font-weight: 600;\n  margin-bottom: 5px;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\n.header p {\n  color: rgba(35, 35, 35, 0.9);\n  font-size: 0.9rem;\n  font-weight: 300;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\n.login-panel {\n  background: rgba(240, 242, 247, 0.75);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-radius: 16px;\n  padding: 45px;\n  width: 420px;\n  max-width: 90vw;\n  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);\n  text-align: center;\n  z-index: 1;\n  position: relative;\n  border: 1px solid rgba(255, 255, 255, 0.4);\n}\n.login-panel h2 {\n  color: #1d1d1d;\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin-bottom: 10px;\n  letter-spacing: 1px;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\n.subtitle {\n  color: #3e3e3e;\n  font-size: 0.85rem;\n  margin-bottom: 30px;\n  line-height: 1.4;\n  text-align: left;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  font-weight: 400;\n}\n.form-group {\n  position: relative;\n  margin-bottom: 24px;\n}\n.form-group input {\n  width: 100%;\n  padding: 16px 45px 16px 18px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  font-size: 1rem;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  font-weight: 400;\n  background: rgba(255, 255, 255, 0.9);\n  transition: all 0.3s ease;\n  outline: none;\n}\n.form-group input:focus {\n  border-color: #2196F3;\n  background: rgba(255, 255, 255, 1);\n  box-shadow: 0 0 0 4px rgba(33, 150, 243, 0.08);\n}\n.form-group input::placeholder {\n  color: #4e4e4e;\n  font-weight: 400;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\n.input-icon {\n  position: absolute;\n  right: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #0BA5FF;\n  font-size: 1rem;\n}\n.login-btn {\n  width: 100%;\n  background: #0BA5FF;\n  color: white;\n  border: none;\n  padding: 18px;\n  border-radius: 4px;\n  font-size: 1rem;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  margin-top: 5px;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n}\n.login-btn:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #1976D2 0%,\n      #1565C0 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(33, 150, 243, 0.3);\n}\n.login-btn:active {\n  transform: translateY(0);\n}\n.security-note {\n  color: #4A4A4A;\n  font-size: 0.78rem;\n  margin-top: 15px;\n  font-style: italic;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  font-weight: 400;\n  opacity: 0.8;\n}\n@media (max-width: 480px) {\n  .login-panel {\n    padding: 30px 20px;\n    margin: 20px;\n  }\n  .header h1 {\n    font-size: 1.7rem;\n  }\n  .bank-icon {\n    width: 60px;\n    height: 60px;\n  }\n  .bank-icon img {\n    width: 35px;\n    height: 35px;\n  }\n}\n.dashboard-container {\n  width: 100%;\n  min-height: 100vh;\n  background: #f5f7fa;\n}\n/*# sourceMappingURL=app.css.map */\n'] }]
  }], () => [{ type: Router }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 14 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
