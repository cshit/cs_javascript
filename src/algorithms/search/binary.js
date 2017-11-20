
var bSearch = (targetArray, targetNumber, begIdx, endIdx)=>{

  var mid = Math.floor((begIdx + endIdx) / 2);

  if(endIdx < begIdx){
    return false
  }

  if(targetArray[mid] == targetNumber){
    return mid
  } else if (targetArray[mid] > targetNumber){
    return bSearch(targetArray, targetNumber, begIdx, mid-1)
  } else {
    return bSearch(targetArray, targetNumber, mid+1, endIdx)
  }
};

module.exports.bSearch = bSearch;
