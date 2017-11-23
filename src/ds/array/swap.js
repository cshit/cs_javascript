var swap = (array, firstIndex, secondIndex)=>{
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;

  return array;
};

module.exports.swap = swap;
