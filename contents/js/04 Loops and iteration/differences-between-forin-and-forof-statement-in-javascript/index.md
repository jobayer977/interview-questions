---
title: Differences between for(..in) and for(..of) statement in JavaScript?
---

**for (..in) loop**
The JavaScript for (..in) statement loops through the enumerable properties of an object. The loop will iterate over all enumerable properties of the object.

```javascript
const obj = {
	a: 1,
	b: 2,
	c: 3
};

for (let key in obj) {
	console.log(key);
}
```

**for (..of) loop**
This for (..of) statement lets you loop over the data structures that are iterable such as Arrays, Strings, Maps, Node Lists, and more. It calls a custom iteration hook with instructions to execute on the value of each property of the object.

```javascript
const obj = {
	a: 1,
	b: 2,
	c: 3
};

for (let key of Object.entries(obj)) {
	console.log(key);
}
```
