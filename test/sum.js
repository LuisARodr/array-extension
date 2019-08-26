'use strict'

var expect = require('chai').expect;
var ArrayExtension = require('../Methods/ArrayExtension');


describe('Array Extension', function() {
  describe('#index()', function() {
    it('should add all the values of the array when no spec is passed', function() {
      const array = [1, 2, 3, 4];

      const sumArray = array.sum();

      expect(sumArray).to.be.a('number').that.equals(10);
    });

    it('should add all the return values of the spec function', function() {
      const array = [1, 2, 3, 4];

      const sumArray = array.sum(value => value * 2);

      expect(sumArray).to.be.a('number').that.equals(20);
    });

    it("should concatenate strings when there are strings on the array and there's no spec", function() {
        const array = [1, 2, '3', '4'];

        const sumArray = array.sum();
  
        expect(sumArray).to.be.a('string').that.equals('334');
    });

    it("should should return null when the array is empty", function() {
        const array = [];

        const sumArray = array.sum();
  
        expect(sumArray).to.be.null;
    });

    it('should throw a Type error when spec is not a function', function() {
        expect([].sum.bind([], "Hello")).to.throw(`Type error: Hello is not a function.`);      
        expect([].sum.bind([], {name: "John"})).to.throw(`Type error: [object Object] is not a function.`);    
    });
  });
});
