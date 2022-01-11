function bmi(weight, height) {
  const calculatedBmi = weight / height ** 2;

  if (calculatedBmi <= 18.5) return "Underweight";
  if (calculatedBmi <= 25.0) return "Normal";
  if (calculatedBmi <= 30.0) return "Overweight";
  if (calculatedBmi > 30)    return "Obese";
}