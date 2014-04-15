var mysql = require('mysql');
var mysql_config={
	  host     : 'linode.rosegun.com',
	  user     : 'hsw0911',
	  password : 'hsw0912',
	};
var getPool=(function(){
	var pool=mysql.createPool(mysql_config);
	console.log("Create Mysql pool:"+mysql_config);
	return function(){
		return pool;
	}
})();

exports.query=function(sql,options,callback){
	getPool().query(sql,options,function(err,res){
		if(err) console.log("Query mysql failed,using sql:"+sql+".Error for:"+err);
		callback(res);
	});
}