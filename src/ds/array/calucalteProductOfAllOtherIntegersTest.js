const calucalteProductOfAllOtherIntegersTest = (targetArray) => {

  // get all products before traverse 0 -> n
  // then get all after traverse n -> 0
  // [1, 7, 3, 4]

  let products = [];
  let previousProducts = 1;

  for (let i = 0; i < targetArray.length; i++) {
    if(i === 0) {
      products[i] = previousProducts;
    } else {
      products[i] = targetArray[i-1] * previousProducts;
      previousProducts = products[i];
    }
  }

  previousProducts = 1;

  for (let j = targetArray.length - 1; j >= 0; j--) {
    if(j === targetArray.length - 1){
      products[j] *= previousProducts;
    }else{
      products[j] *= targetArray[j+1] * previousProducts;
      previousProducts = targetArray[j+1] * previousProducts;
    }
  }
  
  return products;
};

exports.calucalteProductOfAllOtherIntegersTest = calucalteProductOfAllOtherIntegersTest;
