function sumCubes(n){
  let cubedValueArr = [];

  for (let value = 0; value <= n; value++){
    cubedValueArr.push(value * value * value);
  }

  return cubedValueArr.reduce((a, b) => a + b)
}