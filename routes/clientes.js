var express = require('express');
var router = express.Router();

const clientesContoller = require('../controllers/clientesController');
const nomeMiddleware = require('../middlewares/nomeMiddleware');
const sobrenomeMiddleware = require('../middlewares/sobrenomeMiddleware');
const idadeMiddleware = require('../middlewares/idadeMiddleware');

/* GET clientes listing. */
router.get('/', nomeMiddleware.validateName, sobrenomeMiddleware.validateFamilyName,  idadeMiddleware.validateAge, clientesContoller.findAll);

/* PUT clientes listing. */
router.put('/', nomeMiddleware.validateName, sobrenomeMiddleware.validateFamilyName,  idadeMiddleware.validateAge, clientesContoller.update);

  /* POST clientes listing. */
router.post('/', nomeMiddleware.validateName, sobrenomeMiddleware.validateFamilyName,  idadeMiddleware.validateAge, clientesContoller.save);

  /* DELETE clientes listing. */
router.delete('/:id', nomeMiddleware.validateName, sobrenomeMiddleware.validateFamilyName,  idadeMiddleware.validateAge, clientesContoller.remove);

module.exports = router;