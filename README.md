# 🏦 INBANK - Sistema Bancario

> Sistema de gestión bancaria completo desarrollado con Angular 18 y Node.js para México

---

## 📋 Tabla de Contenidos

- [Descripción General](#-descripción-general)
- [Tecnologías](#-tecnologías)
- [Arquitectura del Proyecto](#-arquitectura-del-proyecto)
- [Instalación](#-instalación)
- [Configuración](#-configuración)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Base de Datos](#-base-de-datos)
- [API Backend](#-api-backend)
- [Frontend](#-frontend)
- [Guía de Diseño](#-guía-de-diseño-ui-kit)
- [Scripts Disponibles](#-scripts-disponibles)
- [Seguridad](#-seguridad)

---

## 🎯 Descripción General

**INBANK** es un sistema bancario completo adaptado para México que permite:

- ✅ Gestión de clientes con RFC y CURP
- ✅ Apertura y cancelación de cuentas
- ✅ Depósitos, retiros y transferencias
- ✅ Solicitud y gestión de préstamos
- ✅ Sistema de autenticación con JWT
- ✅ Dashboard administrativo completo
- ✅ Reportes y transacciones

---

## 🛠 Tecnologías

### Frontend
- **Angular 18** - Elegido por su arquitectura robusta, sistema de signals para reactividad y excelente soporte para aplicaciones enterprise
- **TypeScript** - Usado para tener tipado fuerte, detectar errores en tiempo de desarrollo y mejorar el mantenimiento del código
- **Bootstrap 5.3.3** - Implementado para acelerar el desarrollo UI con componentes prediseñados y sistema de grillas responsivo
- **RxJS** - Necesario para manejar flujos de datos asíncronos como peticiones HTTP y eventos del usuario
- **Standalone Components** - Adoptado para simplificar la arquitectura eliminando módulos y hacer componentes más reutilizables

### Backend
- **Node.js** - Seleccionado por su alto rendimiento en I/O, ecosistema npm y compatibilidad con TypeScript
- **Express** - Usado por su simplicidad, flexibilidad y amplia comunidad para crear APIs REST rápidamente
- **TypeScript** - Implementado para compartir interfaces entre frontend y backend, reduciendo errores de tipado
- **MySQL** - Elegido por ser una base de datos relacional confiable, con soporte ACID y perfecta para datos estructurados bancarios
- **JWT** - Usado para autenticación stateless, permitiendo escalabilidad horizontal sin sesiones en servidor
- **bcryptjs** - Implementado para hashear contraseñas de forma segura con salt automático, protegiendo datos sensibles

### Herramientas
- **esbuild** - Seleccionado por su velocidad extrema en compilación de TypeScript comparado con tsc tradicional
- **dotenv** - Usado para separar configuración del código, facilitando despliegues en diferentes ambientes
- **morgan** - Implementado para logging de peticiones HTTP, útil para debugging y monitoreo
- **cors** - Necesario para permitir peticiones desde el frontend Angular al backend Express en desarrollo

---

## 🏗 Arquitectura del Proyecto

```
INBANK/
├── src/                      # Frontend Angular
│   ├── app/
│   │   ├── pages/           # Páginas de la aplicación
│   │   │   ├── login/       # Login
│   │   │   ├── abrir-cuenta/    # Apertura de cuentas
│   │   │   ├── cancelar-cuenta/ # Cancelación
│   │   │   └── prestamos-solicitud/ # Préstamos
│   │   ├── dashboard/       # Dashboard principal
│   │   ├── auth.service.ts  # Servicio de autenticación
│   │   ├── app.routes.ts    # Rutas de la app
│   │   └── app.config.ts    # Configuración global
│   ├── index.html           # HTML principal
│   └── styles.css           # Estilos globales
│
├── server/                   # Backend Node.js
│   ├── auth.ts              # Autenticación
│   ├── clientes.ts          # API de clientes
│   ├── cuentas.ts           # API de cuentas
│   ├── prestamos.ts         # API de préstamos
│   ├── tiposCuenta.ts       # API tipos de cuenta
│   ├── db.ts                # Conexión MySQL
│   ├── middleware.ts        # Middlewares
│   ├── index.ts             # Servidor principal
│   ├── initDb.ts            # Inicializar BD
│   └── seed.ts              # Datos de prueba
│
├── db/
│   └── schema.sql           # Esquema de base de datos
│
├── .env                     # Variables de entorno
├── package.json             # Dependencias
└── tsconfig.json            # Config TypeScript
```

---

## 📦 Instalación y Configuración

### Lo que necesitas tener instalado
- **Node.js 18+** - Runtime necesario para ejecutar tanto Angular como el servidor backend
- **MySQL 8.0+** - Base de datos para almacenar toda la información del banco
- **npm o pnpm** - Gestor de paquetes para instalar dependencias

### Proceso de instalación
El proyecto requiere clonar el repositorio, instalar todas las dependencias de Node.js, crear la base de datos MySQL, configurar las variables de entorno en un archivo `.env`, ejecutar el script de inicialización de tablas y finalmente crear el usuario administrador inicial.

---

## ⚙️ Configuración

### Variables de entorno (archivo `.env`)

El sistema usa un archivo `.env` para separar la configuración del código fuente, permitiendo diferentes configuraciones para desarrollo, pruebas y producción sin modificar el código.

**Variables necesarias:**
- `PORT` - Puerto donde correrá el servidor backend (por defecto 4000)
- `DB_HOST` - Dirección del servidor MySQL (localhost en desarrollo)
- `DB_PORT` - Puerto de MySQL (3306 por defecto)
- `DB_USER` - Usuario de base de datos con permisos completos
- `DB_PASSWORD` - Contraseña del usuario de BD
- `DB_NAME` - Nombre de la base de datos (INGBANK)
- `JWT_SECRET` - Clave secreta para firmar tokens JWT (debe ser única y segura)
- `JWT_EXPIRES_IN` - Tiempo de expiración de tokens (2h recomendado)

### Credenciales iniciales

El sistema incluye un script de semilla que crea un usuario administrador inicial:
- **Usuario**: admin
- **Contraseña**: admin123

Estas credenciales permiten el primer acceso al sistema para posteriormente crear usuarios reales. En producción deben cambiarse inmediatamente.

---

## 📂 Estructura del Proyecto

### Frontend (`src/app/`)

#### Páginas Principales

**Login** (`pages/login/`)
- Autenticación con usuario y contraseña
- Validación de formularios
- Redirección automática

**Dashboard** (`dashboard/`)
- Estadísticas principales
- Menú lateral desplegable
- Navegación a todas las secciones

**Abrir Cuenta** (`pages/abrir-cuenta/`)
- Formulario completo de apertura
- Validación de RFC y CURP
- Estados y ciudades de México
- Tipos de cuenta disponibles

**Cancelar Cuenta** (`pages/cancelar-cuenta/`)
- Proceso de cancelación
- Motivos de cierre
- Transferencia de saldo

**Préstamos** (`pages/prestamos-solicitud/`)
- Solicitud de préstamos
- Tipos: Personal, Hipotecario, Automotriz
- Información laboral y financiera

#### Servicios

**AuthService** (`auth.service.ts`)

Este servicio centraliza toda la lógica de autenticación del sistema, manteniendo el estado de sesión del usuario mediante signals de Angular. Usa localStorage para persistir el token JWT entre recargas de página y proporciona métodos para login, logout y verificación de autenticación.

**Funcionalidades principales:**
- Manejo de login con validación de credenciales contra el backend
- Almacenamiento seguro de tokens JWT en navegador
- Verificación de estado de autenticación para proteger rutas
- Cierre de sesión con limpieza de datos locales
- Redirección automática según estado de autenticación

#### Rutas del sistema

El sistema usa un guard de autenticación (`canActivateAuth`) que verifica si el usuario tiene un token JWT válido antes de permitir acceso a rutas protegidas. Si no está autenticado, redirige automáticamente al login.

**Rutas públicas:**
- `/login` - Accesible sin autenticación, punto de entrada al sistema

**Rutas protegidas:**
- `/dashboard` - Panel principal con estadísticas y navegación
- `/abrir-cuenta` - Formulario de apertura de cuentas nuevas
- `/cancelar-cuenta` - Proceso de cancelación de cuentas existentes
- `/prestamos-solicitud` - Solicitud de préstamos bancarios

Todas las rutas protegidas verifican autenticación antes de cargar el componente.

---

## 🗄 Base de Datos

### Modelo de Datos

#### Tabla: `usuarios`
```sql
- id (PK)
- usuario (UNIQUE)
- nombre
- apellido_paterno
- apellido_materno
- correo (UNIQUE)
- contrasena (hash bcrypt)
- curp
- direccion
- telefono
- rol (GERENTE, EJECUTIVO, etc.)
```

#### Tabla: `clientes`
```sql
- id (PK)
- nombres
- apellido_paterno
- apellido_materno
- rfc (UNIQUE, índice)
- curp (UNIQUE, índice)
- email (índice)
- telefono (índice)
- estado
- ciudad
- direccion
- ingresos_mensuales
```

#### Tabla: `tipos_cuenta`
```sql
- id (PK)
- nombre_tipo (Ahorro, Cheques, Nómina, etc.)
- deposito_minimo
- comision_mensual
```

#### Tabla: `cuentas`
```sql
- id (PK)
- numero_cuenta (UNIQUE, 16 dígitos)
- cliente_id (FK → clientes)
- tipo_cuenta_id (FK → tipos_cuenta)
- saldo
- estatus (ACTIVA, CANCELADA)
- fecha_apertura
```

#### Tabla: `transacciones`
```sql
- id (PK)
- cuenta_id (FK → cuentas)
- tipo (DEPOSITO, RETIRO, TRANSFERENCIA)
- monto
- concepto
- fecha (TIMESTAMP)
```

#### Tabla: `prestamos`
```sql
- id (PK)
- cliente_id (FK → clientes)
- tipo_prestamo
- monto
- plazo_meses
- interes
- interes_penalizacion
- estatus (PENDIENTE, APROBADO, RECHAZADO)
- fecha_solicitud
```

#### Tabla: `cancelaciones_cuentas`
```sql
- id (PK)
- cuenta_id (FK → cuentas)
- fecha_cancelacion
- motivo_cancelacion
- saldo_final
- usuario_cancelacion
```

### Relaciones entre tablas

El diseño relacional garantiza integridad referencial y evita duplicados:

- **clientes → cuentas** (1:N) - Un cliente puede tener múltiples cuentas bancarias
- **clientes → prestamos** (1:N) - Un cliente puede solicitar varios préstamos
- **tipos_cuenta → cuentas** (1:N) - Un tipo de cuenta define múltiples cuentas individuales
- **cuentas → transacciones** (1:N) - Cada cuenta registra todas sus transacciones
- **cuentas → cancelaciones_cuentas** (1:0..1) - Una cuenta puede tener máximo una cancelación

**Por qué este diseño:**
- Normalización evita redundancia de datos
- Foreign keys mantienen consistencia entre tablas
- Índices en RFC, CURP, email y teléfono aceleran búsquedas
- Campos UNIQUE previenen duplicados de cuentas y usuarios

---

## 🔌 API Backend

### Arquitectura de la API

El backend implementa una arquitectura REST con autenticación basada en tokens JWT. Cada endpoint requiere un token válido (excepto login y health check) que se envía en el header Authorization. Esto permite que el frontend y backend estén completamente desacoplados.

**Base URL del servidor:** `http://localhost:4000/api`

### Endpoints principales

#### Autenticación

**Login de usuarios** - `POST /auth/login`

Valida credenciales contra la base de datos usando bcrypt para comparar contraseñas hasheadas. Si son correctas, genera un token JWT que incluye el ID del usuario, rol y nombre de usuario. Este token tiene expiración configurable (2 horas por defecto).

**Datos que recibe:** usuario y contraseña en texto plano
**Datos que devuelve:** Token JWT y datos básicos del usuario (id, nombre, rol)

#### Clientes

**Listar clientes** - `GET /clientes`
Devuelve todos los clientes registrados (máximo 100) para mostrar en tablas administrativas.

**Crear cliente** - `POST /clientes`
Registra un nuevo cliente validando que RFC, CURP, email y teléfono no existan previamente. Esto evita duplicados en el sistema.

**Verificar duplicados** - `GET /clientes/existe`
Verifica si ya existe un cliente con los mismos datos únicos antes de permitir el registro. Devuelve qué campos específicos están duplicados.

**Buscar cliente** - `GET /clientes/buscar`
Permite buscar clientes por RFC, CURP, email, teléfono o ID para operaciones específicas.

#### Cuentas

**Crear cuenta** - `POST /cuentas`
Genera un número de cuenta único de 16 dígitos, crea la cuenta y si hay depósito inicial, registra la primera transacción. Todo esto en una transacción de BD para garantizar consistencia.

**Consultar cuentas de un cliente** - `GET /cuentas/cliente/:clienteId`
Lista todas las cuentas asociadas a un cliente específico.

**Depositar** - `POST /cuentas/:id/deposito`
Incrementa el saldo y registra la transacción. Usa transacciones de BD para que ambas operaciones sean atómicas.

**Retirar** - `POST /cuentas/:id/retiro`
Similar al depósito pero verificando que haya saldo suficiente antes de realizar la operación.

**Transferir** - `POST /cuentas/transferencia`
Realiza retiro de una cuenta y depósito en otra de forma atómica. Si algo falla, ninguna operación se ejecuta (rollback).

**Cancelar cuenta** - `POST /cuentas/:id/cancelar`
Cambia el estatus de la cuenta a CANCELADA y registra en la tabla de cancelaciones con motivo y saldo final.

#### Préstamos

**Listar préstamos** - `GET /prestamos`
Muestra todos los préstamos registrados con su estado actual.

**Crear solicitud** - `POST /prestamos`
Registra una nueva solicitud de préstamo con todos los datos financieros necesarios. El estatus inicial es PENDIENTE.

**Actualizar estatus** - `PUT /prestamos/:id/estatus`
Permite cambiar el estado de un préstamo (APROBADO, RECHAZADO). Solo usuarios con permisos pueden hacer esto.

### Seguridad de la API

Todas las peticiones (excepto login) requieren enviar el token JWT en el header:
`Authorization: Bearer <tu_token_aqui>`

Si el token es inválido, expiró o no se envía, la API responde con error 401 y el frontend redirige automáticamente al login.

---

## 🎨 Frontend

### Arquitectura del Frontend

La aplicación usa **Standalone Components** en lugar de NgModules porque Angular 18 promueve esta arquitectura más simple y moderna. Los componentes standalone son autocontenidos, declaran sus propias dependencias y se cargan más rápido.

### Sistema de Navegación

La aplicación tiene dos layouts principales:

1. **Layout Público** - Contiene solo la página de login. No requiere autenticación.
2. **Layout Protegido (Dashboard)** - Contiene todas las páginas funcionales y el menú de navegación. Requiere estar autenticado.

El sistema de rutas usa un **Guard de autenticación** que verifica el token JWT antes de permitir acceso a las rutas protegidas. Si no hay token válido, redirige automáticamente al login.

### Componentes principales

#### Dashboard (Layout principal)

Es el contenedor de todas las funcionalidades del sistema. Incluye:
- **Barra superior** con logo, nombre del banco y botón de logout
- **Menú lateral** con enlaces a todas las funcionalidades (desplegable con soporte para teclado: ESC, Enter, Espacio)
- **Área de contenido** donde se cargan los diferentes componentes

El menú lateral se adapta según el rol del usuario y muestra estadísticas en tiempo real.

#### Login

Página de autenticación con validación de formulario. Envía credenciales al backend y si son correctas:
1. Guarda el token JWT en localStorage
2. Guarda datos del usuario (nombre, rol) en localStorage
3. Redirige al dashboard

Si las credenciales son incorrectas, muestra un mensaje de error.

#### Abrir Cuenta

Formulario completo para dar de alta nuevos clientes y sus cuentas bancarias. Tiene tres secciones:

1. **Datos personales** - Nombre completo, RFC (13 caracteres), CURP (18 caracteres) con validaciones específicas para formato mexicano
2. **Datos de contacto** - Email, teléfono (10 dígitos), dirección usando un catálogo de estados de México, código postal (5 dígitos)
3. **Datos de la cuenta** - Tipo de cuenta (Ahorro, Cheques, etc.) y depósito inicial opcional

Antes de crear el cliente, verifica que RFC, CURP, email y teléfono no estén duplicados en el sistema.

#### Cancelar Cuenta

Permite buscar cuentas activas y cancelarlas. Flujo:

1. **Búsqueda de cuenta** - Por número de cuenta de 16 dígitos
2. **Confirmación de cancelación** - Muestra datos del cliente y cuenta
3. **Motivo de cancelación** - Textarea obligatorio para documentar la razón
4. **Ejecución** - Cancela la cuenta y registra el motivo en BD

Solo se pueden cancelar cuentas con estatus ACTIVA.

#### Solicitud de Préstamos

Formulario para crear solicitudes de préstamo. Incluye:

**Búsqueda de cliente** - Por RFC para vincular el préstamo a un cliente existente

**Datos del préstamo:**
- Tipo (PERSONAL, HIPOTECARIO, AUTOMOTRIZ)
- Monto solicitado
- Plazo en meses
- Tasa de interés anual
- Penalización por mora

**Cálculo automático** - Muestra el pago mensual estimado usando la fórmula de amortización francesa. Esto ayuda al cliente a ver cuánto pagará antes de aceptar.

La solicitud se guarda con estatus PENDIENTE. Un gerente debe aprobarla o rechazarla posteriormente.

### Gestión de Estado

El AuthService mantiene el estado de autenticación usando:
- **isLoggedIn**: Signal booleano que indica si hay sesión activa
- **currentUser**: Signal con el nombre del usuario actual
- **Token**: Guardado en localStorage para persistencia entre recargas

Los componentes usan **Signals de Angular 18** para manejar el estado reactivo. Los signals son más eficientes que los Observables para datos simples porque detectan cambios automáticamente y solo re-renderizan lo necesario.

### Comunicación con Backend

El sistema incluye un interceptor HTTP que:
- **Agrega automáticamente** el token JWT en todos los headers de peticiones salientes
- **Redirige a /login** si recibe error 401 (no autorizado)
- **Maneja errores** de forma centralizada mostrando mensajes al usuario

Esto permite que los componentes hagan peticiones sin preocuparse por la autenticación.

---

## 🎨 Guía de Diseño (UI Kit)

### Tipografía

**Fuente principal:** Inter (desde Google Fonts)

Se eligió Inter porque es una fuente moderna, altamente legible en pantallas y diseñada específicamente para interfaces de usuario. Tiene excelente legibilidad en tamaños pequeños.

**Pesos disponibles:** 300, 400, 500, 600, 700, 800 - Permiten crear jerarquías visuales claras (títulos en 700-800, texto en 400-500, elementos secundarios en 300).

**Fallback:** system-ui, Segoe UI, Roboto, sans-serif - Si Inter no carga, el sistema usa la fuente nativa del dispositivo para mejor rendimiento.

### Paleta de Colores

#### Color de Marca
- **Brand (#0B5EA8)** - Azul corporativo del banco, usado en logo y elementos de identidad

#### Colores Primarios
- **Primary (#0EA5E9)** - Azul brillante para botones principales y acciones importantes
- **UI Blue (#0A66C2)** - Azul institucional para enlaces y elementos interactivos

#### Colores de Texto
- **Text (#111827)** - Gris oscuro casi negro para máxima legibilidad en textos largos
- **Muted (#6B7280)** - Gris medio para textos secundarios, labels y placeholders

#### Bordes y Separadores
- **Border (#E5E7EB)** - Gris claro para líneas divisorias y bordes sutiles

#### Estados y Feedback
- **Success (#10B981)** con fondo **#ECFDF5** - Verde para operaciones exitosas (depósitos, aprobaciones)
- **Info (#3B82F6)** con fondo **#EFF6FF** - Azul para mensajes informativos
- **Error (#EF4444)** con fondo **#FEF2F2** - Rojo para errores y validaciones fallidas

### Componentes UI

#### Botones

**Botón Primario** - Azul (#0EA5E9) con texto blanco, padding de 16px vertical y 30px horizontal, border-radius de 4px. Se usa para acciones principales como "Guardar", "Crear cuenta", "Confirmar".

**Botón Secundario** - Fondo blanco con borde gris (#E5E7EB) y texto oscuro (#4e4e4e). Se usa para acciones secundarias como "Cancelar", "Volver", "Limpiar".

#### Tarjetas (Cards)

Las tarjetas usan un efecto glassmorphism (vidrio esmerilado):
- Fondo semitransparente (rgba(240, 242, 247, 0.75))
- Efecto blur de 20px para ver ligeramente el fondo
- Border-radius de 16px para esquinas suaves
- Padding de 40px para contenido espacioso
- Sombra profunda (0 30px 60px rgba(0, 0, 0, 0.12)) para sensación de elevación

Este diseño crea profundidad visual y modernidad manteniendo la legibilidad.

### Sistema de Espaciado

**Gap entre elementos:** 8-16px - Espacios pequeños para elementos relacionados
**Padding interno:** 16-40px - Espacios grandes para contenedores y secciones
**Border radius:** 10-16px - Esquinas redondeadas para suavidad visual

### Breakpoints Responsivos

**Mobile:** Menos de 768px - Layout de una columna, menú colapsable
**Desktop:** 768px o más - Layout de dos columnas, menú visible permanentemente

El diseño se adapta automáticamente usando CSS Grid y Flexbox.

---

## 📜 Scripts del Proyecto

### Scripts de Desarrollo

**Frontend Angular** - `npm start` (puerto 4200) o `npm run dev` (puerto 4301)
Inicia el servidor de desarrollo con recarga automática. Cada vez que guardas un archivo, la app se reconstruye y actualiza en el navegador.

**Backend Node.js** - `npm run dev:api` (puerto 4000)
Inicia el servidor API en modo desarrollo con nodemon. El servidor se reinicia automáticamente cuando detecta cambios en los archivos TypeScript.

### Scripts de Build

**Build Frontend** - `npm run build`
Compila la aplicación Angular para producción. Genera archivos optimizados, minificados y listos para desplegar en un servidor web. El output está en la carpeta `dist/`.

**Build Backend** - `npm run build:api`
Compila el código TypeScript del servidor a JavaScript usando `tsc`. Los archivos compilados van a `dist-server/` y son los que se ejecutan en producción.

### Scripts de Base de Datos

**Inicializar esquema** - `npm run init:db`
Ejecuta el archivo `schema.sql` para crear todas las tablas, relaciones, índices y constraints en MySQL. Esto debe ejecutarse la primera vez que configuras el proyecto.

**Crear usuario admin** - `npm run seed:api`
Inserta datos de prueba en la base de datos: un usuario administrador (admin/admin123), tipos de cuenta predefinidos y opcionalmente clientes de ejemplo. Útil para comenzar a probar el sistema.

### Scripts de Testing

**Tests unitarios** - `npm test`
Ejecuta las pruebas unitarias de componentes y servicios Angular usando Karma y Jasmine.

**Tests e2e** - `npm run e2e`
Ejecuta pruebas de extremo a extremo que simulan interacciones reales de usuario en la aplicación completa.

---

## 🔐 Seguridad

### Medidas de Seguridad Implementadas

**Autenticación con JWT (JSON Web Tokens)**
Los tokens incluyen información cifrada del usuario (id, nombre, rol) y tienen fecha de expiración (2 horas). Esto permite autenticación sin estado (stateless), es decir, el servidor no necesita guardar sesiones en memoria. Si alguien roba el token, expira automáticamente.

**Contraseñas hasheadas con bcrypt**
Las contraseñas nunca se guardan en texto plano. bcrypt genera un hash único usando un "salt" (valor aleatorio) y múltiples rondas de encriptación (10 rounds). Esto hace prácticamente imposible revertir el hash a la contraseña original, incluso si alguien accede a la base de datos.

**Validación de inputs en Frontend y Backend**
El frontend valida formatos (RFC, CURP, email, teléfono) para mejorar la experiencia del usuario. Pero el backend también valida porque un atacante podría saltarse el frontend y enviar datos maliciosos directamente a la API.

**CORS (Cross-Origin Resource Sharing) configurado**
El servidor solo acepta peticiones desde el dominio del frontend (`http://localhost:4200`). Esto previene que sitios web maliciosos hagan peticiones a tu API desde el navegador del usuario.

**Protección contra SQL Injection**
Todas las consultas usan **prepared statements** (consultas parametrizadas). Esto separa el código SQL de los datos del usuario, haciendo imposible que un atacante inyecte código SQL malicioso.

**Middleware de autenticación**
Todas las rutas protegidas verifican el token JWT antes de procesar la petición. Si el token es inválido, expiró o no existe, el servidor responde con error 401 (No Autorizado) y no ejecuta la operación.

### Recomendaciones para Producción

Estas medidas NO están implementadas actualmente pero son necesarias para un entorno real:

- **Cambiar JWT_SECRET** - Usa un valor largo, aleatorio y secreto (mínimo 256 bits). Nunca lo subas a Git.
- **Habilitar HTTPS** - Encripta toda la comunicación entre navegador y servidor. Sin HTTPS, los tokens JWT pueden ser interceptados.
- **Configurar rate limiting** - Limita el número de peticiones por IP para prevenir ataques de fuerza bruta y DDoS.
- **Implementar 2FA (Two-Factor Authentication)** - Requiere un segundo factor (SMS, app autenticadora) además de la contraseña.
- **Logs de auditoría** - Registra todas las operaciones importantes (login, transferencias, cambios de permisos) con timestamp y usuario responsable.
- **Backup automático de base de datos** - Programa backups diarios automáticos y guárdalos en un servidor separado para recuperación en caso de fallo.
- [ ] Monitoreo de errores

---

## 👥 Equipo

- **modularkarma112** - Desarrollo principal
- **Colaboradores**: Juandi, Tokek-s, Fatima, Balma

---

## 📄 Licencia

Este proyecto es privado y confidencial.

---

## 🆘 Soporte

Para problemas o dudas:
1. Revisar esta documentación
2. Verificar logs del servidor
3. Revisar consola del navegador
4. Contactar al equipo de desarrollo

---

**INBANK** - Sistema Bancario Mexicano © 2025
