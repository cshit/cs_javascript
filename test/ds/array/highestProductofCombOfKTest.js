/*
* Find the highiest product that you can get with N different integers given
* an array of integers with a min length of N.
*/

const {expect} = require('../../test-helper');
const {highestProductofCombOfK} = require('../../../src/ds/array/highestProductofCombOfK');

describe('Finds highest product of N ints given an array', () => {

  it('finds highest product of N ints in N element array', () => {
    const input = [1, 10, -5, 4, 8, -100];
    const output = 160000;

    expect(highestProductofCombOfK(input, 6)).to.equal(output);
  });


  it('finds highest product of k = 3', () => {
    const input = [1, 10, -5, 1, -100];
    const output = 5000;

    expect(highestProductofCombOfK(input, 3)).to.equal(output);
  });

  it('finds highest product of k = 4', () => {
    const input = [1, 10, -5, 2, -100];
    const output = 10000;

    expect(highestProductofCombOfK(input, 4)).to.equal(output);
  });

  it('finds highest product of k = 5', () => {
    const input = [1, 10, -5, 2, -100, 3, 10, 1];
    const output = 300000;

    expect(highestProductofCombOfK(input, 5)).to.equal(output);
  });
});
