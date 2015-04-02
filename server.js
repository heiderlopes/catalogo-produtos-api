//Dependency
var express 	= require('express');
var mongoose 	= require('mongoose');
var bodyParser  = require('body-parser');

//MongoDB
mongoose.connect('mongodb://user:user@ds059651.mongolab.com:59651/catalogo-produtos');

//Express
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


//Cors
app.all('/*', function(req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});


//Routes
app.use('/api', require('./routes/api.js'));

//Start server
//app.listen(3000);
app.listen(process.env.PORT || 5000)
console.log('API running on port 3000');