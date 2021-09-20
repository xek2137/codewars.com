const intDiff = (arr, n) =>
  arr.reduce((element, val, index) =>
    element + arr.slice(++index).filter(v => Math.abs(v - val) === n).length, 0)