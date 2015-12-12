(function() {
    'use strict';

    var assert = require("assert");
    var genericCsvParser = require('../../main/common/genericCsvParser.js');
    var CsvQueryService = require('../../main/service/csvQueryService.js');
    var _ = require("lodash");

    describe("Csv Mapper", () => {

        describe("Parse spcific queries", () => {

            it("should return the value of 'column1' after searching by specific value of 'column2' ", (done) => {

                genericCsvParser(__dirname + "/" + "testcsvfile.csv", (csvData) => {
                    let csvQueryService = new CsvQueryService(csvData);
                    let query = {
                        "column2": "value3a"
                    };
                    var result = csvQueryService.getBy("column1", query);

                    assert.equal(result, "value3");
                    done();
                });
            })

        });

    });

}());
