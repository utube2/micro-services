'use strict';

const request = require("request");
const express = require('express');

// Constants
const PORT = process.env.PORT || 8083;


// App
const app = express();
app.get('/service3', (req, res) => {
  return res.send(`It's App 3, from SERVER3`);
});

app.get('/service3/hello', (req, res) => {
  return res.send(`It's Hello from service 3`);
});



app.get('/service3/bye', (req, res) => {
  return res.send(`It's BYE  from service 3`);
});


app.listen(PORT);
console.log(`Running on port :${PORT}`);
