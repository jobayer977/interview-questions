---
title: What is function rest parameters?
---

Rest parameters are used to represent an indefinite number of arguments. Rest parameters are not mandatory. It is useful when you want to represent an indefinite number of arguments as an array.

```javascript
function sum(...args) {
	return args.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15
```
