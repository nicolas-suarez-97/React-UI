const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');
const auth = require('../middleware/auth');

// Crear proyectos
// api/proyectos
router.post('/',
    auth, 
    proyectoController.crearProyecto
);

router.get('/',
    auth, 
    proyectoController.crearProyecto
);

module.exports = router;
