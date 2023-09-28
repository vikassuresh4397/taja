const express = require('express');
const validator = require('./middlewares/validator');
const fs = require('fs');

const app = express();
app.use(express.json());

app.post('/', validator, (req, res) => {
  fs.writeFileSync('res.txt', 'data received');
  res.sendStatus(200);
});

module.exports = app;
