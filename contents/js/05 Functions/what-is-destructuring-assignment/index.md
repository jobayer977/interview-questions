---
title: What is destructuring assignment ?
---

The destructuring assignment is a JavaScript expression that makes it possible to unpack values from arrays or properties from objects into distinct variables.

```javascript
var [one, two, three] = ['JAN', 'FEB', 'MARCH'];

console.log(one); // "JAN"
console.log(two); // "FEB"
console.log(three); // "MARCH"
```

```javascript
var { name, age } = { name: 'John', age: 32 };

console.log(name); // John
console.log(age); // 32
```
