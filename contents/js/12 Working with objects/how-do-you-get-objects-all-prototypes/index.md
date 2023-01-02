---
title: How do you get objects all prototypes ?
---

Ans: The object `getPrototypeOf()` method accept an object as parameter an return all prototypes properties this object.

```javascript
const myObject = {
	city: 'Paris',
	greet() {
		console.log(`Hello ${this.city}`);
	}
};

Object.getPrototypeOf(myObject);
```
