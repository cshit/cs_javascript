expect = require('../../test-helper').expect;
{bSearch} = require '../../../src/algorithms/search/binary'

describe 'Binary Search', ->
  sortedArray = [1,2,3,4,5,6,7,8,9]
  endIdx = sortedArray.length - 1

  it 'returns index of target when is located at the middle', ->
    expect(bSearch(sortedArray, 5, 0, endIdx)).to.equal(4)

  it 'returns index of target number above and bellow middle', ->
    expect(bSearch(sortedArray, 2, 0, endIdx)).to.equal(1)
    expect(bSearch(sortedArray, 7, 0, endIdx)).to.equal(6)

  it 'returns index of target number when on the extrems', ->
    expect(bSearch(sortedArray, 1, 0, endIdx)).to.equal(0)
    expect(bSearch(sortedArray, 9, 0, endIdx)).to.equal(8)
