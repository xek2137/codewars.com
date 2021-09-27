function oddOrEven(array) {
//   const reducer = (acc, curr) => acc + curr;
//   const countArray = array.reduce(reducer);

  let value = 0;
  for (let i = 0; i < array.length; i++) {
    value += array[i]
  }

  if (array.length === 0) {
    return 'even'
  } else if (value % 2 === 0){
    return 'even'
  } else {
    return 'odd'
  }
}