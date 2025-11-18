-- Esquema mínimo para INGBANK (crea las tablas necesarias para pruebas locales)

CREATE DATABASE IF NOT EXISTS INGBANK DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE INGBANK;

-- Tabla de clientes
CREATE TABLE IF NOT EXISTS clientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombres VARCHAR(200) NOT NULL,
  apellido_paterno VARCHAR(100),
  apellido_materno VARCHAR(100),
  rfc VARCHAR(18) UNIQUE,
  curp VARCHAR(20) UNIQUE,
  email VARCHAR(200) UNIQUE,
  telefono VARCHAR(30) UNIQUE,
  estado VARCHAR(100),
  ciudad VARCHAR(100),
  direccion TEXT,
  ingresos_mensuales DECIMAL(14,2) DEFAULT 0,
  creado_en DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabla de tipos de cuenta (opcional)
CREATE TABLE IF NOT EXISTS tipos_cuenta (
  id INT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO tipos_cuenta (id, nombre) VALUES
(1, 'Cuenta de Nómina'),
(2, 'Cuenta de Ahorro'),
(3, 'Cuenta de Inversión')
ON DUPLICATE KEY UPDATE nombre=VALUES(nombre);

-- Tabla de cuentas
CREATE TABLE IF NOT EXISTS cuentas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  numero_cuenta VARCHAR(64) NOT NULL UNIQUE,
  cliente_id INT NOT NULL,
  tipo_cuenta_id INT DEFAULT 1,
  saldo DECIMAL(18,2) DEFAULT 0,
  estatus VARCHAR(20) DEFAULT 'ACTIVA',
  creado_en DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (cliente_id) REFERENCES clientes(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabla de transacciones
CREATE TABLE IF NOT EXISTS transacciones (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cuenta_id INT NOT NULL,
  tipo VARCHAR(50) NOT NULL,
  monto DECIMAL(18,2) NOT NULL,
  concepto VARCHAR(255) DEFAULT NULL,
  fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (cuenta_id) REFERENCES cuentas(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabla de transferencias (registro consolidado)
CREATE TABLE IF NOT EXISTS transferencias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cliente_id INT DEFAULT NULL,
  origen_cuenta_id INT NOT NULL,
  destino_cuenta_id INT DEFAULT NULL,
  destino_banco VARCHAR(200) DEFAULT NULL,
  destino_identificador_tipo VARCHAR(50) DEFAULT NULL,
  destino_identificador VARCHAR(200) DEFAULT NULL,
  nombre_destinatario VARCHAR(200) DEFAULT NULL,
  monto DECIMAL(18,2) NOT NULL,
  comision DECIMAL(18,2) DEFAULT 0,
  concepto VARCHAR(255) DEFAULT NULL,
  estado VARCHAR(50) DEFAULT 'PENDIENTE',
  creado_en DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Contactos para transferencias
CREATE TABLE IF NOT EXISTS contactos_transferencia (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cliente_id INT NOT NULL,
  alias VARCHAR(100) DEFAULT NULL,
  banco VARCHAR(200) DEFAULT NULL,
  identificador_tipo VARCHAR(50) DEFAULT NULL,
  identificador VARCHAR(200) DEFAULT NULL,
  nombre_propietario VARCHAR(200) DEFAULT NULL,
  creado_en DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Cancelaciones de cuentas
CREATE TABLE IF NOT EXISTS cancelaciones_cuentas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cuenta_id INT NOT NULL,
  fecha_cancelacion DATETIME DEFAULT CURRENT_TIMESTAMP,
  motivo_cancelacion TEXT DEFAULT NULL,
  saldo_final DECIMAL(18,2) DEFAULT 0,
  usuario_cancelacion VARCHAR(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabla de usuarios (para admin y autenticación)
CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario VARCHAR(100) NOT NULL UNIQUE,
  nombre VARCHAR(200) DEFAULT NULL,
  correo VARCHAR(200) DEFAULT NULL,
  contrasena VARCHAR(200) DEFAULT NULL,
  rol VARCHAR(50) DEFAULT 'USER',
  creado_en DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Índices de rendimiento (opcional)
CREATE INDEX IF NOT EXISTS idx_cuentas_cliente ON cuentas(cliente_id);
CREATE INDEX IF NOT EXISTS idx_transacciones_cuenta ON transacciones(cuenta_id);
CREATE INDEX IF NOT EXISTS idx_transferencias_origen ON transferencias(origen_cuenta_id);
