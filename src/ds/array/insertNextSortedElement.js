var insert = (array, rightIndex, value)=>{
  for(var i = rightIndex; i >= 0 && array[i] > value; i--){
    array[i+1] = array[i];
  }
  array[i+1] = value;

  return array;
};

exports.insert = insert;
