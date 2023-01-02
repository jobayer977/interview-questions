---
title: Polyfill promise.all function in js ?
---

```javascript
function all(promises) {
	return new Promise((resolve, reject) => {
		let count = 0;
		let results = [];
		promises.forEach((promise, index) => {
			promise
				.then((result) => {
					results[index] = result;
					count++;
					if (count === promises.length) {
						resolve(results);
					}
				})
				.catch(reject);
		});
	});
}
```

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

const resolved = all([promiseOne, promiseTwo, promiseThree]).then((results) => {
	console.log(results);
});
```
