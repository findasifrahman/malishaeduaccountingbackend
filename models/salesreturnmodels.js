const Sequelize = require('sequelize');
const dbcontext = require('../dbcontext');
const salesreturnmodel = dbcontext.define('salesreturn', {
    // attributes
    id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    returnid: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    studentoragentName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    studentname:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    loggeduser:{
        type: Sequelize.STRING
    },
    servedby:{
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.DATE
    },
    returnAmount: {
        type: Sequelize.INTEGER
    },
    prevdues: {
        type: Sequelize.INTEGER
    },
    currentdues: {
        type: Sequelize.INTEGER
    },
    additionalInfo: {
        type: Sequelize.STRING
    },
  }, {
    // options
  }
);


module.exports = salesreturnmodel;