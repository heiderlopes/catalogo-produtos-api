//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

//Schema
var productSchema = new mongoose.Schema({
	nome: String,
	sku: String,
	preco: Number
});


//return model
module.exports = restful.model('Products', productSchema);