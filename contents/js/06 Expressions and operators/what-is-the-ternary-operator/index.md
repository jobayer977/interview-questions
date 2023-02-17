---
title: What is the ternary operator ?
---

The ternary operator is a short hand for an if statement. It is used to check if a condition is true or false and execute a different code block depending on the result. The syntax is: condition ? true code block : false code block.

**Example In ternary operator:**

```javascript
var age = prompt('What is your age?');
var ageInNumber = parseInt(age);

var message = ageInNumber >= 18 ? 'You are old enough to drive' : 'You are not old enough to drive';
console.log(message);
```

**Example In if statement:**

```javascript
var age = prompt('What is your age?');
var ageInNumber = parseInt(age);

if (ageInNumber >= 18) {
	console.log('You are old enough to drive');
} else {
	console.log('You are not old enough to drive');
}
```
