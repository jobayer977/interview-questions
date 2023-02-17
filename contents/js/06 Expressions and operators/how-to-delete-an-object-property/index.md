---
title: How to delete an object property ?
---

Using the delete operator. THe delete operator deletes a property from an object. It returns true if the property was deleted, false if the property was not found.

```javascript
var person = {
	name: 'John',
	age: 30
};

delete person.age;

console.log(person.age); // undefined
```
