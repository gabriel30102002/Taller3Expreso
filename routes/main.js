var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('principal');
});

router.get('/clientes', function(req, res, next) {
  res.render('clientes');
});

router.get('/producto', function(req, res, next) {
  res.render('producto');
});

router.get('/pedido', function(req, res, next) {
  res.render('pedido');
});

module.exports = router;
