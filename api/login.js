var app = require('express')();
const jwt = require('jsonwebtoken');
var cors = require('cors');
var empmodel = require('../models/employeemodels');
var rolemodels = require('../models/rolemodels')
app.use(cors());

app.post('/', function(req, res,next){
    console.log("inside login");
    console.log(req.body);
    var user = req.body.username;
    var pass = req.body.password;
    var result = {};
    
    empmodel.findOne({
      where: {
        employeename: user
      }
    }).then(resa => {
         //res.json(result)
         if(resa !=null){
            console.log(resa.employeename)

            if(user == resa.employeename && pass == resa.password){
              console.log("milse");
              rolemodels.findOne({where: {id: resa.roleId}
              }).then(roleval =>{
                const payload = { user: user,role: roleval.rolename };
                const options = { expiresIn: '1h', issuer: 'localhost:8086' };
                const secret = 'mytoken@asif';
                const token = jwt.sign(payload, secret, options);
        
                 //console.log('TOKEN', token);
                result.token = token;
                result.status = 200;
                result.result = user;
                console.log('res--', result);
                res.status(200).send(result);
                return
              })

            }
            else{
                console.log("password dont match");
                status = 401;
                result.status = status;
                result.error = `Password failure`;
                console.log(result);
                res.status(401).send(result);
                return;
            }
          }
          else{
            status = 401;
            result.status = status;
            result.error = `Username do not exist`;
            res.status(401).send(result);
            console.log(err)
            return
          }

        
     }).catch(err  => {
        status = 401;
        result.status = status;
        result.error = `Some sort of error`;
        res.status(401).send(result);
        console.log(err)}
       );  



})

module.exports = app;

module.exports.validateTokenAdmin = (req, res, next) => {
    const authorizationHeaader = req.headers.authorization;
    console.log('validating');
    //console.log(req.headers.authorization.split(' ')[1]);
    let result;
    if (authorizationHeaader) {
      const token = req.headers.authorization.split(' ')[1]; // Bearer <token>
      const options = {
        expiresIn: '1h',
        issuer: 'localhost:8086'
      };
      try {
        // verify makes sure that the token hasn't expired and has been issued by us

        result = jwt.verify(token, 'mytoken@asif', options);
        console.log('validating');
        console.log(result.role);
        if(result.role != "admin"){
          result = { 
            error: `Role Mismatch.`,
            status: 401
          };
          res.status(401).send(result);
          return;
        }
        // Let's pass back the decoded token to the request object
        req.decoded = result;
        // We call next to pass execution to the subsequent middleware
        next();
      } catch (err) {
        result = { 
            error: `Authentication error. signature mismatch.`,
            status: 401
          };
          res.status(401).send(result);
        // Throw an error just in case anything goes wrong with verification
        throw new Error(err);
      }
    } else {
      result = { 
        error: `Authentication error. Token required.`,
        status: 401
      };
      res.status(401).send(result);
    }
  }

  module.exports.validateTokenAll = (req, res, next) => {
    const authorizationHeaader = req.headers.authorization;
    console.log('validating all');
    let result;
    if (authorizationHeaader) {
      const token = req.headers.authorization.split(' ')[1]; // Bearer <token>
      const options = {
        expiresIn: '1h',
        issuer: 'localhost:8086'
      };
      try {
        result = jwt.verify(token, 'mytoken@asif', options);
        console.log('validating');
        console.log(result.role);
        req.decoded = result;
        // We call next to pass execution to the su
        next();
      } catch (err) {
        result = { 
            error: `Authentication error. signature mismatch.`,
            status: 401
          };
          res.status(401).send(result);
        throw new Error(err);
      }
    } else {
      result = { 
        error: `Authentication error. Token required.`,
        status: 401
      };
      res.status(401).send(result);
    }
  }

  module.exports.validateTokenAdminAccounts = (req, res, next) => {
    const authorizationHeaader = req.headers.authorization;
    console.log('validating admin accouts');

    let result;
    if (authorizationHeaader) {
      const token = req.headers.authorization.split(' ')[1]; // Bearer <token>
      const options = {
        expiresIn: '1h',
        issuer: 'localhost:8086'
      };
      try {
        result = jwt.verify(token, 'mytoken@asif', options);
        console.log('validating--');
        console.log(result.role);
        if(result.role == "admin" || result.role == "accounts"){
        }
        else{
          result = { 
            error: `Role Mismatch.`,
            status: 401
          };
          console.log("role mismatch")
          res.status(401).send(result);
          return;
        }
        // Let's pass back the decoded token to the request object
        req.decoded = result;
        // We call next to pass execution to the subsequent middleware
        next();
        return
      } catch (err) {
        result = { 
            error: `Authentication error. signature mismatch.`,
            status: 401
          };
          res.status(401).send(result);
        // Throw an error just in case anything goes wrong with verification
        throw new Error(err);
      }
    } else {
      result = { 
        error: `Authentication error. Token required.`,
        status: 401
      };
      res.status(401).send(result);
    }
  }

  module.exports.validateTokenAdminHr = (req, res, next) => {
    const authorizationHeaader = req.headers.authorization;
    console.log('validating admin accouts');

    let result;
    if (authorizationHeaader) {
      const token = req.headers.authorization.split(' ')[1]; // Bearer <token>
      const options = {
        expiresIn: '1h',
        issuer: 'localhost:8086'
      };
      try {
        result = jwt.verify(token, 'mytoken@asif', options);
        console.log('validating--');
        console.log(result.role);
        if(result.role == "admin" || result.role == "hr"){
        }
        else{
          result = { 
            error: `Role Mismatch.`,
            status: 401
          };
          console.log("role mismatch")
          res.status(401).send(result);
          return;
        }
        // Let's pass back the decoded token to the request object
        req.decoded = result;
        // We call next to pass execution to the subsequent middleware
        next();
        return
      } catch (err) {
        result = { 
            error: `Authentication error. signature mismatch.`,
            status: 401
          };
          res.status(401).send(result);
        // Throw an error just in case anything goes wrong with verification
        throw new Error(err);
      }
    } else {
      result = { 
        error: `Authentication error. Token required.`,
        status: 401
      };
      res.status(401).send(result);
    }
  }