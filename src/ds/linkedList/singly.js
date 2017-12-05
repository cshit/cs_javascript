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
    const sucessor = this._findSucessor(value);
    const current = sucessor.next;
    sucessor.next = current.next;
  }

  // Recursive
  traverse(){
    console.log(this.value);
    if(this.next === null){
      return;
    }
    this.next.traverse();
  }

  // Recursive
  _findSucessor(value, sucessor){
    if(this.value === value){
      return sucessor;
    }else if (this.next !== null) {
      return this.next._findSucessor(value, this);
    }

    return null;
  }
}

exports.SinglyLinkedList = SinglyLinkedList;
