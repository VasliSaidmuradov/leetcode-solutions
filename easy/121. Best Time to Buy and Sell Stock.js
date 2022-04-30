// 121. Best Time to Buy and Sell Stock

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
 

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104


/**
 * @param {number[]} prices
 * @return {number}
 */

// #1
const maxProfit = function(prices) {
  if (prices.length <= 1) return 0
  else {
    let buyPrice = prices[0]
    let maxProfit = 0

    for (let i = 1; i < prices.length; i++) {
    let temp = prices[i] - buyPrice

    if (temp > maxProfit) maxProfit = temp
    if (prices[i] < buyPrice) buyPrice = prices[i]
    }

    return maxProfit
  }
}

// #2
const maxProfit2 = function(prices) {
  let maxProfit = 0
  let i = 0
  let j = 1

  while (j < prices.length) {
    if(prices[i] < prices[j]) {
      const profit = prices[j] - prices[i]
      maxProfit = maxProfit > profit ? maxProfit : profit 
    } else {
      i = j
    }

    j++
  }

  return maxProfit
}

// #3
const maxProfit3 = function(prices) {
  let min = prices[0]
  let maxP = 0
  for (let p of prices) {
    if (p < min) min = p
    else if ((p - min) > maxP) maxP = p - min
  }
  return maxP
}



// PYTHON 3
// class Solution:
//     def maxProfit(self, prices: List[int]) -> int:
//         l, r = 0, 1
//         maxP = 0
        
//         while r < len(prices):
//             if(prices[l] < prices[r]):
//                 maxP = max(maxP, prices[r] - prices[l])
//             else:
//                 l = r
//             r += 1
//         return maxP