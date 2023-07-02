require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path')
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dbConn = require('./config/dbConn');
const routes=require("./routes/root")
const corsConfig=require ("./config/cors")
const logger = require('./middleware/logger');

const port = process.env.port || 3000;

dbConn()
app.use(cookieParser())
app.use(cors(corsConfig))
app.use('/', express.static(path.join(__dirname,'public')))
app.use('/', require('./routes/root'))

app.all('*', (req, res) =>{
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname,"views","404.html"))
    } else if (req.accepts('json')){
        res.send({message:"404 page not found"})
    }else{
        res.type('text').send('404 page not found')
    }
})

mongoose.connection.once('open', () =>{
    console.log("connected to DB")
})
app.listen(port,()=> console.log(`port is running on ${port}`))