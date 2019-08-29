'use strict'

var expect = require('chai').expect;
var ArrayExtension = require('../');


describe('Array Extension', function() {
  describe('#where()', function() {
    it('should return a new array where the values are only the ones ' + 
    'that make the spec return true', function() {
        const array = [1, 2, 3, 4, 5, 6];

        const arrayOfPairs = array.where(value => (value % 2 === 0));

        expect(arrayOfPairs).to.be.an('array').that.includes.members([2, 4, 6]);
    });

    it('should not modify the current array', function() {
        const array = [1, 0, 0 , 1, 1];

        const arrayOfOnes = array.where(value => value);

        expect(array).to.be.an('array').that.includes.members([1, 0]);
    });


    it('should throw a Type error when the callback is not a function', function() {
        expect([].where.bind([], "Hello")).to.throw(`Type error: Hello is not a function.`);      
        expect([].where.bind([], {name: "John"})).to.throw(`Type error: [object Object] is not a function.`);    
        expect([].where.bind([])).to.throw(`Type error: undefined is not a function.`);      
    });
  });
});
