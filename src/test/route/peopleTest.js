var assert = require('assert');
var peopleApp = require('./../../main/service/people.js');

describe('Array', function() {
  describe('#indexOf()', function() {

    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1, 2, 3].indexOf(5));
      assert.equal(-1, [1, 2, 3].indexOf(0));
    });

    it('should have "test" name in the object',function(){
      var obj = peopleApp();
      assert.equal(obj.name,'test');
    })

  });
});
