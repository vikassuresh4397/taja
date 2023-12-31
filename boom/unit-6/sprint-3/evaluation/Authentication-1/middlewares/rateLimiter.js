const rateLimit = require('express-rate-limit');

const rateLimiter = rateLimit({
  message: 'Too many requests from this IP, please try again later',
  windowMs: 10 * 60 * 1000, 
  max: 100, 
});

module.exports = rateLimiter;
