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
  rol VARCHAR(50) NOT NULL DEFAULT 'GERENTE'
);


CREATE TABLE IF NOT EXISTS contactos_transferencia (
  id INT PRIMARY KEY AUTO_INCREMENT,
  cliente_id INT NOT NULL,
  alias VARCHAR(100),
  banco VARCHAR(100),
  identificador_tipo ENUM('NUMERO_CUENTA','CLABE','TELEFONO') NOT NULL,
  identificador VARCHAR(30) NOT NULL,
  nombre_propietario VARCHAR(150) NOT NULL,
  creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uq_contacto_cliente_identificador (cliente_id, identificador)
);

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
  comision DECIMAL(12,2) NOT NULL,
  concepto VARCHAR(255),
  estado VARCHAR(20) NOT NULL DEFAULT 'COMPLETADA',
  contacto_id INT NULL
);

select *from transferencias;
select *from cuentas;
select *from usuarios;

INSERT INTO clientes (nombres, apellido_paterno, apellido_materno, rfc, curp, email, telefono, estado, ciudad, direccion, ingresos_mensuales) VALUES
('Ana', 'García', 'López', 'GALA850412ABC', 'GALA850412MDF123', 'ana.garcia@email.com', '5512345678', 'Ciudad de México', 'Coyoacán', 'Av. Insurgentes Sur 123', 25000.50),
('Juan Carlos', 'Hernández', 'Martínez', 'HEMJ901125XYZ', 'HEMJ901125HNL456', 'jc.hernandez@email.com', '8187654321', 'Nuevo León', 'Monterrey', 'Calle Morelos 456, Centro', 45000.00),
('Sofía', 'Rodríguez', 'Pérez', 'ROPS950830QWE', 'ROPS950830MJC789', 'sofia.r@email.com', '3312349876', 'Jalisco', 'Guadalajara', 'Av. Vallarta 789', 32000.75),
('Luis Alberto', 'Martínez', 'Sánchez', 'MASL880115RTY', 'MASL880115HGRAS1', 'luis.martinez@email.com', '2229876543', 'Puebla', 'Puebla', 'Blvd. Hermanos Serdán 101', 18500.00);
('Luis Alberto', 'Martínez', 'Sánchez', 'MASL880115RTY', 'MASL880115HGRAS1', 'luis.martinez@email.com', '2229876543', 'Puebla', 'Puebla', 'Blvd. Hermanos Serdán 101', 18500.00);

INSERT INTO tipos_cuenta (nombre_tipo, deposito_minimo, comision_mensual) VALUES
('Cuenta de Ahorro', 500.00, 0.00),
('Cuenta de Nómina', 0.00, 0.00),
('Cuenta Premium', 10000.00, 150.00),
('Cuenta de Inversión', 25000.00, 200.00);

INSERT INTO cuentas (numero_cuenta, cliente_id, tipo_cuenta_id, saldo, estatus) VALUES
('1234567890123456', 1, 2, 15250.80, 'Activa'),
('9876543210987654', 2, 3, 85300.00, 'Activa'),
('1122334455667788', 3, 1, 5800.25, 'Activa'),
('2233445566778899', 1, 4, 120000.00, 'Bloqueada'),
('5566778899001122', 4, 2, 9850.50, 'Inactiva');

INSERT INTO prestamos (cliente_id, tipo_prestamo, monto, plazo_meses, estatus, interes, interes_penalizacion) VALUES
(2, 'Automotriz', 250000.00, 48, 'Aprobado', 12.50, 5.00),
(3, 'Personal', 50000.00, 24, 'Aprobado', 18.00, 6.50),
(1, 'Hipotecario', 1500000.00, 240, 'Pendiente', 9.75, 4.00),
(4, 'Personal', 20000.00, 12, 'Pagado', 22.00, 7.00);

INSERT INTO transacciones (cuenta_id, tipo, monto, concepto, fecha) VALUES
(1, 'Depósito', 15000.00, 'Pago de nómina quincenal', '2025-09-15 09:00:00'),
(2, 'Retiro', 2500.00, 'Retiro en cajero automático', '2025-09-20 18:30:00'),
(3, 'Pago de servicio', 850.50, 'Pago de servicio CFE', '2025-09-22 11:00:00'),
(1, 'Transferencia', 1200.00, 'Transferencia a Juan Pérez', '2025-09-23 07:15:00');

INSERT INTO cancelaciones_cuentas (cuenta_id, fecha_cancelacion, motivo_cancelacion, saldo_final, usuario_cancelacion) VALUES
(5, '2025-08-10 14:20:00', 'Cliente se muda de país', 0.00, 'pgonzalez');

INSERT INTO usuarios (usuario, nombre, apellido_paterno, apellido_materno, correo, contrasena, curp, direccion, telefono, rol) VALUES
('juanchis', 'juan', 'gonzalez', 'garcia', 'juan123@admin.com', '$2a$10$KpHc54YDC507xQ.ZpP2n8.fMaxHdg5Q.uE7fpCiC9hS8KZ4Acyei2', 'GOGJ000727HNENRNA9', 'CALLE LOMAS,COL. TURBAS NO.369', '7721234569', 'ADMIN');