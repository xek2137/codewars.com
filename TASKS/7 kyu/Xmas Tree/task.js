function xMasTree(n){
  let arr = [];
  const underscoreTrunkValue = "_".repeat(n - 1);

  for (let i = 1,j = 1; i <= n; i++, j += 2){
    arr.push(`_`.repeat(n - i)+`#`.repeat(j)+`_`.repeat(n - i))
  }

  arr.push(`${underscoreTrunkValue}#${underscoreTrunkValue}`);
  arr.push(`${underscoreTrunkValue}#${underscoreTrunkValue}`);

  return arr;
}