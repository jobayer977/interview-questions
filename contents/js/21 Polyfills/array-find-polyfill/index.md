---
title: Implement Array find polyfill ?
---

<details>
    <summary>Answer</summary>
	
```js
Array.prototype.findImpl = function (callback) {
	for (let i = 0; i < this.length; i++) {
		if (callback(this[i])) {
			return this[i]
		}
	}
	return undefined
}
```
</details>
