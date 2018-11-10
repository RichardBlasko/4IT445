const env = process.env.NODE_ENV || 'development';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.js')[env];
const DataTypes = require('sequelize/lib/data-types');

const basename = path.basename(__filename);

let db = {};
let sequelize = {};

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  sequelize = new Sequelize(
    config.username,
    config.password,
    config.database,
    config.host,
    config.dialect
  );
}

//Test connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



// Add all modules to this array
const modelModules = [
  require('./product'),
  require('./contactform'),
];

modelModules.forEach(modelModule => {
  const model = modelModule(sequelize, DataTypes);
  db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
