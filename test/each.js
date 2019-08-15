'use strict'

var expect = require('chai').expect;
var ArrayExtension = require('../Methods/ArrayExtension');


describe('Array Extension', function() {
  describe('#each()', function() {
    it('should concatenate the values when each value is added to a empty sting', function() {
      let array = [1, 2, 3, 4, 5];
      let concatArray = '';

      array.each(value => concatArray += value);

      expect(concatArray).to.be.equal("12345");
    });
    it('should add the values of the array when the array values are numbers and the function adds them', function() {
      let array = [1, 1, 2, 2, 4];
      let sum = 0;

      array.each(value => sum += value);

      expect(sum).to.be.equal(10);
    });
    it('should execute the function the same number of times as the length of the array', function() {
      let array = new Array(21);
      let count = 0;

      array.each(() => count += 1);

      expect(count).to.be.equal(21);
    });
    it('should pass the current index with each function call', function() {
      let array1 = [1,2,3,4,5];
      let array2 = [1,2,3,4,5];
      let isSameArrayValue = [];

      array1.each((value, index) => isSameArrayValue.push( value == array2[index]) );

      expect(isSameArrayValue).to.not.include(false);
    })
    it('should throw a Type error when the callback is not a function', function() {
      expect([].each.bind([], "Hello")).to.throw(`Type error: Hello is not a function.`);      
      expect([].each.bind([], {name: "John"})).to.throw(`Type error: [object Object] is not a function.`);    
      expect([].each.bind([])).to.throw(`Type error: undefined is not a function.`);      
    });
  });
});
