const Sequelize = require('sequelize');
const dbcontext = require('../dbcontext');
const companymodel = dbcontext.define('company', {
    // attributes
    id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    companyname: {
      type: Sequelize.STRING
    },
    address:{
      type: Sequelize.STRING
    },
    phone:{
      type: Sequelize.STRING
    },
    tel:{
      type: Sequelize.STRING
    },
    logo:{
      type: Sequelize.STRING
    }
  }, {
    // options
  }
);


module.exports = companymodel;