// MODELS -- searches.js

const model = require('../models');
const bcrypt = require('bcrypt');

module.exports = ( sequelize, DataTypes ) => {

	//-----MODEL DEFINITION-----/
    const Search = sequelize.define('searches', {
        query: DataTypes.STRING,
        percent_positive: DataTypes.INTEGER,
        percent_negative: DataTypes.INTEGER,
        percent_neutral: DataTypes.INTEGER,
        tweets_surveyed: DataTypes.INTEGER
    });

    return Search;
}