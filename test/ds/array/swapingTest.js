const {expect} = require('../../test-helper');
const {swap} = require('../../../src/ds/array/swap');

describe('Swaps elements in array', ()=>{
  let sampleArray = [2, 3, 6, 8, 0, 5];

  it('swaps elements given an array, first and second indices', () => {
    expect(swap(sampleArray, 4, 0).equals([0, 3, 6, 8, 2, 5])).to.equal(true);
    expect(swap(sampleArray, 5, 1).equals([0, 5, 6, 8, 2, 3])).to.equal(true);
  });
});
