const express = require('express');
const MathernityRouter = express.Router();
const MathernityController = require('../Controllers/Mathernity');

// Save Contact
MathernityRouter.post('/mathernitysave', MathernityController.save_mathernity);

MathernityRouter.get('/getAllMathernity', MathernityController.getAll_mathernity);

MathernityRouter.delete('/mathernity/delete/:id', MathernityController.delete_mathernity);

MathernityRouter.get('/mathernity/get/:id', MathernityController.get_mathernity);

//Update Contact
MathernityRouter.put('/mathernity/update/:id', MathernityController.update_mathernity);

module.exports = MathernityRouter;