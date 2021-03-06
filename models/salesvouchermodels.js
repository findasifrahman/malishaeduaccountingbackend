const Sequelize = require('sequelize');
const dbcontext = require('../dbcontext');
const salesVoucher = dbcontext.define('salesVoucher', {
    // attributes
    id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    voucherid: {
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
    incomeType: {
        type: Sequelize.STRING
    },
    packageAmount: {
        type: Sequelize.INTEGER
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

module.exports = salesVoucher;