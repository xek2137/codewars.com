function decodePass( passArr, bin ){
  let binArr = bin.split(' ');
  let decodedBinArr = binArr
  .map(v => String.fromCharCode(parseInt((v * 1), 2)))
   .slice(0)
   .join('');

  return passArr.includes(decodedBinArr) ? decodedBinArr : false;
}