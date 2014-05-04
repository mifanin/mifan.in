 var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;
/*
MongoClient.connect('mongodb://rosegun.com:20020/test', function(err, db) {
    if(err) throw err;
    res=db;
    var collection = db.collection('test');
    collection.find().toArray(function(err,results){

    })
});
*/
module.exports=(function(){
	var mdb;
	function init(func){
		if(mdb){
			func(mdb);
		}else{
			MongoClient.connect('mongodb://rosegun.com:20020/test', function(err, db) {
				console.log("Connect to mongodb.");
				if(err) throw err;
				mdb=db;
				func(mdb);  
			});
		}
	}
	return function(func){
		init(func);
	};
})();
