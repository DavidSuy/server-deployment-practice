'use strict';

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Word');
});
app.get('/greeting', (req, res) => {
  res.json({
    greeting: 'Hello World',
  });
  // res.send('hello');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;
