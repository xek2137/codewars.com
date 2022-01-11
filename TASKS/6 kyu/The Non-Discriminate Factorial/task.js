// function factorial(n) {
//   let nABS = Math.abs(n);
//   let value = 1;

//   for (i = 1; i <= nABS; i++){
//     value *= i;
//   }

//   if (n > 0) return value;
//   if (n < 0) return -value;
//   if (n === 0) return 1;
// }

// ^???

function factorial(n) {
  let stop=n
  if (n>0){
    for (let i=1;i<stop;i++){
      n*=i
    }
    return n
  }
  if (n<0){
    for (let i=n+1;i<0;i++){
      n*=i
    }
    return n
  }
  return 1
}