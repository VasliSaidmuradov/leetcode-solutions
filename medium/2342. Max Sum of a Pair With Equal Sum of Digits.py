# 2342. Max Sum of a Pair With Equal Sum of Digits

# 1
class Solution:
  def maximumSum(self, nums: List[int]) -> int:
    res = -1
    hashMap = dict() # {}

    for num in nums:
      sum = self.sumOfDigits(num)
      if sum in hashMap:
        res = max(res, hashMap[sum] + num)
      else:
        hashMap[sum] = 0

      hashMap[sum] = max(hashMap[sum], num)

    return res

  def sumOfDigits(self, num):
    sum = 0
    n = num
    while n > 0:
      sum += n % 10
      n //= 10
    return sum