// index.js

// Import the crypto module
const crypto = require('crypto');

// Get the command line arguments using process.argv
const args = process.argv.slice(2); // Exclude the first two arguments (node and script filename)
const operation = args[0]; // Get the operation from the arguments

// Complete the function
function calculate(operation, numbers) {
  switch (operation) {
    case 'add':
      return numbers.reduce((a, b) => a + parseFloat(b), 0);
    case 'sub':
      return numbers.reduce((a, b) => a - parseFloat(b));
    case 'mult':
      return numbers.reduce((a, b) => a * parseFloat(b), 1);
    case 'divide':
      return numbers.reduce((a, b) => a / parseFloat(b));
    case 'sin':
      return Math.sin(parseFloat(numbers[0]));
    case 'cos':
      return Math.cos(parseFloat(numbers[0]));
    case 'tan':
      return Math.tan(parseFloat(numbers[0]));
    case 'random':
      const length = parseInt(numbers[0]);
      if (isNaN(length)) {
        return "Provide length for random number generation.";
      } else {
        const randomBytes = crypto.randomBytes(Math.ceil(length / 2));
        const randomNumber = parseInt(randomBytes.toString('hex'), 16);
        return randomNumber % Math.pow(10, length);
      }
    default:
      return "Invalid operation";
  }
}

// Check if the operation is valid
if (operation) {
  const result = calculate(operation, args.slice(1)); // Pass the remaining arguments as numbers
  console.log(result);
} else {
  console.log("No operation provided.");
}
