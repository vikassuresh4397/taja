const express = require('express');
const router = express.Router();
const fs = require('fs');
const validatorMiddleware=require('../middleware/validator.middleware');
router.post('/addstudent', (req, res) => {
  const { student_code, name, location, batch } = req.body;
  const student = {
    student_code,
    name,
    location,
    batch
  };
  fs.readFile('db.json', 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    } else {
      const db = JSON.parse(data);
      db.students.push(student);
      fs.writeFile('db.json', JSON.stringify(db, null, 2), (err) => {
        if (err) {
          console.error(err);
          res.status(500).json({ message: 'Internal Server Error' });
        } else {
          res.status(200).json({ message: 'Student has been added' });
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
      res.status(200).json(db.students);
    }
  });
});

router.get('/:studentCode', (req, res) => {
  const studentCode = parseInt(req.params.studentCode);
  fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    } else {
      const db = JSON.parse(data);
      const student = db.students.find((s) => s.student_code === studentCode);
      if (student) {
        res.status(200).json(student);
      } else {
        res.status(404).json({ message: 'Student not found' });
      }
    }
  });
});
// router.use()
router.patch('/:studentCode', validatorMiddleware ,(req, res) => {
  const studentCode = parseInt(req.params.studentCode);
  const { name, location, batch } = req.body;
  fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    } else {
      const db = JSON.parse(data);
      const student = db.students.find((s) => s.student_code === studentCode);
      if (student) {
        student.name = name || student.name;
        student.location = location || student.location;
        student.batch = batch || student.batch;
        fs.writeFile('db.json', JSON.stringify(db, null, 2), (err) => {
          if (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal Server Error' });
          } else {
            res.status(200).json({ message: 'Patched Student Details' });
          }
        });
      } else {
        res.status(404).json({ message: 'Student not found' });
      }
    }
  });
});

router.delete('/:studentCode', validatorMiddleware , (req, res) => {
  const studentCode = parseInt(req.params.studentCode);
  fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    } else {
      const db = JSON.parse(data);
      const index = db.students.findIndex((s) => s.student_code === studentCode);
      if (index !== -1) {
        db.students.splice(index, 1);
        fs.writeFile('db.json', JSON.stringify(db, null, 2), (err) => {
          if (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal Server Error' });
          } else {
            res.status(200).json({ message: 'Deleted Student Details' });
          }
        });
      } else {
        res.status(404).json({ message: 'Student not found' });
      }
    }
  });
});

module.exports = router;



















