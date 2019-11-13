var express = require("express");
var app = express(); // express instance
var passport = require('passport');
var paeesortSetup = require('./config/passport-setup');
var bodyparser = require("body-parser");
var dbcontext = require('./dbcontext');
var companyapi = require('./api/companyapi')
var employeeapi = require('./api/employeeapi')
var roleapi = require('./api/roleapi');
var incomesourceapi = require('./api/incomesourceapi');
var officialexpenditureapi = require('./api/officialexpenditureapi');
var inventoryitemapi = require('./api/inventoryitemapi');
var clientapi = require('./api/clientapi')
var purchaseapi = require('./api/purchaseapi');

var inventoryapi = require('./api/inventoryapi')
var payrollapi = require('./api/payrollapi');
var salesvoucherapi = require('./api/salesvoucherapi');
var officecostapi = require('./api/officecostapi')

var fileupload = require('./api/fileupload');
var login = require('./api/login');
var oauthlogin = require('./api/oauthlogin');


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/company',companyapi)
app.use('/api/employee',employeeapi)
app.use('/api/role',roleapi)
app.use('/picture',fileupload);
app.use('/api/login',login);
app.use('/api/incomesource',incomesourceapi);
app.use('/api/officialexpenditure',officialexpenditureapi)
app.use('/api/inventoryitem',inventoryitemapi)

app.use('/api/inventory',inventoryapi);
app.use('/api/payroll', payrollapi);
app.use('/api/client',clientapi);
app.use('/api/salesVoucher',salesvoucherapi)
app.use('/api/purchase', purchaseapi)
app.use('/api/officecost',officecostapi)
//app.use('/api/oauth',oauthlogin);

//CORS middleware
/*var allowCrossDomain = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    //res.header('Access-Control-Allow-Origin', 'example.com');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}*/
//app.use(allowCrossDomain);
app.use('/api/uploads',express.static(__dirname + '/api/uploads'));
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something went wrong!!');
});

/*app.use(function (req, res, next) {
//console.error(err.stack); 404
    res.status(500).send('SORRY!! wrong UPL');
});*/


app.listen(8086,function(){
    //console.log(path.join(__dirname,'uploads'));
    console.log("listening to port 8086");
})



  
