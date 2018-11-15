"use strict";

const http = require('http');
const subieScraperController = require('./controllers/subieScraperController');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // send requests for subi scraper
  subieScraperController.send(req, res);
});

server.listen(port, hostname, () => {
  console.log(`Server listening on ${hostname}:${port}`);
});
