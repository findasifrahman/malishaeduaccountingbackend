var app = require('express')();
var validatetoken = require('./login').validateTokenAdminAccounts;
var cors = require('cors');
app.use(cors());
var models = require('../models/purchasemodels');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
app.get("/",validatetoken,function(req,res,next){
    models.findAll().then(result => {
        res.json(result)
        //console.log(result)
    }).catch(err  => {res.status(400).send(err);console.log(err)});    
})
app.get("/getbyid",function(req,res,next){
    console.log(req.query.id);
    models.findOne({
        where: {
           id: req.query.id
        }
     }).then(result => {
           res.json(result)
           //console.log(result)
       })
       .catch(err  => {res.status(400).send(err);;console.log(err)});   
})
app.get("/getbydate",function(req,res,next){
    console.log(req.query.date1);
    console.log(req.query.date2);
    var startDate = new Date(req.query.date1);
    var endDate = new Date(req.query.date2);
    models.findAll({
        where: {
            date: {
                [Op.between]: [startDate, endDate]
            }
        }
     }).then(result => {
         console.log(result)
           res.json(result)
    }).catch(err  => {res.status(400).send(err);;console.log(err)});   
})
app.post('/',validatetoken , function(req, res,next){
    console.log(req.body);
    let { serialid,purchasedby,loggeduser,date,clientid,clientName,incomeType,price,quantity,additionalPrice,discount,totalPrice,additionalInfo } = req.body;
    models.create({
        serialid,purchasedby,loggeduser,date,clientid,clientName,incomeType,price,quantity,additionalPrice,discount,totalPrice,additionalInfo
    }
    ).then(result => res.status(200).send(result))
    .catch(err => {res.status(400).send(err);console.log(err);});
})
app.put('/',validatetoken, function(req, res,next){
    console.log("inside update");
    console.log(req.body.Id);

    let { id,serialid,purchasedby,loggeduser,date,clientid,clientName,incomeType,price,quantity,additionalPrice,discount,totalPrice,additionalInfo } = req.body;
      // Insert into table
      models.update({
        serialid,purchasedby,loggeduser,date,clientid,clientName,incomeType,price,quantity,additionalPrice,discount,totalPrice,additionalInfo
      },{ where: { id: req.body.Id } })
        .then(result => res.status(200).send(result))
        .catch(err => {res.status(400).send(err);console.log(err)});
})
app.delete('/',validatetoken, (req, res,next) => {
    console.log("inside delete");

    models.destroy({
        where: { id: req.query.id }         
    }).then(result => {
        models.findAll().then(result => {
            res.json(result)
            //console.log(result)
        })
        .catch(err  => {res.status(400).send(err);console.log(err)}); 
    })
    .catch(err => {res.status(400).send(err);console.log(err)});
});

module.exports = app;