// MODELS -- index.js

//-----DEPENDENCIES & MODULES-----//
const Sequelize = require('sequelize');
const sequelize = new Sequelize('emoji_analysis', process.env.POSTGRES_USER, null, {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,
    logging: false
});


//-----MODEL DEFINITIONS-----//
const User = sequelize.import('./users');
const Search = sequelize.import('./searches');


//-----RELATION DEFINITIONS-----//
User.hasMany(Search);
Search.belongsTo(User);

sequelize.sync();

//-----EXPORTS-----//
exports.sequelize = sequelize;
exports.Sequelize = Sequelize;
exports.Search = Search;
exports.User = User;

//-----NOTES !!!!!--------------------
// if we write general functions, we need to export them here
// (not specific to User or Search tables)

