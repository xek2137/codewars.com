function isPalindrome(x) {
  const yourWord = x.toUpperCase();
  const reversedWord = yourWord.split("").reverse().join("").toUpperCase();

  return yourWord === reversedWord
}