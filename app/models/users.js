// MODELS -- users.js

const model = require('../models');
const bcrypt = require('bcrypt');

module.exports = ( sequelize, DataTypes ) => {

//-----MODEL DEFINITION-----/
    const User = sequelize.define('users', {
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        dob: DataTypes.DATEONLY,
        country: DataTypes.STRING,
        twitter_account: DataTypes.STRING,
        email: { type: DataTypes.STRING, unique: true},
        password: DataTypes.STRING,
    });

    User.userExists = ( email ) => {
        return User.findOne({
            where: { 
            	email: email 
            }
        });
    };

    User.checkPassword = ( password, hash ) => {
        return bcrypt.compare(password, hash).then((res) => {
            return res;
        })
    }
    return User;
}