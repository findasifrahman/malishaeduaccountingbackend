const Sequelize = require('sequelize');
const dbcontext = require('../dbcontext');
const inventoryitem = dbcontext.define('inventoryitem', {
    // attributes
    id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    inventoryitemname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    
  }, {
    // options
  }
);

module.exports = inventoryitem;