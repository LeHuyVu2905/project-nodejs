var express = require('express');
var router = express.Router();

var controller = require('../controllers/controller.cart');

router.get('/add/:productId', controller.addToCart);

module.exports = router;