'use strict';

const app = require('./server');
require('dotenv').config();
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;
