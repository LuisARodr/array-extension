'use strict'

var expect = require('chai').expect;
var ArrayExtension = require('../');


describe('Array Extension', function() {
  describe('#select()', function() {
    it('should create an array of size 21 when called from an array of size 21', function() {
      const array = new Array(21);

      const selectedArray = array.select(() => 1);

      expect(selectedArray).to.be.an('array').of.length(21);
    });       

    it('should create an array with the returning values of the spec function', function() {
      const array = [1, 2, 3, 4];

      const selectedArray = array.select(value => value*value);

      expect(selectedArray).to.be.an('array').that.includes.members([1, 4, 9, 16]);
    });

    it('should create an array with only undefined values when the spec function' +
    ' has no return value', function() {
      const array = [1, 2, 3];

      const selectedArray = array.select(function() {});

      expect(selectedArray).to.be.an('array').that.includes.members([undefined]);
    });

    it('should not modify the current array', function() {
      const array = [1, 0 ,0 ,1, 1];

      const selectedArray = array.select(value => 0);

      expect(array).to.be.an('array').that.includes.members([1,0]);
    });

    it('should throw a Type error when spec is not a function', function() {
      expect([].select.bind([], "Hello")).to.throw(`Type error: Hello is not a function.`);      
      expect([].select.bind([], {name: "John"})).to.throw(`Type error: [object Object] is not a function.`);    
      expect([].select.bind([])).to.throw(`Type error: undefined is not a function.`);      
    });
  });
});
