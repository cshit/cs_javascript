const {merge} = require('../../ds/array/merge');

const mergeSort = (targetArray, l, h) => {
  let middle = Math.floor((l + h) / 2)

  if(l < h){
    mergeSort(targetArray, l, middle)
    mergeSort(targetArray, middle+1, h)
    merge(targetArray, l, middle, h);
  }
}


exports.mergeSort = mergeSort;
