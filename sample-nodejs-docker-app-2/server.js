'use strict';

const request = require("request");
const express = require('express');

// Constants
const PORT = process.env.PORT || 8082;


// App
const app = express();
app.get('/service2', (req, res) => {
  return res.send(`It's App 2`);
});

app.get('/service2/hello', (req, res) => {
  return res.send(`Hello, from Service2`);
});


app.get('/service2/bye', (req, res) => {
  return res.send(`It's BYE from service 2`);
});

app.listen(PORT);
console.log(`Running on port :${PORT}`);
