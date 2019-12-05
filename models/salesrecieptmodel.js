const Sequelize = require('sequelize');
const dbcontext = require('../dbcontext');
const salesreciept = dbcontext.define('salesreciept', {
    // attributes
    id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    recieptid: {
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
    paidAmount: {
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

module.exports = salesreciept;