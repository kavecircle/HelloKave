/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Registering users
app.get( '/users/register', userRoutes.showRegistrationForm );
app.post( '/users/register', userRoutes.createUser );

//-- Authenticating users
app.get( '/users/login', userRoutes.showLoginForm );
app.post( '/users/login', userRoutes.createSession );