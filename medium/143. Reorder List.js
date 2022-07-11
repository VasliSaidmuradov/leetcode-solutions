// 143. Reorder List

// #1 
const reorderList = function(head) {
  // find middle of the list
  let mid = findMid(head)

  // split list into two part
  let second = mid.next
  mid.next = null
  let first = head

  // reverse second half
  second = reverse(second)

  // merge two parts
  merge(first, second)
};

const findMid = head => {
  slow = head
  fast = head.next
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}

const merge = (first, second) => {
  while (second) {
    let next1 = first.next, next2 = second.next
    first.next = second
    second.next = next1
    first = next1
    second = next2
  }
}

const reverse = list => {
  let prev = null

  while (list) {
    next = list.next
    list.next = prev
    prev = list
    list = next
  }

  return prev
}