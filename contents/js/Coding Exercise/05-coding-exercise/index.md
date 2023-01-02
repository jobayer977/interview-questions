---
title: Consider the following code. What will the output be, and why?
source: https://www.toptal.com
---

```javascript
;(function () {
	try {
		throw new Error()
	} catch (x) {
		var x = 1,
			y = 2
		console.log('INSIDE', x)
		console.log('INSIDE', y)
	}
	console.log('OUTSIDE', x)
	console.log('OUTSIDE', y)
})()
```

<details>
    <summary>Answer</summary>

```js
INSIDE 1
INSIDE 2
OUTSIDE undefined
OUTSIDE 2
```

var statements are hoisted (without their value initialization) to the top of the global or function scope it belongs to, even when it’s inside a with or catch block. However, the error’s identifier is only visible inside the catch block. It is equivalent to:

```js
;(function () {
	var x, y // outer and hoisted
	try {
		throw new Error()
	} catch (x /* inner */) {
		x = 1 // inner x, not the outer one
		y = 2 // there is only one y, which is in the outer scope
		console.log(x /* inner */)
	}
	console.log(x)
	console.log(y)
})()
```

</details>
