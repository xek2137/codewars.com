function reverseWords(str){
  const reversedArray = str.split(' ').reverse();
  const reversedStr = reversedArray.join(' ').toString()

  return reversedStr;
}