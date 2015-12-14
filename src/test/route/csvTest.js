// (function() {
//     'use strict';
//
//     var assert = require('assert');
//     var request = require('request');
//     var httpUtils = require('request-mocha')(request);
//
//     describe('Array', () => {
//         describe('#indexOf()', () => {
//             before(startServer);
//
//             // Make request and save results to `this.err`, `this.res`, and `this.body`
//             httpUtils.save('http://localhost:8080/');
//
//             // Assert against mocha's `this` context
//             it('responded with "Hello World!"', function() {
//                 expect(this.err).to.equal(null);
//                 expect(this.res.statusCode).to.equal(200);
//                 expect(this.body).to.equal('Hello World!');
//             });
//         });
//     });
//
// }());
