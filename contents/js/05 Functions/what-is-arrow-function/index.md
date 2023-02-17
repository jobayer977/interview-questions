---
title: what is arrow function?
---

Arrow function is a function expression that has a shorter syntax than function declaration. And it is also a function expression that has no name. Arrow function does not have own this, arguments, super, or new.target.

```javascript
function add(a, b) {
	return a + b;
}

const add = (a, b) => {
	return a + b;
};
```
