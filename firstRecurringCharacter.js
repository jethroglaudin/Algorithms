function returningChar(chars) {
  let ans = undefined;

  for (let i = 0; i < chars.length; i++) {
    let test = chars[i];
    for (let j = 1; j < chars.length; j++) {
      if (test == chars[j]) {
        ans = test;
      }
    }
    if (test !== undefined) {
      break;
    }
  }
  console.log(ans);
  return ans;
}
returningChar("ABCA");
returningChar("BCABA");
