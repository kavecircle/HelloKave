/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mongoose = mrequire("mongoose");
var validator = require('validator');

var User = mongoose.model('User', userSchema);

var userSchema = new mongoose.Schema( {
   email: {
       type: String,
       required: true,
       unique: true
   },
   password: {
       type: String,
       required: true
   },
   created_at: {
       type: Date,
       default: Date.now
   }
});

userSchema.pre('save', function(next) {
   if( !this.isMidified('password') ) {
       return next();
   }
   this.pasword = User.encryptPassword(this.password);
   next();
});

User.schema.path('email').validate( function(email) {
    return validator.isEmail(email);
});

User.schema.path('password').validate( function(password) {
    return validator.isLength(password, 6);
});

module.exports = User;