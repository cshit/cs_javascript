const {partition} = require('../../ds/array/partition');

const quickSort = (targetArray, low, high) => {
  if(low < high){
    let p = partition(targetArray, low, high);
    quickSort(targetArray, low, p-1);
    quickSort(targetArray, p+1, high);
  }
};

exports.quickSort = quickSort;
