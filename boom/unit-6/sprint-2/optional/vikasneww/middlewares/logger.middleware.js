const logger = (req, res, next) => {
  const { method, url, headers: { 'user-agent': userAgent } } = req;
  const logEntry = `Method:${method}, Route:${url}, user-agent:${userAgent}\n`;
  fs.appendFile('logs.txt', logEntry, (err) => {
    if (err) console.error(err);
  });
  next();
};

module.exports = {
  logger,
};

//+0.5
