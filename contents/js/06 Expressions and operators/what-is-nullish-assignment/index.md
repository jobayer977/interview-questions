---
title: What is nullish assignment?
---

The nullish assignment is a special operator that allows you to assign a value to a variable if the value is null or undefined. It is used to avoid the need to use an if statement to check if a variable is null or undefined. For example: var x = y ?? 'default'; // x is set to y if y is not null or undefined, otherwise x is set to 'default'.

```javascript
var x = false;
var result = x ?? 'default';
console.log(result); // false
```

```javascript
var x = undefined;
var result = x ?? 'default';
console.log(result); // default
```
