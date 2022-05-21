// 322. Coin Change

// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

 

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0
 

// Constraints:

// 1 <= coins.length <= 12
// 1 <= coins[i] <= 231 - 1
// 0 <= amount <= 104


// https://leetcode.com/problems/coin-change/discuss/2058537/Python-Easy-DP-2-approaches
// Bottom Up DP(Tabulation)
const coinChange = function(coins, amount) {
  const dp = Array.from({length: amount + 1}).fill(Infinity)
  dp[0] = 0

  for (let coin of coins) {
    for (let i = coin; i < amount + 1; i++) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1)
      }
    }
  }

  const res = dp.pop()

  return res === Infinity ? -1 : res
};

const coinChange2 = function(coins, amount) {
  const max = Number.MAX_SAFE_INTEGER;
  const dp = new Array(amount + 1).fill(max);
  dp[0] = 0;
  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        const rest = dp[i - coins[j]];
        if (rest !== max && rest + 1 < dp[i]) {
          dp[i] = rest + 1;
        }
      }
    }
  }
  return dp[amount] === max ? -1 : dp[amount];
};

