(function() {
    'use strict';

    const parse = require('csv-parse');
    const fs = require('fs');
    const _ = require('lodash');

    var genericCsvParser = function(fileName, parserOptions, cb) {

        if (arguments.length == 2) {
            fileName = arguments[0];
            cb = arguments[1];
            parserOptions = {};
        };

        let fileData = fs.readFileSync(fileName, 'utf-8');

        var parseCallback = (error, data) => {
            if (error) {
                throw error;
            }

            if (_.isFunction(cb)) {
                cb(data);
            }
        }

        parse(fileData, csvParseOptions(parserOptions), parseCallback);
    }


    function csvParseOptions(customOptions) {
        let defaultParserOptions = {
            skip_empty_lines: true,
            trim: true,
            delimiter: ';',
            columns: true
        };
        return _.merge(defaultParserOptions, customOptions);
    }

    module.exports = genericCsvParser;
}());
