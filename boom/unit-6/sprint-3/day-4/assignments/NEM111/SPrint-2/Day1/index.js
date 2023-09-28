const express=require('express');
const app=express();
const {timelogger}=require('./middleware/timelogger');
const {logger}=require('./middleware/logger');
const fs=require('fs');

app.use(express.json());
app.get("/",(req,res)=>{
  console.log("yesss")
    res.send("Home Page")
   
})

app.post("/add",(req,res)=>{
    let data=JSON.parse(fs.readFileSync("./db.json","utf-8"));
    console.log(data)
    let newuser=req.body;
    data.students.push(newuser);
    fs.writeFileSync("./db.json",JSON.stringify(data));
   
    res.send("Add Page")
})

app.get("/wow",(req,res)=>{
    res.send("Welcome to theis")
})

app.listen(3000,()=>{

    console.log("3000")
})
