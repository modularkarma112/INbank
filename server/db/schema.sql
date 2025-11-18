-- =====================================================
-- INBANK - Sistema Bancario
-- Schema de Base de Datos
-- =====================================================

CREATE DATABASE IF NOT EXISTS INGBANK;
USE INGBANK;

-- =====================================================
-- Tabla: clientes
-- Descripción: Almacena información de clientes del banco
-- =====================================================
CREATE TABLE IF NOT EXISTS clientes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombres VARCHAR(100),
  apellido_paterno VARCHAR(50),
  apellido_materno VARCHAR(50),
  rfc VARCHAR(13),
  curp VARCHAR(18),
  email VARCHAR(100),
  telefono VARCHAR(10),
  estado VARCHAR(50),
  ciudad VARCHAR(100),
  direccion TEXT,
  ingresos_mensuales DECIMAL(10,2),
  INDEX idx_clientes_email (email),
  INDEX idx_clientes_rfc (rfc),
  INDEX idx_clientes_curp (curp)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- =====================================================
-- Tabla: tipos_cuenta
-- Descripción: Catálogo de tipos de cuenta bancaria
-- =====================================================
CREATE TABLE IF NOT EXISTS tipos_cuenta (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre_tipo VARCHAR(50),
  deposito_minimo DECIMAL(8,2),
  comision_mensual DECIMAL(6,2),
  UNIQUE KEY uq_tipos_cuenta_nombre (nombre_tipo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- =====================================================
-- Tabla: cuentas
-- Descripción: Cuentas bancarias de los clientes
-- =====================================================
CREATE TABLE IF NOT EXISTS cuentas (
  id INT PRIMARY KEY AUTO_INCREMENT,
  numero_cuenta VARCHAR(16),
  cliente_id INT,
  tipo_cuenta_id INT,
  saldo DECIMAL(12,2) DEFAULT 0,
  estatus VARCHAR(20) DEFAULT 'ACTIVA',
  creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uq_numero_cuenta (numero_cuenta),
  KEY idx_cuentas_cliente_id (cliente_id),
  KEY idx_cuentas_tipo_cuenta_id (tipo_cuenta_id),
  KEY idx_cuentas_estatus (estatus),
  CONSTRAINT fk_cuentas_clientes
    FOREIGN KEY (cliente_id) REFERENCES clientes(id),
  CONSTRAINT fk_cuentas_tipos_cuenta
    FOREIGN KEY (tipo_cuenta_id) REFERENCES tipos_cuenta(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- =====================================================
-- Tabla: prestamos
-- Descripción: Préstamos otorgados a clientes
-- =====================================================
CREATE TABLE IF NOT EXISTS prestamos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cliente_id INT NOT NULL,
  tipo_prestamo VARCHAR(50) NOT NULL,
  monto DECIMAL(18,2) NOT NULL,
  plazo_meses INT NOT NULL,
  estatus VARCHAR(30) DEFAULT 'SOLICITADO',
  interes DECIMAL(6,4) DEFAULT 0,
  interes_penalizacion DECIMAL(6,4) DEFAULT 0,
  creado_en DATETIME DEFAULT CURRENT_TIMESTAMP,
  KEY idx_prestamos_cliente_id (cliente_id),
  KEY idx_prestamos_estatus (estatus),
  CONSTRAINT fk_prestamos_clientes
    FOREIGN KEY (cliente_id) REFERENCES clientes(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- =====================================================
-- Tabla: transacciones
-- Descripción: Movimientos de depósitos y retiros
-- =====================================================
CREATE TABLE IF NOT EXISTS transacciones (
  id INT PRIMARY KEY AUTO_INCREMENT,
  cuenta_id INT,
  tipo VARCHAR(50),
  monto DECIMAL(12,2),
  concepto VARCHAR(200),
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  KEY idx_transacciones_cuenta_id (cuenta_id),
  KEY idx_transacciones_fecha (fecha),
  KEY idx_transacciones_tipo (tipo),
  CONSTRAINT fk_transacciones_cuentas
    FOREIGN KEY (cuenta_id) REFERENCES cuentas(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- =====================================================
-- Tabla: cancelaciones_cuentas
-- Descripción: Registro de cuentas canceladas
-- =====================================================
CREATE TABLE IF NOT EXISTS cancelaciones_cuentas (
  id INT PRIMARY KEY AUTO_INCREMENT,
  cuenta_id INT,
  fecha_cancelacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  motivo_cancelacion VARCHAR(100),
  saldo_final DECIMAL(12,2),
  usuario_cancelacion VARCHAR(50),
  UNIQUE KEY uq_cancelaciones_cuenta (cuenta_id),
  KEY idx_cancelaciones_cuenta_id (cuenta_id),
  CONSTRAINT fk_cancelaciones_cuentas
    FOREIGN KEY (cuenta_id) REFERENCES cuentas(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- =====================================================
-- Tabla: usuarios
-- Descripción: Usuarios del sistema (empleados)
-- =====================================================
CREATE TABLE IF NOT EXISTS usuarios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  usuario VARCHAR(50) NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  apellido_paterno VARCHAR(50),
  apellido_materno VARCHAR(50),
  correo VARCHAR(100) NOT NULL,
  contrasena VARCHAR(255) NOT NULL,
  curp VARCHAR(18),
  direccion TEXT,
  telefono VARCHAR(10),
  rol ENUM('GERENTE', 'ADMIN') NOT NULL DEFAULT 'GERENTE',
  UNIQUE KEY uq_usuarios_usuario (usuario),
  UNIQUE KEY uq_usuarios_correo (correo),
  INDEX idx_usuarios_rol (rol)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- =====================================================
-- Tabla: contactos_transferencia
-- Descripción: Contactos guardados para transferencias
-- =====================================================
CREATE TABLE IF NOT EXISTS contactos_transferencia (
  id INT PRIMARY KEY AUTO_INCREMENT,
  cliente_id INT NOT NULL,
  alias VARCHAR(100),
  banco VARCHAR(100),
  identificador_tipo ENUM('NUMERO_CUENTA','CLABE','TELEFONO') NOT NULL,
  identificador VARCHAR(30) NOT NULL,
  nombre_propietario VARCHAR(150) NOT NULL,
  creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uq_contacto_cliente_identificador (cliente_id, identificador),
  KEY idx_contactos_cliente_id (cliente_id),
  CONSTRAINT fk_contactos_clientes
    FOREIGN KEY (cliente_id) REFERENCES clientes(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- =====================================================
-- Tabla: transferencias
-- Descripción: Transferencias entre cuentas
-- =====================================================
CREATE TABLE IF NOT EXISTS transferencias (
  id INT PRIMARY KEY AUTO_INCREMENT,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  cliente_id INT,
  origen_cuenta_id INT NOT NULL,
  destino_cuenta_id INT NULL,
  destino_banco VARCHAR(100),
  destino_identificador_tipo ENUM('NUMERO_CUENTA','CLABE','TELEFONO') NOT NULL,
  destino_identificador VARCHAR(30) NOT NULL,
  nombre_destinatario VARCHAR(150) NOT NULL,
  monto DECIMAL(12,2) NOT NULL,
  comision DECIMAL(12,2) NOT NULL DEFAULT 0,
  concepto VARCHAR(255),
  estado VARCHAR(20) NOT NULL DEFAULT 'COMPLETADA',
  contacto_id INT NULL,
  creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  KEY idx_transferencias_cliente_id (cliente_id),
  KEY idx_transferencias_origen_cuenta (origen_cuenta_id),
  KEY idx_transferencias_destino_cuenta (destino_cuenta_id),
  KEY idx_transferencias_fecha (fecha),
  CONSTRAINT fk_transferencias_clientes
    FOREIGN KEY (cliente_id) REFERENCES clientes(id) ON DELETE SET NULL,
  CONSTRAINT fk_transferencias_origen
    FOREIGN KEY (origen_cuenta_id) REFERENCES cuentas(id),
  CONSTRAINT fk_transferencias_destino
    FOREIGN KEY (destino_cuenta_id) REFERENCES cuentas(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- =====================================================
-- Tabla: solicitudes_prestamo
-- Descripción: Solicitudes de préstamo de clientes
-- =====================================================
CREATE TABLE IF NOT EXISTS solicitudes_prestamo (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cliente_id INT NOT NULL,
  monto DECIMAL(18,2) NOT NULL,
  plazo_meses INT NOT NULL,
  tasa_mensual DECIMAL(8,6) NOT NULL DEFAULT 0.033333,
  penalizacion_diaria DECIMAL(8,6) NOT NULL DEFAULT 0.004000,
  estatus VARCHAR(30) NOT NULL DEFAULT 'EN_REVISION',
  total_base DECIMAL(18,2) NOT NULL,
  fecha_vencimiento DATETIME NOT NULL,
  creado_en DATETIME DEFAULT CURRENT_TIMESTAMP,
  KEY idx_sol_prestamo_cliente (cliente_id),
  KEY idx_sol_prestamo_estatus (estatus),
  CONSTRAINT fk_sol_prestamo_cliente 
    FOREIGN KEY (cliente_id) REFERENCES clientes(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- =====================================================
-- Tabla: pagos_prestamo
-- Descripción: Registro de pagos realizados a préstamos
-- =====================================================
CREATE TABLE IF NOT EXISTS pagos_prestamo (
  id INT AUTO_INCREMENT PRIMARY KEY,
  prestamo_id INT NOT NULL,
  monto DECIMAL(12,2) NOT NULL,
  periodo_yyyymm VARCHAR(7) NOT NULL COMMENT 'Formato: YYYY-MM',
  fecha_pago TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  KEY idx_pagos_prestamo_id (prestamo_id),
  KEY idx_pagos_periodo (periodo_yyyymm),
  CONSTRAINT fk_pagos_prestamo
    FOREIGN KEY (prestamo_id) REFERENCES prestamos(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- =====================================================
-- Fin del Schema
-- =====================================================
