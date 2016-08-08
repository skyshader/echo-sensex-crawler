'use strict';

const cheerio = require('cheerio');
let $ = null;

module.exports = class Parser {
    constructor(html) {
        $ = cheerio.load(html);
    }

    parse() {
        let headerFields = this.extractTableHeader();
        return this.extractDataSet(headerFields);
    }

    extractTableHeader() {
        let fields = [];
        let tableHeadings = $('table table table').find('tr').first().find('td');
        tableHeadings.each((i, elem) => {
            fields.push($(elem).text());
        });
        return fields;
    }

    extractDataSet(fields) {
        let data = [];
        let tableRows = $('table table table').find('tr').first().nextAll();
        tableRows.each((i, row) => {
            let values = {};
            let tableColumns = $(row).find('td');
            tableColumns.each((j, column) => {
                values[fields[j].toString()] = $(column).text();
            });
            data.push(values);
        });
        return data;
    }
    
};
