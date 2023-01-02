---
title: What is the purpose of setTimeout() function in JavaScript ?
questions:
  [
    {
      question: 'setTimeout() allows you to execute a piece of code after what time has passed?',
      answer: ['Forever', 'Until a certain condition is met', 'A number in milliseconds'],
      correctAnswer: 'A number in milliseconds'
    }
  ]
---

The setTimeout() method allows you to execute a piece of code after a certain amount of time has passed. You can think of the method as a way to set a timer to run JavaScript code at a certain time.

For example, the code below will print "Hello World" to the JavaScript console after 2 seconds have passed:

```javascript
setTimeout(function () {
	console.log('Hello World');
}, 2000);

console.log('setTimeout() example...');
```

You can also pass additional parameters to the setTimeout() method that you can use inside the function as follows:

```javascript
function greeting(name, role) {
	console.log(`Hello, my name is ${name}`);
	console.log(`I'm a ${role}`);
}

setTimeout(greeting, 3000, 'Nathan', 'Software developer');
```
