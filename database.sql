-- Usar la base de datos recién creada
USE vehicle_app;

-- Crear la tabla vehicles
CREATE TABLE vehicles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    vin VARCHAR(50) NOT NULL UNIQUE,
    license_plate VARCHAR(20) NOT NULL UNIQUE,
    model VARCHAR(50) NOT NULL,
    status ENUM('active', 'inactive')  DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Crear el procedimiento para insertar un vehículo
DELIMITER //
CREATE PROCEDURE insertVehicle(IN p_vin VARCHAR(50), IN p_license_plate VARCHAR(20), IN p_model VARCHAR(50), IN p_status ENUM('active', 'inactive'))
BEGIN
    INSERT INTO vehicles (vin, license_plate, model, status) 
    VALUES (p_vin, p_license_plate, p_model, p_status);
END //
DELIMITER ;

-- Crear el procedimiento para actualizar un vehículo
DELIMITER //
CREATE PROCEDURE updateVehicle(IN p_id INT, IN p_vin VARCHAR(50), IN p_license_plate VARCHAR(20), IN p_model VARCHAR(50), IN p_status ENUM('active', 'inactive'))
BEGIN
    UPDATE vehicles 
    SET vin = p_vin, license_plate = p_license_plate, model = p_model, status = p_status
    WHERE id = p_id;
END //
DELIMITER ;

-- Crear el procedimiento para obtener todos los vehículos
DELIMITER //
CREATE PROCEDURE getVehicles()
BEGIN
    SELECT * FROM vehicles ORDER BY created_at DESC;
END //
DELIMITER ;
