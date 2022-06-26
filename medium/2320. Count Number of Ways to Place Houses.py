# 2320. Count Number of Ways to Place Houses

# 1
class Solution:
  def countHousePlacements(self, n: int) -> int:
    house = 1
    space = 1
    total = space + house
    MOD = 1000000007
    for i in range(2, n + 1):
      house = space
      space = total
      total = (house + space) % MOD
    return (total ** 2) % MOD