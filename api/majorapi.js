var app = require('express')();
var validatetoken = require('./login').validateTokenAll;
var cors = require('cors');
app.use(cors());
var models = require('../models/majormodels');

app.get("/",/*validatetoken,*/function(req,res,next){
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
app.post('/',/*validatetoken,*/ function(req, res,next){
    console.log("inside add");
    let { major } = req.body;
    models.create({
        major,
    }
    ).then(result => res.status(200).send(result))
    .catch(err => {res.status(400).send(err);console.log(err);});
})
app.put('/'/*,validatetoken*/, function(req, res,next){
    console.log("inside update");
    console.log(req.body.Id);

    let { id,major } = req.body;
      // Insert into table
      models.update({
        major
      },{ where: { id: req.body.Id } })
        .then(result => res.status(200).send(result))
        .catch(err => {res.status(400).send(err);console.log(err)});
})
app.delete('/',/*validatetoken,*/ (req, res,next) => {
    console.log("inside delete");
    /*productgroupmodel.destroy({
        where: { Id: req.query.id }         
    }).then(result => res.status(200).send({"ok":"ok"}))
    .catch(err => {next(err);console.log(err)});*/
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