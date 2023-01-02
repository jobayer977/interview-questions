---
title: What is the arguments object?
---

The arguments object is an array-like object containing the arguments passed to a function. The arguments object is a local variable within a function and is not accessible from outside the function.

```javascript
// Example
function sum() {
	var sum = 0;
	for (var i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}
	return sum;
}
sum(1, 2, 3); // 6
```
