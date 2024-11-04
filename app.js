const express = require('express');
const cors = require('cors');
const { getVehicles, insertVehicle, updateVehicle } = require('./src/services/vehiclesService');
const corsOptions = require('./src/config/cors');

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

app.get('/api/vehicles', async (req, res) => {
    const vehicles = await getVehicles();
    res.json(vehicles);
});

app.post('/api/vehicles', async (req, res) => {
  const { vin, license_plate, model, status } = req.body;
  console.log(req.body)
    await insertVehicle(vin, license_plate, model, status);
    res.status(201).send('Vehicle added');
});

app.put('/api/vehicles/:id', async (req, res) => {
    const { id } = req.params;
    const { vin, license_plate, model, status } = req.body;
    await updateVehicle(id, vin, license_plate, model, status);
    res.send('Vehicle updated');
});

app.listen(3000, () => console.log('Server running on port 3000'));
