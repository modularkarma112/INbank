CREATE DATABASE IF NOT EXISTS INGBANK;
USE INGBANK;

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
  ingresos_mensuales DECIMAL(10,2)
);


CREATE TABLE IF NOT EXISTS tipos_cuenta (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre_tipo VARCHAR(50),
  deposito_minimo DECIMAL(8,2),
  comision_mensual DECIMAL(6,2),
  UNIQUE KEY uq_tipos_cuenta_nombre (nombre_tipo)
);

CREATE TABLE IF NOT EXISTS cuentas (
  id INT PRIMARY KEY AUTO_INCREMENT,
  numero_cuenta VARCHAR(16),
  cliente_id INT,
  tipo_cuenta_id INT,
  saldo DECIMAL(12,2),
  estatus VARCHAR(20),
  UNIQUE KEY uq_cuentas_numero_cuenta (numero_cuenta),
  KEY idx_cuentas_cliente_id (cliente_id),
  KEY idx_cuentas_tipo_cuenta_id (tipo_cuenta_id),
  CONSTRAINT fk_cuentas_clientes
    FOREIGN KEY (cliente_id) REFERENCES clientes(id),
  CONSTRAINT fk_cuentas_tipos_cuenta
    FOREIGN KEY (tipo_cuenta_id) REFERENCES tipos_cuenta(id)
);

CREATE TABLE IF NOT EXISTS prestamos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  cliente_id INT,
  tipo_prestamo VARCHAR(50),
  monto DECIMAL(12,2),
  plazo_meses INT,
  estatus VARCHAR(20),
  interes DECIMAL(10,2),
  interes_penalizacion DECIMAL(10,2),
  KEY idx_prestamos_cliente_id (cliente_id),
  CONSTRAINT fk_prestamos_clientes
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

CREATE TABLE IF NOT EXISTS transacciones (
  id INT PRIMARY KEY AUTO_INCREMENT,
  cuenta_id INT,
  tipo VARCHAR(50),
  monto DECIMAL(12,2),
  concepto VARCHAR(200),
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  KEY idx_transacciones_cuenta_id (cuenta_id),
  CONSTRAINT fk_transacciones_cuentas
    FOREIGN KEY (cuenta_id) REFERENCES cuentas(id)
);

CREATE TABLE IF NOT EXISTS cancelaciones_cuentas (
  id INT PRIMARY KEY AUTO_INCREMENT,
  cuenta_id INT,
  fecha_cancelacion TIMESTAMP,
  motivo_cancelacion VARCHAR(100),
  saldo_final DECIMAL(12,2),
  usuario_cancelacion VARCHAR(50),
  UNIQUE KEY uq_cancelaciones_cuenta (cuenta_id),
  KEY idx_cancelaciones_cuenta_id (cuenta_id),
  CONSTRAINT fk_cancelaciones_cuentas
    FOREIGN KEY (cuenta_id) REFERENCES cuentas(id)
);

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
  rol VARCHAR(50) NOT NULL DEFAULT 'GERENTE',
  UNIQUE KEY uq_usuarios_usuario (usuario),
  UNIQUE KEY uq_usuarios_correo (correo)
);

-- Índices adicionales para acelerar validaciones de existencia en clientes
ALTER TABLE clientes
  ADD INDEX idx_clientes_rfc (rfc),
  ADD INDEX idx_clientes_curp (curp),
  ADD INDEX idx_clientes_email (email),
  ADD INDEX idx_clientes_telefono (telefono);

-- NOTA: Si ejecutas este script repetidamente y las tablas ya existen, los ALTER pueden fallar
-- por duplicado de índice. En producción puedes convertirlos en ALTERs condicionales manuales
-- o separarlos. Ejecuta una sola vez tras crear las tablas iniciales.
