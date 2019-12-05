const Sequelize = require('sequelize');
const dbcontext = require('../dbcontext');
const university = dbcontext.define('university', {
    // attributes
    id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    university: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    
  }, {
    // options
  }
);

module.exports = university;