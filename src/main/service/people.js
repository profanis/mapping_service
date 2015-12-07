var peopleModel = require('../model/people.js');

var peopleApp = function() {
  var model = peopleModel;
  model.name = "test";
  model.surname = "dsdsds";
  return model;
}

module.exports = peopleApp;
