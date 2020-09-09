/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/solution/

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0
 */


// Sliding Window Approach
const longestSubstring = str => {
  let seen = new Set();
  let i = 0;
  let j = 0;
  let count = 0;
  while (i < s.length && j < s.length) {
    if (!seen.has(s.charAt(j))) {
      seen.add(s.charAt(j++));
      count = Math.max(count, j-i);
    } else {
      seen.delete(s.charAt(i++));
    }
  }
  return count;
}

