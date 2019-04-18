var createError = require('http-errors');
var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.socket=io;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var otherSocket = io.of('/other-namespace');
var othernessSocket =io.of('/otherness-namespace');

otherSocket.on('connection', function(socket){
  socket.on('p1', function(data){
    othernessSocket.emit('p1');
  });

  socket.on('p2', function(data){
    othernessSocket.emit('p2');
  });

  socket.on('p3', function(data){
    othernessSocket.emit('p3');
  });

  socket.on('p4', function(data){
    othernessSocket.emit('p4');
  });

  socket.on('p5', function(data){
    othernessSocket.emit('p5');
  });

  socket.on('p6', function(data){
    othernessSocket.emit('p6');
  });

  socket.on('p7', function(data){
    othernessSocket.emit('p7');
  });

  socket.on('p8', function(data){
    othernessSocket.emit('p8');
  });

  socket.on('p9', function(data){
    othernessSocket.emit('p9');
  });

  socket.on('p10', function(data){
    othernessSocket.emit('p10');
  });

  socket.on('p11', function(data){
    othernessSocket.emit('p11');
  });

  socket.on('p12', function(data){
    othernessSocket.emit('p12');
  });

  socket.on('p13', function(data){
    othernessSocket.emit('p13');
  });

  socket.on('p14', function(data){
    othernessSocket.emit('p14');
  });

  socket.on('p15', function(data){
    othernessSocket.emit('p15');
  });

  socket.on('p16', function(data){
    othernessSocket.emit('p16');
  });

})

module.exports = app;
