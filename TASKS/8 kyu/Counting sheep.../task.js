function countSheeps(arrayOfSheep) {
  let value = 0;

  arrayOfSheep.forEach(sheep => sheep === true ? value += 1 : '');

  return value;
}