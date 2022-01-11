function remainder(a, b){

  if (a !== 0 && b !== 0){
    if (a >= b){
      return a % b;
    } else {
      return b % a;
    }
  } else {
    return NaN;
  }
}