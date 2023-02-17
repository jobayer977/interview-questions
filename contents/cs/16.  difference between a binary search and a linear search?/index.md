---
title: Difference between a binary search and a linear search?
source: https://www.fullstack.cafe
---

- Binary search requires that the list be sorted. Linear search does not require that the list be sorted.
- Binary search require comparisons to be made. Linear search does not require comparisons to be made. Linear search require equality comparisons.
- Binary search time complexity is O(log n). Linear search time complexity is O(n).

**Example of binary search:**

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
```

**Example of linear search**

```javascript
function linearSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return true
    }
  }
  return false
}
```
