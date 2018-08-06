var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const http = require('http');
const axios = require("axios");
const port = process.env.PORT || 4001;
const index = require("./routes/index");
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const mongoose = require('./lib/mongoose');

var app = express();
var server = app.listen(port);

var io = require('socket.io').listen(server);

// routers
let indexRouter = require('./routes/index');
let accountsRouter = require('./routes/accounts');
let locationsRouter = require('./routes/locations');
let commentsRouter = require('./routes/comments');

io.on("connection", socket => {
  console.log("New client connected");

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.disable('etag');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: '59afe26ee75335772683006cae8c131535c14cb54856e8d30cdf0e091f4f9de9553e0e92b6109224a24bb954a3c8439b',
  cookie: {domain: 'localhost', path: '/', httpOnly: true, secure: false, maxAge: null },
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
}));

// routes
app.use('/', indexRouter);
app.use('/accounts', accountsRouter);
app.use('/locations', locationsRouter);
app.use('/comments', commentsRouter);

// no route matches
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
