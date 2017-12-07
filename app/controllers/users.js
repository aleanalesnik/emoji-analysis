// CONTROLLERS -- users.js

// DEPENDENCIES & MODULES 
const express = require('express');
const router = express.Router();
const model = require('../models');
const fileUpload = require('express-fileupload');
const bcrypt = require('bcrypt');
router.use(fileUpload());
 

//----------ROUTING----------

// GET PAGE "LOG IN" 
router.post('/login', function(req, res) {

	//catch password from form field
	const password = req.body.password;

	model.User.userExists(req.body.email)
	.then( user => {
		if(user !== null) {
			// if this emailaddress is known then compare passwords 
			bcrypt.compare(password, user.password).then( result => {
				if(result) {
					req.session.user = user;
					res.redirect('/', {session: req.session.user});
				} else {
					res.redirect('/?message=' + encodeURIComponent('Password is incorrect')); 
				}
			})
		} else {
			res.redirect('/?message=' + encodeURIComponent(`There is no existing account with this emailaddress`));
		}
	})
	.catch(e => console.error(e.stack));
});

// GET PAGE "REGISTER" 
router.get('/register', function(req, res) {
	res.render('register'); 
});

// POST ACTION "REGISTER"
router.post('/register', function(req, res){
	
	//Catch all values from form fields into an object
	const registration = {
		firstname: req.body.firstname,
		lastname: req.body.lastname,
        dob: req.body.dob,
        country: req.body.country,
        twitter_account: req.body.twitter_account,
		email: req.body.email,
		password: req.body.password,
	};

	//check wether user already exists
	model.User.userExists(req.body.email)
	.then( user => {
		if(user !== null) {
			res.redirect('users/register?message=' + encodeURIComponent("You already have an account on this emailaddress. Please use a different emailaddress or log in."))
		} else {
			//if not, create, login and return new user with hashed password
			model.User.createUser(registration).then( user => {
				req.session.user = user;	
				res.redirect('/', {session: req.session.user});
			})
			.catch(e => console.error(e.stack));
		}
	})
});

// GET ACTION "SIGN OUT" ----------------------------------
router.get('/logout', function(req, res) {
	req.session.destroy( (error) => {
		if(error) {
			throw error;
		}
		res.redirect('/?message=' + encodeURIComponent("Successfully logged out."));
	}); 
});


module.exports = router;