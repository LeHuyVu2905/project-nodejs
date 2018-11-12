var express = require('express');
var router = express.Router();

var controller = require('../controllers/controller.auth');

router.get('/login', controller.getLogin);

router.post('/login', controller.postLogin);

module.exports = router;