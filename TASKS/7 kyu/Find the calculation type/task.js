function calcType(a, b, res) {
  const addition = a + b;
  const multiplication = a * b;
  const subtraction = a - b;
  const division = a / b;

  switch (res) {
    case addition:
      return 'addition'
      break;

    case multiplication:
      return 'multiplication'
      break;

    case subtraction:
      return 'subtraction'
      break;

    case division:
      return 'division'
      break;
  }
}