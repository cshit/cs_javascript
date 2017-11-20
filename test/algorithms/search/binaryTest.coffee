expect = require('../../test-helper').expect;
{bSearch} = require '../../../src/algorithms/search/binary'

describe 'Binary Search', ->
  sortedArray = [1,2,3,4,5,6,7,8]

  it 'returns index of target number', ->
    expect(bSearch(sortedArray, 3)).to.equal(2)
    expect(bSearch(sortedArray, 6)).to.equal(5)
