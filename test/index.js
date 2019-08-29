'use strict'

var expect = require('chai').expect;
var ArrayExtension = require('../');


describe('Array Extension', function() {
  describe('#index()', function() {
    it('returns 0 when the first value is a match with an obj spec', function() {
      const array = [1, 2, 3, 4];

      const valueIndex = array.index(1);

      expect(valueIndex).to.be.a('number').that.equal(0);
    });

    it('retunrs 3 when the 4th value is a match with an obj spec', function() {
      const array = ['a', 'b', 'c', 'd'];

      const valueIndex = array.index('d');

      expect(valueIndex).to.be.a('number').that.equal(3);  
    });

    it('returns 0 when the first value is a match with a function spec', function() {
      const array = [1, 2, 3, 4];

      const valueIndex = array.index(value => value < 2);

      expect(valueIndex).to.be.a('number').that.equal(0);
    });

    it('retunrs 3 when the 4th value is a match with a function spec', function() {
      const array = [1, 2, 3, 4];

      const valueIndex = array.index(value => value > 3);

      expect(valueIndex).to.be.a('number').that.equal(3);
    });

    it("returns -1 when there's no match for spec with an obj spec", function() {
      const array = [1, 2, 3, 4];

      const valueIndex = array.index(5);

      expect(valueIndex).to.be.a('number').that.equal(-1);
    });

    it("returns -1 when there's no match for spec with a function spec", function() {
      const array = [1, 2, 3, 4];

      const valueIndex = array.index(value => value > 5);

      expect(valueIndex).to.be.a('number').that.equal(-1);
    });
  });
});
