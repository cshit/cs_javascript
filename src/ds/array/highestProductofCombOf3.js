const highestProductofCombOf3 = (targetArray) => {

  if (targetArray.length < 3) {
    throw new Error('This is a 3 elements thing...');
  } else if (targetArray.length === 3) {
    return targetArray.reduce((prev, curr) => prev * curr);
  }

  let highestProductOf2 = targetArray[0] * targetArray[1];
  let lowestProductOf2 = targetArray[0] * targetArray[1];
  let lowest = Math.min(targetArray[0], targetArray[1]);
  let highest = Math.max(targetArray[0], targetArray[1]);

  let higestProductOf3 = targetArray[0] * targetArray[1] * targetArray[2];

  for (let i = 2; i < targetArray.length; i++) {
    let current = targetArray[i];

    higestProductOf3 = Math.max(
      higestProductOf3,
      current * highestProductOf2,
      current * lowestProductOf2
    );

    highestProductOf2 = Math.max(
      highestProductOf2,
      current * highest,
      current * lowest
    );

    lowestProductOf2 = Math.min(
      lowestProductOf2,
      current * highest,
      current * lowest
    );

    lowest =  Math.min(lowest, current);
    highiest = Math.max(highest, current);
  }

  return higestProductOf3;
};

exports.highestProductofCombOf3 = highestProductofCombOf3;
