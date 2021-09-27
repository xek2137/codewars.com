function spinWords(words){
  const slitWord = words.split(' ');

  return slitWord.map(word => (word.length > 4) ? word.split('').reverse().join('') : word).join(' ');
}