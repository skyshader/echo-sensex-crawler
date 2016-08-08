'use strict';

const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const json2csv = require('json2csv');

module.exports = class CSVStorage {

    constructor(data) {
        this.data = data;
    }

    storeJSON(fields) {
        let csvData = json2csv({ data: this.data, fields: fields });
        return fs.writeFile('output/data.csv', csvData);
    }
};
