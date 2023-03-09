const mongoose = require('mongoose');

const User = new mongoose.Schema({

    userName:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
        required:true
    },
    userContact:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
  
});

module.exports = mongoose.model('User', User)