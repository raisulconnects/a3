function finalScore(omr) {
  let sum = 0;
  let total = 0;
  for (let num of Object.values(omr)) {
    total += num;
  }
  if (total !== 100) return "Invalid";

  sum = omr.right;
  sum -= omr.wrong * 0.5;
  return Math.round(sum);
}
