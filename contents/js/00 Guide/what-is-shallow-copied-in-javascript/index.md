---
title: What is shallow copied in javascript?
---

A shallow copy is a copy of the object itself. It does not copy the properties of the object. It just copies the reference to the object.

```javascript
const obj = {
	a: 1,
	b: 2
};

const obj2 = obj;
obj2.a = 2;

console.log(obj2); // {a: 2, b: 2}
console.log(obj); // {a: 2, b: 2}
```
