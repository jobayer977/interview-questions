---
title: What is a promise.race() ?
---

The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.

```javascript
const promise1 = new Promise((resolve, reject) => {
	setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
	setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then((value) => {
	console.log(value); // expected output: "two"
});
```

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)
