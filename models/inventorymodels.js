const Sequelize = require('sequelize');
const dbcontext = require('../dbcontext');
const inventory = dbcontext.define('inventory', {
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
    unitPrice: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    additionalPrice: {
        type: Sequelize.INTEGER
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    totalPrice: {
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

module.exports = inventory;