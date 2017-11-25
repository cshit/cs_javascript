const {expect} = require('../../test-helper');
const {palindrome} = require('../../../src/algorithms/recursion/palindrome');


describe('Palindrome? Recursively', function(){

  let samplePalindromeEven = 'anna';
  let samplePalindromeOdd  = 'rotor';
  let sampleNonPalindrome  = 'sebastian';

  it('returns true when even palindrome', function(){
    expect(palindrome(samplePalindromeEven)).to.equal(true);
  });

  it('returns true when odd palindrome', function(){
    expect(palindrome(samplePalindromeOdd)).to.equal(true);
  });

  it('returns false when not a palindrome', function(){
    expect(palindrome(sampleNonPalindrome)).to.equal(false);
  });


});
