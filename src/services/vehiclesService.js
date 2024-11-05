const db = require('../config/database');

async function getVehicles() {
    const [rows] = await db.query('CALL getVehicles()');
    return rows[0];
}

async function insertVehicle(vin, license_plate, model, status) {
    await db.query('CALL insertVehicle(?, ?, ?, ?)', [vin, license_plate, model, status]);
}

async function updateVehicle(id, vin, license_plate, model, status) {
    await db.query('CALL updateVehicle(?, ?, ?, ?, ?)', [id, vin, license_plate, model, status]);
}

async function isLabelUnique(key, value) {
    const [rows] = await db.query('SELECT * FROM vehicles WHERE ?? = ?', [key, value]);
    return rows.length === 0;
}


module.exports = { getVehicles, insertVehicle, updateVehicle, isLabelUnique };
