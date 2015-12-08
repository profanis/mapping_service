var peopleApp = require('../service/people.js');

var peopleEndpoint = function(router) {
  var __endpoint = 'people';

  router.get('/' + __endpoint, function(req, res) {
    var result = peopleApp();
    res.json(result);
  });
}
module.exports = peopleEndpoint;
