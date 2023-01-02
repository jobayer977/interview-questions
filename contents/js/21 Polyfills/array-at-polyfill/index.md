---
title: Implement Array at polyfill ?
---

<details>
    <summary>Answer</summary>

```js
Array.prototype.atImpl = function (index) {
	return this[index]
}
```

</details>
