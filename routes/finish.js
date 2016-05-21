var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  res.render('finish', { result: 1,page: 0 });
  //res.render('index', { title: 'Express' });
});

module.exports = router;
