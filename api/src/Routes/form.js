const express = require('express');
const router = express.Router();
const contactoController = require('../controllers/contactoController');

// Ruta para manejar la solicitud POST del formulario
router.post('/contacto', contactoController.createContacto);

module.exports = router;