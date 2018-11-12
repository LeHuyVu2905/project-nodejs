var express = require('express');
var router = express.Router();

var controller = require('../controllers/controller.transfer');
var validate = require('../validate/validate.transfer');

router.get('/', controller.getTransfer);

router.post('/', validate.postTransfer, controller.postTransfer)

module.exports = router;