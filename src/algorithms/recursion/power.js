const power = (base, exponent) => {
  // Base case:
  if(exponent === 0){
    return 1;
  }

  if(exponent < 0){
    return (1 / power(base, (exponent*(-1))));
  } else if(exponent > 0 && exponent % 2 === 0){
    let y = power(base, Math.floor(exponent / 2));
    return y * y;
  }else if (exponent > 0 && exponent%2 !== 0){
    return base * power(base, exponent - 1);
  }
};


exports.power = power;
