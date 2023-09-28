const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();

// Set up multer storage and file naming
const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// Create multer upload instance
const upload = multer({ storage });

// Serve the index.html file
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the server' });
});

// Handle file upload
app.post('/upload', upload.single('file'), (req, res) => {
  res.json({ message: 'File uploaded successfully' });
});

module.exports = app;
