//Dependency
var express = require('express');
var router 	= express.Router();

//Models
var Product = require('../models/products.js');

//Routes
Product.methods(['get', 'post', 'put', 'delete']);
Product.register(router, '/products');

//return router
module.exports = router;