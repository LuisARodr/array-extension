'use strict'

var expect = require('chai').expect;
var ArrayExtension = require('../Methods/ArrayExtension');


describe('Array Extension', function() {
  describe('#take()', function() {
    it('should return a new array with the size of the first param when the spec param is missing', function() {
      const array = new Array(20);

      const takenArray = array.take(11);

      expect(takenArray).to.be.an('array').of.length(11);
    });
    
    it('should not modify the current array', function() {
      const array = [0, 0 ,0 ,1, 1];

      const takenArray = array.take(3);

      expect(array).to.be.an('array').that.includes.members([1, 0]);
    });

    it('should return a new array with the first 4 values of the array when the howMany param' + 
    ' is 4 and the spec param is missing', function() {
      const array = [1, 2, 3, 4, 5, 6, 7];

      const takenArray = array.take(4);

      expect(takenArray).to.be.an('array').that.includes.members([1, 2, 3, 4]).and.has.a.lengthOf(4);
    });

    it('should return only the first 3 pair numbers when the howMany param' +
    ' is 3 and the spec only takes pair numbers the', function() {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];

      const takenArray = array.take(3, value => !(value % 2));

      expect(takenArray).to.be.an('array').that.includes.members([2, 4, 6]).and.is.of.length(3);
    });

    it('should return a copy of the array when the howMany param is larger'+
    ' than the length of the array and the spec param is empty', function() {
      const array = ['a', 'b', 'c'];

      const takenArray = array.take(4);

      expect(takenArray).to.be.an('array').that.includes.members(['a', 'b', 'c']).and.is.of.length(3);
    });

    it("should return only 2 values even if howMany value is 3 when" +
    " the spec param is in use and restricts the result", function() {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];

      const takenArray = array.take(3, value => !(value % 3)); 
      
      expect(takenArray).to.be.an('array').that.includes.members([3, 6]).and.is.of.length(2);
    });

    it('should treat howMany as 0 when the argument is NaN', function() {
      const array = [1, 2, 3, 4, 5];

      const takenArray = array.take("NaN");

      expect(takenArray).to.be.an('array').of.length(0);
    });

    it('should throw a Type error when spec is not a function', function() {
      expect([].take.bind([], 2, "Hello")).to.throw(`Type error: Hello is not a function.`);      
      expect([].take.bind([], 2, {name: "John"})).to.throw(`Type error: [object Object] is not a function.`);   
    });
  });
});
