var app = require('express')();
var validatetoken = require('./login').validateTokenAll;

var cors = require('cors');
app.use(cors());
var models = require('../models/purposemodels');

app.get("/",/*validatetoken,*/function(req,res,next){
    models.findAll().then(result => {
           res.json(result)
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
       }).catch(err  => {res.status(400).send(err);console.log(err)});   
})

app.post('/', function(req, res,next){
    console.log("inside add");
    console.log(req.body);
    let { purpose } = req.body;
    models.create({
        purpose
    }
    ).then(result => res.status(200).send(result))
    .catch(err => {res.status(400).send(err);console.log(err);});
})
app.put('/'/*,validatetoken*/, function(req, res,next){
    console.log("inside update");
    console.log(req.body.Id);
    console.log(req.body);

    let { id,purpose } = req.body;
      // Insert into table
      models.update({
        purpose
      },{ where: { id: req.body.Id } })
        .then(result => res.status(200).send(result))
        .catch(err => {res.status(400).send(err);console.log(err)});
})
app.delete('/'/*,validatetoken*/, (req, res,next) => {
    console.log("inside delete");

    models.destroy({
        where: { id: req.query.id }         
    }).then(result => {
        models.findAll().then(result => {
            res.json(result)
            //console.log(result)
        })
        .catch(err  => {res.status(400);console.log(err)}); 
    })
    .catch(err => {res.status(400);console.log(err)});
});

module.exports = app;