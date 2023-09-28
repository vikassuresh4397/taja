const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const { addID } = require('./middlewares/addID.middleware');

const { logger } = require('./middlewares/logger.middleware');

const { auth } = require('./middlewares/auth.middleware');

app.use(express.json());
app.use(logger);

const dbPath = path.join(__dirname, 'db.json');

// Load data from the database file
const loadData = () => {
  const data = fs.readFileSync(dbPath);
  return JSON.parse(data);
};

// Save data to the database file
const saveData = (data) => {
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFileSync(dbPath, jsonData);
};

// Add a new hero
app.post('/add/hero', addID, auth, (req, res) => {
  try {
    const { name, powers, health, villains } = req.body;
    const data = loadData();
    const newHero = {
      id: req.id,
      name,
      powers,
      health,
      villains,
    };
    data.heroes.push(newHero);
    saveData(data);
    res.json(data.heroes);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Retrieve details of all heroes
app.get('/heroes', (req, res) => {
  try {
    const data = loadData();
    res.json(data.heroes);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update villains for a hero
app.patch('/update/villain/:hero_id', auth, (req, res) => {
  try {
    const { hero_id } = req.params;
    const { name, health } = req.body;
    const data = loadData();
    const hero = data.heroes.find((h) => h.id === parseInt(hero_id));
    if (!hero) {
      return res.status(404).json({ message: 'Hero not found' });
    }
    hero.villains.push({ name, health });
    saveData(data);
    res.json(hero);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a hero
app.delete('/delete/hero/:hero_id', auth, (req, res) => {
  try {
    const { hero_id } = req.params;
    const data = loadData();
    const index = data.heroes.findIndex((h) => h.id === parseInt(hero_id));
    if (index === -1) {
      return res.status(404).json({ message: 'Hero not found' });
    }
    data.heroes.splice(index, 1);
    saveData(data);
    res.json(data.heroes);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3000');
});

module.exports = app;
