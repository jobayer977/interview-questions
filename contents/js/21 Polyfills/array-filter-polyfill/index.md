---
title: Implement Array filter polyfill ?
---

<details>
    <summary>Answer</summary>
	
```js
Array.prototype.filterImpl = function (callback) {
	const result = []
	for (let i = 0; i < this.length; i++) {
		if (callback(this[i], i, this)) {
			result.push(this[i])
		}
	}
	return result
}
```
</details>
