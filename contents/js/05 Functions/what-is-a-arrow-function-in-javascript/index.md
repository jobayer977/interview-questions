---
title: What is a arrow function in JavaScript?
---

Arrow functions have a few important distinctions in how they work that distinguish them from traditional functions, as well as a few syntactic enhancements. The biggest functional differences are that arrow functions do not have their own this binding or prototype and cannot be used as a constructor. Arrow functions can also be written as a more compact alternative to traditional functions, as they grant the ability to omit parentheses around parameters and add the concept of a concise function body with implicit return.

#### Cleaner Syntax

```js
const sum = (a, b) => {
	return a + b;
};
sum(10, 10); // 20
```

#### `this` Bindings

```js
const sum = () => {
	return this;
};
sum(); // [object Window]
```

### Constructor

```js
const person = () => {};
const p = new person();
// Uncaught TypeError: person is not a constructor
```
