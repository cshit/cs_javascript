expect = require('../../test-helper').expect;
const {bSearch} = require('../../../src/algorithms/search/binary');

describe('Binary Search', ()=>{
  var sortedArray = [1,2,3,4,5,6,7,8,9]
  var endIdx = sortedArray.length - 1

  it('returns index of target when located at the middle', ()=>{
    expect(bSearch(sortedArray, 5, 0, endIdx)).to.equal(4)
  })
  it('returns index of target number when located above and bellow middle', ()=>{
    expect(bSearch(sortedArray, 2, 0, endIdx)).to.equal(1)
    expect(bSearch(sortedArray, 7, 0, endIdx)).to.equal(6)
  })
  it('returns index of target number when located on the extrems', ()=>{
    expect(bSearch(sortedArray, 1, 0, endIdx)).to.equal(0)
    expect(bSearch(sortedArray, 9, 0, endIdx)).to.equal(8)
  })
  it('returns false if target number not present', ()=>{
    expect(bSearch(sortedArray, 11, 0, endIdx)).to.be.false
  })
})
