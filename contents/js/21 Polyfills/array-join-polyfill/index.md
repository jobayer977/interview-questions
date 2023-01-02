---
title: Implement Array join polyfill ?
---

<details>
    <summary>Answer</summary>
	
```js
Array.prototype.joinImpl = function (separator) {
	const arr = this
	let str = ''
	for (let i = 0; i < arr.length; i++) {
		str += arr[i]
		if (i < arr.length - 1) {
			str += separator
		}
	}
	return str
}
```
</details>
