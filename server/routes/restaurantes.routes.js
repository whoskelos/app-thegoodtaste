const express = require('express');
const router = express.Router();

const restaurante = require('../controllers/restaurante.controller');

router.get('/', restaurante.getRestaurantes);
router.post('/', restaurante.crearRestaurante);
router.get('/:id',restaurante.getRestaurante);
router.put('/:id',restaurante.editarRestaurante);
router.delete('/:id',restaurante.eliminarRestaurante);


module.exports = router;