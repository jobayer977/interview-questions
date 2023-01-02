---
title: How can we define a private method in the javascript class?
---

We can use the following syntax: #methodName to define a private method. it will be private to the class and can be accessed only from the class itself and not from outside the class.

```javascript
class Person {
	#name;
	#age;
	constructor(name, age) {
		this.#name = name;
		this.#age = age;
	}
	getName() {
		return this.#name;
	}
	getAge() {
		return this.#age;
	}
}

var person = new Person('John', 30);
console.log(person.getName()); // John
console.log(person.getAge()); // 30
console.log(person.#name); //  Private field '#name' must be declared in an enclosing clas
console.log(person.#age); //  Private field '#age' must be declared in an enclosing clas
```
