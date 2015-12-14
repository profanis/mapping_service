(function() {
    'use strict';
    var _ = require('lodash');

    function CsvQueryService(csvData) {
        var self = this;

        /**
         * [description]
         * @param  {[string]} neededColumn [what we are looking for]
         * @param  {[object]} filterColumn [it is an object which the propoerty name is the filterColumn and the value is the actualt filter]
         * @return {[string]}              [the result of the filterColumn]
         */
        self.getBy = (neededColumn, filterColumn) => {

            return _.isEmpty(neededColumn) ? _.findWhere(csvData, filterColumn) : _.result(_.findWhere(csvData, filterColumn), neededColumn);
        };

        return self;

    }

    module.exports = CsvQueryService;

}());
