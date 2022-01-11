function median(array) {
  const sortArray = array.sort((a, b) => {return a - b});
  const arrayLength = sortArray.length;
  const middleOfArray = Math.floor(sortArray.length / 2);
  const secondMiddleOfArray = middleOfArray - 1;

  if (arrayLength % 2 !== 0) {
    return sortArray[middleOfArray];
  } else {
    return (sortArray[middleOfArray] + sortArray[secondMiddleOfArray]) / 2;
  }
}