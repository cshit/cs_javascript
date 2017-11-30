const {expect} = require('../../test-helper');
const {partition} = require('../../../src/ds/array/partition');


describe('Partition Array', () => {
  let sampleArray = [5,3,4,1,6,0,2];
  let pivotIndex  = partition(sampleArray, 0, sampleArray.length-1);

  it('returns pivots new index', () => {
    expect(pivotIndex).to.equal(2);
  });

  it('divides the original array into lower < pivot < higher elements', () => {
    expect(sampleArray.equals([1,0,2,5,6,3,4])).to.equal(true);
  });
});
