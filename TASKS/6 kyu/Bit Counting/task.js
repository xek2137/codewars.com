function countBits(n){
  const binary = n.toString(2);

  return [...binary].filter(el => el === '1').length;
}