---
title: What is the aim of the let keyword?
---

let allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used, unlike the var keyword, which declares a variable globally, or locally to an entire function regardless of block scope.

```js
function varTest() {
	var x = 1;
	{
		var x = 2; // same variable!
		console.log(x); // 2
	}
	console.log(x); // 2
}

function letTest() {
	let x = 1;
	{
		let x = 2; // different variable
		console.log(x); // 2
	}
	console.log(x); // 1
}
```
