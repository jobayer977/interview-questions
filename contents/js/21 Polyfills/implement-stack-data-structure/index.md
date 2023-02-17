---
title: Implement stack data structure ?
---

<details>
    <summary>Answer</summary>
	
```js
class Stack {
	constructor() {
		this.items = []
	}
	push(item) {
		this.items.push(item)
	}
	pop() {
		return this.items.pop()
	}
	peek() {
		return this.items[this.items.length - 1]
	}
	isEmpty() {
		return this.items.length === 0
	}
	clear() {
		this.items = []
	}
}

```
</details>
```
