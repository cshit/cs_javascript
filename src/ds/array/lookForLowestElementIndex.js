var findLowestIndex = (array, startIndex)=>{
  let lowerValue = array[startIndex];
  let lowerIndex = startIndex;

  for(var i = startIndex+1; i < array.length; i++){
    if(array[i] < lowerValue){
      lowerValue = array[i];
      lowerIndex = i;
    }
  }

  return lowerIndex;
};

module.exports.findLowestIndex = findLowestIndex;
