const {insert} = require('../../ds/array/insertNextSortedElement');

var insertionSort = (targetArray)=>{
 for(var i = 1; i < targetArray.length; i++){
   insert(targetArray, i-1, targetArray[i]);
 }

 return targetArray;
};

exports.insertionSort = insertionSort;
