class QueueArray {
  constructor(){
    this.queue = [];
  }

  count(){
    return this.queue.length;
  }

  enqueue(value){
    this.queue.push(value);
  }

  dequeue(){
    if(this.count()){
      return this.queue.shift();
    }
    return null;
  }


  reset(){
    this.queue = [];
  }
}

module.exports.QueueArray = QueueArray;
