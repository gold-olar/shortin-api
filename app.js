const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const db = require('./config/database');
const cors = require('cors')
require('dotenv').config();


const indexRouter = require('./routes/index');
const signupRouter = require('./routes/signup');
const signinRouter = require('./routes/signin');
const userRouter = require('./routes/users');
const addRouter = require('./routes/add')


const app = express();


//Cors Middleware
app.use(cors())

//Database Connection
mongoose.connect(db.mongoURI, {
    useNewUrlParser: true,
  })
  .then(() => console.log('Connected to DB bissh..'))
  .catch(err => console.log(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/signup', signupRouter);
app.use('/signin', signinRouter);
app.use('/user', userRouter);
app.use('/addlink', addRouter);


app.get('*', (req, res)=>{
  res.json({
    message: 'Ode Stop guessing Routes, Move ahead bissh..Get a life...'
  })
})


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

module.exports = app;
