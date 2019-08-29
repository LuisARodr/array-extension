'use strict'

var expect = require('chai').expect;
var ArrayExtension = require('../');


describe('Array Extension', function() {
  describe('#pluck()', function() {
    it('should return an array of names when the property is set as "name"', function() {
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

        const pluckedArray = array.pluck('name');

        expect(pluckedArray).to.be.an('array')
            .of.length(4)
            .and.to.have.members(["Luis", "Juancho", "Ramon", "Ramiro"]);
    });

    it("should skip 2 values when two objects on the array don't have the requested property", function() {
        const obj1 = {
            age: 19,
            hasJob: false,
        };
        const obj2 = {
            name: 'Ramiro',
            age: 69,
            hasJob: false,
        };
        const obj3 = {
            age: 39,
            hasJob: true,
        };
        const obj4 = {
            name: 'Ramon',
            age: 24,
            hasJob: true,
        };

        const array = [obj1, obj2, obj3, obj4];

        const pluckedArray = array.pluck('name');

        expect(pluckedArray).to.be.an('array')
            .of.length(2)
            .and.to.have.members(["Ramon", "Ramiro"]);
    });

    it(`should return an empty array when the objects on the array don't have the requested propert`, function() {
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

        const pluckedArray = array.pluck('height');

        expect(pluckedArray).to.be.an('array')
            .of.length(0);
    });

    it('should return an array of names when the property is set as symbol "name"', function() {
        const nameSymbol = Symbol("name");

        const obj1 = {
            [nameSymbol]: 'Juancho',
            age: 19,
            hasJob: false,
        };
        const obj2 = {
            [nameSymbol]: 'Ramiro',
            age: 69,
            hasJob: false,
        };
        const obj3 = {
            [nameSymbol]: 'Luis',
            age: 39,
            hasJob: true,
        };
        const obj4 = {
            [nameSymbol]: 'Ramon',
            age: 24,
            hasJob: true,
        };

        const array = [obj1, obj2, obj3, obj4];

        const pluckedArray = array.pluck(nameSymbol);

        expect(pluckedArray).to.be.an('array')
            .of.length(4)
            .and.to.have.members(["Luis", "Juancho", "Ramon", "Ramiro"]);
    });

    it("should skip 2 values when two objects on the array don't have the requested symbol property", function() {
        const nameSymbol = Symbol("name");

        const obj1 = {
            [nameSymbol]: 'Juancho',
            age: 19,
            hasJob: false,
        };
        const obj2 = {
            nameSymbol: 'Ramiro',
            age: 69,
            hasJob: false,
        };
        const obj3 = {
            [nameSymbol]: 'Luis',
            age: 39,
            hasJob: true,
        };
        const obj4 = {
            nameSymbol: 'Ramon',
            age: 24,
            hasJob: true,
        };

        const array = [obj1, obj2, obj3, obj4];

        const pluckedArray = array.pluck(nameSymbol);

        expect(pluckedArray).to.be.an('array')
            .of.length(2)
            .and.to.have.members(["Luis", "Juancho"]);
    });
  });
});
