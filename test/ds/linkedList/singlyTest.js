const {expect} = require('../../test-helper');
const {SinglyLinkedList} = require('../../../src/ds/linkedList/singly');


describe('Singly Linked List', () => {
  let head;

  beforeEach(() => {
    head = new SinglyLinkedList('value');
  });

  context('Creates', () => {
    it('creates a list with head, next = nil', () => {
      expect(head.next).to.equal(null);
    });

    it('creates a list with head, value = value', () => {
      expect(head.value).to.equal('value');
    });
  });

  context('Add', () => {
    it('adds a node to the head with some value', () => {
      const value2 = 'value2';
      head.add(value2);

      expect(head.next.value).to.equal(value2);
    });
  });

  context('Find', () => {
    it('finds a node with a specific value place at the end', () => {
      head.add('value2').add('value3').add('value4');
      const target = 'value4';

      expect(head.find(target)).to.be.an.instanceof(SinglyLinkedList);
    });

    it('finds a node with a specific value place in the middle', () => {
      head.add('value2').add('value3').add('value4');
      const target = 'value3';

      expect(head.find(target)).to.be.an.instanceof(SinglyLinkedList);
    });

    it('returns null when a value not found', () => {
      head.add('value2').add('value3').add('value4');
      const target = 'nothere';

      expect(head.find(target)).to.be.a('null');
    });
  });

  context('Traverse', () => {
    it('deletes a node placed in as the middle', () => {
      const values = ['value','value2','value3','value4'];

      head.add('value2').add('value3').add('value4');
      const listValues = head.traverse();

      expect(listValues.equals(values)).to.equal(true);
    });
  });

  context('Delete', () => {
    it('deletes a node placed in as the middle', () => {
      head.add('value2').add('value3').add('value4');
      head.delete('value3');
      const listValues = head.traverse();

      expect(head.find('value3')).to.be.a('null');
      expect(listValues.equals(['value','value2','value4'])).to.be.equal(true);
    });

    it('deletes a node placed in at the end', () => {
      head.add('value2').add('value3').add('value4');
      head.delete('value4');
      const listValues = head.traverse();

      expect(head.find('value4')).to.be.a('null');
      expect(listValues.equals(['value','value2','value3'])).to.be.equal(true);
    });
  });

  context('Reverse', () => {
    it('reverses the list', () => {
      head.add('value2').add('value3').add('value4');
      const reversedValues = ['value','value2','value3','value4'].reverse();
      head = head.reverse();
      const reverserdValuesList = head.traverse();

      expect(reverserdValuesList.equals(reversedValues)).to.equal(true);
    });
  });
});
