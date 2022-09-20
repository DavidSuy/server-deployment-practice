'use strict';

const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Hello Word');
});

app.get('/greeting', (req, res) => {
  res.json({
    greeting: 'Hello World',
  });
});

module.exports = app;
