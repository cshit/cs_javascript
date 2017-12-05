const {expect} = require('../../test-helper');
const {SinglyLinkedList} = require('../../../src/ds/linkedList/singly');


describe('Singly Linked List', function(){
  let head;

  beforeEach(function(){
    head = new SinglyLinkedList('value');
  });

  context('Creates', function(){
    it('creates a list with head, next = nil', function(){
      expect(head.next).to.equal(null);
    });

    it('creates a list with head, value = value', function(){
      expect(head.value).to.equal('value');
    });
  });

  context('Add', function(){
    it('adds a node to the head with some value', function(){
      const value2 = 'value2';
      head.add(value2);

      expect(head.next.value).to.equal(value2);
    });
  });

  context('Find', function(){
    it('finds a node with a specific value place at the end', function(){
      head.add('value2').add('value3').add('value4');
      const target = 'value4';

      expect(head.find(target)).to.be.an.instanceof(SinglyLinkedList);
    });

    it('finds a node with a specific value place in the middle', function(){
      head.add('value2').add('value3').add('value4');
      const target = 'value3';

      expect(head.find(target)).to.be.an.instanceof(SinglyLinkedList);
    });

    it('returns null when a value not found', function(){
      head.add('value2').add('value3').add('value4');
      const target = 'nothere';

      expect(head.find(target)).to.be.a('null');
    });
  });

  context('Delete', function(){

    it('deletes a node placed in as the middle', function(){
      head.add('value2').add('value3').add('value4');
      head.delete('value3');
      head.traverse();

      expect(head.find('value3')).to.be.a('null');
    });

    it('deletes a node placed in at the end', function(){
      head.add('value2').add('value3').add('value4');
      head.delete('value4');
      head.traverse();

      expect(head.find('value4')).to.be.a('null');
    });
  });

});
