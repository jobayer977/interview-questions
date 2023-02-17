---
title: What promise chaining ?
---

Promise chaining is a way to chain promises together. This is useful when you want to execute multiple asynchronous operations in sequence. The following example shows how to use promise chaining to execute multiple asynchronous operations in sequence.

**Example**

```javascript
var promise1 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		resolve(1);
	}, 1000);
});

var promise2 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		resolve(2);
	}, 2000);
});

var promise3 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		resolve(3);
	}, 3000);
});

promise1
	.then(function (result) {
		console.log(result); // 1
		return promise2;
	})
	.then(function (result) {
		console.log(result); // 2
		return promise3;
	})
	.then(function (result) {
		console.log(result); // 3
	});
```
