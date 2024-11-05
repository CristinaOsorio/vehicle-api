const express = require('express');
const cors = require('cors');
const { getVehicles } = require('./src/services/vehiclesService');
const corsOptions = require('./src/config/cors');
const createVehicleValidator = require('./src/validators/vehicle/create.validator');
const updateVehicleValidator = require('./src/validators/vehicle/updated.validator');
const { createVehicleController } = require('./src/controllers/vehicle/create.controller');
const { updateVehicleController } = require('./src/controllers/vehicle/update.controller');
const { getAll } = require('./src/controllers/vehicle/getAll.controller');

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

app.get('/api/vehicles', getAll);

app.post('/api/vehicles', createVehicleValidator, createVehicleController);
app.put('/api/vehicles/:id', updateVehicleValidator, updateVehicleController);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found',
        error: 'Route not found or invalid'
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));
