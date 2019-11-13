var app = require('express')();
var validatetoken = require('./login').validateTokenAdmin;

var cors = require('cors');
app.use(cors());
var companymodel = require('../models/companymodels');

app.get("/",validatetoken,function(req,res,next){
    companymodel.findAll().then(result => {
           res.json(result)
           //console.log(result)
       }).catch(err  => {res.status(400).send(err);console.log(err)});   
})
app.get("/getbyid",function(req,res,next){
    console.log(req.query.id);
    companymodel.findOne({
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
    let { companyname,address,phone,tel,logo } = req.body;
    companymodel.create({
        companyname,address,phone,tel,logo
    }
    ).then(result => res.status(200).send(result))
    .catch(err => {res.status(400).send(err);console.log(err);});
})
app.put('/',validatetoken, function(req, res,next){
    console.log("inside update");
    console.log(req.body.Id);
    console.log(req.body);

    let { id,companyname,address,phone,tel,logo } = req.body;
      // Insert into table
      companymodel.update({
        companyname,address,phone,tel,logo
      },{ where: { id: req.body.Id } })
        .then(result => res.status(200).send(result))
        .catch(err => {res.status(400).send(err);console.log(err)});
})
app.delete('/',validatetoken, (req, res,next) => {
    console.log("inside delete");

    companymodel.destroy({
        where: { id: req.query.id }         
    }).then(result => {
        companymodel.findAll().then(result => {
            res.json(result)
            //console.log(result)
        })
        .catch(err  => {res.status(400);console.log(err)}); 
    })
    .catch(err => {res.status(400);console.log(err)});
});

module.exports = app;