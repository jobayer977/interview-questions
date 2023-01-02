---
title: What is Object property descriptor?
---

Object property descriptor is an object that describes the property of an object and its behavior. the object property descriptor is an object with the following properties: value, writable, enumerable, configurable.

```javascript
'use strict';
const person = {
	name: 'John',
	age: 30,
	isMarried: false
};

Object.defineProperty(person, 'name', {
	value: 'Jack',
	writable: false,
	enumerable: false,
	configurable: false
});
console.log(person.name);
```

**Value:** The value property is a data property that stores the value of the property.

```javascript
console.log(person.name); // Jack
```

**Writable:** The writable property is a boolean property that determines whether the property can be changed.

```javascript
person.name = 'Jill';
// => error : Uncaught TypeError: Cannot assign to read only property 'name' of object
```

**Enumerable:** The enumerable property is a boolean property that determines whether the property can be enumerated by a for-in loop.

```javascript
for (const item of Object.entries(person)) {
	console.log(item);
}
// ['age', 30]
// ['isMarried', false]
```

**Configurable:** The configurable property is a boolean property that determines whether the property can be deleted.

```javascript
delete person.name;
// Uncaught TypeError: Cannot delete property 'name
```
