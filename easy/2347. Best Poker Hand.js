// 2347. Best Poker Hand

// https://leetcode.com/problems/best-poker-hand/

// #1
const bestHand = function(ranks, suits) {
  if (new Set(suits).size === 1) {
    return "Flush"
  }

  const R = {}
  let max = 0

  for (let rank of ranks) {
    R[rank] = (R[rank] || 0) + 1
  }

  max = Math.max(...Object.values(R))

  switch(max) {
    case 3:
    case 4:
    case 5:
      return "Three of a Kind"
    case 2:
      return "Pair"
    default:
      return "High Card"
  } 
};