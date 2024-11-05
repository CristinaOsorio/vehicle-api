const { getVehicles } = require("../../services/vehiclesService");

const getAll = async (req, res) => {
    try {
        const vehicles = await getVehicles();
        res.status(200).json({
            success: true,
            data: vehicles,
            message: 'Vehicles retrieved successfully',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve vehicles',
            error: error.message,
        });
    }
}

module.exports = { getAll };