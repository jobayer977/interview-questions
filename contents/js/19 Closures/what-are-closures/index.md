---
title: What are closures?
---

closure is a function that has access to the variables of its outer function even after the outer function has returned. Also Closure is concept of function + lexical environment in which function it was created . so every function declared within the another function then it has access to the scope chain of outer function and the variables created within the scope of outer function will not get destroyed.

```javascript
function outerFunction(arg) {
	var outerVar = arg;
	return function innerFunction(innerArg) {
		return outerVar + innerArg;
	};
}

var innerFunction = outerFunction(10);
console.log(innerFunction(20)); // 30
console.log(innerFunction(30)); // 50
```
