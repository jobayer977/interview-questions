---
title: What is the first-class function in Javascript?
questions:
  [
    {
      question: 'When a language treats functions like other variables, it is said to have what?',
      answer:
        ['First-class functions', 'recursive functions', 'function keyword', 'Promising functions'],
      correctAnswer: 'First-class functions'
    }
  ]
---

A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

**Example**

```js
function sayHello() {
	return 'Hello, ';
}
function greeting(helloMessage, name) {
	console.log(helloMessage() + name);
}
// Pass `sayHello` as an argument to `greeting` function
greeting(sayHello, 'JavaScript!');
// Hello, JavaScript!
```
