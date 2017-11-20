expect = require('../../test-helper').expect;
const {bSearchIteratively} = require('../../../src/algorithms/search/binaryIteratively');

describe('Binary Search Iteratively', ()=>{
  var sortedArray = [1,2,3,4,5,6,7,8,9]
  var endIdx = sortedArray.length - 1

  it('returns index of target when located at the middle', ()=>{
    expect(bSearchIteratively(sortedArray, 5)).to.equal(4)
  })
  it('returns index of target number when located above and bellow middle', ()=>{
    expect(bSearchIteratively(sortedArray, 2)).to.equal(1)
    expect(bSearchIteratively(sortedArray, 7)).to.equal(6)
  })
  it('returns index of target number when located on the extrems', ()=>{
    expect(bSearchIteratively(sortedArray, 1)).to.equal(0)
    expect(bSearchIteratively(sortedArray, 9)).to.equal(8)
  })
  it('returns false if target number not present', ()=>{
    expect(bSearchIteratively(sortedArray, 11)).to.be.false
  })
})
