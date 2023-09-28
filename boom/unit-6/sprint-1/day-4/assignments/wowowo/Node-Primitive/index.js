const fs = require("fs");

function isNumber(num) {
  const output = typeof num === "number" ? "it is a Number." : "it is Not a Number.";
  fs.writeFileSync("test.txt", output);
}

function isStr(str) {
  const output = typeof str === "string" ? "it is a String." : "it is Not a String.";
  fs.writeFileSync("test.txt", output);
}

function isArray(arr) {
  const output = Array.isArray(arr) ? "it is a Array." : "it is Not a Array.";
  fs.writeFileSync("test.txt", output);
}

function isObj(obj) {
  const output = typeof obj === "object" && obj !== null ? "this is a object." : "this is not a object.";
  fs.writeFileSync("test.txt", output);
}

function cls() {
  fs.unlinkSync("test.txt");
}

module.exports = {
  isNumber,
  isStr,
  isArray,
  isObj,
  cls
};
