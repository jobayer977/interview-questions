---
title: What is Immutable ?
---

Immutable is a data structure that cannot be changed. For example, if you change the value of a property, the property is no longer the same. Immutable data structures are often used to prevent bugs from happening. In Immutable, you can't change the value of a property.

**Example of Immutable**

```js
'use strict'
const obj = {
	name: 'John',
	age: 30,
}

const newObj = Object.freeze(obj)
newObj.age = 40
// throws an error Uncaught TypeError: Cannot assign to read only property 'age' of object '#<Object>'
```
