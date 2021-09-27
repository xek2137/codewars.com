const pigIt = (str) => {
  let newArr = [];
  let strSplitArr = str.split(' ');

  strSplitArr.forEach(element => {
    let wordArr = element.split('');
    wordArr.push(`${wordArr[0]}ay`), wordArr.shift();
    if (element === '!' || element === '?' || element === '.'){
      newArr.push(element)
    } else {
      newArr.push(wordArr.join(''))
    }
  })
  return newArr.join(' ')
}