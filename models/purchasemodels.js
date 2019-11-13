const Sequelize = require('sequelize');
const dbcontext = require('../dbcontext');
const purchase = dbcontext.define('purchase', {
    // attributes
    id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    serialid: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    purchasedby: {
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
    price: {
        type: Sequelize.INTEGER
    },
    quantity: {
        type: Sequelize.INTEGER
    },
    additionalPrice: {
        type: Sequelize.INTEGER
    },
    discount: {
        type: Sequelize.INTEGER
    },
    totalPrice: {
        type: Sequelize.INTEGER
    },
    additionalInfo: {
        type: Sequelize.STRING
    },
  }, {
    // options
  }
);

module.exports = purchase;