const express = require ('express');
const mongoose = require('mongoose');
require('dotenv').config();
const routes = require('./routes/routes');

const mongoString = process.env.DATABASE_URL

//mongodb connection
mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error)=> {
    console.log(error)
})
database.once('connected', ()=>{
    console.log('database Connected');
})

const app = express();

app.use(express.json());
app.use('/api', routes)

const PORT = 5000;

app.listen(PORT, ()=>{
console.log(`Server ti wa online lori ${PORT}`);
})
