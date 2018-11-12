require('dotenv').config();

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

var app = express();

var routeUser = require('./routes/route.user');
var routeAuth = require('./routes/route.auth');
var routeProduct = require('./routes/route.product');
var routeCart = require('./routes/route.cart');
var routeTransfer = require('./routes/route.transfer');
var routeProductAPI = require('./api/routes/route.product');

var middlewareAuth = require('./middlewares/middleware.auth');
var middlewareSession = require('./middlewares/middleware.session');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser(process.env.SESSION_SECRET));

app.use(middlewareSession);


app.get('/', function(req, res){
	res.render('index', {
		name: 'Le Huy Vu'
	});
});

app.use('/users', middlewareAuth.requireAuth, routeUser);
app.use('/auth', routeAuth);
app.use('/products', routeProduct);
app.use('/cart', routeCart);
app.use('/transfer', middlewareAuth.requireAuth, routeTransfer);
app.use('/api/products', routeProductAPI);

app.listen(3000, function(){
	console.log('Server is running on http://localhost:3000');
});