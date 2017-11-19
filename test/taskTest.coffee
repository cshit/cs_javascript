expect = require('./test-helper').expect;
{Task} = require '../src/task'

describe 'Task instance', ->
  task1 = task2 = null

  it 'should have a property name', ->
    task1 = new Task 'Run errands'
    expect(task1.name).to.equal('Run errands')

  it 'should be initially incomplete', ->
    expect(task1.status).to.equal('incomplete')

  it 'should be able to be completed', ->
    expect(task1.complete()).be.true
    expect(task1.status).to.equal('complete')
