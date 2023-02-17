---
title: What is for...of statement
---

The JavaScript for of statement loops through the values of an iterable object. It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

```javascript
const cars = ['BMW', 'Volvo', 'Mini'];

let text = '';
for (let x of cars) {
	text += x;
}

// BMW
// Volvo
// Mini
```
