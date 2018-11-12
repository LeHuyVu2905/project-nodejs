/*var db = require('../db');*/
var Transfer = require('../models/model.transfer');

function getTransfer(req, res, next){
	var errors = [];

	res.render('transfer/index', {
		errors: errors,
		values: req.body,

	});
}

async function postTransfer(req, res, next){

	var data = {
		sessionId: req.signedCookies.sessionId,
		userInfo: req.signedCookies.userInfo,
		serial: req.body.serial,
		amount: req.body.amount
	};

	var newTransfer = new Transfer(data);

	/*db.get('transfer').push(data).write();*/

	await newTransfer.save();

	res.redirect('/products');
}

module.exports = {
	getTransfer,
	postTransfer
}