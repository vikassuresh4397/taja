const express = require('express');
const fs = require('fs');
const app = express();


const logger = (req, res, next) => {
  const { method, url } = req;
  const timestamp = new Date().toString();
  const logEntry = `URL: ${url}, Method: ${method}, Timestamp: ${timestamp}\n`;
  fs.appendFile('logs.txt', logEntry, (err) => {
    if (err) console.error(err);
  });
  next();
};


const addID = (req, res, next) => {
  const data = fs.readFileSync('db.json');
  const { heroes } = JSON.parse(data);
  const lastHero = heroes[heroes.length - 1];
  const newID = lastHero ? lastHero.id + 1 : 1;
  req.body.id = newID;
  next();
};


const auth = (req, res, next) => {
  const { role, pass } = req.headers;
  if (role === 'admin' && pass === 'saveEarth') {
    next();
  } else {
    res.status(401).json({ message: 'Not Authorized' });
  }
};

app.use(express.json());


const readDataFromDb = () => {
  const dbData = fs.readFileSync('db.json');
  return JSON.parse(dbData);
};


const writeDataToDb = (data) => {
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFileSync('db.json', jsonData);
};


app.post('/add/hero', addID, (req, res) => {
  const { name, powers, health, villains } = req.body;
  const data = readDataFromDb();
  const newHero = { name, powers, health, villains };
  data.heroes.push(newHero);
  writeDataToDb(data);
  res.json(data.heroes);
});


app.get('/heroes', (req, res) => {
  const data = readDataFromDb();
  res.json(data.heroes);
});


app.patch('/update/villain/:hero_id', auth, (req, res) => {
  const { hero_id } = req.params;
  const { name, health } = req.body;
  const data = readDataFromDb();
  const hero = data.heroes.find((hero) => hero.id === parseInt(hero_id));
  if (hero) {
    hero.villains.push({ name, health });
    writeDataToDb(data);
    res.json(hero);
  } else {
    res.status(404).json({ message: 'Hero not found' });
  }
});


app.delete('/delete/hero/:hero_id', auth, (req, res) => {
  const { hero_id } = req.params;
  const data = readDataFromDb();
  const heroIndex = data.heroes.findIndex((hero) => hero.id === parseInt(hero_id));
  if (heroIndex !== -1) {
    data.heroes.splice(heroIndex, 1);
    writeDataToDb(data);
    res.json(data.heroes);
  } else {
    res.status(404).json({ message: 'Hero not found' });
  }
});

app.use(logger); 


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


module.exports = app;