---
title: What is the Temporal Dead Zone (TDZ) in JavaScript?
---

A temporal dead zone (TDZ) is the area of a block where a variable is inaccessible until the moment the computer completely initializes it with a value.

```js
function somemethod() {
	console.log(counter1); // undefined
	console.log(counter2); // ReferenceError
	var counter1 = 1;
	let counter2 = 2;
}
```
