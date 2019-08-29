'use strict'

var expect = require('chai').expect;
var ArrayExtension = require('../Methods/ArrayExtension');


describe('Array Extension', function() {
  describe('#flatten()', function() {
    it('should return an [1, 2, ,3 ,4, 5] array when the array is [1, [2, 3], [4, 5]] array', function() {
      const array = [1, [2, 3], [4, 5]];

      const flattenArray = array.flatten();

      expect(flattenArray).to.be.an('array').of.length(5).to.have.ordered.members([1, 2, 3, 4, 5]);
    });

    it('should return an [1, 2, 3, 4, 5] array when the array is [[[1]], [2, [3, 4 , [5]]]]', function() {
        const array = [[[1]], [2, [3, 4 , [5]]]];

        const flattenArray = array.flatten();

        expect(flattenArray).to.be.an('array').of.length(5).to.have.ordered.members([1, 2, 3, 4, 5]);
    });

    it('should return an [] (empty array) when the array is [] empty', function() {
        const array = [];

        const flattenArray = array.flatten();

        expect(flattenArray).to.be.an('array').of.length(0)
    });

    it('should return a [1, 2 ,3 ,4, 5] when the array is [1, 2, 3, 4, 5]', function() {
        const array = [1, 2, 3, 4, 5];

        const flattenArray = array.flatten();

        expect(flattenArray).to.be.an('array').of.length(5).to.have.ordered.members([1, 2, 3, 4, 5]);
    });
  });
});
