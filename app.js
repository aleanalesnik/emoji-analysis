// ---------- IMPORT DEPENDENCIES
const express = require('express')
const app = express();
const myport = process.env.PORT || 3000;
const bodyParser = require('body-parser')
const model = require('./app/models'); // require exported table definitions and associations
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store);



// ---------- CONFIG MODULES
app.use(express.static('public'))
app.set('views','app/views')
app.set('view engine','pug')
app.use(bodyParser.urlencoded({extended: true}));



// ---------- SESSIONS 
app.use(session({
	store: new SequelizeStore({
		db: model.sequelize,
		checkExpirationInterval: 15 * 60 * 1000, // The interval at which to cleanup expired sessions in milliseconds.
		expiration: 24 * 60 * 60 * 1000 // The maximum age (in milliseconds) of a valid session.
	}),
	secret: "safe",
	saveUninitialized: true,
	resave: false
}));



// ---------- NEEDS TO BE AT BOTTOM OTHERWISE EVERYTHING BREAKS
app.use(require('./app/controllers'));



// ---------- SERVER SET UP 
app.listen(myport, function(){
	console.log("App listening on port 3000")
});