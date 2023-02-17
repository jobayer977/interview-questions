---
title: Implement Array every polyfill ?
---

<details>
    <summary>Answer</summary>

```js
Array.prototype.everyImpl = function (callback) {
	for (let i = 0; i < this.length; i++) {
		if (!callback(this[i], i, this)) {
			return false
		}
	}
	return true
}
```

</details>
