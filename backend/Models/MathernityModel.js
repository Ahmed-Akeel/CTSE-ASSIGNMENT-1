const mongoose = require('mongoose');

const Mathernity = new mongoose.Schema({

    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    division:{
        type:String,
        required:true
    },
    regNo:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    occupation:{
        type:String,
        required:true
    },
    healthStatus:{
        type:String,
        required:true
    },
    dateLast:{
        type:String,
        required:true
    },
    dateReturn:{
        type:String,
        required:true
    },
  
});

module.exports = mongoose.model('Mathernity', Mathernity)