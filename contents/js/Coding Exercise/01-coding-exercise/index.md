---
title: What is the output of below code
---

```javascript
console.log(sum(2, 3)); // Outputs 5
console.log(sum(2)(3)); // Outputs 5
```

<details>
    <summary>Answer</summary>

```javascript
function sum(x) {
	if (arguments.length === 2) {
		return arguments[0] + arguments[1];
	} else {
		return function (y) {
			return x + y;
		};
	}
}
```

</details>
