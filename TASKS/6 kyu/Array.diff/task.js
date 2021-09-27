function arrayDiff(a, b) {
  const finalArray = a.filter(val => !b.includes(val));

  return finalArray;
}