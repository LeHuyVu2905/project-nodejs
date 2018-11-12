var express = require('express');
var router = express.Router();

var controller = require('../controllers/controller.product');

router.get('/', controller.index);

module.exports = router;