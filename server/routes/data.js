var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  console.log('here!');
  res.send('hello');
});

router.post('/', function(req, res) {
  res.send('got it!');
});

router.get('/kris', function(req, res) {
  res.send('kris');
});

module.exports = router;
