'use strict';

const Promise = require('bluebird');
const Crawler = require('./lib/crawler');
const Parser = require('./lib/parser');
const CSVStorage = require('./lib/csv-storage');

const url = 'http://www.bseindia.com/markets/Equity/EuqityDB.aspx';

Promise.coroutine(function* () {
    let crawler = new Crawler(url);
    let html = yield crawler.fetch();

    let parser = new Parser(html);
    let data = parser.parse();

    let csvStorage = new CSVStorage(data);
    csvStorage.storeJSON(['Security', 'Price', '%', 'Buy(Rs)', 'Sell(Rs)']);
})()
    .catch((err) => {
        console.log('Something went wrong!');
        console.log(err);
    });
