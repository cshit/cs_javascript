const highestProductofCombOfK = (targetArray, k) => {

  if (targetArray.length < 3) {
    throw new Error('This is a 3 elements thing...');
  } else if (targetArray.length > k) {
    return targetArray.reduce((prev, curr) => prev * curr);
  }

  const firstKElementsMinusOne = targetArray.slice(0, (k-1));
  const firstKElementsMinusOneProducts = targetArray.slice(0, (k-1)).reduce((prev, curr) => prev * curr);

  let highestProductOfKminus1 = firstKElementsMinusOneProducts;
  let lowestProductOfKminus1 = firstKElementsMinusOneProducts;
  let lowest = Math.min(...firstKElementsMinusOne);
  let highest = Math.max(...firstKElementsMinusOne);

  let higestProductOfk = targetArray.slice(0, k).reduce((prev, curr) => prev * curr);

  for (let i = (k - 1); i < targetArray.length; i++) {
    let current = targetArray[i];

    higestProductOfk = Math.max(
      higestProductOfk,
      current * highestProductOfKminus1,
      current * lowestProductOfKminus1
    );

    highestProductOfKminus1 = Math.max(
      highestProductOfKminus1,
      current * highest,
      current * lowest
    );

    lowestProductOfKminus1 = Math.min(
      lowestProductOfKminus1,
      current * highest,
      current * lowest
    );

    lowest =  Math.min(lowest, current);
    highiest = Math.max(highest, current);
  }

  return higestProductOfk;
};

exports.highestProductofCombOfK = highestProductofCombOfK;
