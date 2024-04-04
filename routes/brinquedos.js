var express = require('express');
var router = express.Router();

/* GET brinquedos listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource GET');
});

/* PUT brinquedos listing. */
router.put('/', function(req, res, next) {
    res.send('respond with a resource PUT');
  });

  /* POST brinquedos listing. */
router.post('/', function(req, res, next) {
    res.send('respond with a resource POST');
  });

  /* DELETE brinquedos listing. */
router.delete('/', function(req, res, next) {
    res.send('respond with a resource DELETE');
  });

module.exports = router;
