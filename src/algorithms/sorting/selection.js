const {findLowerIndex} = require('../../ds/array/lookForLowerElementIndex');
const {swap} = require('../../ds/array/swap');

var selectionSort = (targetArray)=>{
  for(var i = 0; i < targetArray.length; i++){
    let lowerIndex = findLowerIndex(targetArray, i);
    swap(targetArray, i, lowerIndex);
  }

  return targetArray;
};


module.exports.selectionSort = selectionSort;
