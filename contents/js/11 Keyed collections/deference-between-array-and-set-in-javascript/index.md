---
title: Deference between Array and Set in javascript?
---

Array is a collection of values and Set is a collection of unique values. Removing duplicates from an array is a O(n) operation and from a set is a O(1) operation.

**Example**

```javascript
var arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
var set = new Set(arr);
// console.log(set); // Set {1, 2, 3, 4, 5}
// console.log(arr); // [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]

// Remove an item from an array
arr.splice(0, 1);
// console.log(arr); // [2, 3, 4, 5, 1, 2, 3, 4, 5]
set.delete(1);
// console.log(set); // Set {2, 3, 4, 5}
```
