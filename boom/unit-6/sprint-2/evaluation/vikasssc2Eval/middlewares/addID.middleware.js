const path = require('path');
const fs = require('fs');

const dbPath = path.join(__dirname, 'db.json');

const loadData = () => {
  const data = fs.readFileSync(dbPath);
  return JSON.parse(data);
};

const addID = (req, res, next) => {
  const data = loadData();
  const lastHero = data.heroes[data.heroes.length - 1];
  const newId = lastHero ? lastHero.id + 1 : 1;
  req.id = newId;
  next();
};

module.exports = {
  addID,
};
