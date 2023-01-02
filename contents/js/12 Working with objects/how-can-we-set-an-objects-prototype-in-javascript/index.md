---
title: How can we set an object's prototype in JavaScript ?
---

**Using `Object.create`**
The `Object.create()` method created a new object and allows you to specify an object that will be used as the new objects' prototype.

Here's an example:-

```javascript
const personPrototype = {
	greet() {
		console.log('hello!');
	}
};

const carl = Object.create(personPrototype);
carl.greet(); // hello!
```

Here we create an object personPrototype, which has a greet() method. We then use Object.create() to create a new object with personPrototype as its prototype. Now we can call greet() on the new object, and the prototype provides its implementation.
