function multiTable(number) {
  let ourResult = '';
  for (let i = 1; i <= 10; i++) {
    let result = i * number;
    ourResult += `${i} * ${number} = ${result}${i < 10 ? '\n' : ''}`
  }
  return ourResult;
}


// Weirdo task... rly ^^