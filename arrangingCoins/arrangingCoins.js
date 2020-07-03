/**
 * 
 * You have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins.

Given n, find the total number of full staircase rows that can be formed.

n is a non-negative integer and fits within the range of a 32-bit signed integer.

Example 1:

n = 5

The coins can form the following rows:
¤
¤ ¤
¤ ¤

Because the 3rd row is incomplete, we return 2.
Example 2:

n = 8

The coins can form the following rows:
¤
¤ ¤
¤ ¤ ¤
¤ ¤

Because the 4th row is incomplete, we return 3.
 */


 /**
  * 
  * @param {*} n 
  * 
Find the maximum kk such that \frac{k (k + 1)}{2} \le N 
2
k(k+1)
​	
 ≤N.
  */
 const arrangeCoins = n => {
   let left = 0;
   let right = n;
   while (left <= right) {
     let mid = Math.floor((left + right) / 2);
     let curr = Math.floor(mid * (mid + 1) / 2);
     if (curr === n) return mid;
     if (n < curr) right = mid - 1;
     else { 
       left = mid + 1
     }
   }
   return right;
 }