function narcissistic(value){
//   console.log(typeof(value))
  const valueArr = String(value).split('');

  let result = 0;

  for (element of valueArr){
    const num = parseInt(element, 0)

    result += Math.pow(num, valueArr.length);
  }

  return result === value;
}