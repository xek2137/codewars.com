function htmlspecialchars(formData) {
  let arr = [];

  for (let i = 0; i < formData.length; i++){
    switch(formData[i]){
      case '<' :
        arr.push('&lt;');
        break;
      case '>' :
        arr.push('&gt;');
        break;
      case '"' :
        arr.push('&quot;');
        break;
      case '&' :
        arr.push('&amp;');
        break;
      default :
        arr.push(formData[i]);
    }
  }
  return arr.join('');
}