---
title: Implement Array forEach polyfill ?
---

<details>
    <summary>Answer</summary>
	
```js
Array.prototype.forEachImpl = function (callback) {
	for (let i = 0; i < this.length; i++) {
		callback(this[i], i, this)
	}
}
```
</details>
