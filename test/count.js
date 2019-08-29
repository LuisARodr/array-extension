'use strict'

var expect = require('chai').expect;
var ArrayExtension = require('../Methods/ArrayExtension');


describe('Array Extension', function() {
  describe('#count()', function() {
    it('should return 5 when spec is not present and the length of the array is 5', function() {
        const array = ['a', 'b', 'c', 'd', 'e'];

        const arrayCount = array.count();
        
        expect(arrayCount).to.be.a('number').that.equals(5);
    });

    it('should return 2 when only two values of the array satisfy the spec function', function() {
        const array = [1, 2, 3, 4, 5];

        const arrayCount = array.count(value => (value % 2) === 0);

        expect(arrayCount).to.be.a('number').that.equals(2);
    });

    it('should throw a Type error when spec is not a function', function() {
        expect([].count.bind([], "Hello")).to.throw(`Type error: Hello is not a function.`);      
        expect([].count.bind([], {name: "John"})).to.throw(`Type error: [object Object] is not a function.`);    
    });
  });
});
