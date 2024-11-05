const { validationResult } = require('express-validator');
const { updateVehicle } = require('../../services/vehiclesService');

const updateVehicleController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            message: 'Validation errors',
            errors: errors.array(),
        });
    }

    const { id, vin, license_plate, model, status } = req.body;

    try {
        await updateVehicle(id, vin, license_plate, model, status);

        res.status(200).json({
            success: true,
            data: newVehicle,
            message: 'Vehicle updated successfully',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to updated vehicle',
            error: error.message,
        });
    }
};

module.exports = {
    updateVehicleController,
};
