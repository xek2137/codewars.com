function towerBuilder(nFloors) {
  let star = '*';
  let array = [];

  for (let i = 1; i <= nFloors; i++){
    let spaceMark = ' '.repeat(nFloors - i);
    let starMark = star.repeat(i * 2 - 1);

    array.push(`${spaceMark}${starMark}${spaceMark}`)
  }
  return array;
}