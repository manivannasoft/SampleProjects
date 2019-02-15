var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Test',{ useNewUrlParser:true }, (err)=> {
    if(!err) {
        console.log('MongoDB Connection Successful.')
    } else {
        console.log('Error in MongoDB connection ----->', err)
    }
})

var employee  = require('./employee.model')