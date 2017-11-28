const {expect} = require('../../test-helper');
const {palindrome} = require('../../../src/algorithms/recursion/palindrome');


describe('Palindrome? Recursively', ()=>{

  let samplePalindromeEven = 'anna';
  let samplePalindromeOdd  = 'rotor';
  let sampleNonPalindrome  = 'sebastian';

  it('returns true when even palindrome', ()=>{
    expect(palindrome(samplePalindromeEven)).to.equal(true);
  });

  it('returns true when odd palindrome', ()=>{
    expect(palindrome(samplePalindromeOdd)).to.equal(true);
  });

  it('returns false when not a palindrome', ()=>{
    expect(palindrome(sampleNonPalindrome)).to.equal(false);
  });
});
