// Require libraries for applications
const rp = require('request-promise');
const $ = require('cheerio');
const fs = require('fs');

// variables for url(s)
const baseURL = "https://boulder.craigslist.org";
const firstPage = "https://boulder.craigslist.org/search/cta?hasPic=1&min_price=1&auto_make_model=subaru";
const ads = [];             // all ads gathered

// Ad object to track ad info
function Ad(title, price, date, link) {
  this.title = title;
  this.price = price;
  this.date = date;
  this.link = link;

  this.setImage = function(image) {
    this.image = image;
  }
}

function getAds() {
  return JSON.stringify(ads);
}


function scrape(firstPage)
{
  rp(firstPage).then((html) => {
  const adTitleList = $('#sortable-results > ul > li > p > a', html);
  const adPriceList = $('#sortable-results > ul > li > p > span.result-meta > span.result-price', html);
  const adPostDate = $('#sortable-results > ul > li > p > time', html);

  for ( let i = 0; i <adTitleList.length; i++ ) {
    const title = adTitleList[i].children[0].data;
    const link = adTitleList[i].attribs.href;
    const price = adPriceList[i].children[0].data;
    const date = adPostDate[i].children[0].data;

    let ad = new Ad(title, price, date, link);
    ads.push(ad);

    // Go to each ad and grab the image source
    rp(ad.link).then((html) => {
      let imgSrc = $('div > img', html)[0].attribs.src;
      ad.setImage(imgSrc);
      // console.log($('.thumb', html)[0].attribs);
    });
  }
  setTimeout(() => {return JSON.stringify(ads)}, 1000);
});
}

exports.f = scrape('https://boulder.craigslist.org/search/cta?hasPic=1&min_price=1&auto_make_model=subaru');
exports.getAds = getAds;
