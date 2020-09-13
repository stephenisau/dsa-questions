/**
 * https://leetcode.com/problems/coin-change/solution/
 * 
 */

// Top-Down (Memoization)
let coinChange = (coins, amount) => {
  let memo = new Map();

  function permute(left) {
    if (memo.has(left)) return memo.get(left);
    if (left === 0) return 0;
    let min = Infinity;
    for (let coin of coins) {
      if (left - coin >= 0) min = Math.min(min, permute(left - coin));
    };
    memo.set(left, min + 1);
    return min + 1;
  }
  const result = permute(amount);
  return result === Infinity ? -1 : result;
}


// Bottom-up (tabulation)
coinChange = (coins, amount) => {
  let dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i < dp.length; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    };
  };
  return dp[amount] === Infinity ? -1 : dp[amount];
};