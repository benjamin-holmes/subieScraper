# subieScraper

This is a small project I am using to learn more about NodeJS and a small amount of jQuery. I chose not to use an npm package such as Express so that I could get a better idea of how the normal NodeJS server functioned. The idea is to get all of the ads containing Subaru's from craigslist and display them with links to the actual posting. The script responsible for scraping the site is currently only set to scrape the front page of the Boulder location for now. The actual site is vey basic and needs work but that is on the back burner for now. It is also worth noting that any ad blocker will prevent the ads from being returned to the we browser.

# The Scraper
The scraper itself uses two npm modules, request-require and cheerio. The first is for scraping the raw HTML from the page and the second for finding the elements using the CSS path. The result is then returned as a JSON object to the front end javascript via some jQuery and parsed within. 
