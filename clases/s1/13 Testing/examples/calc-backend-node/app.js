const express = require('express');
const app = express();
const path = require('path');

/**
 * Models
 */

//Loading API Models
const calculator = require('./models/calculator');

/**
 * Routing
 */

app.get('/operations/:operation/:number1/:number2', function (req, res) {
  const { operation, number1, number2 } = req.params;
  const result = calculator.calculate(operation, Number(number1), Number(number2));
  res.send({ result });
})

/**
 * Server
 */

const server = app.listen(3000, function () {
  console.log('App listening on port 3000!');
});

module.exports = { app, server };
