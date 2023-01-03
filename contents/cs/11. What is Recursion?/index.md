---
title: What is Recursion?
---

Recursion is a process of calling itself. A function that calls itself is called a recursive function. One critical requirement of recursive functions is the termination point or base case. Every recursive program must have a base case to make sure that the function will terminate. Missing base case results in unexpected behavior.

```js
function sum(num) {
	if (num == 0) {
		return num
	}
	return num + sum(num - 1)
}

console.log(sum(10)) //55
```
