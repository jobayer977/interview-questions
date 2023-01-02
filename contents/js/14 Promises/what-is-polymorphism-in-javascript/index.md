---
title: What is Polymorphism in JavaScript ?
---

When a method has the same name but a different implementation in different classes - is called polymorphism.

```javascript
class Animal {
	constructor(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
}

class Dog extends Animal {
	constructor(name) {
		super(name);
	}
	getName() {
		return this.name + ' is a dog';
	}
}

class Cat extends Animal {
	constructor(name) {
		super(name);
	}
	getName() {
		return this.name + ' is a cat';
	}
}

var dog = new Dog('Fido');
var cat = new Cat('Mimi');

console.log(dog.getName());
console.log(cat.getName());
```
