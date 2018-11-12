module.exports.postTransfer = function(req, res, next){
	var errors = [];

	if(!req.body.serial){
		errors.push('Serial is required!');
	}
	if(!req.body.amount){
		errors.push('Amount is required!');
	}
	if(errors.length){
		res.render('transfer/index', {
			errors: errors,
			values: req.body 
		});
		return;
	}

	next();
}