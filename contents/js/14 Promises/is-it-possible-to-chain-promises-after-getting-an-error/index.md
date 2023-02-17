---
title: Is it possible to chain promises after getting an Error?
---

Yes, It is possible to chain after a failure. which is useful to accomplish a task after a failure.

```javascript
new Promise((resolve, reject) => {
	console.log('Initial');

	resolve();
})
	.then(() => {
		throw new Error('Something failed');
		console.log('Do this');
	})
	.catch(() => {
		console.error('Do that');
	})
	.then(() => {
		console.log('Do this, no matter what happened before');
	});
```
