---
title: What is recursion and why it is used?
---

A function that calls itself is called a recursive function. In some ways, recursion is analogous to a loop. Both execute the same code multiple times, and both require a condition (to avoid an infinite loop, or rather, infinite recursion in this case).

```javascript
const factorial = function fac(n) {
	return n < 2 ? 1 : n * fac(n - 1);
};

factorial(3);
```
