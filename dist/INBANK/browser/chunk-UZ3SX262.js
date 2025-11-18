import {
  AuthService
} from "./chunk-U2NFHBNR.js";
import {
  CommonModule,
  Component,
  HttpClient,
  RouterLink,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-LQXE4UJV.js";

// src/app/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.title;
var _forTrack1 = ($index, $item) => $item.label;
function DashboardComponent_For_14_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 27);
    \u0275\u0275listener("click", function DashboardComponent_For_14_For_8_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleMenu());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const it_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", it_r5.link);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(it_r5.label);
  }
}
function DashboardComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "button", 25);
    \u0275\u0275listener("click", function DashboardComponent_For_14_Template_button_click_1_listener() {
      const \u0275$index_24_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleSection(\u0275$index_24_r2));
    })("keydown.enter", function DashboardComponent_For_14_Template_button_keydown_enter_1_listener() {
      const \u0275$index_24_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleSection(\u0275$index_24_r2));
    })("keydown.space", function DashboardComponent_For_14_Template_button_keydown_space_1_listener($event) {
      const \u0275$index_24_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r2.toggleSection(\u0275$index_24_r2));
    });
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 26);
    \u0275\u0275text(5, "\u25BE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ul");
    \u0275\u0275repeaterCreate(7, DashboardComponent_For_14_For_8_Template, 3, 2, "li", null, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sec_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-expanded", sec_r6.open);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sec_r6.title);
    \u0275\u0275advance();
    \u0275\u0275classProp("rot", sec_r6.open);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("hide", !sec_r6.open);
    \u0275\u0275advance();
    \u0275\u0275repeater(sec_r6.items);
  }
}
function DashboardComponent_For_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 28)(2, "div", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 31);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r7.label);
    \u0275\u0275advance();
    \u0275\u0275classProp("green", s_r7.tone === "green")("blue", s_r7.tone === "blue")("red", s_r7.tone === "red");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r7.tone === "blue" ? "\u{1F4B2}" : s_r7.tone === "red" ? "\u26A0\uFE0F" : "\u{1F464}");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r7.value);
  }
}
var _DashboardComponent = class _DashboardComponent {
  constructor(authService, http) {
    this.authService = authService;
    this.http = http;
    this.menuOpen = signal(false, ...ngDevMode ? [{ debugName: "menuOpen" }] : []);
    this.sections = [
      { title: "Clientes & Cuentas", open: false, items: [
        { label: "Clientes", link: "/clientes" },
        { label: "Cuentas", link: "/cuentas" },
        { label: "Aperturas", link: "/abrir-cuenta" }
      ] },
      { title: "Cr\xE9ditos", open: false, items: [
        { label: "Solicitudes", link: "/prestamos" },
        { label: "Cobranzas", link: "/cobranzas" }
      ] },
      { title: "Transacciones", open: false, items: [
        { label: "Dep\xF3sitos", link: "/depositos" },
        { label: "Retiros", link: "/retiros" },
        { label: "Transferencias", link: "/transferencias" }
      ] },
      { title: "Administraci\xF3n", open: false, items: [
        { label: "Usuarios-&-Roles", link: "/usuarios-&-roles" }
      ] },
      { title: "Reporte", open: false, items: [
        { label: "Estado de cuenta", link: "/estado-cuenta" },
        { label: "Detalle de Transacciones", link: "/reporte-transacciones" }
      ] }
    ];
    this.stats = [
      { label: "Cuentas Abiertas Hoy", value: 0, tone: "green" },
      { label: "Cr\xE9ditos por Aprobar", value: 0, tone: "blue" },
      { label: "Monto en Pr\xE9stamos (MXN)", value: 0, tone: "blue" },
      { label: "Cancelaciones del Mes", value: 0, tone: "red" }
    ];
    this.cargarStats();
  }
  cargarStats() {
    this.http.get("/api/metrics/dashboard").subscribe({
      next: (d) => {
        this.stats = [
          { label: "Cuentas Abiertas Hoy", value: d?.cuentasAbiertasHoy ?? 0, tone: "green" },
          { label: "Cr\xE9ditos por Aprobar", value: d?.creditosPorAprobar ?? 0, tone: "blue" },
          { label: "Monto en Pr\xE9stamos (MXN)", value: this.formatMoney(d?.montoPrestamosAprobados ?? 0), tone: "blue" },
          { label: "Cancelaciones del Mes", value: d?.cancelacionesMes ?? 0, tone: "red" }
        ];
      },
      error: (err) => console.error("Error cargando m\xE9tricas", err)
    });
  }
  formatMoney(n) {
    try {
      return n.toLocaleString("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 });
    } catch {
      return `$${n}`;
    }
  }
  toggleMenu() {
    this.menuOpen.set(!this.menuOpen());
  }
  toggleSection(i) {
    this.sections[i].open = !this.sections[i].open;
  }
  onBrandKeydown(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      this.toggleMenu();
    } else if (e.key === "Escape" && this.menuOpen()) {
      this.menuOpen.set(false);
    }
  }
  // Cerrar sesión
  onLogout() {
    this.authService.logout();
  }
};
_DashboardComponent.\u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DashboardComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(HttpClient));
};
_DashboardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 52, vars: 5, consts: [[1, "topbar", "d-flex", "align-items-center"], ["role", "button", "tabindex", "0", "aria-haspopup", "true", 1, "brand", 3, "click", "keydown"], [1, "logo"], ["src", "logo.png", "alt", "Logo INBANK"], [1, "titles"], [1, "name"], [1, "subtitle"], [1, "actions", "ms-auto"], [1, "btn-primary", 3, "click"], ["aria-label", "Men\xFA principal", 1, "mega"], [1, "mega-section"], [1, "mega-backdrop", 3, "click"], [1, "container"], [1, "hint"], [1, "cards"], [1, "card"], [1, "card-icon", "green"], [1, "card-title"], ["routerLink", "/abrir-cuenta", 1, "btn-outline"], [1, "card-icon", "pink"], ["routerLink", "/cancelar-cuenta", 1, "btn-outline"], [1, "card-icon", "blue"], ["routerLink", "/prestamos-solicitud", 1, "btn-outline"], [1, "stats"], [1, "stat"], [1, "mega-title", 3, "click", "keydown.enter", "keydown.space"], [1, "chev"], [3, "click", "routerLink"], [1, "stat-top"], [1, "label"], [1, "chip"], [1, "value"]], template: function DashboardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 0)(1, "div", 1);
    \u0275\u0275listener("click", function DashboardComponent_Template_div_click_1_listener() {
      return ctx.toggleMenu();
    })("keydown", function DashboardComponent_Template_div_keydown_1_listener($event) {
      return ctx.onBrandKeydown($event);
    });
    \u0275\u0275elementStart(2, "div", 2);
    \u0275\u0275element(3, "img", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "div", 5);
    \u0275\u0275text(6, "INBANK");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6);
    \u0275\u0275text(8, "Panel de gesti\xF3n");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 7)(10, "button", 8);
    \u0275\u0275listener("click", function DashboardComponent_Template_button_click_10_listener() {
      return ctx.onLogout();
    });
    \u0275\u0275text(11, "Cerrar Sesi\xF3n");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "nav", 9);
    \u0275\u0275repeaterCreate(13, DashboardComponent_For_14_Template, 9, 6, "div", 10, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 11);
    \u0275\u0275listener("click", function DashboardComponent_Template_div_click_15_listener() {
      return ctx.toggleMenu();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "main", 12)(17, "h1");
    \u0275\u0275text(18, "Dashboard Ejecutivo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 13);
    \u0275\u0275text(20, "Seleccione la operaci\xF3n que desea realizar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "section", 14)(22, "article", 15)(23, "div", 16);
    \u0275\u0275text(24, "\u{1F464}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 17);
    \u0275\u0275text(26, "Abrir Cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p");
    \u0275\u0275text(28, "Procesar solicitud de apertura de nueva cuenta bancaria");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "a", 18);
    \u0275\u0275text(30, "Acceder");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "article", 15)(32, "div", 19);
    \u0275\u0275text(33, "\u{1F465}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 17);
    \u0275\u0275text(35, "Cancelar Cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p");
    \u0275\u0275text(37, "Gestionar proceso de cierre y cancelaci\xF3n de cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "a", 20);
    \u0275\u0275text(39, "Acceder");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "article", 15)(41, "div", 21);
    \u0275\u0275text(42, "\u{1F4B2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 17);
    \u0275\u0275text(44, "Pr\xE9stamos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "p");
    \u0275\u0275text(46, "Evaluar y procesar solicitudes de cr\xE9dito y pr\xE9stamos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "a", 22);
    \u0275\u0275text(48, "Procesar Solicitud");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "section", 23);
    \u0275\u0275repeaterCreate(50, DashboardComponent_For_51_Template, 8, 9, "div", 24, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-expanded", ctx.menuOpen());
    \u0275\u0275advance(11);
    \u0275\u0275classProp("open", ctx.menuOpen());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.sections);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("show", ctx.menuOpen());
    \u0275\u0275advance(35);
    \u0275\u0275repeater(ctx.stats);
  }
}, dependencies: [CommonModule, RouterLink], styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap";\n\n\n\n[_nghost-%COMP%] {\n  --bg:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #c3cfe2 100%);\n  --panel: rgba(240, 242, 247, 0.75);\n  --text: #1d1d1d;\n  --muted: #4e4e4e;\n  --primary: #0BA5FF;\n  --accent: #0BA5FF;\n  --ring: rgba(0, 0, 0, 0.1);\n  color: var(--text);\n  display: block;\n  background: var(--bg);\n  min-height: 100dvh;\n  font-family:\n    Inter,\n    system-ui,\n    "Segoe UI",\n    Roboto,\n    Helvetica,\n    Arial,\n    sans-serif;\n}\n.topbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1100;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n  background: rgba(240, 242, 247, 0.75);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 6px 10px;\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  border-radius: 14px;\n  background: rgba(255, 255, 255, 0.9);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n}\n.logo[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n  background: transparent;\n}\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  object-fit: contain;\n}\n.titles[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  color: #1d1d1d;\n  font-size: 1rem;\n}\n.titles[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: rgba(35, 35, 35, 0.9);\n  font-size: 0.85rem;\n  font-weight: 300;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\n.brand-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: grid;\n  place-items: center;\n  border-radius: 10px;\n  background: var(--bg);\n  border: 1px solid var(--ring);\n  cursor: pointer;\n  transition: background .2s, transform .2s;\n}\n.brand-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.brand-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  letter-spacing: .2px;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.btn-primary[_ngcontent-%COMP%], \na.btn-primary[_ngcontent-%COMP%], \n.topbar[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  appearance: none;\n  -webkit-appearance: none;\n  border: none;\n  background: #0BA5FF !important;\n  color: #fff !important;\n  text-decoration: none;\n  padding: 12px 18px;\n  border-radius: 4px;\n  font-weight: 600;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  min-height: 40px;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  transition: all 0.3s ease;\n  font-size: 0.9rem;\n}\n.btn-primary[_ngcontent-%COMP%]:hover, \na.btn-primary[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #1976D2 0%,\n      #1565C0 100%) !important;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(33, 150, 243, 0.3);\n}\n.cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 16px;\n  padding: 24px 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.card[_ngcontent-%COMP%] {\n  background: rgba(240, 242, 247, 0.75);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  border-radius: 16px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 12px;\n  min-height: 200px;\n  cursor: pointer;\n  text-decoration: none;\n  color: inherit;\n  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);\n  transition: all 0.3s ease;\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.15);\n  border-color: rgba(255, 255, 255, 0.6);\n}\n.card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%], \n.card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  display: grid;\n  place-items: center;\n  background: var(--info-bg);\n  color: var(--ui-blue);\n  font-weight: 700;\n}\n.card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%], \n.card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-top: 4px;\n  font-size: 1rem;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  color: #1d1d1d;\n}\n.card[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%], \n.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #4e4e4e;\n  font-size: 0.9rem;\n  margin: 0;\n  line-height: 1.35;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  font-weight: 400;\n}\n.card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n}\n.card[_ngcontent-%COMP%]   .card-icon.green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #ecfdf5,\n      #dbf9ec);\n  color: #065f46;\n}\n.card[_ngcontent-%COMP%]   .card-icon.pink[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #fdf2f8,\n      #fbe7f1);\n  color: #9d174d;\n}\n.card[_ngcontent-%COMP%]   .card-icon.blue[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #eff6ff,\n      #e8f1ff);\n  color: #1d4ed8;\n}\n.btn-outline[_ngcontent-%COMP%], \na.btn-outline[_ngcontent-%COMP%], \n.card[_ngcontent-%COMP%]   a.btn-outline[_ngcontent-%COMP%] {\n  align-self: stretch;\n  margin-top: auto;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  appearance: none;\n  -webkit-appearance: none;\n  border: none;\n  background: #0BA5FF !important;\n  color: #fff !important;\n  text-decoration: none;\n  padding: 14px 12px;\n  border-radius: 4px;\n  font-weight: 600;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  min-height: 40px;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  font-size: 0.85rem;\n  transition: all 0.3s ease;\n}\n.card[_ngcontent-%COMP%]   a.btn-outline[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.btn-outline[_ngcontent-%COMP%]:hover, \na.btn-outline[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #1976D2 0%,\n      #1565C0 100%) !important;\n  transform: translateY(-1px);\n  box-shadow: 0 8px 25px rgba(33, 150, 243, 0.3);\n}\n.btn-outline[_ngcontent-%COMP%]:visited, \na.btn-outline[_ngcontent-%COMP%]:visited {\n  color: #fff;\n}\n.stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 16px;\n  padding: 0 20px 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.stat[_ngcontent-%COMP%] {\n  background: var(--panel);\n  border: 1px solid var(--ring);\n  border-radius: 12px;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  box-shadow: 0 6px 16px rgba(2, 6, 23, .06);\n}\n.stat[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: var(--muted);\n  font-weight: 600;\n  font-size: .8rem;\n}\n.stat[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 1.1rem;\n}\n.stat-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.stat[_ngcontent-%COMP%]   .chip[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  display: grid;\n  place-items: center;\n  border-radius: 8px;\n  font-weight: 700;\n  font-size: .85rem;\n}\n.chip.tone-positive[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, .12);\n  color: #166534;\n}\n.chip.tone-neutral[_ngcontent-%COMP%] {\n  background: rgba(14, 165, 233, .12);\n  color: #075985;\n}\n.chip.tone-negative[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, .12);\n  color: #7f1d1d;\n}\n.chip.green[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: #166534;\n}\n.chip.blue[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: #075985;\n}\n.chip.red[_ngcontent-%COMP%] {\n  background: var(--error-bg);\n  color: #7f1d1d;\n}\n.mega[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 64px;\n  left: 0;\n  height: calc(100dvh - 64px);\n  width: 340px;\n  background: rgba(11, 165, 255, 0.95);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-right: 0;\n  border-top-right-radius: 14px;\n  border-bottom-right-radius: 14px;\n  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.25);\n  transform: translateX(-100%);\n  transition: transform .25s ease;\n  z-index: 1050;\n  padding: 14px;\n  overflow-y: auto;\n}\n.mega-section[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.mega-title[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 12px 12px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, .08);\n  background: rgba(255, 255, 255, .05);\n  color: #fff;\n  cursor: pointer;\n  transition: background .15s ease, border-color .15s ease;\n}\n.mega-title[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .1);\n  border-color: rgba(255, 255, 255, .16);\n}\n.mega-title[_ngcontent-%COMP%]   .chev[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  display: grid;\n  place-items: center;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, .12);\n}\n.mega-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-weight: 700;\n}\n.mega-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n  margin: 2px 0 0;\n}\n.mega-section[_ngcontent-%COMP%]   ul.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n.mega-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  margin: 8px 8px 8px 36px;\n  padding: 10px 12px;\n  border-radius: 10px;\n  color: #e6f1fb;\n  text-decoration: none;\n  border: 1px dashed transparent;\n}\n.mega-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before {\n  content: "\\2022";\n  margin-right: 8px;\n  color: #cfe6fa;\n}\n.mega-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .06);\n  border-color: rgba(255, 255, 255, .18);\n}\n.mega.open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.section-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 12px 12px;\n  border-radius: 12px;\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--text);\n  cursor: pointer;\n  transition: background .15s ease, border-color .15s ease;\n}\n.section-btn[_ngcontent-%COMP%]:hover {\n  background: var(--bg);\n  border-color: var(--ring);\n}\n.section[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.section[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .bullet[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 999px;\n  background: var(--primary);\n  opacity: .4;\n}\n.chev[_ngcontent-%COMP%] {\n  transition: transform .2s ease;\n}\n.section.open[_ngcontent-%COMP%]   .chev[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.sub[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: 0fr;\n  transition: grid-template-rows .25s ease;\n}\n.section.open[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%] {\n  grid-template-rows: 1fr;\n}\n.sub[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.sub[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  margin: 8px 8px 8px 36px;\n  padding: 10px 12px;\n  border-radius: 10px;\n  color: var(--text);\n  text-decoration: none;\n  border: 1px dashed transparent;\n}\n.sub[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: var(--bg);\n  border-color: var(--ring);\n}\n.mega-backdrop[_ngcontent-%COMP%], \n.backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: transparent;\n  pointer-events: none;\n  z-index: 1040;\n}\n.mega-backdrop.show[_ngcontent-%COMP%], \n.backdrop.open[_ngcontent-%COMP%] {\n  pointer-events: auto;\n  background: transparent;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 24px 20px;\n}\nh1[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin: 12px 0 4px;\n  font-size: 2.2rem;\n  letter-spacing: -.2px;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  color: #1d1d1d;\n}\n.hint[_ngcontent-%COMP%] {\n  color: #4e4e4e;\n  margin-bottom: 8px;\n  font-size: 0.95rem;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  font-weight: 400;\n}\n[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--primary);\n  outline-offset: 2px;\n  border-radius: 8px;\n}\n@media (max-width: 1024px) {\n  .cards[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .stats[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 640px) {\n  .topbar[_ngcontent-%COMP%] {\n    height: 56px;\n    padding: 0 14px;\n  }\n  .brand-btn[_ngcontent-%COMP%] {\n    width: 36px;\n    height: 36px;\n    border-radius: 8px;\n  }\n  .mega[_ngcontent-%COMP%] {\n    top: 56px;\n    height: calc(100dvh - 56px);\n    width: 88vw;\n  }\n  .cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .stats[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */'] });
var DashboardComponent = _DashboardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [CommonModule, RouterLink], template: `<header class="topbar d-flex align-items-center">\r
	<div class="brand" (click)="toggleMenu()" (keydown)="onBrandKeydown($event)" role="button" tabindex="0" aria-haspopup="true" [attr.aria-expanded]="menuOpen()">\r
		<div class="logo">\r
			<img src="logo.png" alt="Logo INBANK">\r
		</div>\r
		<div class="titles">\r
			<div class="name">INBANK</div>\r
			<div class="subtitle">Panel de gesti\xF3n</div>\r
		</div>\r
	</div>\r
	<div class="actions ms-auto">\r
		<button (click)="onLogout()" class="btn-primary">Cerrar Sesi\xF3n</button>\r
	</div>\r
	<nav class="mega" [class.open]="menuOpen()" aria-label="Men\xFA principal">\r
		@for (sec of sections; track sec.title; let i = $index) {\r
			<div class="mega-section">\r
				<button class="mega-title" (click)="toggleSection(i)" (keydown.enter)="toggleSection(i)" (keydown.space)="$event.preventDefault(); toggleSection(i)" [attr.aria-expanded]="sec.open">\r
					<span>{{ sec.title }}</span>\r
					<span class="chev" [class.rot]="sec.open">\u25BE</span>\r
				</button>\r
				<ul [class.hide]="!sec.open">\r
					@for (it of sec.items; track it.label) {\r
						<li><a [routerLink]="it.link" (click)="toggleMenu()">{{ it.label }}</a></li>\r
					}\r
				</ul>\r
			</div>\r
		}\r
	</nav>\r
	<div class="mega-backdrop" (click)="toggleMenu()" [class.show]="menuOpen()"></div>\r
</header>\r
\r
<main class="container">\r
	<h1>Dashboard Ejecutivo</h1>\r
	<p class="hint">Seleccione la operaci\xF3n que desea realizar</p>\r
\r
	<section class="cards">\r
		<article class="card">\r
			<div class="card-icon green">\u{1F464}</div>\r
			<div class="card-title">Abrir Cuenta</div>\r
			<p>Procesar solicitud de apertura de nueva cuenta bancaria</p>\r
			<a routerLink="/abrir-cuenta" class="btn-outline">Acceder</a>\r
		</article>\r
\r
		<article class="card">\r
			<div class="card-icon pink">\u{1F465}</div>\r
			<div class="card-title">Cancelar Cuenta</div>\r
			<p>Gestionar proceso de cierre y cancelaci\xF3n de cuenta</p>\r
			<a routerLink="/cancelar-cuenta" class="btn-outline">Acceder</a>\r
		</article>\r
\r
		<article class="card">\r
			<div class="card-icon blue">\u{1F4B2}</div>\r
			<div class="card-title">Pr\xE9stamos</div>\r
			<p>Evaluar y procesar solicitudes de cr\xE9dito y pr\xE9stamos</p>\r
			<a routerLink="/prestamos-solicitud" class="btn-outline">Procesar Solicitud</a>\r
		</article>\r
	</section>\r
\r
	<section class="stats">\r
		@for (s of stats; track s.label) {\r
			<div class="stat">\r
				<div class="stat-top">\r
					<div class="label">{{ s.label }}</div>\r
					<div class="chip" [class.green]="s.tone==='green'" [class.blue]="s.tone==='blue'" [class.red]="s.tone==='red'">{{ s.tone==='blue' ? '\u{1F4B2}' : (s.tone==='red' ? '\u26A0\uFE0F' : '\u{1F464}') }}</div>\r
				</div>\r
				<div class="value">{{ s.value }}</div>\r
			</div>\r
		}\r
	</section>\r
</main>\r
\r
`, styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap";\n\n/* src/app/dashboard/dashboard.component.css */\n:host {\n  --bg:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #c3cfe2 100%);\n  --panel: rgba(240, 242, 247, 0.75);\n  --text: #1d1d1d;\n  --muted: #4e4e4e;\n  --primary: #0BA5FF;\n  --accent: #0BA5FF;\n  --ring: rgba(0, 0, 0, 0.1);\n  color: var(--text);\n  display: block;\n  background: var(--bg);\n  min-height: 100dvh;\n  font-family:\n    Inter,\n    system-ui,\n    "Segoe UI",\n    Roboto,\n    Helvetica,\n    Arial,\n    sans-serif;\n}\n.topbar {\n  position: sticky;\n  top: 0;\n  z-index: 1100;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n  background: rgba(240, 242, 247, 0.75);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);\n}\n.brand {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 6px 10px;\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  border-radius: 14px;\n  background: rgba(255, 255, 255, 0.9);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n}\n.logo {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n  background: transparent;\n}\n.logo img {\n  width: 32px;\n  height: 32px;\n  object-fit: contain;\n}\n.titles .name {\n  font-weight: 600;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  color: #1d1d1d;\n  font-size: 1rem;\n}\n.titles .subtitle {\n  color: rgba(35, 35, 35, 0.9);\n  font-size: 0.85rem;\n  font-weight: 300;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n}\n.brand-btn {\n  width: 40px;\n  height: 40px;\n  display: grid;\n  place-items: center;\n  border-radius: 10px;\n  background: var(--bg);\n  border: 1px solid var(--ring);\n  cursor: pointer;\n  transition: background .2s, transform .2s;\n}\n.brand-btn:active {\n  transform: scale(0.98);\n}\n.brand-title {\n  font-weight: 700;\n  letter-spacing: .2px;\n}\n.actions {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.btn-primary,\na.btn-primary,\n.topbar .actions a.btn-primary {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  appearance: none;\n  -webkit-appearance: none;\n  border: none;\n  background: #0BA5FF !important;\n  color: #fff !important;\n  text-decoration: none;\n  padding: 12px 18px;\n  border-radius: 4px;\n  font-weight: 600;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  min-height: 40px;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  transition: all 0.3s ease;\n  font-size: 0.9rem;\n}\n.btn-primary:hover,\na.btn-primary:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #1976D2 0%,\n      #1565C0 100%) !important;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(33, 150, 243, 0.3);\n}\n.cards {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 16px;\n  padding: 24px 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.card {\n  background: rgba(240, 242, 247, 0.75);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  border-radius: 16px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 12px;\n  min-height: 200px;\n  cursor: pointer;\n  text-decoration: none;\n  color: inherit;\n  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);\n  transition: all 0.3s ease;\n}\n.card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.15);\n  border-color: rgba(255, 255, 255, 0.6);\n}\n.card .card-icon,\n.card .icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  display: grid;\n  place-items: center;\n  background: var(--info-bg);\n  color: var(--ui-blue);\n  font-weight: 700;\n}\n.card .card-title,\n.card .title {\n  font-weight: 600;\n  margin-top: 4px;\n  font-size: 1rem;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  color: #1d1d1d;\n}\n.card .desc,\n.card p {\n  color: #4e4e4e;\n  font-size: 0.9rem;\n  margin: 0;\n  line-height: 1.35;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  font-weight: 400;\n}\n.card .card-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n}\n.card .card-icon.green {\n  background:\n    linear-gradient(\n      180deg,\n      #ecfdf5,\n      #dbf9ec);\n  color: #065f46;\n}\n.card .card-icon.pink {\n  background:\n    linear-gradient(\n      180deg,\n      #fdf2f8,\n      #fbe7f1);\n  color: #9d174d;\n}\n.card .card-icon.blue {\n  background:\n    linear-gradient(\n      180deg,\n      #eff6ff,\n      #e8f1ff);\n  color: #1d4ed8;\n}\n.btn-outline,\na.btn-outline,\n.card a.btn-outline {\n  align-self: stretch;\n  margin-top: auto;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  appearance: none;\n  -webkit-appearance: none;\n  border: none;\n  background: #0BA5FF !important;\n  color: #fff !important;\n  text-decoration: none;\n  padding: 14px 12px;\n  border-radius: 4px;\n  font-weight: 600;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  min-height: 40px;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  font-size: 0.85rem;\n  transition: all 0.3s ease;\n}\n.card a.btn-outline {\n  width: 100%;\n}\n.btn-outline:hover,\na.btn-outline:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #1976D2 0%,\n      #1565C0 100%) !important;\n  transform: translateY(-1px);\n  box-shadow: 0 8px 25px rgba(33, 150, 243, 0.3);\n}\n.btn-outline:visited,\na.btn-outline:visited {\n  color: #fff;\n}\n.stats {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 16px;\n  padding: 0 20px 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.stat {\n  background: var(--panel);\n  border: 1px solid var(--ring);\n  border-radius: 12px;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  box-shadow: 0 6px 16px rgba(2, 6, 23, .06);\n}\n.stat .label {\n  color: var(--muted);\n  font-weight: 600;\n  font-size: .8rem;\n}\n.stat .value {\n  font-weight: 800;\n  font-size: 1.1rem;\n}\n.stat-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.stat .chip {\n  width: 28px;\n  height: 28px;\n  display: grid;\n  place-items: center;\n  border-radius: 8px;\n  font-weight: 700;\n  font-size: .85rem;\n}\n.chip.tone-positive {\n  background: rgba(34, 197, 94, .12);\n  color: #166534;\n}\n.chip.tone-neutral {\n  background: rgba(14, 165, 233, .12);\n  color: #075985;\n}\n.chip.tone-negative {\n  background: rgba(239, 68, 68, .12);\n  color: #7f1d1d;\n}\n.chip.green {\n  background: var(--success-bg);\n  color: #166534;\n}\n.chip.blue {\n  background: var(--info-bg);\n  color: #075985;\n}\n.chip.red {\n  background: var(--error-bg);\n  color: #7f1d1d;\n}\n.mega {\n  position: fixed;\n  top: 64px;\n  left: 0;\n  height: calc(100dvh - 64px);\n  width: 340px;\n  background: rgba(11, 165, 255, 0.95);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-right: 0;\n  border-top-right-radius: 14px;\n  border-bottom-right-radius: 14px;\n  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.25);\n  transform: translateX(-100%);\n  transition: transform .25s ease;\n  z-index: 1050;\n  padding: 14px;\n  overflow-y: auto;\n}\n.mega-section {\n  margin-bottom: 8px;\n}\n.mega-title {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 12px 12px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, .08);\n  background: rgba(255, 255, 255, .05);\n  color: #fff;\n  cursor: pointer;\n  transition: background .15s ease, border-color .15s ease;\n}\n.mega-title:hover {\n  background: rgba(255, 255, 255, .1);\n  border-color: rgba(255, 255, 255, .16);\n}\n.mega-title .chev {\n  width: 24px;\n  height: 24px;\n  display: grid;\n  place-items: center;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, .12);\n}\n.mega-title span:first-child {\n  font-weight: 700;\n}\n.mega-section ul {\n  list-style: none;\n  padding-left: 0;\n  margin: 2px 0 0;\n}\n.mega-section ul.hide {\n  display: none;\n}\n.mega-section li a {\n  display: block;\n  margin: 8px 8px 8px 36px;\n  padding: 10px 12px;\n  border-radius: 10px;\n  color: #e6f1fb;\n  text-decoration: none;\n  border: 1px dashed transparent;\n}\n.mega-section li a::before {\n  content: "\\2022";\n  margin-right: 8px;\n  color: #cfe6fa;\n}\n.mega-section li a:hover {\n  background: rgba(255, 255, 255, .06);\n  border-color: rgba(255, 255, 255, .18);\n}\n.mega.open {\n  transform: translateX(0);\n}\n.section {\n  margin-bottom: 8px;\n}\n.section-btn {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 12px 12px;\n  border-radius: 12px;\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--text);\n  cursor: pointer;\n  transition: background .15s ease, border-color .15s ease;\n}\n.section-btn:hover {\n  background: var(--bg);\n  border-color: var(--ring);\n}\n.section .left {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.section .left .bullet {\n  width: 8px;\n  height: 8px;\n  border-radius: 999px;\n  background: var(--primary);\n  opacity: .4;\n}\n.chev {\n  transition: transform .2s ease;\n}\n.section.open .chev {\n  transform: rotate(90deg);\n}\n.sub {\n  display: grid;\n  grid-template-rows: 0fr;\n  transition: grid-template-rows .25s ease;\n}\n.section.open .sub {\n  grid-template-rows: 1fr;\n}\n.sub > div {\n  overflow: hidden;\n}\n.sub a {\n  display: block;\n  margin: 8px 8px 8px 36px;\n  padding: 10px 12px;\n  border-radius: 10px;\n  color: var(--text);\n  text-decoration: none;\n  border: 1px dashed transparent;\n}\n.sub a:hover {\n  background: var(--bg);\n  border-color: var(--ring);\n}\n.mega-backdrop,\n.backdrop {\n  position: fixed;\n  inset: 0;\n  background: transparent;\n  pointer-events: none;\n  z-index: 1040;\n}\n.mega-backdrop.show,\n.backdrop.open {\n  pointer-events: auto;\n  background: transparent;\n}\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 24px 20px;\n}\nh1 {\n  font-weight: 600;\n  margin: 12px 0 4px;\n  font-size: 2.2rem;\n  letter-spacing: -.2px;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  color: #1d1d1d;\n}\n.hint {\n  color: #4e4e4e;\n  margin-bottom: 8px;\n  font-size: 0.95rem;\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  font-weight: 400;\n}\n:focus-visible {\n  outline: 2px solid var(--primary);\n  outline-offset: 2px;\n  border-radius: 8px;\n}\n@media (max-width: 1024px) {\n  .cards {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .stats {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 640px) {\n  .topbar {\n    height: 56px;\n    padding: 0 14px;\n  }\n  .brand-btn {\n    width: 36px;\n    height: 36px;\n    border-radius: 8px;\n  }\n  .mega {\n    top: 56px;\n    height: calc(100dvh - 56px);\n    width: 88vw;\n  }\n  .cards {\n    grid-template-columns: 1fr;\n  }\n  .stats {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/dashboard/dashboard.component.ts", lineNumber: 14 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-UZ3SX262.js.map
