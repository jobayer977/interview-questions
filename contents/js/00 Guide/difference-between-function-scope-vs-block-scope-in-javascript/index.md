---
title: Difference between Function Scope vs Block Scope in JavaScript?
---

**Function Scope**:
variables defined inside a function are not accessible outside the function.

```javascript
function foo() {
	var a = 1;
	function bar() {
		console.log(a); // 1
	}
	bar();
}

foo(); // 1
```

**Block Scope :**

This scope restricts the variable that is declared inside a specific block, from access by the outside of the block. The let & const keyword facilitates the variables to be block scoped.

```javascript
if (true) {
	let a = 1;
	console.log(a); // 1
}
console.log(a); // ReferenceError: a is not defined
```
