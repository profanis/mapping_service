(function() {
    'use strict';
    var BaseRoute = require('./baseRoute.js');

    var csvEndpoint = (router) => {
        var __endpoint = 'example';

        router.get('/' + __endpoint, function(req, res) {

            let parseOptions = {
                delimiter: ','
            };

            var baseRoute = new BaseRoute(req, res, __endpoint, parseOptions);
            baseRoute.invoke();
        });
    }

    module.exports = csvEndpoint;
}());
