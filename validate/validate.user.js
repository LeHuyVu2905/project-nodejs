var lop = ['X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'X8', 'X9', 'X10'];

module.exports.postCreate = function(req, res, next){
	var errors = [];

	if(!req.body.name){
		errors.push('Name is required!');
	}
	if(!req.body.major){
		errors.push('Major is required!');
	}
	if(!req.body.email){
		errors.push('Email is required!');
	}
	if(!req.body.pass){
		errors.push('Password is required!');
	}
	if(errors.length){
		res.render('users/create', {
			lop: lop,
			errors: errors,
			values: req.body 
		});
		return;
	}

	next();
};