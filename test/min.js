'use strict'

var expect = require('chai').expect;
var ArrayExtension = require('../');


describe('Array Extension', function() {
  describe('#min()', function() {
    it(`should return 1 when 1 is the smallest number and there's no param`, function() {
      const array = [1, 4, 5, 3, 2];

      const min = array.min();

      expect(min).to.be.a('number').that.equals(1);
    });

    it(`should return the object with age 19 when the comparator compares the age of the objects`, function() {
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

        const min = array.min((valueA, valueB) => valueA.age - valueB.age);

        expect(min).to.be.an('object').with.property('name').that.equals('Juancho');
    });

    it(`should return null when the array is empty`, function() {
        const array = [];

        const min = array.min();

        expect(min).to.be.null;
    });

    it('should throw a Type error when spec is not a function', function() {
        expect([].min.bind([], "Hello")).to.throw(`Type error: Hello is not a function.`);      
        expect([].min.bind([], {name: "John"})).to.throw(`Type error: [object Object] is not a function.`);    
    });
  });
});
