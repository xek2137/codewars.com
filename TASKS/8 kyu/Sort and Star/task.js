function twoSort(s) {
  const sorter = s.sort((a, b) => {a - b})
  const firstValue = sorter[0].split('').join('***');
  console.log(firstValue);
  return firstValue;
}

twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])