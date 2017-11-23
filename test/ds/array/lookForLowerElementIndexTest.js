const {expect} = require('../../test-helper');
const {findLowestIndex} = require('../../../src/ds/array/lookForLowestElementIndex');

describe('Finds lowest element index in sub array given an starting index', ()=>{
  let sampleArray = [4, 2, 6, 1, 8, 6, 9, 10];

  it('returns lower when starting from index = 0', ()=>{
    expect(findLowestIndex(sampleArray, 0)).to.equal(3);
  });

  it('returns lower when starting from index = length-1', ()=>{
    expect(findLowestIndex(sampleArray, 7)).to.equal(7);
  });

  it('returns lower when starting from  0 < index < length-1', ()=>{
    expect(findLowestIndex(sampleArray, 2)).to.equal(3);
    expect(findLowestIndex(sampleArray, 4)).to.equal(5);
  });
});
