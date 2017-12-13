/*
* Find the highiest product that you can get with 3 different integers given
* an array of integers with a min length of 3.
*/

const {expect} = require('../../test-helper');
const {highestProductofCombOf3} = require('../../../src/ds/array/highestProductofCombOf3');

describe('Finds highest product of 3 ints given an array', function(){

  it('finds highest product of 3 ints in 3 element array', function(){
    const input = [1, 10, -5];
    const output = -50;

    expect(highestProductofCombOf3(input)).to.equal(output);
  });

  it('finds highest product of 3 ints', function(){
    const input = [1, 10, -5, 1, -100];
    const output = 5000;

    expect(highestProductofCombOf3(input)).to.equal(output);
  });

  xit('throws error when length < 3', function(){
    const input = [1, 10];
    const output = 5000;

    var fn = highestProductofCombOf3(input);

    expect(fn).to.throw(Error);
  });
});
