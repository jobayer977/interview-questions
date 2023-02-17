---
title: Implement Array concat polyfill ?
---

<details>
    <summary>Answer</summary>
```js
Array.prototype.concatImpl = function (arr) {
	const newArr = this.slice()
	newArr.push(...arr)
	return newArr
}
```
</details>
