---
title: Implement Array copywithin polyfill ?
---

<details>
    <summary>Answer</summary>

```js
function copyWithin(array, target, start, end) {
	let shift = target - start
	if (shift < 0) {
		end = Math.min(end, array.length)
		for (let i = start; i < end; i++) {
			array[i + shift] = array[i]
		}
	} else {
		for (let i = Math.min(end, array.length - shift) - 1; i >= start; i--) {
			array[i + shift] = array[i]
		}
	}
	return array
}
```

</details>
