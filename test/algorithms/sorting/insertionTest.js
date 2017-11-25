const {expect} = require('../../test-helper');
const {insertionSort} = require('../../../src/algorithms/sorting/insertion');

describe('Inserion Sort', ()=>{
  let sampleArray = [2, 3, 6, 8, 0, 5];

  it('sorts array of n elements in time complexity n^2', ()=>{
    expect(insertionSort(sampleArray).equals([0, 2, 3, 5, 6, 8])).to.equal(true);
  });
});
