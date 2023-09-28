const fs = require('fs');

function loggerMiddleware(req, res, next) {
  const { method, originalUrl, headers } = req;
  const { 'user-agent': userAgent } = headers;
  const log = `Method:${method}, Route:${originalUrl}, user-agent:${userAgent}\n`;
  fs.appendFile('logs.txt', log, (err) => {
    if (err) console.error(err);
  });
  next();
}

module.exports = loggerMiddleware;
