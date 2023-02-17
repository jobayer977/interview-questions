---
title: When closures are created in JavaScript ?
---

When an inner function uses the outer function's variable, then closer is created in javascript.

```javascript
// Closure is not created example
function addSquares(a, b) {
	function square(x) {
		return x * x;
	}
	return square(a) + square(b);
}

// Closure is created example
function addSquares(a, b) {
	function square(x) {
		return a * x;
	}
	return square(a) + square(b);
}
```
