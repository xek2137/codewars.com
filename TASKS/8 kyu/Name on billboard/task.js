function billboard(name, price = 30){
  let finalValue = 0;
  const nameArr = name.split('');

  nameArr.forEach(value => finalValue += price);

  return finalValue;
}