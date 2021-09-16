function solution(a, b){
  const aStringLength = a.length;
  const bStringLength = b.length;

  return (
    aStringLength > bStringLength
      ? `${b}${a}${b}`
      : `${a}${b}${a}`
  )
}