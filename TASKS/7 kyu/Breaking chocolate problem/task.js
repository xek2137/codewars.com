function breakChocolate(n,m) {
  const singleChocolateSquare = m * n;

  if (singleChocolateSquare > 2) {
    return singleChocolateSquare - 1;
  } else {
    return 0;
  }
}