function convert(time){
  const timeString = time.toISOString().substr(11, 12);
  const finalString = timeString.replace('.', ',')

  return finalString;
}