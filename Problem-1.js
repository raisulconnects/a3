function newPrice(currentPrice, discount) {
  if (
    typeof currentPrice == "string" ||
    typeof discount == "string" ||
    (discount < 0 && discount > 100)
  )
    return "Invalid";
  const percentage = discount / 100;

  return (currentPrice - currentPrice * percentage).toFixed(3);
}
