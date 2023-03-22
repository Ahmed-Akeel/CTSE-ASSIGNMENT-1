
const express = require('express');
const phiRouter = express.Router();
const phiController = require('../Controllers/phi');

// Save Contact
phiRouter.post('/phisave', phiController.save_phi);

phiRouter.get('/getAllphi', phiController.getAll_phi);

phiRouter.delete('/phi/delete/:id', phiController.delete_phi);

phiRouter.get('/phi/get/:id', phiController.get_phi);

// Update Contact
phiRouter.put('/phi/update/:id', phiController.update_phi);

module.exports = phiRouter;