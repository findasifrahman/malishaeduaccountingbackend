const Sequelize = require('sequelize');
const dbcontext = require('../dbcontext');
const employees = require('./employeemodels');
const rolegroup = dbcontext.define('roles', {
    // attributes
    id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rolename: {
      type: Sequelize.STRING
    },
    
  }, {
    // options
  }
);
rolegroup.employees = rolegroup.hasMany(employees, { onDelete: 'CASCADE' });//, {foreignKey: 'postId', sourceKey: 'Id'});
employees.belongsTo(rolegroup, { onDelete: 'CASCADE' });//, {foreignKey: 'postId', targetKey: 'Id'});

module.exports = rolegroup;