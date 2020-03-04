function nextBigger(n) {
  // convert our number array to a string
  let numsArr = String(n).split('').map(Number);
  for (let i = numsArr.length - 1; i > 0; i--) {
    // pull out right and left numbers, starting from the end
    let right = numsArr[i];
    let left = numsArr[i - 1];
    // if the left is less then right, we want to get a second pointer on the left number
    if (left < right) {
      let j = numsArr.length - 1;
      console.log("j: ", j);
      while (numsArr[j] <= left) {
        j--;
      }
      // swap the numbers that are 
      [numsArr[i - 1], numsArr[j]] = [numsArr[j], numsArr[i - 1]];

      let rest = numsArr.slice(i).sort((a, b) => (a - b));
      let newArr = [...numsArr.slice(0, i), ...rest];

      let newNum = +newArr.join('');

      return (newNum > n) ? newNum : -1;
    }
  }
  return -1;
}

console.log(nextBigger(2017))

module.exports = nextBigger;