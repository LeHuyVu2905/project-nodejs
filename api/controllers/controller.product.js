var Product = require('../../models/model.product');

async function Show(req, res){
	var products = await Product.find();
	res.json(products);
}

async function Create(req, res){
	var product = await Product.create(req.body);
	res.json(product);
}

function Update(req, res){
	Product.findByIdAndUpdate(
		req.params.id, 
		req.body, 
		{new: true},
		(err, todo) => {
			if(err){
				return res.status(500).send(err);
			}
			return res.json(todo);
		} 
	);
}

module.exports = {
	Show,
	Create,
	Update
}