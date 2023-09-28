const express = require("express");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
// const { auth } = require("../middleware/auth.middleware");
const bcrypt=require("bcrypt");
require("dotenv").config();
const { UserModel } = require("../model/user.model");


userRouter.post("/signup", async (req, res) => {

 
  const { email, password, confirmpassword} = req.body;
  try {
    // Check if the user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.json({ error: "User already exists, please login" });
    }
    if(password!==confirmpassword){
      return res.json({ error: "Please write the same password" });
    }

    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        return res.json({ error: err.message });
      } else {
        const user = new UserModel({ email, password: hash });
        await user.save();
        res.json({ msg: "User has been registered", user: req.body });
      }
    });
  } catch (err) {
    res.json({ error: err.message });
  }
});



userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          let token = jwt.sign({userID:user._id,user:user.name}, process.env.secret);
          // Imseh jo user._id hai woh uper waleh const user se mila hua hai
          res.json({ msg: "User Logged IN", token });
        } else {
          res.json({ error: "Invalid passwordword" });
        }
      });
    } else {
      res.json({ error: "User does not exist" });
    }
  } catch (err) {
    res.json({ error: err.message || "An error occurred" });
  }
});











module.exports = { userRouter };
