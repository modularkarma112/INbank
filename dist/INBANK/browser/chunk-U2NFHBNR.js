import {
  HttpClient,
  HttpErrorResponse,
  Injectable,
  Router,
  firstValueFrom,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-LQXE4UJV.js";

// src/app/auth.service.ts
var _AuthService = class _AuthService {
  constructor(router, http) {
    this.router = router;
    this.http = http;
    this.isLoggedIn = signal(false, ...ngDevMode ? [{ debugName: "isLoggedIn" }] : []);
    this.currentUser = signal("", ...ngDevMode ? [{ debugName: "currentUser" }] : []);
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (token && user) {
      this.isLoggedIn.set(true);
      this.currentUser.set(JSON.parse(user)?.usuario || "");
    }
  }
  async loginApi(usuario, contrasena) {
    const base = "http://3.139.254.175";
    try {
      const resp = await firstValueFrom(this.http.post(`${base}/api/auth/login`, { usuario, contrasena }));
      if (!resp?.token)
        throw new Error("Respuesta inv\xE1lida del servidor");
      localStorage.setItem("token", resp.token);
      localStorage.setItem("user", JSON.stringify(resp.user));
      this.isLoggedIn.set(true);
      this.currentUser.set(resp.user?.usuario || usuario);
      this.router.navigate(["/dashboard"]);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        let msg = "Error al iniciar sesi\xF3n";
        if (err.status === 0)
          msg = "No se pudo conectar con el servidor.";
        else if (err.status === 400)
          msg = "Debes ingresar usuario y contrase\xF1a.";
        else if (err.status === 401)
          msg = "Usuario o contrase\xF1a incorrectos.";
        else if (err.status >= 500)
          msg = "Error interno del servidor. Int\xE9ntalo m\xE1s tarde.";
        throw new Error(msg);
      }
      throw err;
    }
  }
  logout() {
    this.isLoggedIn.set(false);
    this.currentUser.set("");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.router.navigate(["/login"]);
    console.log("Sesi\xF3n cerrada");
  }
  isAuthenticated() {
    return this.isLoggedIn() || !!localStorage.getItem("token");
  }
  getToken() {
    return localStorage.getItem("token");
  }
};
_AuthService.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(Router), \u0275\u0275inject(HttpClient));
};
_AuthService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
var AuthService = _AuthService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Router }, { type: HttpClient }], null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-U2NFHBNR.js.map
