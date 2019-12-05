const Sequelize = require('sequelize');
const dbcontext = require('../dbcontext');
const clientgroup = dbcontext.define('clientgroup', {
    // attributes
    id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    clientgroupname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    companyname: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    otherinfo: {
      type: Sequelize.STRING
    },
  }, {
    // options
  }
);

module.exports = clientgroup;