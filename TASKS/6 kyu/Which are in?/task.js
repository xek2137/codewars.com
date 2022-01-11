function inArray(array1, array2){
  let arr = array2.join(" ");
  console.log(arr)

  return array1.filter(e => arr.search(e) !== -1 && e !== undefined ).sort();
}