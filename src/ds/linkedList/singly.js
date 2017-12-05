class SinglyLinkedList{

  constructor(value){
    this.next = null;
    this.value = value;
  }

  // Iterativily
  add(value){
    let currentNode = this;
    while(currentNode.next !== null) {
      currentNode = this.next;
    }

    currentNode.next = new SinglyLinkedList(value);
    return currentNode.next;
  }

  // Recursive
  find(value){
    if(this.value === value){
      return this;
    }

    if(this.next == null){
      return null;
    }

    return this.next.find(value);
  }

  delete(value){
    const previous = this._findPredecessor(value);
    const current = previous.next;
    previous.next = current.next;
  }

  // Recursive
  traverse(nodesValues=[]){
    nodesValues.push(this.value);
    if(this.next === null){
      return nodesValues;
    }
    return this.next.traverse(nodesValues);
  }

  // Iterativily
  reverse(){
    // reverse a linked list
    let current = this;
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
    return previous;   // Change the list head !!!
  }

  // Recursive
  _findPredecessor(value, previous=this){
    if(this.value === value){
      return previous;
    }else if (this.next !== null) {
      return this.next._findPredecessor(value, this);
    }

    return null;
  }
}

exports.SinglyLinkedList = SinglyLinkedList;
