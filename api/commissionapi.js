var app = require('express')();
var validatetoken = require('./login').validateTokenAdminAccounts;

var cors = require('cors');
app.use(cors());
var model = require('../models/commissionmodels');

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
app.get("/getbyclient",function(req,res,next){
    console.log(req.query.idclientName);
    model.findOne({
        where: {
            agentname: req.query.idclientName
        }
     }).then(result => {
         if(result != null){
            res.json(result)
         }
         else{
            res.json("false")
         }
       }).catch(err  => {res.status(400).send(err);console.log(err)});   
})

app.post('/',/* validatetoken,*/function(req, res,next){
    console.log("inside add");
    console.log(req.body);
    let { agentname,enteredby,fromdate,todate,totalamount,dueamount,commission,additionalInfo} = req.body;
    model.create({
        agentname,enteredby,fromdate,todate,totalamount,dueamount,commission,additionalInfo
    }
    ).then(result => res.status(200).send(result))
    .catch(err => {res.status(400).send(err);console.log(err);});
})
app.put('/', function(req, res,next){
    console.log("inside update");
    console.log(req.body.Id);
    console.log(req.body);

    let { id,agentname,enteredby,fromdate,todate,totalamount,dueamount,commission,additionalInfo } = req.body;
      // Insert into table
      model.update({
        agentname,enteredby,fromdate,todate,totalamount,dueamount,commission,additionalInfo,
      },{ where: { id: req.body.Id } })
        .then(result => res.status(200).send(result))
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