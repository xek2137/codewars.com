function christmasTree(height) {
  const space = ' ';
  const star = '*'
  let arr = [];

  for (let i = 1, j = 1; i <= height; i++, j+=2) {

    arr.push(`${space.repeat(height - i)}${star.repeat(j)}${space.repeat(height - i)}`)
  }
  return arr.join('\n');
}