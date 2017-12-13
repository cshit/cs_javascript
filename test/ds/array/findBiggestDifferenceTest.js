/*
* Assuming consucutive numbers and only being able to calculate the difference of n - (n-i)
* meaning you can not calculate the difference between a number located at an index with an other
* located at a highe index.
*/

const {expect} = require('../../test-helper');
const {findBiggestDifference} = require('../../../src/ds/array/findBiggestDifference');

describe('Find Biggest Difference', () => {

  it('finds the biggest difference given an array of integers', () => {
    let inputArray = [10, 7, 5, 8, 11, 9];

    expect(findBiggestDifference(inputArray)).to.equal(6);
  });

  it('finds the biggest difference given an array of integers all equal', () => {
    let inputArray = [10, 10, 10, 10, 10, 10];

    expect(findBiggestDifference(inputArray)).to.equal(0);
  });

  it('finds the biggest difference given an array of desc integers', () => {
    let inputArray = [10, 9, 8, 7, 6, 5];

    expect(findBiggestDifference(inputArray)).to.equal(0);
  });
});
