// 2351. First Letter to Appear Twice

// https://leetcode.com/contest/weekly-contest-303/problems/first-letter-to-appear-twice/

// #1
const repeatedCharacter = function(s) {
  const set = new Set()

  for (let ch of s) {
    if (set.has(ch)) {
      return ch
    }
    set.add(ch)
  }
};

// #2
const repeatedCharacter2 = function(s) {
  const hash = Array(26).fill(0)

  for (let ch of s) {
    const code = ch.charCodeAt()
    if (hash[code - 'a'.charCodeAt()] > 0) {
      return ch
    }
    hash[code - 'a'.charCodeAt()]++
  }
};

// #3
const repeatedCharacter3 = function(s) {
  const hash = Array(26).fill(0)

  for (let ch of s) {
    const idx = ch.charCodeAt(0) - 'a'.charCodeAt(0)
    if (hash[idx]) {
      return ch
    }
    hash[idx]++
  }
};