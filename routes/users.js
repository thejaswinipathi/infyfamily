var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/user', function(req, res, next) {
  res.send('Thejaswini');
});

router.get('/user/:user_name/updatemobile',function(req, res, next) {
  res.send('name updated' + user_name);
});

router.get('/user/:user_name/showmobile',function(req, res, next) {
  res.send('name updated' + user_name);
});

router.put('/user/:user_name/mobile',function(req, res, next) {
  res.send('name updated' + user_name);
});

router.get('/user/:user_name/mobile',function(req, res, next) {
  res.send('name updated' + user_name);
});

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
