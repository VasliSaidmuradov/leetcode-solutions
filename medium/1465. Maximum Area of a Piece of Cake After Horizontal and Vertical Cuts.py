# 1465. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts

# 1
class Solution:
  def maxArea(self, h: int, w: int, horizontalCuts: List[int], verticalCuts: List[int]) -> int:
    MOD = 10 ** 9 +7

    hor = [0] + sorted(horizontalCuts) + [h]
    ver = [0] + sorted(verticalCuts) + [w]

    max_hor_diff = max(hor[i] - hor[i - 1] for i in range(1, len(hor)))
    max_ver_diff = max(ver[i] - ver[i - 1] for i in range(1, len(ver)))

    return (max_hor_diff * max_ver_diff) % MOD