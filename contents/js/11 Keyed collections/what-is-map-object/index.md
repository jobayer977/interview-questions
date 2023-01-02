---
title: What is Map object?
---

A map is an object that holds key-value pairs. Each key is unique on the map. The value can be any type, even another map. A map is an iterable object. It has a forEach() method, which can be used to iterate over all key-value pairs in the map. The map is a collection of key-value pairs.

- 1. The map is used to store data in key-value pairs.
- 2. Map keys are unique. and can be set in any kind of data type.
- 3. Maps keys are stored in insertion order.
- 4. The map is iterable.

```javascript
var map = new Map();
map.set('1', 'a');
map.set('2', 'b');
map.set('3', 'c');

// Iterate over all key-value pairs in the map
map.forEach(function (value, key) {
	console.log(key + ' = ' + value);
});
// 1 = a
// 2 = b
// 3 = c
```
