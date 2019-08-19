'use strict'

var expect = require('chai').expect;
var ArrayExtension = require('../Methods/ArrayExtension');


/**
 * smal description for me, remove before PR
 * spec might be a function, then it evaluates every value of the array
 * 
 * if spec is not a function then it looks for a value that is the same on the array
 * 
 * in any case it returns true if theres a match, or false if there's no match 
 */

describe('Array Extension', function() {
  describe('#any()', function() {
    it('should return false when the value is not found in the array', function() {
      const array = [1, 2, 3, 4, 5];
      
      const anyResult = array.any('3');

      expect(anyResult).to.be.a('boolean').and.to.equal(false);
    });

    it('should return true when the value is found in the array', function() {
      const array = [1, 2, 3, 4, 5];
      
      const anyResult = array.any(3);

      expect(anyResult).to.be.a('boolean').and.to.equal(true);
    });

    it('should return false when the function is false for every value in the array', function() {
      const array = [1, 2, 3, 4, 5];
      
      const anyResult = array.any(value => value > 5);

      expect(anyResult).to.be.a('boolean').and.to.equal(false);
    });

    it('should return true when the function is true for at least one value in the array', function() {
      const array = [2, 3, 4, 4, 6];
      
      const anyResult = array.any((value, index) => value == (index + 1));

      expect(anyResult).to.be.a('boolean').and.to.equal(true);
    });
  });
});
