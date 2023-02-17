---
title: What is Object.assign() do ?
questions:
  [
    {
      question: 'Object.assign() Return ?',
      answer: ['target Object', 'source Object'],
      correctAnswer: 'target Object'
    }
  ]
---

Used to copy the values and properties from one or more source objects to a target object and then return modified target object.

```javascript
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }
```
