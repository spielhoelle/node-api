var mongoose   = require('mongoose');

var dbConfig = require('./db');

mongoose.connect(dbConfig.url);

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var Bear     = require('./models/bear');
const router = require('express').Router();
var broutes     = require('./routes/bears')(router);


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', broutes);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
