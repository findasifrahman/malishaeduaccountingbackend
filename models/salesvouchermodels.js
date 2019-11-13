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
    issuedemployee: {
        type: Sequelize.STRING
    },
    loggeduser:{
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.DATE
    },
    clientid:{
        type: Sequelize.STRING
    },
    clientName: {
        type: Sequelize.STRING
    },
    incomeType: {
        type: Sequelize.STRING
    },
    totalAmount: {
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