---
title: Implement Array map polyfill ?
---

<details>
    <summary>Answer</summary>
	
```js
Array.prototype.mapImpl = function (fn) {
	const result = []
	for (let i = 0; i < this.length; i++) {
		result.push(fn(this[i]))
	}
	return result
}
```
</details>
