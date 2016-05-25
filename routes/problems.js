var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	
  res.render('problems', { result: 1,page: 0 });
 
});
router.get('/subset', function(req, res, next) {
	
  res.render('problemssubset', { result: 1,page: 0 });
 
});
router.get('/subsetsolution', function(req, res, next) {
	//console.log(req.body);
	var x=req.query['sets'];
	if (x == null || x == "") 
	{
	    res.render('problemssubsetsolution', { result: "Invalid Input" });
	    return ;
	}
	else if(res.length>10)
	{
		 res.render('problemssubsetsolution', { result: "Invalid Input" });
	    return ;
	}
	else
	{
    	for(var i=0;i<x.length;i++)
    	{
    		if(x[i]==" ")
    		{
    			res.render('problemssubsetsolution', { result: "Invalid Input" });
    			return ;
    		}
    		else if((!isNaN(x[i]))||((x[i]==",")))
    		{
    			
    		}
    		else
    		{
    			res.render('problemssubsetsolution', { result: "Invalid Input" });
    			return ;
    		}
    		if(i==x.length-1)
    		{
    			if(x[i]==',')
    			{
    				res.render('problemssubsetsolution', { result: "Invalid Input" });
    				return ;
    			}
    		}
    	}
	}
	var sets=x.split(",");
	function genBinary(i){
		binary="";
		while(parseInt(i)>0)
		{
			//console.log(i);
			if(parseInt(i)%2==0)
				binary+="0";
			else
				binary+="1";
			i=parseInt(i)/2;
		}
		return binary;
	}
	var exponent = Math.pow(2,sets.length);
	//console.log(sets[0]);
	
	//for(var i=0;i<sets.length;i++)
	//{
		//console.log(sets[i]);
	//}
	
	result="";
	var result=[];
	for(var i=1;i<exponent;i++)
	{
		result[i-1]="";
		var binary=genBinary(i);
		//console.log(binary+"Sets ");
		for(var j=0;j<binary.length;j++)
		{
			if(binary.charAt(j)=='1')
			{
				result[i-1]+=sets[j]+",";
				//console.log(result[i-1]);
				//console.log(sets[j]);
			}
			else
			{
				//console.log(binary.charAt(j));
			}
		}
		
		
			result[i-1] = result[i-1].substring(0,result[i-1].length-1);	
		
		//console.log(result[i-1]+"END");

		//console.log(" End");
	}
	//console.log(result);
	res.render('problemssubsetsolution', { result: result,page: 0 });
});

module.exports = router;
