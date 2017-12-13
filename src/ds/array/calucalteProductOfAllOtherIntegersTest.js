const calucalteProductOfAllOtherIntegersTest = (targetArray) => {

  // get all products before traverse 0 -> n
  // then get all after traverse n -> 0
  // [1, 7, 3, 4]

  let products = [];
  let previousProducts = 1;

  for (let i = 0; i < targetArray.length; i++) {
      products[i] = previousProducts;
      previousProducts = products[i] * targetArray[i];
  }

  previousProducts = 1;

  for (let j = targetArray.length - 1; j >= 0; j--) {
      products[j] *= previousProducts;
      previousProducts = targetArray[j] * previousProducts;
  }

  return products;
};

exports.calucalteProductOfAllOtherIntegersTest = calucalteProductOfAllOtherIntegersTest;
