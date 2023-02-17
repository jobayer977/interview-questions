---
title: What is the purpose of the Set in javascript?
---

The Set is a data structure that stores unique values of any type. It is a collection of values. It is a collection of values that are not duplicated. And have useful built-in methods for manipulating the collection.

**Example**

```javascript
var set = new Set();
set.add(1);
set.add(2);
set.add(2);

for (let value of set) {
	console.log(value);
}
// Output:
// 1
// 2
```
