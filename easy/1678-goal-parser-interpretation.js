// You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

// Given the string command, return the Goal Parser's interpretation of command.

 

// Example 1:

// Input: command = "G()(al)"
// Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:
// G -> G
// () -> o
// (al) -> al
// The final concatenated result is "Goal".
// Example 2:

// Input: command = "G()()()()(al)"
// Output: "Gooooal"
// Example 3:

// Input: command = "(al)G(al)()()G"
// Output: "alGalooG"
 

// Constraints:

// 1 <= command.length <= 100
// command consists of "G", "()", and/or "(al)" in some order.

/**
 * @param {string} command
 * @return {string}
 */

// Solutions: 

// #1
const interpret1 = function(command) {
  let i = 0
  let ans = ''

  while (i < command.length) {
    if (command[i] === 'G') {
      ans += 'G'
      i++
    } else if (command[i] === '(') {
      if (command[i + 1] === 'a') {
        ans += 'al'
        i += 4
      } else {
        ans += 'o'
        i += 2
      }
    }
  }

  return ans
}

// #2
const interpret2 = function(command) {
  return command.split('()').join('o').split('(al)').join('al')
}

// #3
const interpret3 = function(command) {
  let result = ''

  const helper = (index) => {
    if (index < command.length) {
      const c = command[index]

      if (c === 'G') {
        result += c
        helper(index + 1)
      } else {
        const nextC = command[index + 1]

        if (nextC === ')') {
          result += 'o'
          helper(index + 2)
        } else {
          result += 'al'
          helper(index + 4)
        }
      }
    }
  }

  helper(0)

  return result
}
