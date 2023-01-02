---
title: What is promise chaining give an example?
---

A common need is to execute two or more asynchronous operations back to back, where each subsequent operation starts when the previous operation succeeds, with the result from the previous step. We accomplish this by creating a promise chain.

```javascript
const getNumber = new Promise((resolve, reject) => {
	setInterval(() => {
		resolve(10);
	}, 100);
});
getNumber
	.then((number) => {
		console.log(number); // 11
		return number + 1;
	})
	.then((number) => {
		console.log(number); // 12
		return number + 1;
	})
	.then((number) => {
		console.log(number);
		return number + 1; // 13
	});
// 11
// 12
// 13
```
