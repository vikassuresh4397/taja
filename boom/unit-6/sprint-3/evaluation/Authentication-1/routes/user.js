const express = require('express');
const User = require('../models/User');
const auth = require('../middlewares/auth');
require('dotenv').config();

const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
