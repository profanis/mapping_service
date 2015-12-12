(function() {
    'use strict';

    var assert = require("assert");
    var genericCsvParser = require('../../main/common/genericCsvParser.js');

    describe("generic csv parser", () => {

        describe("parse simple file with default options", () => {
            it("should pass", (done) => {
                genericCsvParser(__dirname + '/' + 'testcsvfile.csv', (csvData) => {
                    assert.equal(csvData.length, 6);
                    done();
                });

            });
        });


        describe("parse simple file with customised options", () => {
            it("should pass", (done) => {
                let options = {
                    delimiter: ';'
                };
                genericCsvParser(__dirname + '/' + 'testcsvfile.csv', options, (csvData) => {
                    assert.equal(csvData.length, 6);
                    done();
                });
            });
        });


        // describe("parse simple file with customised options", () => {
        //     it("should fail", (done) => {
        //
        //         var fn = () => {
        //             let options = {
        //                 delimiter: '|'
        //             };
        //             genericCsvParser(__dirname + '/' + 'testcsvfile.csv', options, (csvData) => {
        //                 //unreachable
        //             });
        //         };
        //
        //         assert.throws(() => {
        //             fn();
        //
        //         }, /Error/);
        //         done();
        //     });
        // });

    });

}());
