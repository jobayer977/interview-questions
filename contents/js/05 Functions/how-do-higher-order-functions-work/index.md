---
title: How do higher order functions work ?
questions:
  [
    {
      question: 'What is a function that receives another function as an argument that returns a new function or both called?',
      answer: ['Composing', 'Functor', 'Currying', 'Higher-order function'],
      correctAnswer: 'Higher-order function'
    }
  ]
---

A function that receives another function as an argument or that returns a new function or both is called Higher-order functions. Higher-order functions are only possible because of the First-class function.

```js
const greet = function (name) {
	return function (m) {
		console.log(`Hi!! ${name}, ${m}`);
	};
};

const greet_message = greet('ABC');
greet_message('Welcome To GeeksForGeeks');
```

We can also call the function like this also — greet(‘ABC’)(‘Welcome To GeeksForGeeks’), It will also give the same output.

```console
Hi!! ABC, Welcome To GeeksForGeeks
```
