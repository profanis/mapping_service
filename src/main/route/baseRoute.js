(function() {
    'use strict';

    const CsvQueryService = require('../service/csvQueryService.js');
    const genericCsvParser = require('../../main/common/genericCsvParser.js');
    const _ = require('lodash');

    /**
     * sets the BaseRoute functionality
     * @param  {[object]} req         [Http Request]
     * @param  {[object]} res         [Http Response]
     * @param  {[string]} filename    [the name of the csv file]
     * @param  {[String]} parseOptions [options of the csv parser in case they need to overridden]
     * @return {[type]}              [description]
     */
    var BaseRoute = function(req, res, filename, parseOptions) {
        var self = this;
        let filePath = "src/main/resources/{0}.csv".replace(/\{0\}/, filename);
        let getColumn = req.query.get;
        let filterColumn = req.query.by;
        let filterValue = req.query.value;

        if (_.isEmpty(filterColumn) || _.isEmpty(filterValue)) {
            return res.json({
                "error": "both 'by' and 'value' are required"
            });
        }

        let callback = (csvData) => {
            let csvQueryService = new CsvQueryService(csvData);
            let filter = {
                [filterColumn]: filterValue
            };
            let result = csvQueryService.getBy(getColumn, filter);

            if (_.isEmpty(result)) {
                result = {
                    "error": "no results found"
                }
            }

            res.json(result);
        };

        self.invoke = () => {
            var args = [filePath];
            if (parseOptions) args.push(parseOptions);
            args.push(callback);
            genericCsvParser.apply(this, args);
        }

        return self;
    }

    module.exports = BaseRoute;
}());
