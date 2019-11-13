const Sequelize = require('sequelize');
const dbcontext = require('../dbcontext');
const payroll = dbcontext.define('payroll', {
    // attributes
    id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    employeename: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    employeeid: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.DATE
    },
    allocatedSalay: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    bonus: {
        type: Sequelize.INTEGER
    },
    absentDays: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    lateDays: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    otherDeduction: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    SalaryPayable: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    additionalInfo: {
        type: Sequelize.STRING
    },
  }, {
    // options
  }
);

module.exports = payroll;