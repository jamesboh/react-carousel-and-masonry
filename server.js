'use strict';

const express = require('express');
const volleyball = require('volleyball');
const app = express();

app.use(volleyball);
app.use(express.static(__dirname));

app.listen(process.env.PORT || 8000, () => {
  console.log('Server listening on port', 8000);
});

