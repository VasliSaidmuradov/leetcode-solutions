# 2347. Best Poker Hand

# https://leetcode.com/problems/best-poker-hand/

class Solution:
  def bestHand(self, r: List[int], s: List[str]) -> str:
    if max(s) == min(s):
      return "Flush" 
    match max(Counter(r).values()):
      case 5 | 4 | 3:
        return "Three of a Kind"
      case 2:
        return "Pair"
      case _:
        return "High Card"


# 2
class Solution:
  def bestHand(self, r: List[int], s: List[str]) -> str:
    if len(set(suits)) == 1: return 'Flush'
    m = max(Counter(ranks).values())
    if m >= 3: 
      return "Three of a Kind"
    if m == 2: 
      return "Pair"
    return "High Card"


# 3
class Solution:
  def bestHand(self, ranks: List[int], suits: List[str]) -> str:
    if max(suits) == min(suits):
      return "Flush" 
    maxVal = max(Counter(ranks).values())
    if maxVal == 5 or maxVal == 4 or maxVal == 3:
      return "Three of a Kind"
    elif maxVal == 2:
      return "Pair"
    return "High Card"