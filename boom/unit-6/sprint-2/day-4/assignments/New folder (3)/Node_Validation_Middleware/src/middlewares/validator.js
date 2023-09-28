const fs = require('fs');

const validatorFunction = (req, res, next) => {
  const { body } = req;
  const errors = [];

  // Check if request body exists
  if (!body || Object.keys(body).length === 0) {
    return res.status(400).send('Invalid request body.');
  }

  // Check ID type is number
  if (typeof body.ID !== 'number') {
    errors.push('ID type is not a number.');
  } else {
    errors.push('ID is a number.');
  }

  // Check Name type is string and doesn't contain any number
  if (typeof body.Name !== 'string') {
    errors.push('Name type is not a string.');
  } else if (/\d/.test(body.Name)) {
    errors.push('Name contains a number.');
  } else {
    errors.push('Name is a string.');
  }

  // Check Description type is string
  if (typeof body.Description !== 'string') {
    errors.push('Description type is not a string.');
  } else {
    errors.push('Description is a string.');
  }

  // Check Rating type is number
  if (typeof body.Rating !== 'number') {
    errors.push('Rating type is not a number.');
  } else {
    errors.push('Rating is a number.');
  }

  // Check Genre type is string
  if (typeof body.Genre !== 'string') {
    errors.push('Genre type is not a string.');
  } else {
    errors.push('Genre is a string.');
  }

  // Check Cast type is an array of strings and doesn't contain non-string values
  if (!Array.isArray(body.Cast)) {
    errors.push('Cast type is not an array.');
  } else if (body.Cast.some((item) => typeof item !== 'string')) {
    errors.push('Cast contains non-string value(s).');
  } else {
    errors.push('Cast is an array of strings.');
  }

  // Write validation result to res.txt
  const validationOutput = errors.join('\n');
  fs.writeFileSync('res.txt', validationOutput);

  // Check if there are any errors
  if (errors.length > 0) {
    return res.status(400).send('Bad request. Some data is incorrect.');
  }

  next();
};

module.exports = validatorFunction;
