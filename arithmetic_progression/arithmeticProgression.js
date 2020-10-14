var canMakeArithmeticProgression = function(arr) {
  let seen = new Set();
  arr.sort((a, b)=> a - b);
  for(let i = 0, j = 1; i < arr.length - 1; i++, j++){
      let diff = Math.abs(arr[i] - arr[j]);
      if(seen.size > 1) return false;
      seen.add(diff);
  }
  return seen.size === 1;
};