---
title: How do you check a value is a number?
---

The `isNaN()` method determines whether a value is an illegal number. If the value is not a number, then the method returns true. Otherwise, it returns false.

**Example**

```javascript
var x = '5';
var y = 'Hello';

console.log(isNaN(x)); // false
console.log(isNaN(y)); // true
```
