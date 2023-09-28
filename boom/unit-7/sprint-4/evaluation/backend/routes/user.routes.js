const express = require("express");
const { UserModel } = require("../models/user.model");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
userRouter.post("/register", async (req, res) => {
  const { name, email, pass } = req.body;
  try {
    bcrypt.hash(pass, 5, async (err, hash) => {
      if (err) {
        res.json({ error: err.message });
      } else {
        const user = new UserModel({ name, email, pass: hash });
        await user.save();
      }
    });
   
    res.json({ msg: "User has been registered", user: req.body });
  } catch (err) {
    res.json({ error: err.message });
  }
});
// {
//     "name":"wow",
//     "email":"wow@gmail.com",
//     "pass":"wow"
//   }

userRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(pass, user.pass, async (err, result) => {
        if (result) {
          // let token=jwt.sign({course:"BE"},"masai")
          // let token = jwt.sign({userID:user._id,user:user.name}, process.env.secret);
          let token = jwt.sign({ userID: user._id, user: user.name }, process.env.secret);
          res.json({ msg: "Login Successful", token });
        } else {
          res.json({ msg: "Wrong Credentials" });
        }
      });
    } else {
      res.json({ msg: "user doenot exist" });
    }
  } catch (err) {
    res.json({ error: err.message });
  }
});

module.exports = {
  userRouter,
};
