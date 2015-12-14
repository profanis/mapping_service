(function() {
    'use strict';

    var parse = require('csv-parse');
    var fs = require('fs');
    var _ = require('lodash');

    
    var genericCsvParser = function(fileName, parserOptions, cb) {

        if (arguments.length == 2) {
            fileName = arguments[0];
            cb = arguments[1];
            parserOptions = {};
        };

        let fileData = fs.readFileSync(fileName, 'utf-8');

        let defaultParserOptions = {
            skip_empty_lines: true,
            trim: true,
            delimiter: ';',
            columns: true
        };
        _.merge(defaultParserOptions, parserOptions);

        parse(fileData, defaultParserOptions, (parseError, parsedData) => {
            if (parseError) throw parseError;

            if (_.isFunction(cb)) {
                cb(parsedData);
            }
        });
    }

    module.exports = genericCsvParser;
}());
