// 495. Teemo Attacking

// Our hero Teemo is attacking an enemy Ashe with poison attacks! When Teemo attacks Ashe, Ashe gets poisoned for a exactly duration seconds. More formally, an attack at second t will mean Ashe is poisoned during the inclusive time interval [t, t + duration - 1]. If Teemo attacks again before the poison effect ends, the timer for it is reset, and the poison effect will end duration seconds after the new attack.

// You are given a non-decreasing integer array timeSeries, where timeSeries[i] denotes that Teemo attacks Ashe at second timeSeries[i], and an integer duration.

// Return the total number of seconds that Ashe is poisoned.

 

// Example 1:

// Input: timeSeries = [1,4], duration = 2
// Output: 4
// Explanation: Teemo's attacks on Ashe go as follows:
// - At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
// - At second 4, Teemo attacks, and Ashe is poisoned for seconds 4 and 5.
// Ashe is poisoned for seconds 1, 2, 4, and 5, which is 4 seconds in total.
// Example 2:

// Input: timeSeries = [1,2], duration = 2
// Output: 3
// Explanation: Teemo's attacks on Ashe go as follows:
// - At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
// - At second 2 however, Teemo attacks again and resets the poison timer. Ashe is poisoned for seconds 2 and 3.
// Ashe is poisoned for seconds 1, 2, and 3, which is 3 seconds in total.
 

// Constraints:

// 1 <= timeSeries.length <= 104
// 0 <= timeSeries[i], duration <= 107
// timeSeries is sorted in non-decreasing order.

/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */

// #1
const findPoisonedDuration = function(timeSeries, d) {
  if (!d) return 0
  const ints = []
  for (let time of timeSeries) {
    ints.push([time, time + d - 1])
  }
  const res = mergeInts(ints)
  let count = 0
  for (let item of res) {
    count += item[1] - item[0] + 1
  }
  return count
}

const mergeInts = function(ints) {
  ints.sort((a, b) => a[0] - b[0])
  const res = [ints[0]]
  for (let i = 1; i < ints.length; i++) {
    const cur = ints[i]
    const prev = res[res.length - 1]
    if (prev[1] < cur[0]) {
      res.push(cur)
    } else {
      res[res.length - 1][1] = Math.max(prev[1], cur[1])
    }
  }
  return res
}

// #2
const findPoisonedDuration = function(timeSeries, duration) {
  let total = duration

  for(let i = 0; i < timeSeries.length - 1; i++){
    let diff = timeSeries[i + 1] - timeSeries[i]
    total += Math.min(duration, diff)
  }

  return total
}

// #3
const findPoisonedDuration = function(timeSeries, duration) {
  let totalTime = 0

  for (let i = 0; i < timeSeries.length; i++) {
    const timeLeft = timeSeries[i + 1] - timeSeries[i]

    if (timeLeft < duration) {
      totalTime += timeLeft
    } else {
      totalTime += duration
    }
  }

  return totalTime
}
