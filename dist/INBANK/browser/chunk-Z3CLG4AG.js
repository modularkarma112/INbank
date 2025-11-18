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

// src/app/pages/comprobante-transferencia/comprobante-transferencia.component.ts
function ComprobanteTransferenciaComponent_div_0_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12);
    \u0275\u0275text(2, "Clave de rastreo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r1.transferencia().id, "-", ctx_r1.fechaActual.getTime());
  }
}
function ComprobanteTransferenciaComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6);
    \u0275\u0275text(5, "\u{1F3E6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 7);
    \u0275\u0275text(7, "INBank");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 8)(9, "h1");
    \u0275\u0275text(10, "COMPROBANTE DE TRANSFERENCIA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 9);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 10)(16, "div", 11)(17, "div", 12);
    \u0275\u0275text(18, "Monto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 13);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 11)(23, "div", 12);
    \u0275\u0275text(24, "Tipo de transferencia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 13);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 11)(28, "div", 12);
    \u0275\u0275text(29, "Concepto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 13);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 11)(33, "div", 12);
    \u0275\u0275text(34, "N\xFAmero de referencia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 13);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 14);
    \u0275\u0275text(38, "Cuenta destino");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 10)(40, "div", 11)(41, "div", 12);
    \u0275\u0275text(42, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 13);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 11)(46, "div", 12);
    \u0275\u0275text(47, "Entidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 13);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 11)(51, "div", 12);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 13);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 11)(56, "div", 12);
    \u0275\u0275text(57, "Estatus");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 15);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(60, ComprobanteTransferenciaComponent_div_0_div_60_Template, 5, 2, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 14);
    \u0275\u0275text(62, "Cuenta origen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 10)(64, "div", 11)(65, "div", 12);
    \u0275\u0275text(66, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "div", 13);
    \u0275\u0275text(68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 11)(70, "div", 12);
    \u0275\u0275text(71, "Entidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div", 13);
    \u0275\u0275text(73, "INBank");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 11)(75, "div", 12);
    \u0275\u0275text(76, "CLABE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "div", 13);
    \u0275\u0275text(78);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(79, "div", 17)(80, "button", 18);
    \u0275\u0275listener("click", function ComprobanteTransferenciaComponent_div_0_Template_button_click_80_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.volver());
    });
    \u0275\u0275text(81, "VOLVER");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "button", 19);
    \u0275\u0275listener("click", function ComprobanteTransferenciaComponent_div_0_Template_button_click_82_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.imprimir());
    });
    \u0275\u0275text(83, "IMPRIMIR");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "button", 19);
    \u0275\u0275listener("click", function ComprobanteTransferenciaComponent_div_0_Template_button_click_84_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.descargarPdf());
    });
    \u0275\u0275text(85, "DESCARGAR PDF");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate2("Autorizaci\xF3n: ", \u0275\u0275pipeBind2(13, 14, ctx_r1.fechaActual, "dd/MM/yyyy"), ", ", \u0275\u0275pipeBind2(14, 17, ctx_r1.fechaActual, "HH:mm"), " (hora de CDMX)");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(21, 20, ctx_r1.transferencia().monto, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.transferencia().destino_banco ? "Interbancaria" : "Mismo banco");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.transferencia().concepto || "Sin concepto");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("#", ctx_r1.transferencia().id);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.transferencia().destino_nombre);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.transferencia().destino_banco || "INBank");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.transferencia().destino_tipo === "CLABE" ? "CLABE" : "N\xFAmero de cuenta / N\xFAmero de tarjeta");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.transferencia().destino_identificador);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.transferencia().estado);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.transferencia().destino_tipo === "CLABE");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.transferencia().origen_nombre || "Tu cuenta");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.transferencia().origen_numero_cuenta);
  }
}
function ComprobanteTransferenciaComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "p");
    \u0275\u0275text(2, "Cargando comprobante...");
    \u0275\u0275elementEnd()();
  }
}
var _ComprobanteTransferenciaComponent = class _ComprobanteTransferenciaComponent {
  constructor(route, http, router) {
    this.route = route;
    this.http = http;
    this.router = router;
    this.api = window.API_BASE || "";
    this.transferencia = signal(null, ...ngDevMode ? [{ debugName: "transferencia" }] : []);
    this.cargando = signal(true, ...ngDevMode ? [{ debugName: "cargando" }] : []);
    this.fechaActual = /* @__PURE__ */ new Date();
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    console.log("ID de transferencia:", id);
    if (!id) {
      console.error("No se encontr\xF3 ID en la ruta");
      this.router.navigate(["/dashboard"]);
      return;
    }
    const url = `${this.api}/api/transferencias/${id}`;
    console.log("Cargando transferencia desde:", url);
    this.http.get(url).subscribe({
      next: (data) => {
        console.log("Transferencia recibida:", data);
        this.transferencia.set(data);
        this.cargando.set(false);
      },
      error: (err) => {
        console.error("Error cargando comprobante:", err);
        alert("No se pudo cargar el comprobante: " + (err?.error?.message || err?.message || "Error desconocido"));
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
      const url = `${this.api}/api/transferencias/${id}/pdf`;
      const blob = await this.http.get(url, { responseType: "blob" }).toPromise();
      const a = document.createElement("a");
      const b = window.URL.createObjectURL(blob);
      a.href = b;
      a.download = `comprobante-transferencia-${id}.pdf`;
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
_ComprobanteTransferenciaComponent.\u0275fac = function ComprobanteTransferenciaComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ComprobanteTransferenciaComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router));
};
_ComprobanteTransferenciaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComprobanteTransferenciaComponent, selectors: [["app-comprobante-transferencia"]], decls: 2, vars: 2, consts: [["class", "comprobante-container", 4, "ngIf"], ["class", "loading", 4, "ngIf"], [1, "comprobante-container"], [1, "comprobante"], [1, "header"], [1, "logo"], [1, "logo-icon"], [1, "logo-text"], [1, "titulo"], [1, "autorizacion"], [1, "seccion"], [1, "fila"], [1, "campo"], [1, "valor"], [1, "seccion-titulo"], [1, "valor", "estado-completada"], ["class", "fila", 4, "ngIf"], [1, "acciones"], [1, "btn-volver", 3, "click"], [1, "btn-imprimir", 3, "click"], [1, "loading"]], template: function ComprobanteTransferenciaComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ComprobanteTransferenciaComponent_div_0_Template, 86, 23, "div", 0)(1, ComprobanteTransferenciaComponent_div_1_Template, 3, 0, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", !ctx.cargando() && ctx.transferencia());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.cargando());
  }
}, dependencies: [CommonModule, NgIf, DecimalPipe, DatePipe], styles: ["\n\n.comprobante-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 40px 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.comprobante[_ngcontent-%COMP%] {\n  background: white;\n  max-width: 700px;\n  width: 100%;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  padding: 0;\n  overflow: hidden;\n}\n.header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0B5EA8 0%,\n      #0EA5E9 100%);\n  color: white;\n  padding: 30px;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.logo-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  line-height: 1;\n}\n.logo-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  letter-spacing: 1px;\n}\n.titulo[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.titulo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n}\n.autorizacion[_ngcontent-%COMP%] {\n  margin: 8px 0 0 0;\n  font-size: 13px;\n  opacity: 0.9;\n}\n.seccion-titulo[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 12px 30px;\n  font-weight: 600;\n  font-size: 14px;\n  color: #495057;\n  border-top: 1px solid #dee2e6;\n  border-bottom: 1px solid #dee2e6;\n}\n.seccion[_ngcontent-%COMP%] {\n  padding: 20px 30px;\n}\n.fila[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 0;\n  border-bottom: 1px solid #f1f3f5;\n}\n.fila[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.campo[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6c757d;\n  font-weight: 500;\n}\n.valor[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #212529;\n  font-weight: 600;\n  text-align: right;\n}\n.estado-completada[_ngcontent-%COMP%] {\n  color: #10B981;\n  background: #ECFDF5;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 13px;\n}\n.acciones[_ngcontent-%COMP%] {\n  padding: 30px;\n  display: flex;\n  gap: 15px;\n  justify-content: center;\n  border-top: 2px solid #f1f3f5;\n}\n.btn-volver[_ngcontent-%COMP%], \n.btn-imprimir[_ngcontent-%COMP%] {\n  padding: 14px 40px;\n  border: none;\n  border-radius: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  letter-spacing: 0.5px;\n}\n.btn-volver[_ngcontent-%COMP%] {\n  background: #6c757d;\n  color: white;\n}\n.btn-volver[_ngcontent-%COMP%]:hover {\n  background: #5a6268;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(108, 117, 125, 0.3);\n}\n.btn-imprimir[_ngcontent-%COMP%] {\n  background: #0EA5E9;\n  color: white;\n}\n.btn-imprimir[_ngcontent-%COMP%]:hover {\n  background: #0284c7;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3);\n}\n.loading[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n  color: white;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n}\n@media print {\n  .comprobante-container[_ngcontent-%COMP%] {\n    background: white;\n    padding: 0;\n  }\n  .acciones[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .comprobante[_ngcontent-%COMP%] {\n    box-shadow: none;\n    border: 1px solid #dee2e6;\n  }\n}\n@media (max-width: 768px) {\n  .comprobante-container[_ngcontent-%COMP%] {\n    padding: 20px 10px;\n  }\n  .header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    padding: 20px;\n  }\n  .titulo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .seccion[_ngcontent-%COMP%] {\n    padding: 15px 20px;\n  }\n  .fila[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n  .valor[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .acciones[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .btn-volver[_ngcontent-%COMP%], \n   .btn-imprimir[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=comprobante-transferencia.component.css.map */"] });
var ComprobanteTransferenciaComponent = _ComprobanteTransferenciaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComprobanteTransferenciaComponent, [{
    type: Component,
    args: [{ selector: "app-comprobante-transferencia", standalone: true, imports: [CommonModule], template: `<div class="comprobante-container" *ngIf="!cargando() && transferencia()">\r
  <div class="comprobante">\r
    <!-- Header -->\r
    <div class="header">\r
      <div class="logo">\r
        <div class="logo-icon">\u{1F3E6}</div>\r
        <div class="logo-text">INBank</div>\r
      </div>\r
      <div class="titulo">\r
        <h1>COMPROBANTE DE TRANSFERENCIA</h1>\r
        <p class="autorizacion">Autorizaci\xF3n: {{ fechaActual | date:'dd/MM/yyyy' }}, {{ fechaActual | date:'HH:mm' }} (hora de CDMX)</p>\r
      </div>\r
    </div>\r
\r
    <!-- Secci\xF3n Monto -->\r
    <div class="seccion">\r
      <div class="fila">\r
        <div class="campo">Monto</div>\r
        <div class="valor">\${{ transferencia().monto | number:'1.2-2' }}</div>\r
      </div>\r
      <div class="fila">\r
        <div class="campo">Tipo de transferencia</div>\r
        <div class="valor">{{ transferencia().destino_banco ? 'Interbancaria' : 'Mismo banco' }}</div>\r
      </div>\r
      <div class="fila">\r
        <div class="campo">Concepto</div>\r
        <div class="valor">{{ transferencia().concepto || 'Sin concepto' }}</div>\r
      </div>\r
      <div class="fila">\r
        <div class="campo">N\xFAmero de referencia</div>\r
        <div class="valor">#{{ transferencia().id }}</div>\r
      </div>\r
    </div>\r
\r
    <!-- Cuenta Destino -->\r
    <div class="seccion-titulo">Cuenta destino</div>\r
    <div class="seccion">\r
      <div class="fila">\r
        <div class="campo">Nombre</div>\r
        <div class="valor">{{ transferencia().destino_nombre }}</div>\r
      </div>\r
      <div class="fila">\r
        <div class="campo">Entidad</div>\r
        <div class="valor">{{ transferencia().destino_banco || 'INBank' }}</div>\r
      </div>\r
      <div class="fila">\r
        <div class="campo">{{ transferencia().destino_tipo === 'CLABE' ? 'CLABE' : 'N\xFAmero de cuenta / N\xFAmero de tarjeta' }}</div>\r
        <div class="valor">{{ transferencia().destino_identificador }}</div>\r
      </div>\r
      <div class="fila">\r
        <div class="campo">Estatus</div>\r
        <div class="valor estado-completada">{{ transferencia().estado }}</div>\r
      </div>\r
      <div class="fila" *ngIf="transferencia().destino_tipo === 'CLABE'">\r
        <div class="campo">Clave de rastreo</div>\r
        <div class="valor">{{ transferencia().id }}-{{ fechaActual.getTime() }}</div>\r
      </div>\r
    </div>\r
\r
    <!-- Cuenta Origen -->\r
    <div class="seccion-titulo">Cuenta origen</div>\r
    <div class="seccion">\r
      <div class="fila">\r
        <div class="campo">Nombre</div>\r
        <div class="valor">{{ transferencia().origen_nombre || 'Tu cuenta' }}</div>\r
      </div>\r
      <div class="fila">\r
        <div class="campo">Entidad</div>\r
        <div class="valor">INBank</div>\r
      </div>\r
      <div class="fila">\r
        <div class="campo">CLABE</div>\r
        <div class="valor">{{ transferencia().origen_numero_cuenta }}</div>\r
      </div>\r
    </div>\r
\r
    <!-- Bot\xF3n Volver -->\r
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
\r
`, styles: ["/* src/app/pages/comprobante-transferencia/comprobante-transferencia.component.css */\n.comprobante-container {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 40px 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.comprobante {\n  background: white;\n  max-width: 700px;\n  width: 100%;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  padding: 0;\n  overflow: hidden;\n}\n.header {\n  background:\n    linear-gradient(\n      135deg,\n      #0B5EA8 0%,\n      #0EA5E9 100%);\n  color: white;\n  padding: 30px;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.logo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.logo-icon {\n  font-size: 48px;\n  line-height: 1;\n}\n.logo-text {\n  font-size: 18px;\n  font-weight: 700;\n  letter-spacing: 1px;\n}\n.titulo {\n  flex: 1;\n}\n.titulo h1 {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n}\n.autorizacion {\n  margin: 8px 0 0 0;\n  font-size: 13px;\n  opacity: 0.9;\n}\n.seccion-titulo {\n  background: #f8f9fa;\n  padding: 12px 30px;\n  font-weight: 600;\n  font-size: 14px;\n  color: #495057;\n  border-top: 1px solid #dee2e6;\n  border-bottom: 1px solid #dee2e6;\n}\n.seccion {\n  padding: 20px 30px;\n}\n.fila {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 0;\n  border-bottom: 1px solid #f1f3f5;\n}\n.fila:last-child {\n  border-bottom: none;\n}\n.campo {\n  font-size: 14px;\n  color: #6c757d;\n  font-weight: 500;\n}\n.valor {\n  font-size: 15px;\n  color: #212529;\n  font-weight: 600;\n  text-align: right;\n}\n.estado-completada {\n  color: #10B981;\n  background: #ECFDF5;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 13px;\n}\n.acciones {\n  padding: 30px;\n  display: flex;\n  gap: 15px;\n  justify-content: center;\n  border-top: 2px solid #f1f3f5;\n}\n.btn-volver,\n.btn-imprimir {\n  padding: 14px 40px;\n  border: none;\n  border-radius: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  letter-spacing: 0.5px;\n}\n.btn-volver {\n  background: #6c757d;\n  color: white;\n}\n.btn-volver:hover {\n  background: #5a6268;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(108, 117, 125, 0.3);\n}\n.btn-imprimir {\n  background: #0EA5E9;\n  color: white;\n}\n.btn-imprimir:hover {\n  background: #0284c7;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3);\n}\n.loading {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n  color: white;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n}\n@media print {\n  .comprobante-container {\n    background: white;\n    padding: 0;\n  }\n  .acciones {\n    display: none;\n  }\n  .comprobante {\n    box-shadow: none;\n    border: 1px solid #dee2e6;\n  }\n}\n@media (max-width: 768px) {\n  .comprobante-container {\n    padding: 20px 10px;\n  }\n  .header {\n    flex-direction: column;\n    text-align: center;\n    padding: 20px;\n  }\n  .titulo h1 {\n    font-size: 20px;\n  }\n  .seccion {\n    padding: 15px 20px;\n  }\n  .fila {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n  .valor {\n    text-align: left;\n  }\n  .acciones {\n    flex-direction: column;\n  }\n  .btn-volver,\n  .btn-imprimir {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=comprobante-transferencia.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: HttpClient }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComprobanteTransferenciaComponent, { className: "ComprobanteTransferenciaComponent", filePath: "src/app/pages/comprobante-transferencia/comprobante-transferencia.component.ts", lineNumber: 13 });
})();
export {
  ComprobanteTransferenciaComponent
};
//# sourceMappingURL=chunk-Z3CLG4AG.js.map
