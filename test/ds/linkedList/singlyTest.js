const {expect} = require('../../test-helper');
const {Node, SinglyLinkedList} = require('../../../src/ds/linkedList/singly');


describe('Singly Linked List', () => {
  let singlyLinkedList;

  beforeEach(() => {
    singlyLinkedList = new SinglyLinkedList();
  });

  context('Creates', () => {
    it('creates a list without head, head = null', () => {
      expect(singlyLinkedList.head).to.equal(null);
    });
  });

  context('Add', () => {
    it('adds a node to the head with some value', () => {
      const value = 'value';
      singlyLinkedList.add(value);

      expect(singlyLinkedList.head.value).to.equal(value);
    });

    it('adds node after head and returns the list', function(){
      singlyLinkedList.add('value');
      expect(singlyLinkedList.add('value2').head.value).to.equal('value');
    });
  });

  context('Find', () => {
    it('finds a node with a specific value place at the end', () => {
      singlyLinkedList.add('value').add('value1').add('value2');
      const target = 'value2';
      const foundNode = singlyLinkedList.find(target)

      expect(foundNode).to.be.an.instanceof(Node);
      expect(foundNode.value).to.be.equal(target);
    });

    it('finds a node with a specific value place in the middle', () => {
      singlyLinkedList.add('value').add('value2').add('value3').add('value4');
      const target = 'value3';
      const foundNode = singlyLinkedList.find(target)

      expect(foundNode).to.be.an.instanceof(Node);
      expect(foundNode.value).to.be.equal(target);
    });

    it('returns null when a value not found', () => {
      singlyLinkedList.add('value').add('value2').add('value3').add('value4');
      const target = 'not-there';

      expect(singlyLinkedList.find(target)).to.be.a('null');
    });
  });

  context('Traverse', () => {
    it('deletes a node placed in as the middle', () => {
      singlyLinkedList.add('value2').add('value3').add('value4');
      const values = ['value2','value3','value4'];
      const listValues = singlyLinkedList.traverse();

      expect(listValues.equals(values)).to.equal(true);
    });
  });

  context('Delete', () => {
    it('deletes a node placed in as the middle', () => {
      singlyLinkedList.add('value2').add('value3').add('value4');
      singlyLinkedList.delete('value3');
      const listValues = singlyLinkedList.traverse();

      expect(singlyLinkedList.find('value3')).to.be.a('null');
      expect(listValues.equals(['value2','value4'])).to.be.equal(true);
    });

    it('deletes a node placed in at the end', () => {
      singlyLinkedList.add('value2').add('value3').add('value4');
      singlyLinkedList.delete('value4');
      const listValues = singlyLinkedList.traverse();

      expect(singlyLinkedList.find('value4')).to.be.a('null');
      expect(listValues.equals(['value2','value3'])).to.be.equal(true);
    });
  });

  context('Reverse', () => {
    it('reverses the list', () => {
      singlyLinkedList.add('value').add('value2').add('value3').add('value4');
      const reversedValues = ['value','value2','value3','value4'].reverse();
      singlyLinkedList.reverse();
      const reverserdValuesList = singlyLinkedList.traverse();

      expect(reverserdValuesList.equals(reversedValues)).to.equal(true);
    });
  });
});
