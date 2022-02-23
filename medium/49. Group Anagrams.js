// 49. Group Anagrams

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]
 

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// #1
const groupAnagrams = function(strs) {
  const hash = {}

  for (const str of strs) {
    const sorted = [...str].sort().join('')

    if (!hash[sorted])
      hash[sorted] = []

    hash[sorted].push(str)
  }

  return [...Object.values(hash)]
}

// #2
const groupAnagrams = function(strs) {
  const obj = {}

  for (let str of strs) {
    const key = str.split('').sort().join('')


    if (!obj[key]) {
      obj[key] = [str]
    } else {
      obj[key].push(str)
    }
  }

  return [...Object.values(obj)]
}

// #3
const groupAnagrams = function(strs) {
  const map = new Map()

  for (const str of strs) {
    const sorted = [...str].sort().join('')

    if (!map.has(sorted)) {
      map.set(sorted, [])
    }

    map.get(sorted).push(str)
  }

  return [...map.values()]
}

// #4
const groupAnagrams = function(strs) {
  const res = []
  const hash = {}

  for (const str of strs) {
    const sorted = [...str].sort().join('')

    if (hash[sorted]) {
      hash[sorted].push(str)
    } else {
      hash[sorted] = [str]
    }
  }

  for (const prop in hash)
    res.push(hash[prop])

  return res
}