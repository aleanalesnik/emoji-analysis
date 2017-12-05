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
router.get('/login', function(req, res) {
	res.render('login', {message: req.query.message}); 
});

// GET PAGE "REGISTER" 
router.get('/register', function(req, res) {
	res.render('register'); 
});


module.exports = router;