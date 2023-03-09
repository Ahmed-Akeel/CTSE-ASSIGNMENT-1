
const express = require('express');
const ClinicRouter = express.Router();
const ClinicController = require('../Controllers/Clinic');

// Save Contact
ClinicRouter.post('/clinicsave', ClinicController.save_clinic);

ClinicRouter.get('/getAll', ClinicController.getAll_clinic);

ClinicRouter.delete('/clinic/delete/:id', ClinicController.delete_clinic);

ClinicRouter.get('/clinic/get/:id', ClinicController.get_clinic);

// Update Contact
ClinicRouter.put('/clinic/update/:id', ClinicController.update_clinic);

module.exports = ClinicRouter;