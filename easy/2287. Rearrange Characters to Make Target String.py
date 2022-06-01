# 2287. Rearrange Characters to Make Target String

# 1
class Solution:
  def rearrangeCharacters(self, s: str, target: str) -> int:
    hashS = {}
    hashT = {}

    for i in s:
      hashS[i] = hashS.get(i, 0) + 1
    for i in target:
      hashT[i] = hashT.get(i, 0) + 1

    count = len(s)
    for i in target:
      if i not in hashS:
        return 0
      count = min(count, hashS[i]//hashT[i])

    return count

# 2
class Solution:
  def rearrangeCharacters(self, s: str, target: str) -> int:
    c = Counter(s)
    t = Counter(target)
    ans = math.inf
    for k,v in t.items():
      ans = min(ans,c[k]//v)

    return 0 if ans is math.inf else ans