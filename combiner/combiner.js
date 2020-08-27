/**
 * Given an arbitrary number of input arrays, generate
 * an array of all possible permutations of elements from the 
 * original array
 * @param  {...any} args 
 */

const combiner = (...args) => {
  let output = [];
  const MAX = args.length - 1;

  function _helper(arr, idx) {
    for (let i = 0; i < args[idx].length; i++) {
      let arrCopy = [...arr];
      arrCopy.push(args[idx][i]);
      if (idx === MAX) {
        output.push(arrCopy);
      } else {
        _helper(arr, idx++);
      };
    };
  };
  _helper([], 0);
  return output;
}