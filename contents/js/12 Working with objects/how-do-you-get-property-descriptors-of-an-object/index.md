---
title: How do you get property descriptors of an object
---

You can use the Object.getOwnPropertyDescriptors() method which returns all own property descriptors of a given object. The example usage of this method is below,

```javascript
const newObject = {
	a: 1,
	b: 2,
	c: 3
};
const descriptorsObject = Object.getOwnPropertyDescriptors(newObject);
console.log(descriptorsObject.a.writable); //true
console.log(descriptorsObject.a.configurable); //true
console.log(descriptorsObject.a.enumerable); //true
console.log(descriptorsObject.a.value); // 1
```
