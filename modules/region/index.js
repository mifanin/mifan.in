var fs=require('fs');
var files=fs.readdirSync(__dirname);

function readJson(){
	var file='beijing.json';
	return fs.readFileSync(__dirname+'/'+file);
}

exports.getLocation=function(){
	return eval(String(readJson()));
}
