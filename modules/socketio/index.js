/*
* socket.io receive and handle it.
*/
//var phantom=require('../phantomjs');
String.prototype.trim = function(){
	return this.replace(/^ +| +$/gi,'');
}
exports.handle=function(socket,io){
	socket.on('sug',function(data){
		console.log(data);
		socket.emit('sug',['中国','中国人','我是你的'])
	});
}