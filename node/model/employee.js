const mongoose = require('mongoose');

var Employee = mongoose.model('Employee',{
    name : {type: String, trim: true, index: true, unique: true, require: true} ,
    position :  String ,
    office : String,
    salary : Number,
    email : {type: String, trim: true, index: true, unique: true, require: true},
})

module.exports = { Employee };