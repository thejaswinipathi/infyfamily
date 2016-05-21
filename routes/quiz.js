var express = require('express');
var router = express.Router();

var array=[["Genilia","Kajol","Deepika","Kareena"],["Genilia","Kajol","Deepika","Kareena"],["Genilia","Deepika","Kajol","Kareena"],["Kareena","Genilia","Deepika","Kajol"],["Katrina","Shilpashetty","Sridevi","Kareena"],["Katrina","Shilpashetty","Sridevi","Kareena"],["Katrina","Shilpashetty","Sridevi","Kareena"],["SRK","Ranbir","Hrithik","Arjun Kapoor"]];
var answers=[2,0,2,0,0,1,2,0];
/* GET home page. */
/*
router.get('/:id/:score', function(req, res, next) {
	//res.render('index', { title: 'Express' });
  res.render('quiz', { correct:0,score:req.params.score,image:array[req.params.id][answers[req.params.id]],optiona:array[req.params.id][0],optionb:array[parseInt(req.params.id)][1],optionc:array[parseInt(req.params.id)][2],optiond:array[parseInt(req.params.id)][3],result: answers[req.params.id],page: req.params.id ,next:parseInt(req.params.id)+1});
});
*/
router.get('/', function(req, res, next) {
  res.render('quiz', { correct:0,score:0,image:array[0][answers[0]],optiona:array[0][0],optionb:array[parseInt(0)][1],optionc:array[parseInt(0)][2],optiond:array[parseInt(0)][3],result: answers[0],page: 0 ,next:parseInt(0)+1});
});

router.post('/', function(req, res, next) {
	console.log(req.body);
	if(req.body.score==undefined)
	{
		req.body.score=0
		req.body.id=0;
	}
	if(req.body.id<8)
	{
		res.render('quiz', { correct:0,score:req.body.score,image:array[req.body.id][answers[req.body.id]],optiona:array[req.body.id][0],optionb:array[parseInt(req.body.id)][1],optionc:array[parseInt(req.body.id)][2],optiond:array[parseInt(req.body.id)][3],result: answers[req.body.id],page: req.body.id ,next:parseInt(req.body.id)+1});
	}
	else
	{
		res.render('finish', { score: req.body.score});
	}
  
  //res.end("Done");
});
module.exports = router;
