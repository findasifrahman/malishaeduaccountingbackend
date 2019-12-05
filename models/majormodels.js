const Sequelize = require('sequelize');
const dbcontext = require('../dbcontext');
const major = dbcontext.define('major', {
    // attributes
    id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    major: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    
  }, {
    // options
  }
);

module.exports = major;