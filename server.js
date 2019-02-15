 var db = require('./models/db')

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const _ = require('lodash');



const employeeController = require('./controllers/employeeController')

var app = express();

app.set('views',path.join(__dirname,'/views/'));
app.engine('hbs',exphbs({extname:'hbs', defaultLayout:'mainLayout',layoutsDir: __dirname+ '/views/layouts/'}));
app.set('view engine','hbs');

app.use(bodyparser.urlencoded({
    extended:true
}))
app.use(bodyparser.json());

app.listen(3000, function () {
    console.log('Express server listening on port  : 3000');
});
app.use('/employee', employeeController)
