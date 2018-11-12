var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	name: String,
    major: String,
    email: String,
    pass: String,
    lop: String,
    avatar: String
});

var User = mongoose.model('User', userSchema, 'users');

module.exports = User;