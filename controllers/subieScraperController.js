"use strict";

const fs = require("fs");
const subieScraper = require('../assets/subieScraperScript');

exports.send = function subieScraperController(req, res) {
  console.log('subieScraperController called');

  // check the requested URL and act accordingly
  if (req.url === '/subieScraper') {
    // placeholders for actual content
    res.writeHead(200 ,{'Content-Type': 'text/html'});
    fs.createReadStream('./views/subieScraper.html').pipe(res);
    // fs.createReadStream(``).pipe(res);
  }
  else if(req.url === '/subieScraper/getAds') {
    // JQuery POST request handler
    console.log('return ads');
    subieScraper.f;
    setTimeout(() => {
      res.write(subieScraper.getAds());
      res.end();
    },1000);
  } else {
    // otherwise page not found
    res.writeHead(404, {'Content-Type' : 'text/html'});
    res.write('<h1>Page is not found.</h1>');
    res.end();
    console.log(`Requested page ${req.url} not found.`);
  }
}
