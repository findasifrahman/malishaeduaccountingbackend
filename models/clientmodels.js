const Sequelize = require('sequelize');
const dbcontext = require('../dbcontext');
const clientmodel = dbcontext.define('client', {
    // attributes
    id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    clientname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    clientId:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    address:{
      type: Sequelize.STRING
    },
    phone:{
      type: Sequelize.STRING
    },
    otherinfo:{
      type: Sequelize.STRING
    }
  }, {
    // options
  }
);


module.exports = clientmodel;