// Bad description: age of his son should be const to do it :(

// You can also use Math.abs();

function twiceAsOld(dadYearsOld, sonYearsOld) {
  const yearValue = (dadYearsOld - sonYearsOld * 2);

  return (
    yearValue > 0 ? yearValue : -yearValue
  )
}

