
/**
 * Module dependencies.
 */

var express = require('express');
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

var server=http.createServer(app);
server.listen(8080, function(){
  console.log('Express server listening on port ' + 8080);
});

var io = require('socket.io').listen(server);
io.set('log level', 2);
io.sockets.on('connection', function (socket) {
	socket.emit('connected',{res:true})
	require(__dirname+'/modules/socketio').handle(socket,io);
});