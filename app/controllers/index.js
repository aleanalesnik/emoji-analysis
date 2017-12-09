// CONTROLLERS -- index.js

//-----DEPENDENCIES & MODULES-----//
const express = require('express');
const router = express.Router();
const model = require('../models');


//-----ROUTING-----//
router.use('/users', require('./users'));
router.use('/searches', require('./searches'));


// GET PAGE "HOME"
router.get('/', function(req, res){
	res.render('index', {session: req.session.user});  
});

// GET PAGE "ABOUT"
router.get('/about', function(req, res){
	res.render('about');  
});

// GET PAGE "FAQ"
router.get('/faq', function(req, res){
	res.render('faq');  
});

// GET PAGE "CONTACT"
router.get('/contact', function(req, res){
	res.render('contact');  
});


module.exports = router;

