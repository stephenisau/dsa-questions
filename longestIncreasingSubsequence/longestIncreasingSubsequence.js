function longestSubsequence(arr) {
  let max = 0;
  let seq = [];
   
  for (let i = 0; i < arr.length - 1; i++) {
    let curr = arr[i];
    seq.push(curr);
    for (let j = i+1; j < arr.length; j++) {
      if (curr < arr[j]) {
        seq.push(arr[j]);
        curr = arr[j];
      }
    }
    if (seq.length > max) {
      max = seq.length;
    }
    seq = [];
  }
  
  return max;
}

