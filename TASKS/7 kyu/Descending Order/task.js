function descendingOrder(n) {
  const newN = Number(n.toString().split('').sort((a, b) => b - a).join(''));

  return newN;
}