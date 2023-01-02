---
title: What is class in javascript?
---

Class is a blueprint of an object. It is a template for an object. We can create many objects from a class. A class can have properties and methods. The class can also inherit properties and methods from another class and have access to override them. The class has the constructors method that is called when we create an object from a class. Constructors are used to initializing the properties of the object.

```javascript
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	sayHello() {
		console.log(`Hello, I am ${this.name} and I am ${this.age} years old.`);
	}
}

var person1 = new Person('John', 30);
person1.sayHello();
// Output: Hello, I am John and I am 30 years old.
```
