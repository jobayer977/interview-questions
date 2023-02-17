---
title: What is static method in javascript?
---

A static method in JavaScript is a method that has a static keyword prepended to itself. Such methods cannot be accessed through instantiated objects but could be accessed through the class name. This is because static methods belong to the class directly. Inheritance even applies to static methods. Also, these methods can be invoked by non-static methods and even constructors. Static methods are used to create utility functions and create objects that contain default information.

**Example**

```javascript
class MyClass {
	static myStaticMethod() {
		return 'static';
	}
}

MyClass.myStaticMethod(); // 'static'

const myClass = new MyClass();
myClass.myStaticMethod(); // TypeError: myStaticMethod is not a function
```
