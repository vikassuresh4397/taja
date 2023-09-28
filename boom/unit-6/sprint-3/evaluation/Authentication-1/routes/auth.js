const User = require('../models/User');
const auth = require('../middlewares/auth');
const express = require('express');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const router = express.Router();


router.post('/register', async (req, res) => {
  try {
    const { name, email, password, city, age } = req.body;

    if (
      !/(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}/.test(password)
    ) {
      return res
        .status(400)
        .json({ error: 'Password requirements not met' });
    }

  
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      
      return res.status(400).json({ error: 'User already exists' });
    }

 
    const user = new User({
      name,
      email,
      password,
      city,
      age,
    });

  
    await user.save();

    res.status(200).json({
      msg: 'The new user has been registered',

      registeredUser: user,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


router.post('/login', async (req, res) => {
  try {

    const { email, password } = req.body;

 
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

  
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {

      return res.status(400).json({ error: 'Invalid credentials' });
    }

  
    const token = jwt.sign(
      { userId: user._id },

      process.env.JWT_SECRET,

      { expiresIn: '2m' }
    );

  
    const refreshToken = jwt.sign(
      { userId: user._id },

      process.env.JWT_SECRET,

      { expiresIn: '5m' }
    );

    res.status(200).json({
      msg: 'Login successful!',

      token,

      refreshToken,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


router.get('/logout', auth, async (req, res) => {
  try {
 

    res.status(200).json({ msg: 'User has been logged out' });

  } catch (error) {

    res.status(400).json({ error: error.message });
  }
});


router.get('/refreshtoken', async (req, res) => {
  try {
   

    res.status(200).json({ newToken: 'New generated token' });

  } catch (error) {

    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
