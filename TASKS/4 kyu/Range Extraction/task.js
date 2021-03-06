function solution(arr){
  const ranges = [];
  const sorted = [...arr.filter(Number.isInteger)].sort((x,y) => Math.sign(x-y));
  const sequenceBreak = (x,y) => y - x > 1;
  let i = 0;

  while (i < sorted.length){
    let j = i;

    while (j < sorted.length - 1 && !sequenceBreak( sorted[j], sorted[j+1])){
      ++j;
    }

    const from = sorted[i];
    const thru = sorted[j];
    const rangeLen = 1 + j - i;

    if (from === thru){
      ranges.push( [from] );
    } else {

      if (rangeLen > 2){
        ranges.push([from,thru]);
      } else {
        ranges.push([from], [thru]);
      }
    }
    i = j+1;
  }
  return ranges.map( range => range.join('-') ).join(',');
}