const merge = (targetArray, low, middle, high)=>{

  // Divide the targetArray into 2 arrays
  let firstHalf = [];
  let secondHalf = [];

  let k = low;
  for(k; k <= middle; k++){ firstHalf.push(targetArray[k]); }
  for(k; k <= high; k++) { secondHalf.push(targetArray[k]); }

  k = low;
  let i = 0;
  let j = 0;
  while( i < firstHalf.length && j < secondHalf.length){
    if(firstHalf[i] < secondHalf[j]){
      targetArray[k] = firstHalf[i];
      i++;
    } else {
      targetArray[k] = secondHalf[j];
      j++;
    }
    k++;
  }

  while(i < firstHalf.length){
    targetArray[k] = firstHalf[i];
    i++;
    k++;
  }

  while(j < secondHalf.length){
    targetArray[k] = secondHalf[j];
    j++;
    k++;
  }
};

exports.merge = merge;
