const Sequelize = require('sequelize');
const dbcontext = require('../dbcontext');
const incomesource = dbcontext.define('incomesource', {
    // attributes
    id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    incomesourcename: {
      type: Sequelize.STRING
    },
    
  }, {
    // options
  }
);

module.exports = incomesource;