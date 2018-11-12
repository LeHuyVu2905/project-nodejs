
var User = require('../models/model.user');

module.exports.requireAuth = async function(req, res, next){
	if(!req.signedCookies.userInfo){
		res.redirect('/auth/login');
		return;
	}

	/*var user = db.get('users').find({ id: req.signedCookies.userInfo }).value();*/
	var user = await User.findById(req.signedCookies.userInfo);
	
	if(!user){
		res.redirect('/auth/login');
		return;
	}

	res.locals.userCookie = user;
	next();
}