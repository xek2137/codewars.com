function usdcny(usd) {
  const cnyValue = usd * 6.75
  const fixedFinalValue = `${cnyValue.toFixed(2)} Chinese Yuan`;

  return fixedFinalValue;
}