const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const bookRoutes = require('./routes/book');
const { connection } = require('./db');
require('dotenv').config();

// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/books', bookRoutes);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log('Running at port 3000');
    console.log('Connected to the DB');
  } catch (e) {
    console.log(e);
    console.log('Something is wrong');
  }
});
