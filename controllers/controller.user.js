/*var db = require('../db');*/
var shortid = require('shortid');
var md5 = require('md5');
var User = require('../models/model.user');

var lop = ['X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'X8', 'X9', 'X10'];

async function index(req, res){

	var users = await User.find();
	var userCookie = res.locals.userCookie;

	res.render('users/index', {
		db: users,
		userCookie: userCookie
	});
}

function getCreate(req, res){
	var errors = [];
	
	res.render('users/create', {
		lop: lop,
		errors: errors,
		values: req.body
	});
}

async function postCreate(req, res){
	//req.body.id = shortid.generate();
	req.body.pass = md5(req.body.pass);
	req.body.avatar = req.file.path.split('\\').slice(1).join('\\');

	//db.get('users').push(req.body).write();
    
    var newUser = new User(req.body);

    await newUser.save();

	res.redirect('/users');
}

async function search(req, res){
	var q = req.query.q;

	var users = await User.find();

	/*
	var filteredUsers = db.get('users').value().filter(function(user){
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});
	*/

	var filteredUsers = users.filter(function(user){
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	})

	res.render('users/index', {
		db: filteredUsers
	});
}

async function view(req, res){
	var id = req.params.id;

	/*
	var user = db.get('users').find({ id: id }).value();
	*/

	var user = await User.findById(id);

	res.render('users/view', {
		user: user
	});
}

module.exports = {
	index,
	getCreate,
	postCreate,
	view,
	search
}