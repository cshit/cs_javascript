const {expect} = require('../../test-helper');
const {mergeSort} = require('../../../src/algorithms/sorting/merge');

describe('Selection Sort', ()=>{
  let sampleArray = [2, 3, 6, 8, 0, 5];
  mergeSort(sampleArray, 0, sampleArray.length-1);

  it('sorts array of n elements', ()=>{
    expect(sampleArray.equals([0, 2, 3, 5, 6, 8])).to.equal(true);
  });
});
