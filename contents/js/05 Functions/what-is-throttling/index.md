---
title: What is throttling?
---

Throttling is a technique used to limit the execution of an event handler function, even when this event triggers continuously due to user actions. The common use cases are browser resizing, window scrolling etc.
The below example creates a throttle function to reduce the number of events for each pixel change and trigger scroll event for each 100ms except for the first event.

```js
const throttle = (fn, limit) => {
	let isThrottled = false;
	return (...args) => {
		if (isThrottled) return;
		isThrottled = true;
		fn.apply(this, args);
		setTimeout(() => {
			isThrottled = false;
		}, limit);
	};
};
const sum = (a) => {
	console.log(a);
	return a + 10;
};
const throttled = throttle(() => sum(10), 1000);
document.body.addEventListener('click', () => throttled());
```
