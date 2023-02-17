---
title: How do we set a property or method private in javascript?
---

JavaScript proposal, in the standard, that provides language-level support for private properties and methods.

Privates should start with #. They are only accessible from inside the class.

```javascript
class Person {
	#age = 0;
	name = '';
	constructor(name) {
		this.name = name;
	}

	getAge() {
		return this.#age;
	}

	setAge(age) {
		this.#age = age;
	}
}

const person = new Person('John');
person.setAge(30);
console.log(person.#age);
// Uncaught SyntaxError: Private field '#age' must be declared in an enclosing class (
```
