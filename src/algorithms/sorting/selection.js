const {findLowestIndex} = require('../../ds/array/lookForLowestElementIndex');
const {swap} = require('../../ds/array/swap');

var selectionSort = (targetArray)=>{
  for(var i = 0; i < targetArray.length; i++){
    let lowerIndex = findLowestIndex(targetArray, i);
    swap(targetArray, i, lowerIndex);
  }

  return targetArray;
};


module.exports.selectionSort = selectionSort;
