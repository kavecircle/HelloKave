/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var User = require('./models/user');
var passport = require('./passport');

//Intial VIEW
app.engine('jade', require('jade').__express);
app.engine('html', require('ejs').__express);

app.get('/html', function(req, res, next) {
    res.render('index.html');
} );
app.get('/jade', function(req, res, next) {
    res.render('index.jade');
} );

app.get('/', function(req, res, next) {
    res.send('Hello, Kave!!');
} );


mongoose.connect('mongodb://localhost/chapter01', function(err) {
    if( err ) throw err;
});



app.use(require('cookie-parser')('my secrt string'));
app.use(require('express-session')({ secret: "my other secret string" }));
app.use(require('body-parser')());
app.use(passport.intialize());
app.use(passport.session());



app.listen(3000);
console.log('Express started on port 3000');
