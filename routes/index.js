const express = require("express");
const router = express.Router();

const mysql = require('mysql2/promise');
/* GET home page. */
router.get('/', function (req, res, next) {
    mysql.createConnection({
        host: 'localhost', user: 'teste', password: 'teste',
        database: 'caching', port: 3307,
    }).then((connection) => {
        connection.query('SELECT * FROM produtos;')
            .then((result) => { res.send(result[0]); });
    });
});

module.exports = router;
