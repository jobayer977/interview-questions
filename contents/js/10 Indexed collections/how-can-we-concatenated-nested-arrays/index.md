---
title: How can we concatenated nested arrays?
---

The flat method is used to flatten an array. It takes an optional parameter which is the depth of the flattening. By default it flattens the array to one level. if we pass Infinity, it flattens the array to all levels.

```javascript
var arr = [1, 2, [3, 4, [5, 6]]];
console.log(arr.flat(Infinity)); // [1, 2, 3, 4, 5, 6]
```
