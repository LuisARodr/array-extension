'use strict'

var expect = require('chai').expect;
var ArrayExtension = require('../');


describe('Array Extension', function() {
  describe('#first()', function() {
    it('should return the first value of the array when spec is not present', function() {
        const array = ['a', 'b' , 'c'];

        const fisrtOnArray = array.first();

        expect(fisrtOnArray).to.be.a('string').that.equals('a');
    });

    it('should return 2 when spec is looking for a pair number and is present on the array', function() {
        const array = [1, 2, 3, 4, 5];

        const fisrtOnArray = array.first(value => (value % 2) == 0);

        expect(fisrtOnArray).to.be.a('number').that.equals(2);
    });

    it('should return null when spec is not satisfied by any value', function() {
        const array = [1, 2, 3];

        const fisrtOnArray = array.first(value => value > 3);

        expect(fisrtOnArray).to.be.null;
    });

    it('should return null when the array is empty', function() {
        const array = [];

        const fisrtOnArray = array.first(() => true);

        expect(fisrtOnArray).to.be.null;
    });

    it('should throw a Type error when spec is not a function', function() {
        expect([].first.bind([], "Hello")).to.throw(`Type error: Hello is not a function.`);      
        expect([].first.bind([], {name: "John"})).to.throw(`Type error: [object Object] is not a function.`);    
    });
  });
});
