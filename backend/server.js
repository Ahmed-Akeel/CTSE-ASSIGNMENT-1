const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
require('dotenv').config();


const app = express();

//import route


// const Notice = require('./routes/user');


//app middleware
app.use(bodyParser.json());
app.use(cors());
// app.use(multer());


// app.use(Notice);




const PORT = 8001;
const DB_URL = 'mongodb+srv://pamitha:pamitha@database1.gqpga.mongodb.net/CTSE-Assignment?retryWrites=true&w=majority';

mongoose.connect(DB_URL)
.then(() =>{
    console.log('DB connected');
}).catch((err) => console.log('DB connection error', err));

app.listen(process.env.PORT || PORT, () =>{
    console.log(`App is running on ${PORT}`);
});

