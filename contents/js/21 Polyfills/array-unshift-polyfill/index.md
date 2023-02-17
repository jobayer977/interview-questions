---
title: Implement Array unshift polyfill ?
---

<details>
    <summary>Answer</summary>
	
```js
Array.prototype.unshiftImpl = function (...args) {
	for (let i = 0; i < args.length; i++) {
		this.splice(i, 0, args[i])
	}
	return this.length
}

```
</details>
```
