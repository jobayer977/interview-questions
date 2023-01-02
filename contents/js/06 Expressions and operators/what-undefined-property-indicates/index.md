---
title: What undefined property indicates?
---

A variable that has not been assigned a value is of type undefined. A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value.

```javascript
let x;
if (typeof x === 'undefined') {
	// these statements execute
}
```
