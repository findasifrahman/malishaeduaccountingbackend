const Sequelize = require('sequelize');
const dbcontext = require('../dbcontext');
const officialexpenditure = dbcontext.define('officialexpenditure', {
    // attributes
    id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    officialexpendituretype: {
      type: Sequelize.STRING
    },
    
  }, {
    // options
  }
);

module.exports = officialexpenditure;