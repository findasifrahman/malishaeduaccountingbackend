const Sequelize = require('sequelize');
const dbcontext = require('../dbcontext');
const degree = dbcontext.define('degree', {
    // attributes
    id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    degree: {
      type: Sequelize.STRING,
      allowNull: false
    },
    
  }, {
    // options
  }
);

module.exports = degree;