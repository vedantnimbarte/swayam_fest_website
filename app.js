var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var connection = require('./connection')
var indexRouter = require('./routes/index');
var approvalRouter = require('./routes/approval')
var approvedRouter = require('./routes/approved')
var loginRouter = require('./routes/login')
var logoutRouter = require('./routes/logout')
var editUserInfo = require("./routes/editUser")
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/approvalRequest', approvalRouter);
app.use('/approvedRequest', approvedRouter);
app.use('/login', loginRouter)
app.use('/logout', logoutRouter)
app.use('/editInfo', editUserInfo)

app.listen(3000, () => {
  console.log("Listening on port 3000")
})
