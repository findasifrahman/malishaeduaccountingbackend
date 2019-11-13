var app = require('express')();
var validatetoken = require('./login').validateTokenAdmin;

var cors = require('cors');
app.use(cors());
var model = require('../models/employeemodels');

app.get("/",validatetoken,function(req,res,next){
    model.findAll().then(result => {
           res.json(result)
           //console.log(result)
       }).catch(err  => {res.status(400).send(err);console.log(err)});   
})
app.get("/getbyid",function(req,res,next){
    console.log(req.query.id);
    model.findOne({
        where: {
           id: req.query.id
        }
     }).then(result => {
           res.json(result)
           //console.log(result)
       }).catch(err  => {res.status(400).send(err);console.log(err)});   
})

app.post('/',validatetoken, function(req, res,next){
    console.log("inside add");
    console.log(req.body);
    let { employeename,employeid,designation,roleId,joiningDate,salary,absentDeduction,catagory,otherinfo,
        email,password,phone,image1 } = req.body;
    model.create({
        employeename,employeid,designation,roleId,joiningDate,salary,absentDeduction,catagory,otherinfo,
        email,password,phone,image1
    }
    ).then(result => res.status(200).send(result))
    .catch(err => {res.status(400).send(err);console.log(err);});
})
app.put('/',validatetoken, function(req, res,next){
    console.log("linside update");
    console.log(req.body.Id);
    console.log(req.body.employeid)
    console.log(req.body);
    console.log("la la");
    let { id,employeename,employeid,designation,roleId,joiningDate,salary,absentDeduction,catagory,otherinfo,
        email,password,phone,image1 } = req.body;
      // Insert into table
      model.update({
        employeename,employeid,designation,roleId,joiningDate,salary,absentDeduction,catagory,otherinfo,
        email,password,phone,image1
      },{ where: { id: req.body.Id } })
        .then(result => res.status(200).send(result))
        .catch(err => {res.status(400).send(err);console.log(err)});
})
app.delete('/',validatetoken, (req, res,next) => {
    console.log("inside delete");

    model.destroy({
        where: { id: req.query.id }         
    }).then(result => {
        model.findAll().then(result => {
            res.json(result)
            //console.log(result)
        })
        .catch(err  => {res.status(400);console.log(err)}); 
    })
    .catch(err => {res.status(400);console.log(err)});
});

module.exports = app;