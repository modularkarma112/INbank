USE INGBANK;

-- Insertar clientes
INSERT INTO clientes (nombres, apellido_paterno, apellido_materno, rfc, curp, email, telefono, estado, ciudad, direccion, ingresos_mensuales) VALUES
('Ana', 'García', 'López', 'GALA850412ABC', 'GALA850412MDF123', 'ana.garcia@email.com', '5512345678', 'Ciudad de México', 'Coyoacán', 'Av. Insurgentes Sur 123', 25000.50),
('Juan Carlos', 'Hernández', 'Martínez', 'HEMJ901125XYZ', 'HEMJ901125HNL456', 'jc.hernandez@email.com', '8187654321', 'Nuevo León', 'Monterrey', 'Calle Morelos 456, Centro', 45000.00),
('Sofía', 'Rodríguez', 'Pérez', 'ROPS950830QWE', 'ROPS950830MJC789', 'sofia.r@email.com', '3312349876', 'Jalisco', 'Guadalajara', 'Av. Vallarta 789', 32000.75),
('Luis Alberto', 'Martínez', 'Sánchez', 'MASL880115RTY', 'MASL880115HGRAS1', 'luis.martinez@email.com', '2229876543', 'Puebla', 'Puebla', 'Blvd. Hermanos Serdán 101', 18500.00);

-- Insertar tipos de cuenta
INSERT INTO tipos_cuenta (nombre_tipo, deposito_minimo, comision_mensual) VALUES
('Cuenta de Ahorro', 500.00, 0.00),
('Cuenta de Nómina', 0.00, 0.00),
('Cuenta Premium', 10000.00, 150.00),
('Cuenta de Inversión', 25000.00, 200.00);

-- Insertar cuentas
INSERT INTO cuentas (numero_cuenta, cliente_id, tipo_cuenta_id, saldo, estatus) VALUES
('1234567890123456', 1, 2, 15250.80, 'Activa'),
('9876543210987654', 2, 3, 85300.00, 'Activa'),
('1122334455667788', 3, 1, 5800.25, 'Activa'),
('2233445566778899', 1, 4, 120000.00, 'Bloqueada'),
('5566778899001122', 4, 2, 9850.50, 'Inactiva');

-- Insertar préstamos
INSERT INTO prestamos (cliente_id, tipo_prestamo, monto, plazo_meses, estatus, interes, interes_penalizacion) VALUES
(2, 'Automotriz', 250000.00, 48, 'Aprobado', 12.50, 5.00),
(3, 'Personal', 50000.00, 24, 'Aprobado', 18.00, 6.50),
(1, 'Hipotecario', 1500000.00, 240, 'Pendiente', 9.75, 4.00),
(4, 'Personal', 20000.00, 12, 'Pagado', 22.00, 7.00);

-- Insertar transacciones
INSERT INTO transacciones (cuenta_id, tipo, monto, concepto, fecha) VALUES
(1, 'Depósito', 15000.00, 'Pago de nómina quincenal', '2025-09-15 09:00:00'),
(2, 'Retiro', 2500.00, 'Retiro en cajero automático', '2025-09-20 18:30:00'),
(3, 'Pago de servicio', 850.50, 'Pago de servicio CFE', '2025-09-22 11:00:00'),
(1, 'Transferencia', 1200.00, 'Transferencia a Juan Pérez', '2025-09-23 07:15:00');

-- Insertar cancelación de cuenta
INSERT INTO cancelaciones_cuentas (cuenta_id, fecha_cancelacion, motivo_cancelacion, saldo_final, usuario_cancelacion) VALUES
(5, '2025-08-10 14:20:00', 'Cliente se muda de país', 0.00, 'pgonzalez');

-- Insertar usuario juanchis
INSERT INTO usuarios (usuario, nombre, apellido_paterno, apellido_materno, correo, contrasena, curp, direccion, telefono, rol) VALUES
('juanchis', 'juan', 'gonzalez', 'garcia', 'juan123@admin.com', '$2a$10$KpHc54YDC507xQ.ZpP2n8.fMaxHdg5Q.uE7fpCiC9hS8KZ4Acyei2', 'GOGJ000727HNENRNA9', 'CALLE LOMAS,COL. TURBAS NO.369', '7721234569', 'ADMIN');
