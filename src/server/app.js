var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var mongoose = require('mongoose');
var booksRouter = require('./routes/book');

var dbUser = 'pedropdc';
var dbPass = 'papucho312';
var dbConnectionString = `mongodb://${dbUser}:${dbPass}@ds253891.mlab.com:53891/books`;

var staticPath = path.join(__dirname,'../../dist/mean-ng6');

var app = express();

mongoose.connect(dbConnectionString, { useNewUrlParser: true })
    .then(function(){ 
        console.log('Connection succesfully');
    })
    .catch(function(error){ 
        console.log('Error',error);
    });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//To load Angular App bundles and static files
app.use(express.static(staticPath));
//reference to index.html
app.use('/', express.static(staticPath));
//Handle Node Api
app.use('/api/books', booksRouter);

//catch errors
app.use(function(req,res,next){
    next(createError(404));
});

//error handler
app.use(function(error,req,res,next){
    // set locals, only providing error in development
    res.locals.message = error.message;
    res.locals.error = req.app.get('env') === 'development' ? error : {};

    // render the error page
    res.status(error.status || 500);
    res.sendStatus(error.status);
});

module.exports = app;