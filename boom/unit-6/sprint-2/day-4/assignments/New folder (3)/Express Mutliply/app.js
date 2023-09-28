const express = require('express');
const app = express();

app.get('/multiply', (req, res) => {
  const { a, b } = req.query;

  if (!a || !b) {
    return res.status(400).json({
      error: '"a" and "b" are required parameters',
    });
  }

  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if (isNaN(numA)) {
    return res.status(400).json({
      error: '"a" is not a valid number',
    });
  }

  if (isNaN(numB)) {
    return res.status(400).json({
      error: '"b" is not a valid number',
    });
  }

  const product = numA * numB;

  res.json({
    product: product,
  });
});

module.exports = app;
