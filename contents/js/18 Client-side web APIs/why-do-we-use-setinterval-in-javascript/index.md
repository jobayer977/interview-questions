---
title: Why do we use setInterval in JavaScript?
---

The `setInterval()` method, offered repeatedly calls a function or executes a code snippet, with a fixed time delay between each call. A function to be executed every delay milliseconds. The first execution happens after delay milliseconds.

```javascript
setInterval(() => {
	console.log('Hello');
}, 1000);

// Hello
// Hello
// Hello
// Hello
// .......
```
