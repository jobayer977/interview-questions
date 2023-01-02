---
title: What is getter and setter in javascript?
---

The getter and setter is a function that is used to get and set the value of a property. In Object Oriented Programming, the getter and setter is a method that is used to get and set the value of a property. The main benefit of using getter and setter is that we can implement some logic before and after getting and setting the value of a property.

**Example without getter and setter:**

```javascript
var person = {
	firstName: 'John',
	lastName: 'Doe',
	fullName: function () {
		return this.firstName + ' ' + this.lastName;
	}
};
console.log(person.fullName()); // John Doe
```

**Example with getter and setter:**

```javascript
var person = {
	firstName: 'John',
	lastName: 'Doe',
	get fullName() {
		return this.firstName + ' ' + this.lastName;
	}
};
console.log(person.fullName); // John Doe
```
