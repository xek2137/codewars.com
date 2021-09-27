function ensureQuestion(s) {
  const isQuestionMark = s.includes('?');
  console.log(s);
  if (isQuestionMark){
    return `${s}`
  } else {
    return `${s}?`
  }
}