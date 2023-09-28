const http = require("http");
const fs = require("fs");
const os = require("os");
const dns = require("dns");
const cowsay = require("cowsay");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // Home route
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>HOME PAGE</h1>");
  } else if (req.url === "/count") {
    // Count route
    const timestamp = new Date().toString();
    const count = JSON.parse(fs.readFileSync("data.json")).length;
    const log = `The initial user count is ${count} at ${timestamp}\n`;
    fs.appendFileSync("logs.txt", JSON.stringify(log));
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("The user count has been updated in the logs file");
  } else if (req.url === "/update") {
    // Update route
    const users = JSON.parse(fs.readFileSync("data.json"));
    const count = users.length;
    const newUserId = Math.floor(Math.random() * 100) + count;
    const userName = os.userInfo().username;
    const newUser = {
      id: newUserId,
      first_name: userName,
      last_name: userName,
      email: "example@example.com",
      gender: "Male",
    };
    users.push(newUser);
    fs.writeFileSync("data.json", JSON.stringify(users, null, 2));
    const timestamp = new Date().toString();
    const log = `Updated user count after adding a new user is ${
      count + 1
    } at ${timestamp}\n`;
    fs.appendFileSync("logs.txt", log);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("The data has been updated, go and check the data file");
  } else if (req.url === "/users") {
    // Users route
    const users = JSON.parse(fs.readFileSync("data.json"));
    const userNames = users.map((user) => `<li>${user.first_name}</li>`);
    const response = `Following are the users present in database:${userNames.join("")}`;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(response);
} else if (req.url === "/address") {
    // Address route
    dns.lookup("masaischool.com", (err, address, family) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end(err.toString());
      } else {
        const log = `URL: masaischool.com IP Address: ${address} and Family is ${family}\n`;
        fs.appendFileSync("logs.txt", log);
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(log);
      }
    });
  } else if (req.url === "/say") {
    // Say route
    const log = fs.readFileSync("logs.txt", "utf8");
    const cowMessage = cowsay.say({ text: log });
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(cowMessage);
  } else {
    // Invalid route
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("404 Not Found");
  }
});

module.exports = server;
// Make sure you have the required `data.json` and `logs.txt` files in the same directory

// const server = http.createServer((req, res) => {
//   // ...

//   // Handling the invalid route
//   else {
//     res.writeHead(404, { "Content-Type": "text/html" });
//     res.end("404 Not Found");
//   }
// });

// // Start the server
// server.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });
