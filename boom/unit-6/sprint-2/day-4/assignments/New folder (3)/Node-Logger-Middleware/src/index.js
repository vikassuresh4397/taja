const express = require('express');
const app = express();
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

morgan.token('http-version', (req, res) => {
  return req.httpVersionMajor + '.' + req.httpVersionMinor;
});

const logRequest = morgan((tokens, req, res) => {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res, 3),
    new Date().toUTCString(),
    tokens['http-version'](req, res),
  ].join(' ');
}, { stream: accessLogStream });

app.use(logRequest);

app.get('/', (req, res) => {
  res.send('Welcome to the server');
});

app.get('/get-users', (req, res) => {
  res.send('Here is the list of all users');
});

app.post('/add-user', (req, res) => {
  res.send('User added successfully');
});

app.delete('/delete-user/:id', (req, res) => {
  const id = req.params.id;
  res.send(`User ${id} deleted successfully`);
});

app.put('/update-user/:id', (req, res) => {
  const id = req.params.id;
  res.send(`User ${id} updated successfully`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

module.exports = app;
