---
title: Implement Array fill polyfill ?
---

<details>
    <summary>Answer</summary>
	
```js
Array.prototype.fillImpl = function (value, start, end) {
	start = start || 0
	end = end || this.length
	for (let i = start; i < end; i++) {
		this[i] = value
	}
}
```
</details>
