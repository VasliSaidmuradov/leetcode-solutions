// 2296. Design a Text Editor

// Design a text editor with a cursor that can do the following:

// Add text to where the cursor is.
// Delete text from where the cursor is (simulating the backspace key).
// Move the cursor either left or right.
// When deleting text, only characters to the left of the cursor will be deleted. The cursor will also remain within the actual text and cannot be moved beyond it. More formally, we have that 0 <= cursor.position <= currentText.length always holds.

// Implement the TextEditor class:

// TextEditor() Initializes the object with empty text.
// void addText(string text) Appends text to where the cursor is. The cursor ends to the right of text.
// int deleteText(int k) Deletes k characters to the left of the cursor. Returns the number of characters actually deleted.
// string cursorLeft(int k) Moves the cursor to the left k times. Returns the last min(10, len) characters to the left of the cursor, where len is the number of characters to the left of the cursor.
// string cursorRight(int k) Moves the cursor to the right k times. Returns the last min(10, len) characters to the left of the cursor, where len is the number of characters to the left of the cursor.
 

// Example 1:

// Input
// ["TextEditor", "addText", "deleteText", "addText", "cursorRight", "cursorLeft", "deleteText", "cursorLeft", "cursorRight"]
// [[], ["leetcode"], [4], ["practice"], [3], [8], [10], [2], [6]]
// Output
// [null, null, 4, null, "etpractice", "leet", 4, "", "practi"]

// Explanation
// TextEditor textEditor = new TextEditor(); // The current text is "|". (The '|' character represents the cursor)
// textEditor.addText("leetcode"); // The current text is "leetcode|".
// textEditor.deleteText(4); // return 4
//                           // The current text is "leet|". 
//                           // 4 characters were deleted.
// textEditor.addText("practice"); // The current text is "leetpractice|". 
// textEditor.cursorRight(3); // return "etpractice"
//                            // The current text is "leetpractice|". 
//                            // The cursor cannot be moved beyond the actual text and thus did not move.
//                            // "etpractice" is the last 10 characters to the left of the cursor.
// textEditor.cursorLeft(8); // return "leet"
//                           // The current text is "leet|practice".
//                           // "leet" is the last min(10, 4) = 4 characters to the left of the cursor.
// textEditor.deleteText(10); // return 4
//                            // The current text is "|practice".
//                            // Only 4 characters were deleted.
// textEditor.cursorLeft(2); // return ""
//                           // The current text is "|practice".
//                           // The cursor cannot be moved beyond the actual text and thus did not move. 
//                           // "" is the last min(10, 0) = 0 characters to the left of the cursor.
// textEditor.cursorRight(6); // return "practi"
//                            // The current text is "practi|ce".
//                            // "practi" is the last min(10, 6) = 6 characters to the left of the cursor.
 

// Constraints:

// 1 <= text.length, k <= 40
// text consists of lowercase English letters.
// At most 2 * 104 calls in total will be made to addText, deleteText, cursorLeft and cursorRight.



// #1
const TextEditor = function() {
  this.text = ''
  this.cursorPos = 0
};

TextEditor.prototype.addText = function(text) {
  if (this.cursorPos === 0) {
    this.text = text + this.text
    this.cursorPos = text.length
    return
  }

  if (this.cursorPos === this.text.length) {
    this.text = this.text + text
    this.cursorPos = this.text.length
    return
  }

  let newText = this.text.slice(0, this.cursorPos) + text + this.text.slice(this.cursorPos)
  this.cursorPos = this.cursorPos + text.length
  this.text = newText
};

TextEditor.prototype.deleteText = function(k) {
  if (this.cursorPos === 0) return 0

  if (this.cursorPos >= k) {
    this.text = this.text.slice(0, this.cursorPos - k) + this.text.slice(this.cursorPos)
    this.cursorPos -= k
    return k
  } else {
    this.text = this.text.slice(this.cursorPos)
    let oldCursorpos = this.cursorPos
    this.cursorPos = 0
    return oldCursorpos
  }
};

TextEditor.prototype.cursorLeft = function(k) {
  let min = 10
  if (this.cursorPos > k) {
    this.cursorPos -= k
    min = Math.min(min, this.cursorPos)
    return this.text.slice(this.cursorPos - min, this.cursorPos)
  }
  this.cursorPos = 0
  return ''
};

TextEditor.prototype.cursorRight = function(k) {
  let min = 10
  if (this.text.length > this.cursorPos + k) {
    this.cursorPos += k
    min = Math.min(min, this.cursorPos)
    const text = this.text.slice(this.cursorPos - min, this.cursorPos)
    return text
  }
  this.cursorPos = this.text.length
  min = Math.min(min, this.text.length)
  return this.text.slice(-min)
};


// #2
const TextEditor2 = function() {
  this.leftText = ''
  this.rightText = ''
};

/** 
* @param {string} text
* @return {void}
*/
TextEditor2.prototype.addText = function(text) {
  this.leftText += text
};

/** 
* @param {number} k
* @return {number}
*/
TextEditor2.prototype.deleteText = function(k) {
  if (k > this.leftText.length) k = this.leftText.length
  this.leftText = this.leftText.substring(0, this.leftText.length - k)
  return k
};

/** 
* @param {number} k
* @return {string}
*/
TextEditor2.prototype.cursorLeft = function(k) {
  if (this.leftText.length < k) k = this.leftText.length
  let temp = this.leftText.substring(this.leftText.length - k)
  this.leftText = this.leftText.substring(0, this.leftText.length - k)
  this.rightText = temp + this.rightText
  return this.leftText.substring(this.leftText.length - Math.min(this.leftText.length, 10))
};

/** 
* @param {number} k
* @return {string}
*/
TextEditor2.prototype.cursorRight = function(k) {
  if (this.rightText.length < k) k = this.rightText.length
  let temp = this.rightText.substring(0, k)
  this.rightText = this.rightText.substring(k)
  this.leftText =  this.leftText + temp
  return this.leftText.substring(this.leftText.length - Math.min(this.leftText.length, 10))
};