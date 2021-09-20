function generatePairs(m, n) {
  const arr = [];

  for (let a = m; a <= n; a++) {
    for (let b = a; b <= n; b++) {
      arr.push([a, b])
    }
  }
  return arr;
}