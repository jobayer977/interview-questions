---
title: What does space complexity mean?
source: https://www.simplilearn.com/
---

Space complexity is the amount of memory that an algorithm will use. Algorithms are run on a computer It need certain amount of memory space to run. The amount of memory used by an algorithm is called its space complexity.

**Example:**

```javascript
function factorial(n) {
	if (n === 0) {
		return 1
	}
	return n * factorial(n - 1)
}
```

The above algorithm will use O(n) space complexity. This is because it will use n amount of memory to store the result of the factorial function.

**Another Example:**

```javascript
function sum(n1, n2) {
	return n1 + n2
}
```

This algorithm will use O(1) space complexity. This is because it will use only one memory space to store the result of the sum function.
