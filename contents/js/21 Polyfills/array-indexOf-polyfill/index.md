---
title: Implement Array indexOf polyfill ?
---

<details>
    <summary>Answer</summary>
	
```js
Array.prototype.indexOfImpl = function (value) {
	for (let i = 0; i < this.length; i++) {
		if (this[i] === value) {
			return i
		}
	}
	return -1
}
```
</details>
