const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 7700;

const server = http.createServer((req, res) => {
  const url = req.url === "/" ? "/index.html" : req.url;
  const filePath = path.join(__dirname, url);

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.statusCode = 404;
      res.end("404 Not Found");
    } else {
      fs.stat(filePath, (err, stats) => {
        if (err) {
          res.statusCode = 500;
          res.end("Internal Server Error");
        } else {
          if (stats.isDirectory()) {
            fs.readdir(filePath, (err, files) => {
              if (err) {
                res.statusCode = 500;
                res.end("Internal Server Error");
              } else {
                const directoryListing = files.map((file) => {
                  const fileUrl = path.join(url, file);
                  const icon = fs.statSync(path.join(filePath, file)).isDirectory() ? "&#128193;" : "&#128441;";
                  return `<li>${icon} <a href="${fileUrl}">${file}</a></li>`;
                });
                const htmlResponse = `
                  <html>
                    <head>
                      <title>Directory Listing</title>
                      <style>
                        li {
                          margin-bottom: 10px;
                        }
                      </style>
                    </head>
                    <body>
                      <ul>
                        ${directoryListing.join("")}
                      </ul>
                    </body>
                  </html>
                `;
                res.statusCode = 200;
                res.setHeader("Content-Type", "text/html");
                res.end(htmlResponse);
              }
            });
          } else {
            fs.readFile(filePath, (err, data) => {
              if (err) {
                res.statusCode = 500;
                res.end("Internal Server Error");
              } else {
                res.statusCode = 200;
                res.setHeader("Content-Type", "text/plain");
                res.end(data);
              }
            });
          }
        }
      });
    }
  });
});

module.exports = server;
