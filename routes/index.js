      
/*
 * GET home page.
 */

exports.index = function(req, res){
	var resObj={title:'好吃的米饭！',weichat:null};
	var userAgent=req.header('user-agent');
	if(userAgent.toLowerCase().indexOf('micromessenger')!==-1){
		resObj.weichat=true;
	}
	console.log(resObj);
	res.render('index', resObj);
};

exports.upload=function(req,res){
	console.log(req.files);
	res.send({result:'ok'})
};

exports.map=function(req,res){
	res.render('maptest');
};

exports.angular=function(req,res){
	res.render('angular');
}