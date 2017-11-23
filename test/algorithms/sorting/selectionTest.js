const {expect} = require('../../test-helper');
const {selectionSort} = require('../../../src/algorithms/sorting/selection');

describe('Selection Sort', function(){
  let sampleArray = [2, 3, 6, 8, 0, 5];

  it('sorts array of n elements', function(){
    expect(selectionSort(sampleArray).equals([0, 2, 3, 5, 6, 8])).to.equal(true);
  });
});
