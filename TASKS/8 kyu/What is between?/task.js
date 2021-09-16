function between(a, b) {
  const arr = [];

  if (a < b) {
    for (let i = a; i <= b; i++) {
      arr.push(i);
    }
    return arr;
  }
}