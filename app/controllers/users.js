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

	model.User.userExists(req.body.email)
	.then( user => {
		if(user !== null) {
			// if this emailaddress is known then compare passwords 
			bcrypt.compare(req.body.password, user.password).then( result => {
				if(result) {
					req.session.user = user;
					res.redirect('/');
				} else {
					res.redirect('/?message=' + encodeURIComponent("Password is incorrect."));
				}
			})
		} else {
			res.redirect('/?message=' + encodeURIComponent("There is no existing account with this emailaddress."))
		}
	})
	.catch(e => console.error(e.stack));
});

// GET PAGE "REGISTER" 
router.get('/register', function(req, res) {
	res.render('register', {emailerror: req.query.email, passworderror: req.query.password,}); 
});

// POST ACTION "REGISTER"
router.post('/register', function(req, res){

	// Catch all values from form fields into an object
	const registration = {
		firstname: req.body.firstname,
		lastname: req.body.lastname,
        dob: `${req.body.dob_year}-${req.body.dob_month}-${req.body.dob_day}`,
        country: req.body.country,
        twitter_account: req.body.twitter_account,
		email: req.body.email,
		password: req.body.password,
	};

	// check wether user already exists
	model.User.userExists(req.body.email)
	.then( user => {
		if(user !== null) {
			res.redirect('/users/register?email=' + encodeURIComponent("You already have an account on this emailaddress. Please use a different emailaddress or log in."))
		} else if(req.body.passwordCheck !== req.body.password) {
			//if passwords are not equal
			res.redirect('/users/register?password=' + encodeURIComponent("Passwords don't match."))
		} else {
			//if not, create, login and return new user with hashed password
			model.User.create(registration).then( user => {
				req.session.user = user;	
				res.redirect('/');
			})
			.catch(e => console.error(e.stack));
		}
	})
});

// GET ACTION "SIGN OUT" 
router.get('/logout', function(req, res) {
	req.session.destroy( (error) => {
		if(error) {
			throw error;
		}
		res.redirect('/?message=' + encodeURIComponent("Successfully logged out."));
	}); 
});

// GET ACTION "CHECK SESSION"
router.get('/checksession', function(req, res) {
	if(req.session.user !== null) {
		res.send({session: true})
	} else {
		res.send({session: false})
	}
});

module.exports = router;