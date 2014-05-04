
/**
 * Module dependencies.
 */

var express = require('express');
var https = require('https');
var fs = require('fs');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var multipart = require('connect-multiparty');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon(__dirname+'/mifan.ico'));
app.use(express.logger('dev'));
app.use(multipart({ uploadDir: __dirname+'/upload' }));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('less-middleware')( path.join(__dirname, 'public') ));
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


app.get('/', routes.index);
app.get('/users', user.list);
app.post('/upload',routes.upload);
app.get('/map',routes.map);
app.get('/angular',routes.angular);
/*
var server=http.createServer(app);
server.listen(80, function(){
  console.log('Mifan server listening on port ' + 80);
});
*/

http.createServer(function(req,res){
	res.writeHead (301, {'Location': 'https://'+req.headers.host+req.url});
	res.end();
}).listen(80);

var options = {
  key: fs.readFileSync(__dirname+'/cert/mifan.key'),
  cert: fs.readFileSync(__dirname+'/cert/mifan.crt')
};

var httpsServer = https.createServer(options,app);
httpsServer.listen(443, function(){
  console.log('Mifan https server listening on port ' + 443);
});
//require('socket.io').listen(server);
var io = require('socket.io').listen(httpsServer);
io.set('log level', 2);
io.sockets.on('connection', function (socket) {
	socket.emit('connected',{res:true})
	require(__dirname+'/modules/socketio').handle(socket,io);
});