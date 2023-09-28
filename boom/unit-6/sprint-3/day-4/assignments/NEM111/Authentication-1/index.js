const express = require('express');
const app=express();
const {connection} = require("./db");

app.use(express.json());

app.listen(process.env.port,async()=>{
    try{
      await connection;
      console.log("Running at port 3000")
      console.log("Connected to the DB")

    }catch(e){
        console.log(e);
        console.log("Something is wrong")
    }
})