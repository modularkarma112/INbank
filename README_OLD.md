# INBANK

## Guía de diseño (UI Kit)

### Tipografía
- Primaria: Inter
- Fallback: system-ui, Segoe UI, Roboto, Helvetica, Arial, sans-serif
- Dónde se define: `src/styles.css` en la regla `body { font-family: ... }`
- Cómo cargar Inter:
	- En `src/index.html` dentro de `<head>`:
		`<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">`

### Paleta de color
- Azul marca panel: `#0B5EA8` (`--brand`)
- Azul primario (CTA): `#0EA5E9` (`--primary`)
- Azul UI (variación): `#0A66C2` (`--ui-blue`)
- Texto principal: `#111827` (`--text`)
- Texto secundario: `#6B7280` (`--muted`)
- Borde/separadores: `#E5E7EB` (`--border`)
- Fondo tarjetas: `#FFFFFF`
- Fondo general: `--bg` gradiente en `src/styles.css`
- Estados (chips/iconos):
	- Éxito: `#10B981` sobre `#ECFDF5`
	- Info: `#3B82F6` sobre `#EFF6FF`
	- Error: `#EF4444` sobre `#FEF2F2`

### Componentes
- Topbar
	- Fondo blanco, borde inferior `--border`
	- Logo/Marca a la izquierda; “Cerrar Sesión” a la derecha
	- El logo abre/cierra el menú
- Menú lateral
	- Panel de 320px con fondo `--brand`
	- Secciones con botón título y flecha rotatoria; subitems como enlaces
	- Overlay sin blur; ESC cierra; Enter/Espacio abren/cerran secciones
- Tarjeta de acción
	- Contenedor blanco, borde `--border`, radio `16px`
	- Icono con tonos (green/pink/blue)
	- CTA `.btn-outline` con borde `--primary`; CTA principal `.btn-primary` con fondo `--primary`
- Tarjeta de métrica
	- Etiqueta secundaria, valor fuerte
	- Chip `.green/.blue/.red` con fondos `--success-bg/--info-bg/--error-bg`

### Espaciado y radios
- Radios: 10–16px
- Gaps y paddings: 8–16px

### Utilidades Bootstrap
- Versión 5.3.3 (CDN) en `src/index.html`
- Utilidades: `d-flex`, `align-items-center`, `ms-auto`, `container`

### Accesibilidad
- `aria-expanded` en toggles
- Soporte teclado: Enter/Espacio para toggles, Escape para cerrar menú

---

## Desarrollo

### Configuración de Base de Datos

Variables en `.env` (ejemplo para local):

```
PORT=4000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=root
DB_NAME=INGBANK
JWT_SECRET=dev_secret
JWT_EXPIRES_IN=2h
```

Para usar un servidor remoto cambia `DB_HOST`, `DB_USER` y `DB_PASSWORD` y asegúrate que el usuario tenga los privilegios:

```sql
CREATE USER 'inbank'@'%' IDENTIFIED BY 'TuPasswordSeguro';
GRANT ALL PRIVILEGES ON INGBANK.* TO 'inbank'@'%';
FLUSH PRIVILEGES;
```

Luego ajusta en `.env`:

```
DB_USER=inbank
DB_PASSWORD=TuPasswordSeguro
```

### Usuario admin (semilla)

Ejecuta una sola vez para crear el usuario administrador (admin / admin123):

```powershell
npm run seed:api
```

### Ejecutar API en desarrollo

```powershell
npm run dev:api
```

Endpoint de salud: `GET http://localhost:4000/health`

### Endpoints principales

- Auth: `POST /api/auth/login` { usuario, contrasena }
- Clientes: GET/POST `/api/clientes`, validaciones `/api/clientes/existe`, búsqueda `/api/clientes/buscar`
- Tipos de cuenta: GET/POST/PUT/DELETE `/api/tipos-cuenta`
- Cuentas: creación `POST /api/cuentas`, depósitos, retiros, transferencias, cancelación, transacciones
- Préstamos: GET/POST `/api/prestamos`, actualizar estatus `/api/prestamos/:id/estatus`

Todas (excepto login y health) requieren header `Authorization: Bearer <token>`.

### Notas de integridad

Se añadieron índices y restricciones únicas:

- `cuentas.numero_cuenta` UNIQUE
- `usuarios.usuario` UNIQUE y `usuarios.correo` UNIQUE
- Índices sobre rfc/curp/email/telefono en clientes

La creación de cuenta reintenta hasta 5 veces si hay colisión de número.


Desarrollo:

```powershell
npx ng serve --port 4301
```

Build:

```powershell
npx ng build
```
# INbank
Banco de Ingebrios S.A. de C.V.
