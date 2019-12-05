const Sequelize = require('sequelize');
const dbcontext = require('../dbcontext');
const nationality = dbcontext.define('nationality', {
    // attributes
    id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nationality: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    
  }, {
    // options
  }
);

module.exports = nationality;