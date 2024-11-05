const { validationResult } = require('express-validator');
const { insertVehicle } = require('../../services/vehiclesService');

const createVehicleController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            message: 'Validation errors',
            errors: errors.array(),
        });
    }

    const { vin, license_plate, model, status } = req.body;

    try {
        const newVehicle = await insertVehicle(vin, license_plate, model, status);
        res.status(201).json({
            success: true,
            data: newVehicle,
            message: 'Vehicle added successfully',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to add vehicle',
            error: error.message,
        });
    }
};

module.exports = {
    createVehicleController,
};
