---
title: What is a pure function ?
questions:
  [
    {
      question: 'A function with no side effects is called what?',
      answer: ['Null function', 'Immediate function', 'Pure function'],
      correctAnswer: 'Pure function'
    }
  ]
---

A Pure function is a function where the return value is only determined by its arguments without any side effects.

```js
function sum(a, b) {
	return a + b;
}

sum(10, 20); // 30
```
