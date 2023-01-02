---
title: How in operator works in javascript ?
---

It is used to check if a value is present in an array or not. It returns true if the value is present in the array and false if not.

**Array Example**

```javascript
const arr = [1, 2, 3, 4, 5];
console.log(1 in arr); // true
console.log(6 in arr); // false
```

**Example Object**

```javascript
const obj = {
	name: 'John',
	age: 30
};
console.log('name' in obj); // true
console.log('age' in obj); // true
console.log('job' in obj); // false
```
