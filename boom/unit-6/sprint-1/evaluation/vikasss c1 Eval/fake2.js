
const express = require('express');


const os = require('os');

const dns = require('dns');

const fs = require('fs');


const app = express();


app.use(express.json());

app.get('/', (req, res) => {


  
  res.send('<h1>Welcome to the Home Page</h1>');


});


app.get('/address', (req, res) => {

    try {
  
      dns.lookup('masaischool.com', (err, address, family) => {
  
        if (err) {
  
          throw err;
  
        }
  let x="\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}"
  let y="IPv4/"
        res.send(`\nURL: masaischool.com IP Address: ${address} Family: IPv4`);
  
      });
    } catch (err) {
  
      res.send(err.message);
  
    }
  });

  
app.post('/add/instructor', (req, res) => {
    try {
      const uid = os.userInfo().uid;

      const username = os.userInfo().username;

        // console.log(uid,username)

      const { age, location, sub, exp } = req.body;

    // console.log(age,location,sub,exp)

      const instructor = {

        id: uid,

        name: username,

        age,

        location,

        sub,

        exp
      };
  
     
      const data = JSON.parse(fs.readFileSync('db.json'));
        // console.log(data)
      data.instructors.push(instructor);
    // console.log(data)
     
      fs.writeFileSync('db.json', JSON.stringify(data));
  
      res.json(data.instructors);

    } catch (err) {

      res.send(err.message);

    }
  });
  
  

app.post('/add/student', (req, res) => {
  try {
    const uid = os.userInfo().uid;

    const username = os.userInfo().username;

      // console.log(uid,username)
    const { age, location, tickets } = req.body;

    const student = {
      id: uid,

      name: username,

      age,

      location,

      tickets
    };

   
    const data = JSON.parse(fs.readFileSync('db.json'));
    // console.log(data)
    data.students.push(student);

   
    fs.writeFileSync('db.json', JSON.stringify(data));

    res.json(data.students);

  } catch (err) {
          
    res.send(err.message);
  }
});

app.get('/students', (req, res) => {
  try {
   
    const data = JSON.parse(fs.readFileSync('db.json'));
      // console.log(data)
    res.json(data.students);
  } catch (err) {
    res.send(err.message);
  }
});

app.get('/instructors', (req, res) => {
  try {
   
           const data = JSON.parse(fs.readFileSync('db.json'));
 // console.log(data)
     res.json(data.instructors);
  }         catch (err) {
     res.send(err.message);
  }
});

app.get('/tickets', (req, res) => {
               try {
 
        const data = JSON.parse(fs.readFileSync('db.json'));

    // console.log(data)
         let totalTickets = 0;

    for (const student of data.students) {

                  totalTickets += student.tickets.length;
    }

          res.send(`Total number of tickets in the system are ${totalTickets}`);
          
  } catch (err) {

     res.send(err.message);

  }
});

app.listen(8080)

  
  
  module.exports = app;
