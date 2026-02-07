function analyzeText(str) {
  let max = 0;
  let track = "";
  if (typeof str !== "string" || !str) return "Invalid";

  const wordCheck = str.split(" ");

  for (let word of wordCheck) {
    if (word.length > max) {
      max = word.length;
      track = word;
    }
  }

  let token = str.split(" ").join("").length;
  return { longwords: track, token };
}
console.log(analyzeText("A quick brown fox"));
