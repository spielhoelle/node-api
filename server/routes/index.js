module.exports = function(router){
  router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
  });

  return router;
}



