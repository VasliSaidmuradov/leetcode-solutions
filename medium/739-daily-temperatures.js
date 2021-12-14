// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.


// Example 1:

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]
// Example 2:

// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]
// Example 3:

// Input: temperatures = [30,60,90]
// Output: [1,1,0]
 

// Constraints:

// 1 <= temperatures.length <= 105
// 30 <= temperatures[i] <= 100

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */


// Solutions:

// #1
const dailyTemperatures = function(t) {
  const res = []

	for (let i = 0; i < t.length; i++) {
		let pushed = false

		for (let j = i + 1; j < t.length; j++) {
			if (t[j] > t[i]) {
				res.push(j - i)
				pushed = true
				break
			}
		}

		if (!pushed) res.push(0)
		
	}

	return res
}

// #2
const dailyTemperatures = function(t) {
  const res = new Array(t.length).fill(0)
  const stack = []

  for (let i = t.length - 1; i >= 0; i--) {
    while (stack.length && t[i] >= stack[stack.length - 1].val) {
      stack.pop()
    }

    if (stack.length && t[i] < stack[stack.length - 1].val) {
      res[i] = stack[stack.length - 1].idx - i
    }

    stack.push({ idx: i, val: t[i] })
  }

  return res
}