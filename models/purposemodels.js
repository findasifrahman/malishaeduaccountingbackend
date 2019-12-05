const Sequelize = require('sequelize');
const dbcontext = require('../dbcontext');
const purpose = dbcontext.define('purpose', {
    // attributes
    id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    purpose: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }, {
    // options
  }
);

module.exports = purpose;