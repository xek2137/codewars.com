function duplicateCount(text){
  return text.toUpperCase().split('').filter((val, i, arr) => {
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}