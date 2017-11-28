const {swap} = require('./swap')

const partition = (targetArray, low, high) => {
  let p = high;
  let firstHigh = low;

  for(let i = low; i < p; i++){
    if(targetArray[i] < targetArray[p]){
      swap(targetArray, i, firstHigh)
      firstHigh ++;
    }
  }

  swap(targetArray, firstHigh, p)
  return firstHigh
}

exports.partition = partition;
