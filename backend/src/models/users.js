'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'Users',
    {
      login: DataTypes.STRING,
      password: DataTypes.STRING,
      isAdmin: DataTypes.BOOLEAN
    }, {});
    Users.associate = function(models) {
      // associations can be defined here
    };
  return Users;
};
