/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var User = require('mongoose').model('User');

//-- Registering users
module.exports.showRegistrationForm = function( req, res, next ) {
    res.render('register');
};

module.exports.createUser = function( req, res, next ) {
    User.register( req.body.email, req.body.password, function( err, user ) {
        if( err ) {
            return next( err );
        }
        req.login( user, function( err ){
            if( err ){
                return next( err );
                res.redirect('/');
            }
        });
    });
};
//-- --------------

//-- Authenticating users
module.exports.showLoginForm = function( req, res, next ){
    res.render('login');
};

module.exports.createSession = passport.authenticate( 'local', {
    successRedirect: '/',
    failureRedirect: '/login'
});
//-- --------------

