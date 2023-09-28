const fs = require('fs');

const logger = (req, res, next) => {
  const timestamp = new Date().toLocaleString();
  const log = `URL: ${req.url}, Method: ${req.method}, Timestamp: ${timestamp}\n`;
  fs.appendFileSync('logs.txt', log);
  next();
};

module.exports = {
  logger,
};
