const { Sequelize } = require('sequelize');
const { database, database2 } = require('../config');

/*
const sequelize = new Sequelize(
    database.database, 
    database.username, 
    database.password, {
        host: database.localhost,
        dialect: 'postgres'
  });
*/ 
const sequelize = new Sequelize(
    database2.database, 
    database2.username, 
    database2.password, {
        host: database2.localhost,
        dialect: 'postgres'
  });


  module.exports = sequelize;
  //module.exports = sequelize2;