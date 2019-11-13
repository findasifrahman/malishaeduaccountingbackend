const Sequelize = require('sequelize');
const dbcontext = require('../dbcontext');
const officecost = dbcontext.define('officecost', {
    // attributes
    id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    itemname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    itemid: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.DATE
    },
    cost: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    additionalCost: {
        type: Sequelize.INTEGER
    },
    deduction: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    totalCost: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    otherinfo: {
        type: Sequelize.STRING
    },
  }, {
    // options
  }
);

module.exports = officecost;