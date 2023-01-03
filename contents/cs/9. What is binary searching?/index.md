---
title: What is binary searching?
---

Binary search is a search algorithm that works by comparing the target value to the middle element of the data set. If the target value is less than the middle element, the algorithm repeats the process on the lower half of the data set. If the target value is greater than the middle element, the algorithm repeats the process on the upper half of the data set.

```javascript
function binarySearch(arr, item) {
 let low = 0
 let high = arr.length - 1

 while (low <= high) {
  const mid = Math.floor((low + high) / 2)
  const guess = arr[mid]

  if (guess === item) {
   return true
  }

  if (guess > item) {
   high = mid - 1
  } else {
   low = mid + 1
  }
 }

 return false
}

binarySearch([1, 2, 3, 4, 5], 3) // true
```

**Note:** The above algorithm is `O(log n)` because it has to divide the data set in half every time it loops.

**Binary Search in String**

```javascript
const str = 'abcdefghijklmn'
function bSearch(array, word) {
 let left = 0
 let right = array.length - 1
 while (left <= right) {
  const mid = Math.floor((left + right) / 2)
  const guess = word.localeCompare(array[mid])
  if (0 == guess) {
   return { result: array[mid], index: mid }
  }
  if (guess > 0) {
   left = mid + 1
  } else {
   right = mid - 1
  }
 }
 return -1
}
console.log(bSearch(str.split(''), 'h'))
``` 
