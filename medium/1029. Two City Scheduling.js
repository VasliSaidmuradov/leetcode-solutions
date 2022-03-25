// 1029. Two City Scheduling

// A company is planning to interview 2n people. Given the array costs where costs[i] = [aCosti, bCosti], the cost of flying the ith person to city a is aCosti, and the cost of flying the ith person to city b is bCosti.

// Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.

 

// Example 1:

// Input: costs = [[10,20],[30,200],[400,50],[30,20]]
// Output: 110
// Explanation: 
// The first person goes to city A for a cost of 10.
// The second person goes to city A for a cost of 30.
// The third person goes to city B for a cost of 50.
// The fourth person goes to city B for a cost of 20.

// The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.
// Example 2:

// Input: costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]
// Output: 1859
// Example 3:

// Input: costs = [[515,563],[451,713],[537,709],[343,819],[855,779],[457,60],[650,359],[631,42]]
// Output: 3086
 

// Constraints:

// 2 * n == costs.length
// 2 <= costs.length <= 100
// costs.length is even.
// 1 <= aCosti, bCosti <= 1000


/**
 * @param {number[][]} costs
 * @return {number}
 */

// #1
const twoCitySchedCost = function(costs) {
  const half = costs.length/2
  const diff = []
  let minCost = 0

  for (let cost of costs) {
    minCost += cost[0]
    diff.push(cost[1] - cost[0])
  }

  diff.sort((a, b) => a - b)

  for (let i = 0; i < half; i++) {
    minCost += diff[i]
  }

  return minCost
}

// https://leetcode.com/problems/two-city-scheduling/discuss/1881010/C%2B%2B-oror-Explained-oror-Easy-oror-Simple-and-Short-oror-Algorithm
// ALGORITHM

// Input: costs = [[10,20],[30,200],[400,50],[30,20]]
// Output: 110

// Compute the cost of sending every person to City A.
// The cost will be 10 + 30 + 400 + 30 = 470

// Compute the difference if a Person is sent to City B
// D1 -> 20 - 10 = 10
// D2 -> 200 - 30 = 170
// D3 -> 50 - 400 = -350
// D4 -> 20 - 30 = -10

// If the last two persons are sent to City B instead of City A, you can save maximum, as those are the persons costing more to City A.
// Sort the diff.
// D3, D4, D1, D2

// Now pick N persons which has least diff and send them to City B.
// Add the diff cost to the total
// 470 + (-350) + -(10) = 110
// return cost.


// #2
const twoCitySchedCost2 = function(costs) {
  //To optimize the total costs, let's sort the persons by price_A - price_B 
  // then send the first n persons to the city A, and the others to the city B, 
  //because this way the company costs are minimal.
  costs.sort((a , b) => (a[0] - a[1]) - (b[0] - b[1]))
  let minCost = 0
  const half = costs.length / 2

  for(let i = 0 ; i < half ; i++){
    minCost += costs[i][0] + costs[i + half][1]
  }

  return minCost
}