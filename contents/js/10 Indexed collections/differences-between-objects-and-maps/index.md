---
title: Differences between Objects and Maps ?
---

### 1. Keys on objects are strings, on maps keys are of any type

Indeed objects are collections of key-value pairs but the key can only be a string. While the key of a Map can be of any type.

If for example, we use a number as a key in an object literal, that number is converted to a string and used as the key.

Because the key is converted to a string we get the same result when trying to get value for the 1 number value or for the '1' string value.

```js
const obj = {
	1: 'One'
};
console.log(obj[1]); // One

const map = new Map();
map.set(1, 'One');
console.log(map.get(1)); // One
console.log(map.get('1')); // undefined
```

When using maps the key can be of any type so the 1 number key is different from the '1' string key

```js
const map = new Map();
map.set(1, 'One');
console.log(map.get(1)); // One
console.log(map.get('1')); // undefined
```

The key is unique in both cases. There cannot be two properties in an object with the same key or two entries in a map with the same key.

### 2. Maps preserve the order of their keys, objects do not

The original order of key-value pairs is preserved in maps, while in objects it is not.

```js
const gamesObj = {
	2: 'Tzolkin',
	1: 'Citadels'
};
const keys = Object.keys(gamesObj);
console.log(keys);
//["1", "2"];
const keyValuePairs = Object.entries(gamesObj);
console.log(keyValuePairs);
//["1", "Citadels"]
//["2", "Tzolkin"]
```

Notice that when the object is created the key 2 comes before the key 1. When retrieving all the keys 2 comes after 1.

Below is a similar collection built with the Map constructor. This time the initial order is preserved.

```js
const gamesMap = new Map([
	[2, 'Tzolkin'],
	[1, 'Citadels']
]);
const keys = gamesMap.keys();
console.log(keys);
//MapIterator {2, 1}
const keyValuePairs = gamesMap.entries();
console.log(keyValuePairs);
//MapIterator {2 => "Tzolkin", 1 => "Citadels"}
```
