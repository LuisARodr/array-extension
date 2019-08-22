'use strict'

var expect = require('chai').expect;
var ArrayExtension = require('../Methods/ArrayExtension');


describe('Array Extension', function() {
  describe('#last()', function() {
    it('should return the last value of the array when spec is not present', function() {
        const array = ['a', 'b' , 'c'];
        
        const lastOnArray = array.last();
        
        expect(lastOnArray).to.be.a('string').that.equals('c');
    });

    it('should return 4 when spec is looking for a pair number and 4 is the last pair on the array', function() {
        const array = [1, 2, 3, 4, 5];

        const lastOnArray = array.last(value => (value % 2) == 0);

        expect(lastOnArray).to.be.a('number').that.equals(4);
    });

    it('should return null when spec is not satisfied by any value', function() {
        const array = [1, 2, 3];

        const lastOnArray = array.last(value => value > 3);

        expect(lastOnArray).to.be.null;
    });

    it('should return null when the array is empty', function() {
        const array = [];

        const lastOnArray = array.last(() => true);

        expect(lastOnArray).to.be.null;
    });

    it('should throw a Type error when spec is not a function', function() {
        expect([].last.bind([], "Hello")).to.throw(`Type error: Hello is not a function.`);      
        expect([].last.bind([], {name: "John"})).to.throw(`Type error: [object Object] is not a function.`);    
      });
  });
});
