const findBiggestDifference = (targetArray) => {

  if(targetArray.length <= 1){
    throw 'You need 2 numbers to calculate a difference';
  }

  let biggestDifference = targetArray[1] - targetArray[0];
  let lowestValue = targetArray[0];

  for(let i = 0; i < targetArray.length; i++){
    lowestValue = targetArray[i] < lowestValue ? targetArray[i] : lowestValue;

    if((targetArray[i] - lowestValue) > biggestDifference){
      biggestDifference = targetArray[i] - lowestValue;
    }
  }

  return biggestDifference >= 0 ? biggestDifference : 0;
};

exports.findBiggestDifference = findBiggestDifference;
