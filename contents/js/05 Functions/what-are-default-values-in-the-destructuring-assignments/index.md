---
title: What are default values in the destructuring assignments?
---

When destructuring happens the property's initial value was undefined now we can assign an initial value to the restructuring property instant of holding it undefined.

**Arrays destructuring:**

```javascript
var x, y, z;

[x = 2, y = 4, z = 6] = [10];
console.log(x); // 10
console.log(y); // 4
console.log(z); // 6
```

**Objects destructuring:**

```javascript
var { x = 2, y = 4, z = 6 } = { x: 10 };

console.log(x); // 10
console.log(y); // 4
console.log(z); // 6
```
