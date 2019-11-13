const Sequelize = require('sequelize');
const dbcontext = require('../dbcontext');
const employeemodel = dbcontext.define('employee', {
    // attributes
    id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    employeename: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    employeid: {
        type: Sequelize.STRING
    },
    roleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    designation:{
        type: Sequelize.STRING
    },
    joiningDate: {
        type: Sequelize.DATE
    },
    salary:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    absentDeduction:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    catagory:{
        type: Sequelize.STRING
    },
    otherinfo:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    },
    password:{
        type:Sequelize.STRING
    },
    phone:{
        type: Sequelize.STRING
    },
    image1:{
        type: Sequelize.STRING
    },
  }, {
    // options
  }
);


module.exports = employeemodel;