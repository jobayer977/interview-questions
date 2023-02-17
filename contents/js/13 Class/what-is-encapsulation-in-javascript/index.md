---
title: What is Encapsulation in JavaScript?
---

Encapsulation is a mechanism that allows an object to hide its internal state and behavior from other objects.

```javascript
class Person {
	#name = 'Nathan';

	getName() {
		return this.#name;
	}

	setName(name) {
		this.#name = name;
	}
}

const person = new Person();
console.log(person.getName()); // Nathan
console.log(person.#name); // Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class.
```
