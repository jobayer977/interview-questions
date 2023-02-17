---
title: What is constructor function?
---

A constructor function is a function that is used to create objects. The new keyword is used to call the constructor function and use the constructor as a blueprint to create an object.

**Note: It it convention to use capital letters for constructor function names.**

```javascript
function Person(name, age) {
	this.name = name;
	this.age = age;
}

var john = new Person('John', 30);
var jane = new Person('Jane', 32);
var mark = new Person('Mark', 25);
```
