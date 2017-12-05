const {expect} = require('../../test-helper');
const {StackArray} = require('../../../src/ds/stack/stackArray');

describe('Stack using array', () => {
  let stackArray;
  let toInsert;

  before(() => {
    stackArray = new StackArray();
    toInsert = ['Mercury', 'Saturn', 'Pluto'];
  });

  it('its empty on initialize', () => {
    expect(stackArray.count()).to.equal(0);
  });

  it('push 3 elements', () => {
    toInsert.forEach(planet =>  stackArray.push(planet));

    expect(stackArray.count()).to.equal(3);
  });

  it('pop 2 elements LIFO', () => {
    stackArray.reset();
    toInsert.forEach(planet =>  stackArray.push(planet));

    expect(stackArray.pop()).to.equal('Pluto');
    expect(stackArray.pop()).to.equal('Saturn');
    expect(stackArray.count()).to.equal(1);
  });
});
