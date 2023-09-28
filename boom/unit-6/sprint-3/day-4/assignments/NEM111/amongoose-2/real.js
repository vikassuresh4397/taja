const express=require('express');

const app = express();
const {connection,UserModel}=require('./db');
app.use(express.json());
app.get("/",(req,res)=>{
    try{
      res.status(200).json({msg:"Home Page"})
    }catch(e){
        res.status(400).json({e:e.message})
    }
})

app.post("/add/useritem",async(req,res)=>{
    try{
        const user=new UserModel(req.body);
        await user.save();
        const everydata=await UserModel.find();
        console.log(everydata); 
        
     
        res.status(200).json({msg:"new user added successfully"})
    }catch(err){
        console.log("something went wrong")
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