---
title: Implement Array some polyfill ?
---

<details>
    <summary>Answer</summary>
	
```js
Array.prototype.someImpl = function (callback) {
	let passed = false
	for (let i = 0; i < this.length; i++) {
		if (callback && callback(this[i], i, this)) {
			passed = true
			break
		} else {
			passed = false
		}
	}
	return passed
}

```
</details>
```
