var express = require('express');
var router = express.Router();

const produtosContoller = require('../controllers/produtosController');

/* GET produtos listing. */
router.get('/', produtosContoller.findAll);

/* PUT produtos listing. */
router.put('/', produtosContoller.update);

  /* POST produtos listing. */
router.post('/', produtosContoller.save);

  /* DELETE produtos listing. */
router.delete('/:id', produtosContoller.remove);

module.exports = router;
