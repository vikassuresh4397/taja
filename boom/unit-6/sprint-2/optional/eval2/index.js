const express = require('express');
const app = express();
const studentRoutes = require('./routes/student.route');
const instructorRoutes = require('./routes/instructor.route');
const loggerMiddleware = require('./middleware/logger.middleware');

app.use(express.json());
app.use(loggerMiddleware);

app.use('/students', studentRoutes);
app.use('/instructors', instructorRoutes);

module.exports = app;
