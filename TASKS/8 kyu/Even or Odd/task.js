function even_or_odd(number) {
  const evenNumber = number % 2;

  switch (!evenNumber) {
    case true:
      return `Even`
      break;

    default:
      return `Odd`
  }
}