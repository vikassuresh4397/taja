const express=require("express");
const userRouter=express.Router();
const {UserModel} = require("../model/users.model")
const bcrypt = require('bcrypt');
//login
userRouter.post("/login",async(req,res)=>{
    const {email,pass}=req.body;
try{
  
    const user=await UserModel.findOne({email})
    if(user){
        bcrypt.compare(pass, user.pass, (err, result) =>{
            // result == true
            if(result){
                res.status(200).json({msg:"Login Successful"})
            }else{
                res.status(200).json({msg:"login credentials invalid"}) 
            }
        });
       
    }else{
        res.status(200).json({msg:"login credentials invalid"}) 
    }

}catch(e){
    console.log(e)
    res.status(400).json({msg:"fialse"}) 
}
})


// Register
userRouter.post("/register", async (req, res) => {
    const { name, email, pass, age } = req.body;
    try {
      bcrypt.hash(pass, 5, async function (err, hash) {
        if (err) {
          res.json({ msg: "err" });
        } else {
          const user = new UserModel({ name, email, pass: hash, age });
          await user.save();
          const everydata = await UserModel.find();
          console.log(everydata);
          res.status(200).json({ msg: "New user has been created" });
        }
      });
    } catch (e) {
      console.log(e);
      res.status(400).json({ msg: "Registration failed" });
    }
  });

module.exports={userRouter}