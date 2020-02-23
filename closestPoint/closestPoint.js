// K Closest Points to Origin
/** We have a list of points on the plane.  Find the K closest points to the origin (0, 0).

(Here, the distance between two points on a plane is the Euclidean distance.)

You may return the answer in any order.  The answer is guaranteed to be unique (except for the order that it is in.)

Test Case 1:
Input: points = [[1,3],[-2,2]], K = 1
Output: [[-2,2]]
Explanation: 
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest K = 1 points from the origin, so the answer is just [[-2,2]].

Test Case 2:
Input: points = [[3,3],[5,-1],[-2,4]], K = 2
Output: [[3,3],[-2,4]]
(The answer [[-2,4],[3,3]] would also be accepted.)
*/

// initialize empty storage array
// initialize an output array
// main function that loops through the points in the input array
  // use helper/util function to caluculate distance from origin
  // push the calculated distance into a storage array [sqrt(dist1), sqrt(dist2), ...]
// find index of minimum value in my storage array
// return Kth element relating to the storage index

// {sqrt(18): 0, sqrt(26): 1, sqrt(20): 2}

// [sqrt(18), sqrt(26), sqrt(20)] i=2
// [sqrt(18), sqrt(20, sqrt(26))] K=2
// look for the kth elements. in my object and push to output array
// [[3, 4], [-2, 4]]


function closestPoints(points, k) {
  let storageArr = [];
  let output = [];
  let indexTracker = {};
  let math = [];
  for (let i = 0; i < points.length; i++) {
    let distance = calculateDistanceFromOrigin(points[i]);
    storageArr.push(distance);
    indexTracker[distance] = i;
  }
  
  let sortedArr = storageArr.sort((a, b) => (a - b));
  let answer = sortedArr.slice(0, k);
  for (let i = 0; i < answer.length; i++) {
    let idx = indexTracker[answer[i]]
    output.push(points[idx]);
  }
  
  return output;
}


function calculateDistanceFromOrigin(arr) {
  const [x, y] = arr;
  let sumVal = (x * x) + (y * y);
  return Math.sqrt(sumVal);
}


let points = [[3,3],[5,-1],[-2,4]];
let K = 2;
console.log(closestPoints(points, K)) // [[3,3],[-2,4]]
// console.log(Math.sqrt((3*3) +(2 * 2)))

// START
let coords = [[3,3],[5,-1],[-2,4]];
// [sqrt(18),sqrt(26),sqrt(20)]

let myObj = {18: [3,3], 26: [5,-1], 20: [-2,4]}
let preSort = Object.keys(myObj)
let sorted = preSort.sort((a,b) => Number(a) - Number(b));

const k = 2;
for (let i=0; i < k; i++) {
  sorted[i] = myObj[sorted[i]];
}
console.log(sorted.slice(0,k)); //[ [ 3, 3 ], [ -2, 4 ] ]
