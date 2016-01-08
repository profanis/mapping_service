(function() {
    'use strict';

    const assert = require('chai').assert;
    const expect = require('chai').expect;
    const genericCsvParser = require('../../main/common/genericCsvParser.js');

    describe("generic csv parser", () => {

        describe("parse simple file with default options", () => {
            it("should pass", (done) => {
                genericCsvParser(__dirname + '/' + 'testcsvfile.csv', (csvData) => {
                    assert.lengthOf(csvData, 5, 'csvData has a length of 5');
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
                    assert.lengthOf(csvData, 5, 'csvData has a length of 5');
                    done();
                });
            });
        });


        //TODO promises should be implemented in the genericCsvParser so to handle the exception
        // describe("parse simple file with customised options", () => {
        //     it("should fail", (done) => {
        //
        //         var fn = function(){
        //             let options = {
        //                 delimiter: '|'
        //             };
        //             genericCsvParser(__dirname + '/' + 'testcsvfile.csv', options, (csvData) => {
        //                 //unreachable
        //             });
        //         };
        //
        //
        //         expect(fn).to.throw('[Error: Invalid closing quote at line 2; found ";" instead of delimiter "|"]');
        //         done();
        //     });
        // });

    });

}());
