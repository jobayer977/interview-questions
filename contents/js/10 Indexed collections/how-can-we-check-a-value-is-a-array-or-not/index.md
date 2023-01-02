---
title: How can we check a value is a Array or not?
---

The Array.isArray() method determines whether the passed value is an Array object.

```javascript
var arr = [1, 2, 3];
console.log(Array.isArray(arr)); // true

var obj = {};
console.log(Array.isArray(obj)); // false
```
