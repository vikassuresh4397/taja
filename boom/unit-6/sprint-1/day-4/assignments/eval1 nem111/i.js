const http = require("http");
const fs = require("fs");
const os = require("os");
const dns = require("dns");
const cowsay = require("cowsay");

let userCnt = 0; // To count the number of users

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // Handling the home route, send an h1 tag
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>HOME PAGE</h1>");
    res.end();
  } else if (req.url === "/count") {
    // Counting the number of users and writing the initial number in the logs.txt along with the time stamp
    const timestamp = new Date().toString();
    fs.readFile("data.json", "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end(err.toString());
      } else {
        const users = JSON.parse(data);
        userCnt = users.length;

        const log = `The initial user count is ${userCnt} at ${timestamp}\n`;
        fs.appendFile("logs.txt", log, (err) => {
          if (err) {
            res.writeHead(500, { "Content-Type": "text/html" });
            res.end(err.toString());
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end("The user count has been updated in the logs file");
          }
        });
      }
    });
  } else if (req.url === "/update") {
    // Updating the user database
    const timestamp = new Date().toString();
    fs.readFile("data.json", "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end(err.toString());
      } else {
        const users = JSON.parse(data);

        const newUser = {
          id: Math.floor(Math.random() * (userCnt - 1) + 100),
          first_name: os.userInfo().username,
          last_name: os.userInfo().username,
          email: "example@example.com",
          gender: "Male",
        };

        users.push(newUser);
        userCnt++;

        fs.writeFile("data.json", JSON.stringify(users), (err) => {
          if (err) {
            res.writeHead(500, { "Content-Type": "text/html" });
            res.end(err.toString());
          } else {
            const log = `Updated user count after adding a new user is ${userCnt} at ${timestamp}\n`;
            fs.appendFileSync("logs.txt", log);
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end("The data has been updated, go and check the data file");
          }
        });
      }
    });
  } else if (req.url === "/users") {
    // Get the first names of all the users from the json file and send as a response in list format
    fs.readFile("data.json", "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end(err.toString());
      } else {
        const users = JSON.parse(data);
        const userNames = users.map((user) => `- ${user.first_name}`);
        const response = `Following are the users present in the database:\n${userNames.join("\n")}`;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(response);
      }
    });
  } else if (req.url === "/address") {
    // Get the website URL from terminal and write its IP address and family in logs.txt
    const url = "masaischool.com";
    dns.lookup(url, (err, address, family) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end(err.toString());
      } else {
        const log = `URL: ${url} IP Address: ${address} and Family is ${family === 4 ? "IPv4" : "IPv6"}\n`;
        fs.appendFile("logs.txt", log, (err) => {
          if (err) {
            res.writeHead(500, { "Content-Type": "text/html" });
            res.end(err.toString());
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end("Logs File has been updated");
          }
        });
      }
    });
  } else if (req.url === "/say") {
    // Using the cowsay external module to send the logs.txt content as a response
    fs.readFile("logs.txt", "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end(err.toString());
      } else {
        const response = cowsay.say({
          text: data,
        });
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(response);
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("404 Not Found");
  }
});

module.exports = server;
