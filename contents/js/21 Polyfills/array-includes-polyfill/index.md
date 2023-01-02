---
title: Implement Array includes polyfill ?
---

<details>
    <summary>Answer</summary>
	
```js
Array.prototype.includesImpl = function (value) {
	for (let i = 0; i < this.length; i++) {
		if (this[i] === value) {
			return true
		}
	}
	return false
}
```
</details>
