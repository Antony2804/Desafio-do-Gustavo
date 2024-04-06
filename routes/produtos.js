const express = require("express");
const router = express.Router();

const produtosContoller = require('../controllers/produtosController');
const produtosMiddleware = require('../middlewares/produtosMiddleware');
/* GET produtos listing. */
router.get('/', produtosContoller.findAll);

/* PUT produtos listing. */
router.put('/', produtosContoller.update);

/* POST produtos listing. */
router.post('/', produtosMiddleware.validarCamposProduto, produtosContoller.save);

/* DELETE produtos listing. */
router.delete('/:id', produtosContoller.remove);

module.exports = router;
