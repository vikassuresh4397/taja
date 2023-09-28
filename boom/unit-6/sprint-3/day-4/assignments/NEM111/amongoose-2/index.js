const fs = require('fs');

// Using process.nextTick() to execute a function after the current event loop iteration completes
console.log('Starting program');

process.nextTick(() => {
  console.log('Executing function after the current event loop iteration completes');
  setTimeout(() => {
    console.log('2 seconds delay completed');
  }, 2000);
});

console.log('Continuing with the rest of the program');

// Using process.hrtime() to measure the time it takes to execute a function
const startTime = process.hrtime();

function calculateSum() {
  let sum = 0;
  for (let i = 1; i <= 1000000; i++) {
    sum += i;
  }
  return sum;
}

const sum = calculateSum();

const endTime = process.hrtime(startTime);
const executionTime = (endTime[0] * 1e9 + endTime[1]);

console.log(`Sum: ${sum}`);
console.log(`Execution time: ${executionTime} nanoseconds`);

// Proving the order of execution of event loop phases
console.log('Starting event loop phases demonstration');

fs.readFile('sample.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('File reading completed');
});

setTimeout(() => {
  console.log('setTimeout callback executed');
}, 0);

setImmediate(() => {
  console.log('setImmediate callback executed');
});

new Promise((resolve) => {
  console.log('Promise executor executed');
  resolve();
}).then(() => {
  console.log('Promise then callback executed');
});

const interval = setInterval(() => {
  console.log('setInterval callback executed');
  clearInterval(interval);
}, 0);

process.nextTick(() => {
  console.log('process.nextTick callback executed');
});

console.log('Event loop phases demonstration completed');



// const express=require('express');


// const {connection}=require('./db');
// const {userRouter}=require("./routes/users.route");
// const {UserModel}=require('./model/user.model');
// const app=express();
// app.use(express.json());

// app.use("/boom",userRouter)
// app.get("/",(req,res)=>{
//     try{
//       res.status(200).json({msg:"Home Page"})
//     }catch(e){
//         res.status(400).json({e:e.message})
//     }
// })


// app.listen(3000,async ()=>{
//     try{
//         await connection
//         console.log('listening on port 3000');
//         console.log('Connected to db');
//     }catch(err){
//         console.log(err.message)
//         console.log("Error connecting to 3000")
//     } 
// })