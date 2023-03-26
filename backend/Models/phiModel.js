const mongoose = require('mongoose');

const phi = new mongoose.Schema({

    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    nicNumber:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }

  
});

module.exports = mongoose.model('phi', phi)