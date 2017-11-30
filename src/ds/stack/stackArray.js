class StackArray{
  constructor(){
    this.stack = [];
  }

  count(){
    return this.stack.length;
  }

  push(value){
    return this.stack.push(value);
  }

  pop(){
    if(this.count()){
      return this.stack.pop()
    }

    return null;
  }

  reset(){
    this.stack = [];
  }
}

exports.StackArray = StackArray;
