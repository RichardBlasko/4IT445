'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, {
    hooks: {
     beforeCreate: (Users) => {
       const salt = bcrypt.genSaltSync();
       Users.password = bcrypt.hashSync(Users.password, salt);
     }
   },
  });
    Users.associate = function(models) {
    // associations can be defined here
  };
    var bcrypt = require('bcryptjs')
    Users.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  }
  return Users;
};
