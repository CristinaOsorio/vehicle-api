const pool = require('../config/database');

async function getVehicles() {
    const [rows] = await pool.query('CALL getVehicles()');
    return rows[0];
}

async function insertVehicle(vin, license_plate, model, status) {
    await pool.query('CALL insertVehicle(?, ?, ?, ?)', [vin, license_plate, model, status]);
}

async function updateVehicle(id, vin, license_plate, model, status) {
    await pool.query('CALL updateVehicle(?, ?, ?, ?, ?)', [id, vin, license_plate, model, status]);
}

module.exports = { getVehicles, insertVehicle, updateVehicle };
