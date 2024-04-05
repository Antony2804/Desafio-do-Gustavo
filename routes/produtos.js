var express = require('express');
var router = express.Router();

const produtosContoller = require('../controllers/produtosController');
const nomeMiddleware = require('../middlewares/nomeMiddleware');

/* GET produtos listing. */
router.get('/', nomeMiddleware.validateName, produtosContoller.findAll);

/* PUT produtos listing. */
router.put('/', nomeMiddleware.validateName, produtosContoller.update);

  /* POST produtos listing. */
router.post('/', nomeMiddleware.validateName, produtosContoller.save);

  /* DELETE produtos listing. */
router.delete('/:id', nomeMiddleware.validateName, produtosContoller.remove);

module.exports = router;
