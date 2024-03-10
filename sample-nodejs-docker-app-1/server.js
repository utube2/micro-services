'use strict';

const request = require("request");
const express = require('express');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || 'localhost';


// App
const app = express();
app.get('/', (req, res) => {
  return res.send(`It's App 1`);
});

app.get('/service1', (req, res) => {
  return res.send(`It's service 1`);
});

app.get('/service1/hello', (req, res) => {
  return res.send(`It's hello from service 1`);
});

app.get('/service1/bye', (req, res) => {
  return res.send(`It's BYE  from service 1`);
});


app.listen(PORT);
console.log(`Running on port :${PORT}`);
