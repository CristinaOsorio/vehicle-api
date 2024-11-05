const { body } = require('express-validator');
const { isLabelUnique } = require('../../services/vehiclesService');

const createVehicleValidator = [
    body('vin')
        .notEmpty().withMessage('El VIN es obligatorio.')
        .isLength({ min: 17, max: 17 }).withMessage('El VIN debe tener exactamente 17 caracteres.')
        .custom(async (value) => {
            const isUnique = await isLabelUnique('vin', value);
            if (!isUnique) {
                throw new Error('El VIN ya está en uso.');
            }
            return true;
        }),
    body('license_plate')
        .notEmpty().withMessage('La placa es obligatoria.')
        .isLength({ min: 7, max: 7 }).withMessage('La placa debe tener entre 7 caracteres.')
        .custom(async (value) => {
            const isUnique = await isLabelUnique('license_plate', value);
            if (!isUnique) {
                throw new Error('La placa ya está en uso.');
            }
            return true;
        }),
    body('model').notEmpty().withMessage('El modelo es obligatorio.'),
    body('status')
        .notEmpty().withMessage('El estado es obligatorio.')
        .isIn(['active', 'inactive']).withMessage('El estado debe ser "active" o "inactive".'),
];

module.exports = createVehicleValidator;
