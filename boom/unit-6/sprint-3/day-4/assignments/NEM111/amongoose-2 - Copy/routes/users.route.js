const {UserModel}=require('../model/user.model');
const express=require('express');

const userRouter = express.Router();




userRouter.get("/",(req,res)=>{
    try{
      res.status(200).json({msg:"Home Page"})
    }catch(e){
        res.status(400).json({e:e.message})
    }
})

userRouter.post("/add",async(req,res)=>{
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


//http://localhost:3000/userslist?age=56 -using Query
userRouter.get("/userslist",async(req,res)=>{
    const query=req.query
try{

const everydata=await UserModel.find(query);
console.log(everydata);
res.status(200).json({msg:"list of users"})
}catch(err){
    console.log("something went wrong")
    res.status(400).json({e:e.message})  
}
})

//param - http://localhost:3000/woooo/1
// userRouter.get("/woooo/:roll_no",(req,res)=>{
//     const {roll_no} = req.params;
//     console.log(roll_no);
//     res.send(roll_no);
//     })


userRouter.patch("/update/:userId",async(req, res)=>{
    const {userId}=req.params;
    const payload=req.body;

    try{
    await UserModel.findByIdAndUpdate({_id:userId},payload)
    res.status(200).json({msg:"data has been updated successfully"})   
    }catch(err){
        console.log("something went wrong")
        res.status(400).json({e:e.message})  
    }
})

userRouter.delete("/delete/:userId",async(req,res)=>{
    const {userId}=req.params;

    try{
        await UserModel.findByIdAndDelete({_id:userId})
        res.status(200).json({msg:"data has been deleted successfully"})   
        }catch(err){
            console.log("something went wrong")
            res.status(400).json({e:e.message})  
        }
})
module.exports={userRouter}