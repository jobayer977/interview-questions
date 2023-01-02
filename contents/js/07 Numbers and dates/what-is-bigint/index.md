---
title: What is BigInt?
---

BigInt is a new data type in JavaScript that allows you to store very large numbers. For example, you can store a number with more than 53 bits of precision.

```javascript
var a = BigInt(1234567890123456789012345678901234567890);
var b = BigInt(1234567890123456789012345678901234567890);

console.log(a + b); // 1234567890123456789012345678901234567891
```
