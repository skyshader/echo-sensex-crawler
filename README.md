#SENSEX DATA CRAWLER

A web crawler that fetches SENSEX data from [BSE India](http://www.bseindia.com/markets/Equity/EuqityDB.aspx) and stores it in CSV format.

####How to use:
- Clone the repository
  ```git clone https://github.com/skyshader/echo-sensex-crawler.git```

- Switch to the cloned directory and run `npm install`

- Run `node crawlll` in the terminal to run the crawler

- The result `csv` file will get generated in the `output` directory


####The tech stack used is NodeJS along with few libraries.

The libraries used are:
- [bluebird](https://github.com/petkaantonov/bluebird)
- [request](https://github.com/request/request)
- [cheerio](https://github.com/cheeriojs/cheerio)
- [json2csv](https://github.com/zemirco/json2csv)
