const squareDigits = num => {
  const digitsArr = num.toString().split('');
  const squaredDigits = digitsArr.map(n => n * n);
  const squaredNumber = squaredDigits.join('');

  return +squaredNumber;
}