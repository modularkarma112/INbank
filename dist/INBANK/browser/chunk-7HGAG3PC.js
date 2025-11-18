import {
  ActivatedRoute,
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  HttpClient,
  NgIf,
  Router,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
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

// src/app/pages/comprobante-movimiento/comprobante-movimiento.component.ts
function ComprobanteMovimientoComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6);
    \u0275\u0275text(5, "\u{1F3E6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 7);
    \u0275\u0275text(7, "INBank");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 8)(9, "h1");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 9);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 10)(15, "div", 11)(16, "div", 12);
    \u0275\u0275text(17, "Monto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 13);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 11)(22, "div", 12);
    \u0275\u0275text(23, "Concepto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 13);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 11)(27, "div", 12);
    \u0275\u0275text(28, "Titular");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 13);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 11)(32, "div", 12);
    \u0275\u0275text(33, "N\xFAmero de cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 13);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 14)(37, "button", 15);
    \u0275\u0275listener("click", function ComprobanteMovimientoComponent_div_0_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.volver());
    });
    \u0275\u0275text(38, "VOLVER");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 16);
    \u0275\u0275listener("click", function ComprobanteMovimientoComponent_div_0_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.imprimir());
    });
    \u0275\u0275text(40, "IMPRIMIR");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 16);
    \u0275\u0275listener("click", function ComprobanteMovimientoComponent_div_0_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.descargarPdf());
    });
    \u0275\u0275text(42, "DESCARGAR PDF");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("COMPROBANTE DE ", ctx_r1.movimiento().tipo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Referencia: #", ctx_r1.movimiento().id, " \u2022 ", \u0275\u0275pipeBind2(13, 7, ctx_r1.movimiento().fecha, "dd/MM/yyyy, HH:mm"), " (hora de CDMX)");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(20, 10, ctx_r1.movimiento().monto, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.movimiento().concepto || "Sin concepto");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.movimiento().nombre_cliente);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.movimiento().numero_cuenta);
  }
}
function ComprobanteMovimientoComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "p");
    \u0275\u0275text(2, "Cargando comprobante...");
    \u0275\u0275elementEnd()();
  }
}
var _ComprobanteMovimientoComponent = class _ComprobanteMovimientoComponent {
  constructor(route, http, router) {
    this.route = route;
    this.http = http;
    this.router = router;
    this.api = window.API_BASE || "";
    this.movimiento = signal(null, ...ngDevMode ? [{ debugName: "movimiento" }] : []);
    this.cargando = signal(true, ...ngDevMode ? [{ debugName: "cargando" }] : []);
    this.fechaActual = /* @__PURE__ */ new Date();
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (!id) {
      this.router.navigate(["/dashboard"]);
      return;
    }
    const url = `${this.api}/api/cuentas/transacciones/${id}`;
    this.http.get(url).subscribe({
      next: (data) => {
        this.movimiento.set(data);
        this.cargando.set(false);
      },
      error: (err) => {
        alert("No se pudo cargar el comprobante");
        this.router.navigate(["/dashboard"]);
      }
    });
  }
  imprimir() {
    window.print();
  }
  async descargarPdf() {
    try {
      const id = this.route.snapshot.paramMap.get("id");
      const url = `${this.api}/api/cuentas/transacciones/${id}/pdf`;
      const blob = await this.http.get(url, { responseType: "blob" }).toPromise();
      const a = document.createElement("a");
      const b = window.URL.createObjectURL(blob);
      a.href = b;
      a.download = `comprobante-${id}.pdf`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(b), 1e3);
    } catch (e) {
      alert("No se pudo descargar el PDF");
    }
  }
  volver() {
    this.router.navigate(["/dashboard"]);
  }
};
_ComprobanteMovimientoComponent.\u0275fac = function ComprobanteMovimientoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ComprobanteMovimientoComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router));
};
_ComprobanteMovimientoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComprobanteMovimientoComponent, selectors: [["app-comprobante-movimiento"]], decls: 2, vars: 2, consts: [["class", "comprobante-container", 4, "ngIf"], ["class", "loading", 4, "ngIf"], [1, "comprobante-container"], [1, "comprobante"], [1, "header"], [1, "logo"], [1, "logo-icon"], [1, "logo-text"], [1, "titulo"], [1, "autorizacion"], [1, "seccion"], [1, "fila"], [1, "campo"], [1, "valor"], [1, "acciones"], [1, "btn-volver", 3, "click"], [1, "btn-imprimir", 3, "click"], [1, "loading"]], template: function ComprobanteMovimientoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ComprobanteMovimientoComponent_div_0_Template, 43, 13, "div", 0)(1, ComprobanteMovimientoComponent_div_1_Template, 3, 0, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", !ctx.cargando() && ctx.movimiento());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.cargando());
  }
}, dependencies: [CommonModule, NgIf, DecimalPipe, DatePipe], styles: ["\n\n.comprobante-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 40px 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.comprobante[_ngcontent-%COMP%] {\n  background: white;\n  max-width: 700px;\n  width: 100%;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  padding: 0;\n  overflow: hidden;\n}\n.header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0B5EA8 0%,\n      #0EA5E9 100%);\n  color: white;\n  padding: 30px;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.logo-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  line-height: 1;\n}\n.logo-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  letter-spacing: 1px;\n}\n.titulo[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.titulo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n}\n.autorizacion[_ngcontent-%COMP%] {\n  margin: 8px 0 0 0;\n  font-size: 13px;\n  opacity: 0.9;\n}\n.seccion[_ngcontent-%COMP%] {\n  padding: 20px 30px;\n}\n.fila[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 0;\n  border-bottom: 1px solid #f1f3f5;\n}\n.fila[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.campo[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6c757d;\n  font-weight: 500;\n}\n.valor[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #212529;\n  font-weight: 600;\n  text-align: right;\n}\n.acciones[_ngcontent-%COMP%] {\n  padding: 30px;\n  display: flex;\n  gap: 15px;\n  justify-content: center;\n  border-top: 2px solid #f1f3f5;\n}\n.btn-volver[_ngcontent-%COMP%], \n.btn-imprimir[_ngcontent-%COMP%] {\n  padding: 14px 40px;\n  border: none;\n  border-radius: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  letter-spacing: 0.5px;\n}\n.btn-volver[_ngcontent-%COMP%] {\n  background: #6c757d;\n  color: white;\n}\n.btn-volver[_ngcontent-%COMP%]:hover {\n  background: #5a6268;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(108, 117, 125, 0.3);\n}\n.btn-imprimir[_ngcontent-%COMP%] {\n  background: #0EA5E9;\n  color: white;\n}\n.btn-imprimir[_ngcontent-%COMP%]:hover {\n  background: #0284c7;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3);\n}\n.loading[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n  color: white;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n}\n@media print {\n  .comprobante-container[_ngcontent-%COMP%] {\n    background: white;\n    padding: 0;\n  }\n  .acciones[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .comprobante[_ngcontent-%COMP%] {\n    box-shadow: none;\n    border: 1px solid #dee2e6;\n  }\n}\n@media (max-width: 768px) {\n  .comprobante-container[_ngcontent-%COMP%] {\n    padding: 20px 10px;\n  }\n  .header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    padding: 20px;\n  }\n  .titulo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .seccion[_ngcontent-%COMP%] {\n    padding: 15px 20px;\n  }\n  .fila[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n  .valor[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .acciones[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .btn-volver[_ngcontent-%COMP%], \n   .btn-imprimir[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=comprobante-movimiento.component.css.map */"] });
var ComprobanteMovimientoComponent = _ComprobanteMovimientoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComprobanteMovimientoComponent, [{
    type: Component,
    args: [{ selector: "app-comprobante-movimiento", standalone: true, imports: [CommonModule], template: `<div class="comprobante-container" *ngIf="!cargando() && movimiento()">\r
  <div class="comprobante">\r
    <!-- Header -->\r
    <div class="header">\r
      <div class="logo">\r
        <div class="logo-icon">\u{1F3E6}</div>\r
        <div class="logo-text">INBank</div>\r
      </div>\r
      <div class="titulo">\r
        <h1>COMPROBANTE DE {{ movimiento().tipo }}</h1>\r
        <p class="autorizacion">Referencia: #{{ movimiento().id }} \u2022 {{ movimiento().fecha | date:'dd/MM/yyyy, HH:mm' }} (hora de CDMX)</p>\r
      </div>\r
    </div>\r
\r
    <!-- Monto / Concepto / Cuenta -->\r
    <div class="seccion">\r
      <div class="fila">\r
        <div class="campo">Monto</div>\r
        <div class="valor">\${{ movimiento().monto | number:'1.2-2' }}</div>\r
      </div>\r
      <div class="fila">\r
        <div class="campo">Concepto</div>\r
        <div class="valor">{{ movimiento().concepto || 'Sin concepto' }}</div>\r
      </div>\r
      <div class="fila">\r
        <div class="campo">Titular</div>\r
        <div class="valor">{{ movimiento().nombre_cliente }}</div>\r
      </div>\r
      <div class="fila">\r
        <div class="campo">N\xFAmero de cuenta</div>\r
        <div class="valor">{{ movimiento().numero_cuenta }}</div>\r
      </div>\r
    </div>\r
\r
    <div class="acciones">\r
      <button class="btn-volver" (click)="volver()">VOLVER</button>\r
      <button class="btn-imprimir" (click)="imprimir()">IMPRIMIR</button>\r
      <button class="btn-imprimir" (click)="descargarPdf()">DESCARGAR PDF</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<div class="loading" *ngIf="cargando()">\r
  <p>Cargando comprobante...</p>\r
</div>\r
`, styles: ["/* src/app/pages/comprobante-movimiento/comprobante-movimiento.component.css */\n.comprobante-container {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 40px 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.comprobante {\n  background: white;\n  max-width: 700px;\n  width: 100%;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  padding: 0;\n  overflow: hidden;\n}\n.header {\n  background:\n    linear-gradient(\n      135deg,\n      #0B5EA8 0%,\n      #0EA5E9 100%);\n  color: white;\n  padding: 30px;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.logo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.logo-icon {\n  font-size: 48px;\n  line-height: 1;\n}\n.logo-text {\n  font-size: 18px;\n  font-weight: 700;\n  letter-spacing: 1px;\n}\n.titulo {\n  flex: 1;\n}\n.titulo h1 {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n}\n.autorizacion {\n  margin: 8px 0 0 0;\n  font-size: 13px;\n  opacity: 0.9;\n}\n.seccion {\n  padding: 20px 30px;\n}\n.fila {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 0;\n  border-bottom: 1px solid #f1f3f5;\n}\n.fila:last-child {\n  border-bottom: none;\n}\n.campo {\n  font-size: 14px;\n  color: #6c757d;\n  font-weight: 500;\n}\n.valor {\n  font-size: 15px;\n  color: #212529;\n  font-weight: 600;\n  text-align: right;\n}\n.acciones {\n  padding: 30px;\n  display: flex;\n  gap: 15px;\n  justify-content: center;\n  border-top: 2px solid #f1f3f5;\n}\n.btn-volver,\n.btn-imprimir {\n  padding: 14px 40px;\n  border: none;\n  border-radius: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  letter-spacing: 0.5px;\n}\n.btn-volver {\n  background: #6c757d;\n  color: white;\n}\n.btn-volver:hover {\n  background: #5a6268;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(108, 117, 125, 0.3);\n}\n.btn-imprimir {\n  background: #0EA5E9;\n  color: white;\n}\n.btn-imprimir:hover {\n  background: #0284c7;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3);\n}\n.loading {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n  color: white;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n}\n@media print {\n  .comprobante-container {\n    background: white;\n    padding: 0;\n  }\n  .acciones {\n    display: none;\n  }\n  .comprobante {\n    box-shadow: none;\n    border: 1px solid #dee2e6;\n  }\n}\n@media (max-width: 768px) {\n  .comprobante-container {\n    padding: 20px 10px;\n  }\n  .header {\n    flex-direction: column;\n    text-align: center;\n    padding: 20px;\n  }\n  .titulo h1 {\n    font-size: 20px;\n  }\n  .seccion {\n    padding: 15px 20px;\n  }\n  .fila {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n  .valor {\n    text-align: left;\n  }\n  .acciones {\n    flex-direction: column;\n  }\n  .btn-volver,\n  .btn-imprimir {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=comprobante-movimiento.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: HttpClient }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComprobanteMovimientoComponent, { className: "ComprobanteMovimientoComponent", filePath: "src/app/pages/comprobante-movimiento/comprobante-movimiento.component.ts", lineNumber: 13 });
})();
export {
  ComprobanteMovimientoComponent
};
//# sourceMappingURL=chunk-7HGAG3PC.js.map
