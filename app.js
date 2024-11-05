const express = require('express');
const cors = require('cors');
const { getVehicles, updateVehicle } = require('./src/services/vehiclesService');
const corsOptions = require('./src/config/cors');
const createVehicleValidator = require('./src/validators/vehicle/create.validator');
const { createVehicleController } = require('./src/controllers/vehicle/create.controller');

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

app.get('/api/vehicles', async (req, res) => {
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
});

app.post('/api/vehicles', createVehicleValidator, createVehicleController);

app.put('/api/vehicles/:id', async (req, res) => {
    const { id } = req.params;
    const { vin, license_plate, model, status } = req.body;

    if (!vin || !license_plate || !model || !status) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required',
        });
    }

    try {
        const updatedVehicle = await updateVehicle(id, vin, license_plate, model, status);
        if (!updatedVehicle) {
            return res.status(404).json({
                success: false,
                message: 'Vehicle not found',
            });
        }
        res.status(200).json({
            success: true,
            data: updatedVehicle,
            message: 'Vehicle updated successfully',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to update vehicle',
            error: error.message,
        });
    }
});

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found',
        error: 'Route not found or invalid'
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));
