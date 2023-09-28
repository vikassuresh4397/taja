const http = require("http");
const fs = require("fs");
const os = require("os");
const dns = require("dns");
const cowsay = require("cowsay");

let userCnt = 0; // To count the number of users

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>HOME PAGE</h1>");
    res.end();
  } else if (url === "/count") {
    fs.readFile("data.json", "utf8", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end(err);
      } else {
        const users = JSON.parse(data);
        userCnt = users.length;
        const timeStamp = new Date().toString();
        const log = `The initial user count is ${userCnt} at ${timeStamp}\n`;
        fs.writeFile("logs.txt", log, { flag: "a" }, (err) => {
          if (err) {
            res.statusCode = 500;
            res.end(err);
          } else {
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/plain");
            res.end("The user count has been updated in the logs file");
          }
        });
      }
    });
  } else if (url === "/update") {
    fs.readFile("data.json", "utf8", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end(err);
      } else {
        const users = JSON.parse(data);
        const newId = Math.floor(Math.random() * (100 - userCnt + 1)) + userCnt;
        const userName = os.userInfo().username;
        const newUser = {
          id: newId,
          first_name: userName,
          last_name: userName,
          email: "example@example.com",
          gender: "Male",
        };
        users.push(newUser);
        const updatedData = JSON.stringify(users);
        fs.writeFile("data.json", updatedData, (err) => {
          if (err) {
            res.statusCode = 500;
            res.end(err);
          } else {
            userCnt++;
            const timeStamp = new Date().toString();
            const log = `Updated user count after adding a new user is ${userCnt} at ${timeStamp}\n`;
            fs.appendFileSync("logs.txt", log);
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/plain");
            res.end("The data has been updated, go and check the data file");
          }
        });
      }
    });
  } else if (url === "/users") {
    fs.readFile("data.json", "utf8", (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end(err);
        } else {
            const users = JSON.parse(data);
            const userList = users.map((user) => `<li>${user.first_name}</li>`).join("");
            const response = `${userList}`;
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(`Following are the users present in database:${response}`);
        }
    });
}
 else if (url === "/address") {
    dns.lookup("masaischool.com", (err, address, family) => {
      if (err) {
        res.statusCode = 500;
        res.end(err);
      } else {
        const log = `URL: masaischool.com IP Address: ${address} and Family is ${family}\n`;
        fs.appendFileSync("logs.txt", log);
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("Logs File has been updated");

      }
    });
  } else if (url === "/say") {
    fs.readFile("logs.txt", "utf8", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end(err);
      } else {
        const log = cowsay.say({ text: data });
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end(log);
      }
    });
  } else {
  
    res.setHeader("Content-Type", "text/plain");
    res.end("404 Not Found");
  }
});

module.exports = server;
