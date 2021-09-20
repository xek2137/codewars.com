function infected(s) {
  let score = 0;
  let infected = 0;
  const spliter = s.split('X');

  if (!s.includes('1') || !s.includes('0')){
    return 0;
  }

  s.split('X').forEach(world => {
    if (world.includes('1')){
      world = world.replace(/0/gi, '1')
      infected += world.length;
    }

    score += world.length;
  })
  return 100 * infected / score;
}