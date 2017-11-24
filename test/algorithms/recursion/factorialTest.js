expect = require('../../test-helper').expect;
const {factorial} = require('../../../src/algorithms/recursion/factorial');

describe('Factorial recursively', ()=>{

  it('calulates factorial of a positive number', ()=>{
    expect(factorial(5)).to.equal(120);
  });

  it('calculates factorial of 0 = 1', ()=>{
    expect(factorial(0)).to.equal(1);
  });
});
