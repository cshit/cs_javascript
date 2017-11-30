class QueueArray {
  constructor(){
    this.queue = [];
    this.currentCount = 0;
  }

  count(){
    return this.currentCount;
  }

  enqueue(value){
    this.queue.push(value);
    this.currentCount ++;
  }

  dequeue(){
    if(this.currentCount > 0){
      this.currentCount --;

      return this.queue.shift();
    }
    return null;
  }


  reset(){
    this.queue = [];
    this.currentCount = 0;
  }
}

module.exports.QueueArray = QueueArray;
