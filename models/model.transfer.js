var mongoose = require('mongoose');

var transferSchema = new mongoose.Schema({
	sessionId: String,
    userInfo: String,
    serial: String,
    amount: String
});

var Transfer = mongoose.model('Transfer', transferSchema, 'transfers');

module.exports = Transfer;