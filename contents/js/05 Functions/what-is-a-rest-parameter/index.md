---
title: What is a rest parameter ?
questions:
  [
    {
      question: 'What happens if you do not use rest parameter as a last argument',
      answer: ['Return Undefined', 'Return Null', 'SyntaxError'],
      correctAnswer: 'SyntaxError'
    }
  ]
---

Rest parameter is a way to provide handled uncountable params in a function. It's useful when we don't know how many parameters are coming from it's accept all unknown parameters as an array of values.

```javascript
function getNames(...rest) {
	console.log(rest);
}

console.log(getNames('John', 'Doe', 'Jane', 'Doe'));
// ['John', 'Doe', 'Jane', 'Doe']
```
