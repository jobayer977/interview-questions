---
title: what is function declaration and function expression ?
---

**Function Declaration**
A function created with a function declaration is a Function object and has all the properties, methods and behavior of Function

```javascript
function add(a, b) {
	return a + b;
}
```

**Function Expression**
A Functions stored in variables do not need function names. They are always invoked (called) using the variable name.

```javascript
const add = function (a, b) {
	return a + b;
};
```
