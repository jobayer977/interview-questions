---
title: What is currying function in JavaScript ?
questions: []
---

It is a technique in functional programming, transforming of the function of multiple arguments into several functions of a single argument in sequence. It is also called nested function is ECMAScript

```js
// Noncurried version
const add = (a, b, c) => {
	return a + b + c;
};
console.log(add(2, 3, 5)); // 10

// Curried version
const addCurry = (a) => {
	return (b) => {
		return (c) => {
			return a + b + c;
		};
	};
};
console.log(addCurry(2)(3)(5)); // 10
```
