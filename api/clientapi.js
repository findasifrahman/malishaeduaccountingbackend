var app = require('express')();
var validatetoken = require('./login').validateTokenAdminAccounts;

var cors = require('cors');
app.use(cors());
var model = require('../models/clientmodels');
var salesvouchermodel = require('../models/salesvouchermodels')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
app.get("/"/*,validatetoken*/,function(req,res,next){
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
app.get("/getbydate",function(req,res,next){
    console.log(req.query.date1);
    console.log(req.query.date2);
    var startDate = new Date(req.query.date1);
    var endDate = new Date(req.query.date2);
    model.findAll({
        where: {
            date: {
                [Op.between]: [startDate, endDate]
            }
        }
     }).then(result => {
           res.json(result)
    }).catch(err  => {res.status(400).send(err);;console.log(err)});   
})
app.get("/getbyclient",function(req,res,next){
    console.log(req.query.id);
    model.findOne({
        where: {
            clientId: req.query.id
        }
     }).then(result => {
         if(result != null){
            res.json("true")
         }
         else{
            res.json("false")
         }
       }).catch(err  => {res.status(400).send(err);console.log(err)});   
})
app.get("/getbydateemployee",function(req,res,next){
    console.log(req.query.date1);
    //console.log(req.query.client);
    var startDate = new Date(req.query.date1);
    var endDate = new Date(req.query.date2);
    model.findAll({
        where: {
            date: {
                [Op.between]: [startDate, endDate]
            },
            servedby: req.query.employee
        }
     }).then(result => {
           res.json(result)
    }).catch(err  => {res.status(400).send(err);;console.log(err)});   
})
app.get("/getbydateclient",function(req,res,next){
    console.log(req.query.date1);
    console.log(req.query.client);
    var startDate = new Date(req.query.date1);
    var endDate = new Date(req.query.date2);
    model.findAll({
        where: {
            date: {
                [Op.between]: [startDate, endDate]
            },
            clientgroupname: req.query.client
        }
     }).then(result => {
           res.json(result)
    }).catch(err  => {res.status(400).send(err);;console.log(err)});   
})
app.get("/getbyclientstudent",function(req,res,next){
    console.log(req.query.studentname);
    model.findAll({
        where: {
            studentname: req.query.studentname,
            clientgroupname: req.query.client
        }
     }).then(result => {
           res.json(result)
    }).catch(err  => {res.status(400).send(err);;console.log(err)});   
})
app.get("/getbydateclientstudent",function(req,res,next){
    console.log(req.query.date1);
    console.log(req.query.client);
    var startDate = new Date(req.query.date1);
    var endDate = new Date(req.query.date2);
    model.findAll({
        where: {
            date: {
                [Op.between]: [startDate, endDate]
            },
            clientgroupname: req.query.client,
            studentname: req.query.student
        }
     }).then(result => {
           res.json(result)
    }).catch(err  => {res.status(400).send(err);;console.log(err)});   
})
app.post('/',/* validatetoken,*/function(req, res,next){
    console.log("inside add");
    console.log(req.body);
    let { clientgroupname,date,address,servedby,source,phone,otherinfo,studentname,nationality,passport,university,degree,major, packageAmount,unit} = req.body;
    model.create({
        clientgroupname,date,address,servedby,source,phone,otherinfo,studentname,nationality,passport,university,degree,major, packageAmount, unit
    }
    ).then(result => {

        res.status(200).send(result)
    })
    .catch(err => {res.status(400).send(err);console.log(err);});
})
app.put('/', function(req, res,next){
    console.log("inside update");
    console.log(req.body.Id);
    console.log(req.body);

    let { id,clientgroupname,date,address,servedby,source,phone,otherinfo,studentname,nationality,passport,university,degree,major, packageAmount,unit } = req.body;
      // Insert into table
      model.update({
        clientgroupname,date,address,servedby,source,phone,otherinfo,studentname,nationality,passport,university,degree,major, packageAmount,unit
      },{ where: { id: req.body.Id } })
        .then(result => {
            res.status(200).send(result)
        })
        .catch(err => {res.status(400).send(err);console.log(err)});
})
app.delete('/'/*, validatetoken*/,(req, res,next) => {
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