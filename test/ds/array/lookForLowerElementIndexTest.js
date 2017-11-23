const {expect} = require('../../test-helper');
const {findLowerIndex} = require('../../../src/ds/array/lookForLowerElementIndex');

describe('Finds lower element index in sub array given an starting index', ()=>{
  let sampleArray = [4, 2, 6, 1, 8, 6, 9, 10];

  it('returns lower when starting from index = 0', ()=>{
    expect(findLowerIndex(sampleArray, 0)).to.equal(3);
  });

  it('returns lower when starting from index = length-1', ()=>{
    expect(findLowerIndex(sampleArray, 7)).to.equal(7);
  });

  it('returns lower when starting from  0 < index < length-1', ()=>{
    expect(findLowerIndex(sampleArray, 2)).to.equal(3);
    expect(findLowerIndex(sampleArray, 4)).to.equal(5);
  });
});
