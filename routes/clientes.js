const express = require('express');
const router = express.Router();

const clientesContoller = require('../controllers/clientesController');
const clientesMiddleware = require('../middlewares/clientesMiddleware');

/* GET clientes listing. */
router.get('/', clientesMiddleware.validarCamposClientes, clientesContoller.findAll);

/* PUT clientes listing. */
router.put('/', clientesContoller.update);

/* POST clientes listing. */
router.post('/', clientesContoller.save);

/* DELETE clientes listing. */
router.delete('/:id', clientesContoller.remove);

module.exports = router;
