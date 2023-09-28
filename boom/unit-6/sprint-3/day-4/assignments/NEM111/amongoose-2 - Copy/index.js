const express=require('express');


const {connection}=require('./db');
const {userRouter}=require("./routes/users.route");
// const {UserModel}=require('./model/user.model');
const app=express();
app.use(express.json());

app.use("/boom",userRouter)
app.get("/",(req,res)=>{
    try{
      res.status(200).json({msg:"Home Page"})
    }catch(e){
        res.status(400).json({e:e.message})
    }
})


app.listen(3000,async ()=>{
    try{
        await connection
        console.log('listening on port 3000');
        console.log('Connected to db');
    }catch(err){
        console.log(err.message)
        console.log("Error connecting to 3000")
    } 
})