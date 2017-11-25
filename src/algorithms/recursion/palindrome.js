var palindrome = (targetString)=>{
  if(targetString.length <= 1) {
    return true;
  }

  if(targetString[0] !== targetString[targetString.length - 1]){
    return false;
  } else {
    return palindrome(targetString.slice(1, -1));
  }
};


exports.palindrome = palindrome;
