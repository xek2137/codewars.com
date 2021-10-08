// function alphabetPosition(text) {
//   return text
//     .toUpperCase()
//     .match(/[a-z]/gi)
//     .map(i => i.charCodeAt() - 64)
//     .join(' ')
// }

function alphabetPosition(text){
  let result = '';
  let arr = text.toLowerCase().split(' ').join('').split('');

  for (let i = 0; i < arr.length; i++){
    if (arr[i].charCodeAt(0) >= 97 && arr[i].charCodeAt(0) <= 122){
      result += arr[i].charCodeAt(0)-96 + ' '
    }
  } return result.substring(0, result.length-1);
}