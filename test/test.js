let expect = require('./test-helper').expect;

describe('Array', function() {
  describe('#include()', function() {
    it('expect to be and array that does not include an element.', function() {
      expect([1, 2]).to.be.an('array').that.does.not.include(3);
    });
  });
});
