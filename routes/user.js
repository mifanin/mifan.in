var mongo = require('../modules/mongo');  
/*
 * GET users listing.
 */

exports.list = function(req, res){
	var user=req.query.u;
  	mongo(function(db){
		var test=db.collection('test');
		if(user){
			var reg=new RegExp(user);
			test.find({user:reg}).toArray(function(err,results){
				res.send(results)
			});
		}else{
			test.find().toArray(function(err,results){
				res.send(results)
			});
		}
	});
};