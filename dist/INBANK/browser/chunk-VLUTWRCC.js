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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate3
} from "./chunk-LQXE4UJV.js";

// src/app/pages/usuarios-roles/usuarios-roles.component.ts
function UsuariosRolesComponent_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "button", 8);
    \u0275\u0275listener("click", function UsuariosRolesComponent_tr_28_Template_button_click_14_listener() {
      const u_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cambiarPassword(u_r2));
    });
    \u0275\u0275text(15, "Cambiar contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 9);
    \u0275\u0275listener("click", function UsuariosRolesComponent_tr_28_Template_button_click_16_listener() {
      const u_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.eliminar(u_r2));
    });
    \u0275\u0275text(17, "Eliminar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const u_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r2.usuario);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", u_r2.nombre, " ", u_r2.apellido_paterno || "", " ", u_r2.apellido_materno || "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r2.correo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r2.rol);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r2.telefono || "-");
  }
}
var _UsuariosRolesComponent = class _UsuariosRolesComponent {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.api = window.API_BASE || "";
    this.usuarios = signal([], ...ngDevMode ? [{ debugName: "usuarios" }] : []);
    this.cargar();
  }
  cargar() {
    this.http.get(`${this.api}/api/usuarios`).subscribe((r) => this.usuarios.set(r || []));
  }
  cambiarPassword(u) {
    const p1 = prompt(`Nueva contrase\xF1a para ${u.usuario} (m\xEDn. 6 caracteres):`);
    if (!p1)
      return;
    if (p1.length < 6) {
      alert("La contrase\xF1a debe tener al menos 6 caracteres");
      return;
    }
    const p2 = prompt("Confirma la contrase\xF1a:");
    if (p1 !== p2) {
      alert("Las contrase\xF1as no coinciden");
      return;
    }
    this.http.put(`${this.api}/api/usuarios/${u.id}/password`, { contrasena: p1 }).subscribe({
      next: () => {
        alert("Contrase\xF1a actualizada");
      },
      error: (e) => alert(e?.error?.message || "Error actualizando contrase\xF1a")
    });
  }
  eliminar(u) {
    if (!confirm(`\xBFEliminar al usuario ${u.usuario}?`))
      return;
    this.http.delete(`${this.api}/api/usuarios/${u.id}`).subscribe({
      next: () => {
        this.cargar();
      },
      error: (e) => alert(e?.error?.message || "Error eliminando usuario")
    });
  }
};
_UsuariosRolesComponent.\u0275fac = function UsuariosRolesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UsuariosRolesComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router));
};
_UsuariosRolesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsuariosRolesComponent, selectors: [["app-usuarios-roles"]], decls: 29, vars: 1, consts: [[1, "container", "mt-4"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "d-flex", "gap-2"], ["routerLink", "/dashboard", 1, "btn", "btn-secondary"], ["routerLink", "/usuarios/alta", 1, "btn", "btn-primary"], [1, "table-responsive"], [1, "table", "table-sm", "table-striped"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-sm", "btn-outline-primary", "me-2", 3, "click"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"]], template: function UsuariosRolesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
    \u0275\u0275text(3, "Usuarios & Roles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 2)(5, "a", 3);
    \u0275\u0275text(6, "Volver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 4);
    \u0275\u0275text(8, "Agregar Usuario");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 5)(10, "table", 6)(11, "thead")(12, "tr")(13, "th");
    \u0275\u0275text(14, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Usuario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Correo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Rol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "tbody");
    \u0275\u0275template(28, UsuariosRolesComponent_tr_28_Template, 18, 8, "tr", 7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(28);
    \u0275\u0275property("ngForOf", ctx.usuarios());
  }
}, dependencies: [CommonModule, NgForOf, RouterLink], encapsulation: 2 });
var UsuariosRolesComponent = _UsuariosRolesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsuariosRolesComponent, [{
    type: Component,
    args: [{
      selector: "app-usuarios-roles",
      standalone: true,
      imports: [CommonModule, RouterLink],
      template: `
	<div class="container mt-4">
			<div class="d-flex justify-content-between align-items-center mb-3">
			<h2>Usuarios & Roles</h2>
				<div class="d-flex gap-2">
					<a class="btn btn-secondary" routerLink="/dashboard">Volver</a>
					<a class="btn btn-primary" routerLink="/usuarios/alta">Agregar Usuario</a>
				</div>
		</div>
		<div class="table-responsive">
			<table class="table table-sm table-striped">
				<thead>
					<tr>
						<th>ID</th>
						<th>Usuario</th>
						<th>Nombre</th>
						<th>Correo</th>
						<th>Rol</th>
						<th>Tel\xE9fono</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
					<tr *ngFor="let u of usuarios()">
						<td>{{u.id}}</td>
						<td>{{u.usuario}}</td>
						<td>{{u.nombre}} {{u.apellido_paterno || ''}} {{u.apellido_materno || ''}}</td>
						<td>{{u.correo}}</td>
						<td>{{u.rol}}</td>
						<td>{{u.telefono || '-'}}</td>
						<td>
							<button class="btn btn-sm btn-outline-primary me-2" (click)="cambiarPassword(u)">Cambiar contrase\xF1a</button>
							<button class="btn btn-sm btn-outline-danger" (click)="eliminar(u)">Eliminar</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	`
    }]
  }], () => [{ type: HttpClient }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsuariosRolesComponent, { className: "UsuariosRolesComponent", filePath: "src/app/pages/usuarios-roles/usuarios-roles.component.ts", lineNumber: 51 });
})();
export {
  UsuariosRolesComponent
};
//# sourceMappingURL=chunk-VLUTWRCC.js.map
