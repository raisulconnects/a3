function gonoVote(array) {
  if (!Array.isArray(array)) return "Invalid";

  let ha = 0;
  let na = 0;

  for (let vote of array) {
    if (vote === "ha") ha++;
    if (vote === "na") na++;
  }

  return ha === na ? "equal" : ha > na ? true : false;
}
