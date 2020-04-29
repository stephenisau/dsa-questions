/**
 * 
 * Given n non-negative integers representing an elevation map
 *  where the width of each bar is 1, compute how much water it is
 *  able to trap after raining.
 * 
 * https://leetcode.com/problems/trapping-rain-water/
 * 
  Example:
  Input: [0,1,0,2,1,0,1,3,2,1,2,1]
  Output: 6
 */

const trap = (arr) => {
  if (arr.length === 0) return 0;

  let totalWater = 0;
  let n = arr.length;

  // initialize empty arrays to keep track of max height of water from L->R, and R->L
  let leftMax = [];
  let rightMax = [];

  // Set the first value
  leftMax[0] = arr[0];

  // Loop from left to right, set our counter array to keep track of the max value
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(arr[i], leftMax[i - 1]);
  }

  // Initialize our array
  rightMax[n - 1] = arr[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    // Go from right to left and set our counter array to keep track of the max value
    rightMax[i] = Math.max(arr[i], rightMax[i + 1]);
  }

  // Sum up the minimum values in our counter arrays.
  for (let i = 1; i < n; i++) {
    totalWater += Math.min(leftMax[i], rightMax[i])
  }


  return totalWater;

}


let heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(heights)) // => 6