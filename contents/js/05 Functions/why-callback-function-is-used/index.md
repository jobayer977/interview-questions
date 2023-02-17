---
title: Why callback function is used?
---

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

**Here is a quick example:**

```javascript
function greeting(name) {
	alert('Hello ' + name);
}

function processUserInput(callback) {
	var name = prompt('Please enter your name.');
	callback(name);
}

processUserInput(greeting);
```
