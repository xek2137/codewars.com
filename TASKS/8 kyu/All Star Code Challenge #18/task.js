function strCount(str, letter){
  const splitedStr = str.split('');
  let value = 0;

  for (let char of splitedStr) {
    char === letter ? value+=1 : value;
  }
  return value;
}