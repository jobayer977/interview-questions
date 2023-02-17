---
title: What is use strict mode?
---

ECMAScript 5 introduced the concept of "strict mode" . It allows you to place a program, or a function, in a "strict" operating context. This strict context prevents certain actions from being taken and throws more exceptions . Its main purpose is to do more checking.

**With Strict Mode**

```javascript
'use strict';
username = 'Jon';
console.log(username);
// Uncaught ReferenceError: username is not defined
```

**WithOut Strict Mode**

```javascript
username = 'Jon';
console.log(username);
//Jon
```
