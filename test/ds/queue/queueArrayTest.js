const {expect} = require('../../test-helper');
const {QueueArray} = require('../../../src/ds/queue/queueArray');

describe('Queue using array', function(){
  let queueArray;
  let toInsert ;

  before(function(){
    queueArray = new QueueArray();
    toInsert = ['Mercury', 'Saturn', 'Pluto'];
  });

  it('Its empty on initialize', function(){
    expect(queueArray.count()).to.equal(0);
  });

  it('Enqueue 3 elements', function(){
    toInsert.forEach(planet =>  queueArray.enqueue(planet));

    expect(queueArray.count()).to.equal(3);
  });

  it('Dequeue 2 elements', function(){
    queueArray.reset();
    toInsert.forEach(planet =>  queueArray.enqueue(planet));

    expect(queueArray.dequeue()).to.equal('Mercury');
    expect(queueArray.dequeue()).to.equal('Saturn');
    expect(queueArray.count()).to.equal(1);
  });
});
