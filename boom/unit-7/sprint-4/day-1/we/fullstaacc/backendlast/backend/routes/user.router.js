const express = require("express");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
// const { auth } = require("../middleware/auth.middleware");
const bcrypt=require("bcrypt");
require("dotenv").config();
const { UserModel } = require("../model/user.model");


// {
//   "username": "vikas",
//   "avatar": "https://t4.ftcdn.net/jpg/02/29/75/83/240_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg",
//   "email": "vikas@gmail.com",
//   "password": "vikas"
// }



userRouter.post("/register", async (req, res) => {

 
  const { username, avatar, email, password } = req.body;
  try {
    
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.json({ error: "User already exists, please login" });
    }
  

    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        res.status(500).json({ error: 'Registration failed' });
      } else {
        const user = new UserModel({   username,
          avatar,
          email,
          password: hash });
        await user.save();
        res.json({ msg: "User has been registered", user: req.body });
      }
    });
  } catch (err) {
    res.json({ error: err.message });
  }
});




// {

//   "email": "vikas@gmail.com",
//   "password": "vikas"
// }

// token - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NGU3Mzc3NGQ0ZTdiMjlkYTQ2MWQ4OGEiLCJpYXQiOjE2OTI4NzQ3MjR9.CuJyjSIgqmKctjw7oIlwUZDD3Z23eQIKrZKg66jt1zo

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
