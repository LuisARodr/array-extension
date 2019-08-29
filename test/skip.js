'use strict'

var expect = require('chai').expect;
var ArrayExtension = require('../Methods/ArrayExtension');


describe('Array Extension', function() {
  describe('#skip()', function() {
    it('should skip the first 3 elements when passed 3 as param', function() {
      const array = [1, 2, 3, 4, 5];

      const skipedArray = array.skip(3);

      expect(skipedArray).to.be.an('array').with.lengthOf(2).that.includes.members([4, 5]);
    });

    it('should return an empty array when passed a param larger than the size of the array', function() {
      const array = [1, 2, 3, 4, 5];

      const skipedArray = array.skip(7);

      expect(skipedArray).to.be.an('array').with.lengthOf(0);
    });

    it("shouldn't skip any value when NaN is passed as param", function() {
      const array = [1, 2, 3];

      const skipedArray = array.skip(NaN);

      expect(skipedArray).to.be.an('array').with.lengthOf(3).that.includes.members([1, 2, 3]);
    });
  });
});
