---
title: What is == and === in JavaScript?
---

The == and === operators are used to check the equality of two operands. The ‘==’ operator tests for abstract equality i.e. it does the necessary type conversions before doing the equality comparison.
But the ‘===’ operator tests for strict equality i.e it will not do the type conversion hence if the two values are not of the same type, when compared, it will return false.

**==**

```javascript
var a = 1;
var b = '1';

if (a == b) {
	console.log('EQUAL');
} else {
	console.log('NOT EQUAL');
}
// output: EQUAL
```

**===**

```javascript
var a = 1;
var b = '1';

if (a === b) {
	console.log('EQUAL');
} else {
	console.log('NOT EQUAL');
}
// output: NOT EQUAL
```
