const router = require('express').Router();
const Bear = require('../models/bear');

module.exports = function(bear_routes){
  router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
  });


  return router;
}



