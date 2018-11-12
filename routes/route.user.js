var express = require('express');
var multer  = require('multer');

var controller = require('../controllers/controller.user');
var validate = require('../validate/validate.user');

var router = express.Router();
var upload = multer({ dest: './public/uploads/' });



router.get('/', controller.index);

router.get('/create', controller.getCreate);

router.post('/create', upload.single('avatar'), validate.postCreate, controller.postCreate);

router.get('/search', controller.search);

router.get('/:id', controller.view);

module.exports = router;