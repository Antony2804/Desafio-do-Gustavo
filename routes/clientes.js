var express = require('express');
var router = express.Router();

const clientesContoller = require('../controllers/clientesController');

/* GET clientes listing. */
router.get('/', clientesContoller.findAll);

/* PUT clientes listing. */
router.put('/', clientesContoller.update);

  /* POST clientes listing. */
router.post('/', clientesContoller.save);

  /* DELETE clientes listing. */
router.delete('/:id', clientesContoller.remove);

module.exports = router;