
bSearch = (targetArray, targetNumber, begIdx, endIdx) ->

  mid = Math.floor((begIdx + endIdx) / 2)

  return false if endIdx < begIdx

  return mid if targetArray[mid] == targetNumber

  if targetArray[mid] > targetNumber
    bSearch targetArray, targetNumber, begIdx, mid-1
  else
    bSearch targetArray, targetNumber, mid+1, endIdx


module.exports.bSearch = bSearch
