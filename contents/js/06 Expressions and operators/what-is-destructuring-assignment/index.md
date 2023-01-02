---
title: What is destructuring assignment?
---

Destructuring assignment is a JavaScript feature that allows you to assign values to variables from arrays and objects. It is done by destructuring the array or object and then assigning the variables. It is useful when you want to assign a value to a variable from an array or object. For example, you can assign the first and last name of a person to separate variables.

**Object Example:**

```javascript
const person = {
	firstName: 'John',
	lastName: 'Doe'
};

const { firstName, lastName } = person;
console.log(firstName); // John
console.log(lastName); // Doe
```

**Array Example:**

```javascript
const people = ['John', 'Doe', 'Jane', 'Doe'];
const [firstName, lastName, ...rest] = people;
console.log(firstName); // John
console.log(lastName); // Doe
console.log(rest); // ['Jane', 'Doe']
```
