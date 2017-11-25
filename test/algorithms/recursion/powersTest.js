const {expect} = require('../../test-helper');
const {power} = require('../../../src/algorithms/recursion/power');

describe('Power of a number', ()=>{

  it('calulates n raised to power 0', ()=>{
    expect(power(3, 0)).to.equal(1);
  });

  it('calulates n raised to power 1', ()=>{
    expect(power(3, 1)).to.equal(3);
  });

  it('calulates n raised to power of even number', ()=>{
    expect(power(3, 2)).to.equal(9);
  });

  it('calulates n raised to power of odd number', ()=>{
    expect(power(3, 3)).to.equal(27);
  });

  it('calulates n raised to power of negative number', ()=>{
    expect(power(3, -1)).to.equal(1/3);
  });
});
