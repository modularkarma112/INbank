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
