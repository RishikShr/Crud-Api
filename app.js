const express = require('express');
const app =express();
const mongoose = require("mongoose");
const bodyParser =require("body-parser");
require('dotenv/config');

app.use(bodyParser.json());  //everytime we hit any request that bodyparser run (middleware) 

//Import Routes

const postsRoute = require("./routes/posts");

//Using middleware

app.use('/posts', postsRoute);


//Routes

 app.get('/', (req,res)=>{
     res.send("We are at home");
   });  //Response to user


 app.get('/posts', (req,res)=>{
        res.send("We are at posts");
 });

 //Mongo Connection

 mongoose.set('useUnifiedTopology', true);
 mongoose.connect(process.env.DB_CONNECTION, 
 { useNewUrlParser: true },
 ()=> console.log('conn to db'));
 
 
 app.listen(3000);