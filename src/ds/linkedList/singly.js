class Node {
  constructor(value) {
    this.value = value;
    this.next= null;
  }
}

class SinglyLinkedList {

  constructor(value){
    this.head = null;
  }

  // Iterativily
  add(value){

    if(this.head === null){
      this.head = new Node(value);
    }else{
      let currentNode = this.head;

      while(currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(value);
    }

    return this;
  }

  // Recursive
  find(value, currentNode=this.head){
    if(currentNode.value === value){
      return currentNode;
    }

    if(currentNode.next === null){
      return null;
    }

    return this.find(value, currentNode.next);
  }

  // Recursive
  traverse(nodesValues=[], currentNode=this.head){
    nodesValues.push(currentNode.value);
    if(currentNode.next === null){
      return nodesValues;
    }
    return this.traverse(nodesValues, currentNode.next);
  }

  delete(value){
    if(this.head.next === null){
      this.head = null;
    } else{
      const previous = this._findPredecessor(value);
      const current = previous.next;
      previous.next = current.next;
    }
  }

  // Iterativily
  reverse(){
    // reverse a linked list
    let current = this.head;
    let previous = null;

    while(current) {
      // save next or you lose it!!!
      let temp = current.next;
      // reverse pointer
      current.next = previous;
      // increment previous to current node
      previous = current;
      // increment node to next node or null at end of list
      current = temp;
    }
    this.head = previous;   // Change the list head !!!

    return this.head;
  }

  // Recursive
  _findPredecessor(value, previous=this.head){
    if(previous.next.value === value){
      return previous;
    }else if (previous.next !== null) {
      return this._findPredecessor(value, previous.next);
    }

    return null;
  }
}

module.exports = {Node, SinglyLinkedList}
