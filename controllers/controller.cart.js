var db = require('../db');

function addToCart(req, res, next){
	var productId = req.params.productId;
	var sessionId = req.signedCookies.sessionId;

	if(!sessionId){
		res.redirect('/products');
		return;
	}

	var count = db.get('sessions')
	.find({ id: sessionId })
	.get('card.' + productId, 0)
	.value();

	db.get('sessions')
	.find({ id: sessionId })
	.set('card.' + productId, count + 1)
	.write();
}

module.exports = {
	addToCart
}