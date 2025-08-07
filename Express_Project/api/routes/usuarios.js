const express = require('express');
const router = express.Router();

const controlador = require('./controllers/usuariosController');

// GET /api/usuarios
router.get('/', controlador.obtenerUsuarios);

module.exports = router;
