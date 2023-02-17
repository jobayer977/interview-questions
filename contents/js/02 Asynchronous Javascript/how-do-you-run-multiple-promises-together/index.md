---
title: How do you run multiple promises together?
---

Handle multiple promises and complete each one before starting the next one. The `Promise.all` It takes an array of promises and returns a single promise.

```javascript
const promiseOne = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('one');
	}, 1000);
});

const promiseTwo = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('two');
	}, 2000);
});

const promiseThree = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('three');
	}, 3000);
});

const resolved = Promise.all([promiseOne, promiseTwo, promiseThree]).then((results) => {
	console.log(results);
});
```
