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

    User.createUser = ( registerDetails ) => {
        return bcrypt.hash(registerDetails.password, 10).then( hash => {
            return User.create({
                firstname: registerDetails.firstname, 
                lastname: registerDetails.lastname,
                dob: registerDetails.dob,
                country: registerDetails.country,
                twitter_account: registerDetails.twitter_account,
                email: registerDetails.email,
                password: hash
            });
        });
    }; 

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