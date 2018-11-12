/*var db = require('../db');*/
var Product = require('../models/model.product');

async function index(req, res, next){

	/*
	var page = parseInt(req.query.page) || 1;
	var perPage = 8;

	var drop = (page - 1) * perPage;


	var products = db.get('products').drop(drop).take(perPage).value();

	res.render('products/index', {
		products: products
	});
	*/
	try{
		var products = await Product.find();
			//products.foo();
			res.render('products/index', {
				products: products
			});
	}
	catch(err){
		next(err);
	}
	
}

module.exports = {
	index
}