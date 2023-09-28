const express = require('express');
const router = express.Router();
const fs = require('fs');

router.post('/addinstructor', (req, res) => {
  const { emp_id, name, sub, experience } = req.body;
  const instructor = {
    emp_id,
    name,
    sub,
    experience
  };
  fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    } else {
      const db = JSON.parse(data);
      db.instructors.push(instructor);
      fs.writeFile('db.json', JSON.stringify(db, null, 2), (err) => {
        if (err) {
          console.error(err);
          res.status(500).json({ message: 'Internal Server Error' });
        } else {
          res.status(200).json({ message: 'Instructor has been added' });
        }
      });
    }
  });
});

router.get('/', (req, res) => {
  fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    } else {
      const db = JSON.parse(data);
      res.status(200).json(db.instructors);
    }
  });
});

router.get('/:empID', (req, res) => {
  const empID = parseInt(req.params.empID);
  fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
    } else {
    const db = JSON.parse(data);
    const instructor = db.instructors.find((i) => i.emp_id === empID);
    if (instructor) {
    res.status(200).json(instructor);
    } else {
    res.status(404).json({ message: 'Instructor not found' });
    }
    }
    });
    });
    
    module.exports = router;