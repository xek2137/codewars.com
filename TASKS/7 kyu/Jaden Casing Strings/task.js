String.prototype.toJadenCase = function () {
  return (
    this.split(" ").map((word) => {
      return word.charAt().toUpperCase() + word.slice(1);
    }).join(" ")
  )
};