const {expect} = require('../../test-helper');
const {insert} = require('../../../src/ds/array/insertNextSortedElement');

describe('Insert element in asc order', ()=>{
  var sampleArray;
  beforeEach(()=>{
    sampleArray = [7,5,3,1,4,6];
  });

  it('inserts element in order when 0 < index < length - 1', ()=>{
    expect(insert(sampleArray, 2, 1).equals([1,7,5,3,4,6])).to.equal(true);
  });

  it('inserts element in order when index of second element', ()=>{
    expect(insert(sampleArray, 0, 5).equals([5,7,3,1,4,6])).to.equal(true);
  });
});
