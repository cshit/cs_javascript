const {expect} = require('../../test-helper');
const {QueueArray} = require('../../../src/ds/queue/queueArray');

describe('Queue using array', () => {
  let queueArray;
  let toInsert ;

  before(() => {
    queueArray = new QueueArray();
    toInsert = ['Mercury', 'Saturn', 'Pluto'];
  });

  it('its empty on initialize', () => {
    expect(queueArray.count()).to.equal(0);
  });

  it('enqueue 3 elements', () => {
    toInsert.forEach(planet =>  queueArray.enqueue(planet));

    expect(queueArray.count()).to.equal(3);
  });

  it('dequeue 2 elements FIFO', () => {
    queueArray.reset();
    toInsert.forEach(planet =>  queueArray.enqueue(planet));

    expect(queueArray.dequeue()).to.equal('Mercury');
    expect(queueArray.dequeue()).to.equal('Saturn');
    expect(queueArray.count()).to.equal(1);
  });
});
