var bSearchIteratively = (targetArray, targetNumber)=>{

  var min = 0;
  var max = targetArray.length -1;
  var mid;

  while(max >= min){
    mid = Math.floor((max + min) / 2)

    if(targetArray[mid] == targetNumber){
      return mid
    } else if (targetArray[mid] > targetNumber) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  return false
}

module.exports.bSearchIteratively = bSearchIteratively;
