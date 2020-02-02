const Sequelize = require('sequelize');
const dbcontext = require('../dbcontext');
const clientmodel = dbcontext.define('client', {
    // attributes
    id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    clientgroupname:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    date: {
      type: Sequelize.DATE
    },
    address:{
      type: Sequelize.STRING
    },
    servedby:{
      type: Sequelize.STRING
    },
    source:{
      type: Sequelize.STRING
    },
    phone:{
      type: Sequelize.STRING
    },
    otherinfo:{
      type: Sequelize.STRING
    },
    studentname:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    nationality:{
      type: Sequelize.STRING
    },
    passport:{
      type: Sequelize.STRING
    },
    university:{
      type: Sequelize.STRING
    },
    degree:{
      type: Sequelize.STRING
    },
    major:{
      type: Sequelize.STRING
    },
    packageAmount:{
      type: Sequelize.INTEGER
    },
    unit:{
      type:Sequelize.STRING

    }
  }, {
    // options
  }
);


module.exports = clientmodel;