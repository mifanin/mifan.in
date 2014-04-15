var sql=require(__dirname+'/modules/mysql');
var region = require(__dirname+'/modules/region');
var beijing=region.getLocation();
sql.query('insert into test.location (locationid,name,displayname) values (?,?,?)',['010','beijing','北京'],function(res){
});
var mainid='010'
var genId5=(function(){
	var basic=10000;
	return function(){
		return 	basic++;
	}
})();

var genId8=(function(){
	var basic=10000000;
	return function(){
		return 	basic++;
	}
})();
for(var i in beijing){
	var region=beijing[i].parent;
	region.id='010'+genId5();
	
	sql.query('insert into test.location (locationid,name,displayname) values (?,?,?)',[region.id,region.name,region.value],function(res){

	});
	
	var children=beijing[i].children;
	for(var j in children){
		var subRegion=children[j];
		subRegion.id=region.id+genId8();
		sql.query('insert into test.location (locationid,name,displayname) values (?,?,?)',[subRegion.id,subRegion.name,subRegion.value],function(res){

		});
	}
}
