---
title: How to avoid scientific notation for large numbers in JavaScript?
---

To avoid scientific notation, use the `toFixed(n)` method. The `toFixed(n)` method rounds a number to n decimal places. For example, the following code rounds the number to two decimal places:

```javascript
var x = 12.3456;
var y = x.toFixed(2);
console.log(y); // 12.35
```
