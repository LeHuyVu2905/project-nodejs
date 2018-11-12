/*var db = require('../db');*/
var md5 = require('md5');
var User = require('../models/model.user');

function getLogin(req, res){
	var errors = [];

	res.render('auth/login', {
		errors: errors,
		values: req.body
	});	
}

async function postLogin(req, res){
	var errors = [];

	var email = req.body.email;
	var pass = req.body.pass;

	/*var user = db.get('users').find({ email: email }).value();*/
	var user = await User.findOne({ email: email });

	if(!user){
		errors.push('Email is required!');
		res.render('auth/login', {
			errors: errors,
			values: req.body
		});
		return;
	}

	if(!pass){
		errors.push('Password is required!');
		res.render('auth/login', {
			errors: errors,
			values: req.body
		});
		return;
	}


	if(user.pass !== md5(pass)){
		errors.push('Wrong password!');
		res.render('auth/login', {
			errors: errors,
			values: req.body
		});
		return;
	}

	res.cookie('userInfo', user.id, {
		signed: true
	});
	res.redirect('/users');
}

module.exports = {
	getLogin,
	postLogin
}