// 1472. Design Browser History

// You have a browser of one tab where you start on the homepage and you can visit another url, get back in the history number of steps or move forward in the history number of steps.

// Implement the BrowserHistory class:

// BrowserHistory(string homepage) Initializes the object with the homepage of the browser.
// void visit(string url) Visits url from the current page. It clears up all the forward history.
// string back(int steps) Move steps back in history. If you can only return x steps in the history and steps > x, you will return only x steps. Return the current url after moving back in history at most steps.
// string forward(int steps) Move steps forward in history. If you can only forward x steps in the history and steps > x, you will forward only x steps. Return the current url after forwarding in history at most steps.
 

// Example:

// Input:
// ["BrowserHistory","visit","visit","visit","back","back","forward","visit","forward","back","back"]
// [["leetcode.com"],["google.com"],["facebook.com"],["youtube.com"],[1],[1],[1],["linkedin.com"],[2],[2],[7]]
// Output:
// [null,null,null,null,"facebook.com","google.com","facebook.com",null,"linkedin.com","google.com","leetcode.com"]

// Explanation:
// BrowserHistory browserHistory = new BrowserHistory("leetcode.com");
// browserHistory.visit("google.com");       // You are in "leetcode.com". Visit "google.com"
// browserHistory.visit("facebook.com");     // You are in "google.com". Visit "facebook.com"
// browserHistory.visit("youtube.com");      // You are in "facebook.com". Visit "youtube.com"
// browserHistory.back(1);                   // You are in "youtube.com", move back to "facebook.com" return "facebook.com"
// browserHistory.back(1);                   // You are in "facebook.com", move back to "google.com" return "google.com"
// browserHistory.forward(1);                // You are in "google.com", move forward to "facebook.com" return "facebook.com"
// browserHistory.visit("linkedin.com");     // You are in "facebook.com". Visit "linkedin.com"
// browserHistory.forward(2);                // You are in "linkedin.com", you cannot move forward any steps.
// browserHistory.back(2);                   // You are in "linkedin.com", move back two steps to "facebook.com" then to "google.com". return "google.com"
// browserHistory.back(7);                   // You are in "google.com", you can move back only one step to "leetcode.com". return "leetcode.com"
 

// Constraints:

// 1 <= homepage.length <= 20
// 1 <= url.length <= 20
// 1 <= steps <= 100
// homepage and url consist of  '.' or lower case English letters.
// At most 5000 calls will be made to visit, back, and forward.


// #1
const BrowserHistory = function(homepage) {
  this.history = [homepage]
  this.current = 0
}

BrowserHistory.prototype.visit = function(url) {
  this.history.length = this.current + 1
  this.history.push(url)
  this.current += 1
}

BrowserHistory.prototype.back = function(steps) {
  this.current = this.current - steps < 0 ? 0 : this.current - steps

  return this.history[this.current]
}

BrowserHistory.prototype.forward = function(steps) {
  const lastIdx = this.history.length - 1
  this.current = this.current + steps > lastIdx ? lastIdx : this.current + steps

  return this.history[this.current]
}


// #2
const BrowserHistory = function(homepage) {
  this.history = [homepage]
  this.future = []
}

BrowserHistory.prototype.visit = function(url) {
  this.future = []
  this.history.push(url)
}

BrowserHistory.prototype.back = function(steps) {
  let  i = 0

  while (i < steps && this.history.length > 1) {
    const url = this.history.pop()
    this.future.push(url)
    i++
  }

  return this.history[this.history.length - 1]
}

BrowserHistory.prototype.forward = function(steps) {
  let i = 0

  while (i < steps && this.future.length > 0) {
    const url = this.future.pop()
    this.history.push(url)
    i++
  }

  return this.history[this.history.length - 1]
}