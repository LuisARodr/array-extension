'use strict'

var expect = require('chai').expect;
var ArrayExtension = require('../Methods/ArrayExtension');


describe('Array Extension', function() {
  describe('#max()', function() {
    it(`should return 5 when 5 is the bigger number and there's no param`, function() {
      const array = [1, 4, 5, 3, 2];

      const max = array.max();

      expect(max).to.be.a('number').that.equals(5);
    });

    it(`should return the object with age 69 when the comparator looks for the object with bigger age`, function() {
        const obj1 = {
            name: 'Juancho',
            age: 19,
            hasJob: false,
        };
        const obj2 = {
            name: 'Ramiro',
            age: 69,
            hasJob: false,
        };
        const obj3 = {
            name: 'Luis',
            age: 39,
            hasJob: true,
        };
        const obj4 = {
            name: 'Ramon',
            age: 24,
            hasJob: true,
        };

        const array = [obj1, obj2, obj3, obj4];

        const max = array.max((valueA, valueB) => valueA.age - valueB.age);

        expect(max).to.be.an('object').with.property('name').that.equals('Ramiro');
    });

    it(`should return null when the array is empty`, function() {
        const array = [];

        const max = array.max();

        expect(max).to.be.null;
    });

    it('should throw a Type error when spec is not a function', function() {
        expect([].max.bind([], "Hello")).to.throw(`Type error: Hello is not a function.`);      
        expect([].max.bind([], {name: "John"})).to.throw(`Type error: [object Object] is not a function.`);    
    });
  });
});
