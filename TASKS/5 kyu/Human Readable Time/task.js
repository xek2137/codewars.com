const humanReadable = seconds => {
  const HH = ('0' + parseInt(seconds / (60 * 60))).slice(-2);
  const MM = ('0' + parseInt(seconds / 60 % 60)).slice(-2);
  const SS = ('0' + seconds % 60).slice(-2);

  return [HH, MM, SS].join(':')
}