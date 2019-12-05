const Sequelize = require('sequelize');
const dbcontext = require('../dbcontext');
const commmodel = dbcontext.define('salescommission', {
    // attributes
    id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    agentname:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    enteredby:{
        type: Sequelize.STRING
    },
    fromdate: {
        type: Sequelize.DATE
    },
    todate: {
        type: Sequelize.DATE
    },
    totalamount:{
      type: Sequelize.INTEGER,
    },
    dueamount:{
      type: Sequelize.INTEGER
    },
    commission:{
      type: Sequelize.INTEGER
    },
    additionalInfo:{
      type: Sequelize.STRING
    },
  
  }, {
    // options
  }
);


module.exports = commmodel;