var express = require('express');
var router = express.Router();

var controller = require('../../api/controllers/controller.product');

router.get('/', controller.Show);

router.post('/', controller.Create);

router.put('/:id', controller.Update);

module.exports = router;