const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema 
const userSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	password: {
		type: String, Number,
		required: true
	},
	jars: {
		type: Name,
		required: false
	}
})

module.exports = user = mongoose.model("user", userSchema);