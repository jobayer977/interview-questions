---
title: Difference between getOwnPropertyNames vs Object.keys ?
---

getOwnPropertyNames returns only enumerable properties, Object.keys returns all properties.

```javascript
var obj = {
	a: 1,
	b: 2,
	c: 3
};
```

**Object keys**

Object keys returns all enumerable properties of an object. It does not return non-enumerable properties.

```javascript
console.log(Object.keys(obj)); // ['a', 'c']
```

**Object getOwnPropertyNames**

getOwnPropertyNames returns all properties of an object.

```javascript
console.log(Object.getOwnPropertyNames(obj)); // [ 'a', 'b', 'c' ]
```
