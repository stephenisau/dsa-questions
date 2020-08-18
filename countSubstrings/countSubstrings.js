const countSubstrings = str => {
  let count = 0;
  let n = s.length;
  for (let i = 0; i < n; i++) {
    let start = i;
    let end = i;
    while (start >= 0 && end < n && s[start] === s[end]) {
      count++;
      start--;
      end++;
    };
    start = i;
    end = i + 1;
    while (start >= 0 && end < n && s[start] === s[end]) {
      count++;
      start--;
      end++;
    }
  }
  return count;
}