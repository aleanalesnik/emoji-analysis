// CONTROLLERS -- searches.js

// DEPENDENCIES & MODULES 
const express = require('express');
const router = express.Router();
const model = require('../models');
const fileUpload = require('express-fileupload');
const bcrypt = require('bcrypt');
router.use(fileUpload());


//----------ROUTING----------

// GET PAGE "SEARCH RESULTS" 
router.get('/searchresults', function(req, res) {
	res.render('searchresults'); 
});



module.exports = router;