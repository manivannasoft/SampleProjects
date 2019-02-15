const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');
// var popup = require('popups');
 
router.get('/',(req, res) => {
     res.render("employee/addOrEdit",{
         viewTitle : "Add Employee"
     });
 })

 router.post('/',(req,res) => {
     console.log('hi....',req.body)
     insertedRecord(req,res);
 })


 function insertedRecord(req,res){
     var employee = new Employee();
     employee.fullName = req.body.fullName;
     employee.email = req.body.email;
     employee.mobile = req.body.mobile;
     employee.city = req.body.city;
     employee.salary = req.body.salary;

     employee.save((err, doc) =>{
         if(!err){

                 res.redirect('employee/list');

         } else {
             console.log('Error during record insertion :'+ err)
         }
     })

 }

 router.get('/list',(req,res)=>{
    //  res.json('from list...')
     Employee.find((err,docs) => {
         if(!err){
            res.render('employee/list',{
                list:docs
            });
        } else {
            console.log('Error during record retrieving :'+ err)
        }
     })
 })

router.get('/employee',(req,res)=>{
    //  res.json('from list...')
    Employee.find((err,docs) => {
        if(!err){
            res.render('employee/employee',{
                list:docs
            });
        } else {
            console.log('Error during record retrieving :'+ err)
        }
    })
})

router.get('/salary',(req,res)=>{
    //  res.json('from list...')
    Employee.find((err,docs) => {
        if(!err){
            res.render('employee/salary',{
                list:docs
            });
        } else {
            console.log('Error during record retrieving :'+ err)
        }
    })
})
 module.exports = router;
